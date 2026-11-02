// Lớp trình bày cho Markdown: không đổi chữ trong docs/*.md, chỉ đổi cách hiển thị.
import type MarkdownIt from 'markdown-it'
import glossary from '../glossary.json'

type Env = { relativePath?: string; __termsUsed?: Set<string>; __metaDone?: boolean }

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const LINK_ICON =
  '<svg class="route-ico" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>'

// Thuật ngữ: chỉ đánh dấu lần xuất hiện đầu tiên trên mỗi trang.
const TERMS = Object.entries(glossary as Record<string, any>)
  .filter(([k]) => !k.startsWith('_'))
  .map(([key, g]) => {
    const alts = [...g.match].sort((a: string, b: string) => b.length - a.length).map((s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    return { key, re: new RegExp(`(?<![\\p{L}\\p{N}])(${alts.join('|')})(?![\\p{L}\\p{N}])`, 'iu') }
  })
const NO_TERMS = ['index.md', 'mo-dau/01-khai-niem-co-ban.md']

export function markdownPlugins(md: MarkdownIt, opts: { appBase: string; adminBase: string }) {
  // 1. Ảnh: ![alt](/images/xx.png) → <Shot name="xx" alt="alt" />, bỏ thẻ <p> bao quanh.
  const onlyImage = (tokens: any[], i: number) =>
    tokens[i + 1]?.type === 'inline' && tokens[i + 1].children?.length === 1 && tokens[i + 1].children[0].type === 'image'
  const pOpen = md.renderer.rules.paragraph_open
  const pClose = md.renderer.rules.paragraph_close
  md.renderer.rules.paragraph_open = (t, i, o, e, s) => (onlyImage(t, i) ? '' : pOpen ? pOpen(t, i, o, e, s) : s.renderToken(t, i, o))
  md.renderer.rules.paragraph_close = (t, i, o, e, s) => (onlyImage(t, i - 2) ? '\n' : pClose ? pClose(t, i, o, e, s) : s.renderToken(t, i, o))
  const img = md.renderer.rules.image!
  md.renderer.rules.image = (tokens, idx, o, env, self) => {
    const src = tokens[idx].attrGet('src') || ''
    const m = src.match(/^\/images\/([\w-]+)\.png$/)
    if (!m) return img(tokens, idx, o, env, self)
    const alt = self.renderInlineAsText(tokens[idx].children || [], o, env)
    return `<Shot name="${m[1]}" alt="${esc(alt)}" />`
  }

  // 2. Đường dẫn màn hình `/dashboard/...`, `/admin/...` → nhãn breadcrumb, bấm mở trang thật ở tab mới.
  const code = md.renderer.rules.code_inline!
  md.renderer.rules.code_inline = (tokens, idx, o, env, self) => {
    const c = tokens[idx].content.trim()
    let route = c
    if (c.startsWith(opts.appBase)) route = c.slice(opts.appBase.length) || '/'
    if (/^\/(dashboard|m|admin)(\/|$)/.test(route)) {
      const segs = route.split('/').filter(Boolean)
      const cut = segs.findIndex((s) => s.includes('<'))
      const base = segs[0] === 'admin' ? opts.adminBase : opts.appBase
      const href = base + '/' + (cut < 0 ? segs : segs.slice(0, cut)).join('/')
      const crumbs = segs
        .map((s) => `<span class="crumb${s.includes('<') ? ' crumb-var' : ''}">${esc(s.replace(/[<>]/g, ''))}</span>`)
        .join('<span class="crumb-sep" aria-hidden="true">›</span>')
      return `<a class="route-chip" href="${esc(href)}" target="_blank" rel="noopener" title="Mở ${esc(c)} trên NacenCheck (tab mới)">${LINK_ICON}${crumbs}</a>`
    }
    if (/^https?:\/\/\S+$/.test(c)) {
      return `<a class="route-chip" href="${esc(c)}" target="_blank" rel="noopener" title="Mở trong tab mới">${LINK_ICON}<span class="crumb">${esc(c.replace(/^https?:\/\//, ''))}</span></a>`
    }
    return code(tokens, idx, o, env, self)
  }

  // 3. Hộp lưu ý: phân loại theo nội dung để chọn biểu tượng.
  md.renderer.rules.blockquote_open = (tokens, idx) => {
    let depth = 0
    let text = ''
    for (let j = idx; j < tokens.length; j++) {
      if (tokens[j].type === 'blockquote_open') depth++
      if (tokens[j].type === 'blockquote_close' && --depth === 0) break
      if (tokens[j].type === 'inline') text += tokens[j].content + ' '
    }
    const plain = text.replace(/[*_`]/g, '').trim()
    let kind = 'note'
    if (/không bấm|không xóa được|bắt buộc/i.test(plain)) kind = 'warning'
    else if (/^(Lưu ý|Về kỹ thuật)/.test(plain)) kind = 'info'
    const label = { warning: 'Cảnh báo', info: 'Thông tin', note: 'Ghi chú' }[kind]
    return `<blockquote class="callout callout-${kind}"><span class="callout-ico" aria-label="${label}"></span>\n`
  }

  // 4. Thời gian đọc cạnh tiêu đề chương.
  const hClose = md.renderer.rules.heading_close
  md.renderer.rules.heading_close = (tokens, idx, o, env: Env, self) => {
    const html = hClose ? hClose(tokens, idx, o, env, self) : self.renderToken(tokens, idx, o)
    if (tokens[idx].tag === 'h1' && !env.__metaDone) {
      env.__metaDone = true
      return html + '<ChapterMeta />\n'
    }
    return html
  }

  // 5. Thuật ngữ có chú giải: bọc lần xuất hiện đầu tiên trong <Term>.
  md.core.ruler.push('nc_glossary', (state) => {
    const env = state.env as Env
    if (NO_TERMS.includes(env.relativePath || '')) return
    const used = (env.__termsUsed ??= new Set())
    const blocks = state.tokens
    for (let b = 0; b < blocks.length; b++) {
      const blk = blocks[b]
      if (blk.type !== 'inline' || !blk.children || blocks[b - 1]?.type === 'heading_open') continue
      const out: any[] = []
      let inLink = 0
      let inStrong = 0
      for (const tok of blk.children) {
        if (tok.type === 'link_open') inLink++
        if (tok.type === 'link_close') inLink--
        // Chữ in đậm thường là tên nút trên màn hình: không gạch chân thuật ngữ bên trong.
        if (tok.type === 'strong_open') inStrong++
        if (tok.type === 'strong_close') inStrong--
        if (tok.type !== 'text' || inLink || inStrong) {
          out.push(tok)
          continue
        }
        let rest = tok.content
        let changed = false
        while (rest) {
          let best: { key: string; index: number; text: string } | null = null
          for (const t of TERMS) {
            if (used.has(t.key)) continue
            const m = t.re.exec(rest)
            if (m && (!best || m.index < best.index || (m.index === best.index && m[0].length > best.text.length)))
              best = { key: t.key, index: m.index, text: m[0] }
          }
          if (!best) break
          used.add(best.key)
          changed = true
          if (best.index > 0) out.push(Object.assign(new state.Token('text', '', 0), { content: rest.slice(0, best.index) }))
          out.push(Object.assign(new state.Token('html_inline', '', 0), { content: `<Term k="${best.key}">${esc(best.text)}</Term>` }))
          rest = rest.slice(best.index + best.text.length)
        }
        if (!changed) out.push(tok)
        else if (rest) out.push(Object.assign(new state.Token('text', '', 0), { content: rest }))
      }
      blk.children = out
    }
  })
}
