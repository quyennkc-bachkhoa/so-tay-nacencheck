// Chụp ảnh màn hình NacenCheck có khoanh vùng đánh số (Visual Grounding).
// Dữ liệu khoanh vùng lấy từ docs/annotations.json. Chỉ XEM và CHỤP, không bấm nút lưu dữ liệu.
//
//   npm run shots                       chụp tất cả
//   npm run shots -- 02-dang-nhap 05-danh-muc-vat-tu   chụp vài ảnh
import 'dotenv/config';
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = process.env.NACEN_BASE || 'https://trace.nacencheck.com';
const EMAIL = process.env.NACEN_EMAIL;
const PASSWORD = process.env.NACEN_PASSWORD;
const STATE = path.join(ROOT, '.auth/state.json');
// Cổng cơ quan quản lý (ảnh 22-… đến 27-…): khai "portal": "gov" trong annotations.json.
const GOV = { base: process.env.GOV_BASE || 'https://dev-gov.nacencheck.com', email: process.env.GOV_EMAIL, password: process.env.GOV_PASSWORD, state: path.join(ROOT, '.auth/gov-state.json') };
const portalOf = (a) => (a.portal === 'gov' ? { gov: true, base: GOV.base, state: GOV.state } : { gov: false, base: BASE, state: STATE });
const MASK_COLOR = '#3f3f46';
const OUT = path.join(ROOT, 'docs/public/images');
const REPORT = path.join(OUT, '_report.json');
const ANN = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs/annotations.json'), 'utf8'));

const COLOR = '#E5484D';
const PAD = 4;
const VIEWPORTS = {
  desktop: { viewport: { width: 1440, height: 900 } },
  'desktop-tall': { viewport: { width: 1440, height: 1200 } },
  'desktop-wide': { viewport: { width: 1920, height: 1080 } },
  tablet: { viewport: { width: 1024, height: 768 } },
  mobile: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
};

// Nút lưu dữ liệu: script từ chối bấm, kể cả khi annotations.json khai nhầm.
const FORBIDDEN = /^(lưu\b.*|tạo lô hàng|ghi nhận.*|xuất bản.*|xóa.*|xoá.*|phát hành.*|đăng ký vùng|bắt đầu|tạo sản phẩm \+ tem|tạo tài khoản|kích hoạt|gửi.*|xác nhận.*|cập nhật thông tin|công khai trang|sinh serial|tạo 1 thùng|tạo cây|in tem serial.*|ghi chặng|khởi tạo lệnh thu hồi|giao lô.*|in lại|tạm khoá|hủy tem|lập cuộc thanh tra|tạo báo cáo|chuyển cấp cao hơn|kết thúc.*|ký.*|rút lại.*|tính khung phạt.*|đổi mật khẩu|bật 2fa|đăng xuất.*|đổi ảnh đại diện)$/i;
// Cổng cơ quan quản lý: form Lập cuộc thanh tra, Tạo báo cáo mở bằng đường dẫn `?drawer=tao` vì nút mở trùng tên nút gửi.
// Nút trùng tên nút lưu nhưng chỉ mở form: "Cập nhật thông tin" ở Hồ sơ doanh nghiệp, "Ghi nhận nhanh" ở Thu hoạch, "Ghi nhận công đoạn này" ở trang ghi công đoạn, "Phát hành tem" ở Tem chống giả, "Gửi xác nhận giao–nhận" ở menu lô, "Phát hành hộ chiếu" ở Hộ chiếu lô.
const OPENERS = ['company-profile-edit', 'btn-toggle-harvest-form', 'Ghi nhận công đoạn này', 'Phát hành tem', 'Gửi xác nhận giao–nhận', 'Phát hành hộ chiếu'];

if (!EMAIL || !PASSWORD) {
  console.error('Thiếu NACEN_EMAIL hoặc NACEN_PASSWORD trong .env');
  process.exit(1);
}

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.dirname(STATE), { recursive: true });

const only = process.argv.slice(2);
// Ảnh "manual" (cổng quản trị) chụp tay bằng Claude in Chrome vì .env không có tài khoản quản trị hệ thống.
const names = Object.keys(ANN).filter((n) => !ANN[n].manual && (!only.length || only.includes(n)));
const report = fs.existsSync(REPORT) ? JSON.parse(fs.readFileSync(REPORT, 'utf8')) : { images: {} };
const shared = {}; // dữ liệu truyền giữa các ảnh, ví dụ link truy xuất công khai

const log = (...a) => console.log(...a);
const warn = (name, msg) => console.warn(`  ⚠ [${name}] ${msg}`);

// ---------- chờ tải, ẩn popup ----------

async function settle(page) {
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  await page.waitForLoadState('networkidle', { timeout: 12000 }).catch(() => {});
  const t0 = Date.now();
  while (Date.now() - t0 < 20000) {
    const busy = await page
      .evaluate(() => /Đang tải/.test((document.querySelector('main') || document.body).innerText))
      .catch(() => true);
    if (!busy) break;
    await page.waitForTimeout(400);
  }
  await page.waitForTimeout(800);
}

async function hidePopups(page) {
  // Hộp "Cài đặt NacenCheck": bấm "Để sau".
  const later = page.getByRole('button', { name: 'Để sau' });
  if (await later.first().isVisible().catch(() => false)) {
    await later.first().click().catch(() => {});
    await page.waitForTimeout(300);
  }
  await page.addStyleTag({ content: 'nextjs-portal,[data-testid=agent-floating-root]{display:none!important}' }).catch(() => {});
  await page
    .evaluate(() => {
      const pats = [/TraceBot/i, /Ẩn trợ lý/, /Đóng gợi ý/, /Cần hướng dẫn thao tác/, /Cần giúp khai báo/];
      const hits = [...document.querySelectorAll('button,a,div,span,p')].filter((el) => {
        const t = el.getAttribute('aria-label') || (el.children.length === 0 ? el.textContent : '');
        return t && pats.some((p) => p.test(t));
      });
      for (const el of hits) {
        let top = null;
        for (let x = el; x && x !== document.body; x = x.parentElement) {
          if (getComputedStyle(x).position === 'fixed') top = x;
        }
        (top || el).style.setProperty('display', 'none', 'important');
      }
    })
    .catch(() => {});
}

// ---------- đăng nhập ----------

async function login(page, ctx, P = portalOf({})) {
  if (P.gov) return loginGov(page, ctx);
  await page.goto(BASE + '/sign-in');
  await settle(page);
  const email = page.getByLabel('Email hoặc số điện thoại', { exact: true });
  if (await email.isVisible().catch(() => false)) await email.fill(EMAIL);
  await page.getByLabel('Mật khẩu', { exact: true }).fill(PASSWORD);
  await page.getByRole('button', { name: 'Đăng nhập', exact: true }).click();
  await page.waitForURL(/\/dashboard/, { timeout: 30000, waitUntil: 'commit' });
  await ctx.storageState({ path: STATE });
  log('  đã đăng nhập lại');
}

// Trang đăng nhập cổng cơ quan quản lý nhớ tài khoản: lần sau chỉ còn ô Mật khẩu.
async function loginGov(page, ctx) {
  if (!GOV.email || !GOV.password) throw new Error('Thiếu GOV_EMAIL hoặc GOV_PASSWORD trong .env');
  if (!page.url().includes('/sign-in')) await page.goto(GOV.base + '/sign-in');
  await settle(page);
  const email = page.getByLabel('Địa chỉ email', { exact: true });
  if (await email.isVisible().catch(() => false)) await email.fill(GOV.email);
  await page.getByLabel('Mật khẩu', { exact: true }).fill(GOV.password);
  await page.getByRole('button', { name: 'Đăng nhập', exact: true }).click();
  await page.waitForURL((u) => !u.toString().includes('/sign-in'), { timeout: 30000, waitUntil: 'commit' });
  await ctx.storageState({ path: GOV.state });
  log('  đã đăng nhập cổng cơ quan quản lý');
}

async function gotoAuthed(page, ctx, url, auth, P = portalOf({})) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await settle(page);
  if (auth && page.url().includes('/sign-in')) {
    await login(page, ctx, P);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await settle(page);
  }
}

// ---------- định vị phần tử ----------

function buildLocator(page, spec) {
  let scope = page;
  if (spec.within) scope = buildLocator(page, spec.within).first();
  if (spec.role) return scope.getByRole(spec.role, spec.name ? { name: spec.name, exact: !!spec.exact } : {});
  if (spec.text) return scope.getByText(spec.text, { exact: spec.exact !== false });
  if (spec.label) return scope.getByLabel(spec.label, { exact: !!spec.exact });
  if (spec.css) return scope.locator(spec.css);
  throw new Error('locator không hợp lệ: ' + JSON.stringify(spec));
}

async function firstVisible(loc, nth) {
  if (nth !== undefined) {
    const el = loc.nth(nth);
    return (await el.isVisible().catch(() => false)) ? el : null;
  }
  const n = Math.min(await loc.count().catch(() => 0), 30);
  for (let i = 0; i < n; i++) {
    const el = loc.nth(i);
    if (await el.isVisible().catch(() => false)) return el;
  }
  return null;
}

// Trả về { box, el } hoặc null. box theo tọa độ khung nhìn.
async function resolveOne(page, spec) {
  if (Array.isArray(spec)) {
    for (const s of spec) {
      const r = await resolveOne(page, s).catch(() => null);
      if (r) return r;
    }
    return null;
  }
  if (spec.union) {
    const parts = [];
    for (const s of spec.union) {
      const r = await resolveOne(page, s).catch(() => null);
      if (r) parts.push(r);
    }
    if (!parts.length) return null;
    const x = Math.min(...parts.map((p) => p.box.x));
    const y = Math.min(...parts.map((p) => p.box.y));
    const r = Math.max(...parts.map((p) => p.box.x + p.box.width));
    const b = Math.max(...parts.map((p) => p.box.y + p.box.height));
    return { box: { x, y, width: r - x, height: b - y }, el: parts[0].el, partial: parts.length < spec.union.length };
  }
  if (spec.field) {
    // Ô nhập theo nhãn: tìm phần tử có chữ riêng bắt đầu bằng nhãn, rồi leo lên khối chứa ô nhập.
    const scope = spec.within ? await firstVisible(buildLocator(page, spec.within)) : page.locator('body');
    if (!scope) return null;
    const handle = await scope.evaluateHandle((root, txt) => {
      const norm = (s) => s.replace(/\s+/g, ' ').trim().toLowerCase();
      const want = norm(txt);
      const own = (el) => norm([...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join(' '));
      const vis = (el) => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
      const control = 'input:not([type=hidden]),textarea,select,[role=combobox],button[aria-haspopup]';
      const cands = [...root.querySelectorAll('label,legend,span,p,div,h3,h4')].filter((el) => vis(el) && own(el).startsWith(want));
      for (const lab of cands) {
        for (let x = lab; x && x !== root.parentElement; x = x.parentElement) {
          const c = x.querySelector(control);
          if (c && vis(c)) return x;
        }
      }
      return null;
    }, spec.field);
    const el = handle.asElement();
    if (!el) return null;
    const box = await el.boundingBox();
    return box ? { box, el } : null;
  }
  const el = await firstVisible(buildLocator(page, spec), spec.nth);
  if (!el) return null;
  let target = await el.elementHandle();
  if (spec.card) {
    // Leo lên khối có viền hoặc bóng đổ gần nhất (thẻ, khung).
    target = (
      await target.evaluateHandle((node) => {
        for (let x = node, i = 0; x && x !== document.body && i < 10; x = x.parentElement, i++) {
          const cs = getComputedStyle(x);
          const border = parseFloat(cs.borderTopWidth) > 0 && cs.borderTopStyle !== 'none' && !/rgba\(0, 0, 0, 0\)/.test(cs.borderTopColor);
          if ((border || cs.boxShadow !== 'none') && x.getBoundingClientRect().width > 80) return x;
        }
        return node;
      })
    ).asElement();
  }
  const box = await target.boundingBox();
  return box ? { box, el: target } : null;
}

async function clickSafe(page, spec, name) {
  const el = await firstVisible(buildLocator(page, spec), spec.nth);
  if (!el) throw new Error('không tìm thấy phần tử để bấm: ' + JSON.stringify(spec));
  const label = ((await el.getAttribute('aria-label').catch(() => null)) || (await el.innerText().catch(() => '')) || '').trim();
  const testId = await el.getAttribute('data-testid').catch(() => null);
  if (FORBIDDEN.test(label) && !OPENERS.includes(testId) && !OPENERS.includes(label)) throw new Error(`từ chối bấm nút lưu dữ liệu "${label}"`);
  await el.click();
  log(`  bấm: ${label || JSON.stringify(spec)}`);
}

// ---------- lớp phủ ----------

async function drawOverlay(page, marks, bounds) {
  await page.evaluate(
    ({ marks, bounds, COLOR, PAD }) => {
      const root = document.createElement('div');
      root.id = '__nc_overlay';
      root.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2147483647';
      for (const m of marks) {
        const { x, y, width, height } = m.box;
        const f = document.createElement('div');
        const left = Math.max(bounds.x + 2, x - PAD);
        const top = Math.max(bounds.y + 2, y - PAD);
        const right = Math.min(bounds.x + bounds.width - 2, x + width + PAD);
        const bottom = Math.min(bounds.y + bounds.height - 2, y + height + PAD);
        f.style.cssText = `position:fixed;left:${left}px;top:${top}px;width:${right - left}px;height:${bottom - top}px;border:3px solid ${COLOR};border-radius:8px;box-sizing:border-box;background:transparent`;
        const b = document.createElement('div');
        const size = 26;
        // Huy hiệu nằm ở góc trên trái, lệch ra ngoài khung để không che chữ bên trong.
        const bl = Math.min(Math.max(bounds.x + 2, left - size + 6), bounds.x + bounds.width - size - 2);
        const bt = Math.min(Math.max(bounds.y + 2, top - size + 6), bounds.y + bounds.height - size - 2);
        b.textContent = m.n;
        b.style.cssText = `position:fixed;left:${bl}px;top:${bt}px;width:${size}px;height:${size}px;border-radius:50%;background:${COLOR};color:#fff;font:700 14px/26px system-ui,Arial,sans-serif;text-align:center;box-shadow:0 0 0 2px #fff,0 1px 4px rgba(0,0,0,.35)`;
        root.append(f, b);
      }
      document.body.append(root);
    },
    { marks, bounds, COLOR, PAD }
  );
}

const removeOverlay = (page) => page.evaluate(() => document.getElementById('__nc_overlay')?.remove()).catch(() => {});

// Bố cục quản trị cuộn bên trong khung cao 100vh: nới khung nhìn bằng chiều cao nội dung để chụp cả trang.
async function expandViewport(page) {
  const extra = await page.evaluate(() => {
    let best = null;
    for (const el of document.querySelectorAll('main, main *, body *')) {
      const cs = getComputedStyle(el);
      if (!/(auto|scroll)/.test(cs.overflowY)) continue;
      const d = el.scrollHeight - el.clientHeight;
      if (d > 10 && (!best || d > best)) best = d;
    }
    return Math.max(best || 0, document.documentElement.scrollHeight - innerHeight);
  });
  const vp = page.viewportSize();
  if (extra > 0) {
    await page.setViewportSize({ width: vp.width, height: Math.min(8000, vp.height + extra) });
    await page.waitForTimeout(800);
  }
}

// ---------- tìm lô để chụp ----------

async function ensureBatch(page, ctx, name) {
  const notFound = await page.getByText('Không tìm thấy lô hàng').first().isVisible().catch(() => false);
  if (!notFound) return;
  warn(name, 'lô gợi ý không tồn tại, mở lô đầu tiên chưa "Đã bán"');
  await gotoAuthed(page, ctx, BASE + '/dashboard/batches', true);
  const rows = page.locator('main table tbody tr').filter({ hasNotText: 'Đã bán' }).filter({ hasNotText: 'Chưa có lô' });
  if (!(await rows.count())) throw new Error('Tài khoản chưa có lô hàng nào chưa bán (danh sách Lô hàng trống)');
  const link = rows.first().locator('a').first();
  if (await link.count()) await link.click();
  else await rows.first().click();
  await page.waitForURL(/\/dashboard\/batches\/[^/]+$/, { timeout: 15000 });
  await settle(page);
}

// ---------- chụp một ảnh ----------

async function shoot(browser, name, a) {
  const res = { ok: false, file: `/images/${name}.png`, drawn: [], missing: [], note: a.note || undefined };
  const vpName = a.viewport || 'desktop';
  const P = portalOf(a);
  // Tắt service worker: yêu cầu đi qua service worker thì page.route không chặn được.
  const ctxOpts = { ...VIEWPORTS[vpName], deviceScaleFactor: 2, colorScheme: 'light', locale: 'vi-VN', serviceWorkers: 'block' };
  if (a.auth && fs.existsSync(P.state)) ctxOpts.storageState = P.state;
  // Form tự xin vị trí: không cấp thì ảnh hiện dòng lỗi đỏ "chưa cho phép định vị".
  if (a.geolocation) Object.assign(ctxOpts, { geolocation: a.geolocation, permissions: ['geolocation'] });
  const ctx = await browser.newContext(ctxOpts);
  const page = await ctx.newPage();
  // Mục "Gần đây" ở menu cổng cơ quan quản lý đổi theo lịch sử xem: xóa để ảnh nào cũng giống nhau.
  if (P.gov) await page.addInitScript(() => { try { localStorage.removeItem('tp.gov.sidebar.recent'); } catch {} });
  // Lớp chặn cuối: ngoài đăng nhập và làm mới phiên, mọi yêu cầu ghi dữ liệu đều bị hủy.
  await page.route('**/*', (route) => {
    const r = route.request();
    if (['GET', 'HEAD', 'OPTIONS'].includes(r.method()) || page.url().includes('/sign-in') || /auth|refresh|token/i.test(r.url())) return route.continue();
    // Xem trước định mức trong form tạo lô: POST nhưng chỉ tính toán, không lưu.
    if (/\/manufacturing\/requirements\/preview$/.test(r.url())) return route.continue();
    return route.abort();
  });
  try {
    let url = a.url;
    if (url.includes('{publicUrl}')) {
      if (!shared.publicUrl) throw new Error('chưa có link truy xuất công khai (ảnh 09-chi-tiet-lo chưa chụp được)');
      url = url.replace('{publicUrl}', shared.publicUrl);
    }
    if (!/^https?:/.test(url)) url = P.base + url;
    if (a.auth && !fs.existsSync(P.state)) {
      if (P.gov) await page.goto(GOV.base + '/sign-in');
      await login(page, ctx, P);
    }
    await gotoAuthed(page, ctx, url, a.auth, P);
    await hidePopups(page);
    if (a.pickBatch) await ensureBatch(page, ctx, name);

    for (const s of a.steps || []) {
      try {
        if (s.unlessUrl && page.url().includes(s.unlessUrl)) continue;
        if (s.click) await clickSafe(page, s.click, name);
        // Gõ dữ liệu ví dụ để ảnh hiện đúng ví dụ; không lưu được vì yêu cầu ghi đã bị hủy ở trên.
        if (s.fill) {
          const box = await firstVisible(buildLocator(page, s.fill), s.fill.nth);
          if (!box) throw new Error('không tìm thấy ô để gõ: ' + JSON.stringify(s.fill));
          await box.fill(s.value);
          if (s.press) await box.press(s.press);
          await page.waitForTimeout(300);
        }
        if (s.type) {
          await page.keyboard.type(s.type);
          await page.waitForTimeout(400);
        }
        if (s.waitFor) await buildLocator(page, s.waitFor).first().waitFor({ state: 'visible', timeout: 10000 });
        if (s.scroll) {
          const r = await firstVisible(buildLocator(page, s.scroll), s.scroll.nth);
          if (r) await r.scrollIntoViewIfNeeded();
        }
        if (s.wait) await page.waitForTimeout(s.wait);
        if (s.click) await settle(page);
      } catch (e) {
        if (s.optional) warn(name, `bỏ qua bước tùy chọn: ${e.message.split('\n')[0]}`);
        else throw e;
      }
    }
    await hidePopups(page);

    if (a.failIf) {
      const main = await page.evaluate(() => (document.querySelector('main') || document.body).innerText);
      const hit = a.failIf.find((t) => main.includes(t));
      if (hit) throw new Error(`trang báo "${hit}" (tài khoản chưa có dữ liệu cho màn này)`);
    }

    if (a.fullPage) await expandViewport(page);

    // Định vị các khung. Khung có "if"/"ifNot" chỉ vẽ khi khung số đó có/không có.
    const found = new Map();
    const resolveAll = async () => {
      found.clear();
      for (const m of a.marks) {
        if (m.if && !found.has(m.if)) continue;
        if (m.ifNot && found.has(m.ifNot)) continue;
        const r = await resolveOne(page, m.locator).catch(() => null);
        if (r) found.set(m.n, r);
      }
    };
    await resolveAll();

    const vp = page.viewportSize();
    const clipLoc = a.clip ? await firstVisible(buildLocator(page, a.clip)) : null;
    const bounds = (clipLoc && (await clipLoc.boundingBox())) || { x: 0, y: 0, width: vp.width, height: vp.height };
    const inView = (b) => b.y >= bounds.y - 2 && b.y + b.height <= bounds.y + bounds.height + 2 && b.x >= bounds.x - 2 && b.x + b.width <= bounds.x + bounds.width + 2;
    const off = [...found.values()].find((r) => !inView(r.box));
    if (off) {
      await off.el.scrollIntoViewIfNeeded().catch(() => {});
      await page.waitForTimeout(500);
      await resolveAll();
    }
    // Phần tử bị cuộn khuất trong khung cuộn (ví dụ menu trái) vẫn có tọa độ: phải kiểm tra thật sự nhìn thấy.
    const onTop = (el) =>
      el
        .evaluate((node) => {
          const r = node.getBoundingClientRect();
          const hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
          return !!hit && (hit === node || node.contains(hit) || hit.contains(node));
        })
        .catch(() => false);
    let moved = false;
    for (const r of found.values()) {
      if (!(await onTop(r.el))) {
        await r.el.scrollIntoViewIfNeeded().catch(() => {});
        moved = true;
      }
    }
    if (moved) {
      await page.waitForTimeout(500);
      await resolveAll();
    }

    let k = 0;
    const draw = [];
    for (const m of a.marks) {
      const r = found.get(m.n);
      const skipped = (m.if && !found.has(m.if)) || (m.ifNot && found.has(m.ifNot));
      if (r && inView(r.box) && (await onTop(r.el))) {
        k += 1;
        draw.push({ n: k, box: r.box });
        res.drawn.push({ n: k, label: m.label, source: m.n });
        if (r.partial) warn(name, `khung "${m.label}" chỉ định vị được một phần`);
      } else if (!skipped && !(m.if || m.ifNot)) {
        const reason = r ? 'nằm ngoài vùng chụp hoặc bị che' : 'không tìm thấy phần tử';
        res.missing.push({ n: m.n, label: m.label, reason });
        warn(name, `bỏ khung ${m.n} (${reason}): ${m.label}`);
      }
    }
    if (res.missing.length && res.drawn.some((d) => a.marks.find((m) => m.n === d.source)?.ifNot)) {
      res.note = res.note || 'Màn hình chưa có dữ liệu nên dùng khung thay thế.';
    }

    if (a.pickBatch && /\/dashboard\/batches\//.test(page.url())) {
      const pub = await page
        .evaluate(() => {
          const a = [...document.querySelectorAll('a[href]')].find((x) => /verify\./.test(x.href));
          if (a) return a.href;
          const m = document.body.innerText.match(/https?:\/\/[\w.-]*verify[\w.-]*\/\S+/);
          return m ? m[0] : null;
        })
        .catch(() => null);
      if (pub) shared.publicUrl = pub;
    }

    // Thông báo lỗi tạm của trang không liên quan đến thao tác đang hướng dẫn: khai hideText để ẩn khỏi ảnh và ghi lại lỗi.
    if (a.hideText) {
      await page.evaluate((texts) => {
        for (const el of document.querySelectorAll('body *')) {
          if (getComputedStyle(el).position === 'fixed' && !el.querySelector('[role=dialog]') && el.getAttribute('role') !== 'dialog' && texts.some((t) => el.innerText?.includes(t)) && el.getBoundingClientRect().width < 700) el.style.setProperty('display', 'none', 'important');
        }
      }, a.hideText);
    }
    await drawOverlay(page, draw, bounds);
    const file = path.join(OUT, `${name}.png`);
    // Che kín (không làm mờ) chữ không được lộ: tên, mã của tổ chức khác, email quản trị, địa chỉ IP.
    const mask = (a.mask || []).map((t) => page.getByText(t, { exact: false }));
    const shotOpts = { path: file, ...(mask.length ? { mask, maskColor: MASK_COLOR } : {}) };
    if (clipLoc) await page.screenshot({ ...shotOpts, clip: bounds });
    else await page.screenshot(shotOpts);
    await removeOverlay(page);
    await page.keyboard.press('Escape').catch(() => {});
    res.ok = true;
    log(`  ✓ ${name}.png (vẽ ${res.drawn.length} khung${res.missing.length ? `, thiếu ${res.missing.length}` : ''})`);
  } catch (e) {
    res.error = e.message.split('\n')[0];
    console.error(`  ✗ ${name}: ${res.error}`);
  } finally {
    if (a.auth) await ctx.storageState({ path: P.state }).catch(() => {});
    await ctx.close();
  }
  return res;
}

// ---------- chạy ----------

const browser = await chromium.launch();
for (const name of names) {
  log(`• ${name}`);
  report.images[name] = await shoot(browser, name, ANN[name]);
}
await browser.close();

report.generatedAt = new Date().toISOString();
report.base = BASE;
fs.writeFileSync(REPORT, JSON.stringify(report, null, 2) + '\n');
const imgs = Object.values(report.images);
log(`\nXong: ${imgs.filter((r) => r.ok).length}/${imgs.length} ảnh. Báo cáo: docs/public/images/_report.json`);
