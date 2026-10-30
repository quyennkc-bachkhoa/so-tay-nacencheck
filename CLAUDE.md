# Web Sổ tay hướng dẫn sử dụng NacenCheck

Web tĩnh dựng bằng **VitePress** từ các file Markdown trong `docs/`, kèm ảnh màn hình thật chụp bằng **Playwright** có khoanh vùng đánh số (Visual Grounding). Đọc hết file này trước khi sửa code.

## 1. Mục tiêu

Sổ tay hướng dẫn sử dụng trang quản trị doanh nghiệp NacenCheck (`https://trace.nacencheck.com/dashboard`) cho người mới, chưa biết gì về hệ thống. Nội dung đã viết sẵn trong `docs/`; nhiệm vụ là **trình bày** nội dung đó thành web dễ đọc và **chụp ảnh màn hình thật** chỉ đúng vào chỗ cần bấm.

Luồng chính 10 bước (bước 1–9 ứng với chương 03–11; bước 10 là khách quét QR, nằm trong chương 10):

```
1. Thiết lập doanh nghiệp (03) → 2. Cơ sở và vùng nguyên liệu (04) → 3. Danh mục vật tư (05)
→ 4. Sản phẩm, định mức, quy trình (06) → 5. Nguồn nguyên liệu (07) → 6. Tạo lô (08)
→ 7. Chi tiết lô, ghi công đoạn (09) → 8. Tem QR, trang truy xuất (10) → 9. Bán, phân phối (11)
→ 10. Khách hàng quét QR
```

Cơ sở và vùng đi ngay sau thông tin doanh nghiệp vì form vùng cần **Cơ sở phụ trách**, và nhật ký canh tác phải ghi từ đầu mùa vụ.

## 2. Lệnh chạy

```
npm install                 # lần đầu
npx playwright install chromium
npm run shots               # chụp lại toàn bộ ảnh (đọc docs/annotations.json)
npm run shots -- 08-form-tao-lo 06-dinh-muc   # chụp lại vài ảnh
npm run dev                 # xem thử tại http://localhost:5173
npm run build               # xuất web tĩnh ra docs/.vitepress/dist
npm run preview             # xem bản build
```

Tài khoản đọc từ `.env` (không commit, không ghi mật khẩu vào file nào khác):

```
NACEN_BASE=https://trace.nacencheck.com
NACEN_EMAIL=...
NACEN_PASSWORD=...
```

## 3. Cấu trúc thư mục

```
├── CLAUDE.md
├── .env                         ← tài khoản (KHÔNG commit)
├── .auth/state.json             ← phiên đăng nhập Playwright (KHÔNG commit)
├── scripts/screenshots.mjs      ← chụp ảnh có khoanh vùng
└── docs/
    ├── .vitepress/
    │   ├── config.mts           ← menu 5 nhóm, tìm kiếm, nút trước/sau, thời gian đọc
    │   ├── markdown.ts          ← plugin markdown-it: ảnh → <Shot>, đường dẫn, hộp lưu ý, thuật ngữ
    │   └── theme/
    │       ├── index.ts, Layout.vue, style.css
    │       └── components/      ← SiteHeader, FlowSteps, Shot, Term, InfoBox, ChapterMeta, NewbieSteps
    ├── public/images/           ← ảnh chụp + _report.json
    ├── annotations.json         ← khoanh vùng từng ảnh (dùng chung cho script chụp và Shot.vue)
    ├── glossary.json            ← thuật ngữ có chú giải khi rê chuột (lấy từ chương 01)
    ├── _goi-y-sua-noi-dung.md   ← góp ý nội dung cho người viết (không lên web)
    ├── index.md                 ← trang chủ
    ├── mo-dau/      00, 01
    ├── bat-dau/     02
    ├── luong-chinh/ 03 … 11     (04 = cơ sở và vùng nguyên liệu)
    ├── mo-rong/     12
    └── ho-tro/      13
```

## 4. Quy tắc về nội dung

- Chương Luồng chính được viết lại dần theo yêu cầu của người dùng, theo mục "Cách viết chương Luồng chính" bên dưới. Đã viết lại: 03, 04, 05. Các chương còn lại chưa được yêu cầu thì **không viết lại, không thêm bớt câu chữ**; chỉ được di chuyển file, thêm frontmatter, thêm component hiển thị.
- Frontmatter mỗi chương: `title`, `order`, `group`. Chương Luồng chính (03–11) có thêm `prerequisites` (2–3 việc phải xong, mỗi việc có `text` và `link`) và `outcome` (một câu kết quả).
- Thứ tự chương và nút **Chương trước / Chương sau** lấy theo `order` (tính trong `config.mts`).
- Ảnh viết dạng `![mô tả](/images/xx.png)`; plugin tự đổi thành `<Shot name="xx">`. Thiếu ảnh thì hiện khung "Ảnh minh họa đang cập nhật".
- Khối ` ``` ` là sơ đồ luồng dạng chữ (monospace, nền nhạt, giữ xuống dòng). Khối `>` là hộp lưu ý: bắt đầu bằng "Lưu ý"/"Về kỹ thuật" → biểu tượng i; chứa "không bấm", "không xóa được", "bắt buộc" → cảnh báo cam.
- Chuỗi `/dashboard/...` hoặc `/m/...` trong dấu `` ` `` tự hiển thị thành nhãn breadcrumb, bấm mở trang thật ở tab mới.
- Thuật ngữ trong `glossary.json` được gạch chân chấm ở lần xuất hiện đầu tiên mỗi trang (trừ chương 01, trừ chữ in đậm và tiêu đề).
- Nếu thấy nội dung gốc khó hiểu hoặc lệch giao diện: ghi vào `docs/_goi-y-sua-noi-dung.md`, không tự sửa.

### Cách viết chương Luồng chính

- Thao tác ngay trên màn hình chuyên trách của việc đó (ví dụ `/dashboard/brand`), **không** đi qua trình Bắt đầu `/dashboard/onboarding`.
- Mở màn thật trên `https://trace.nacencheck.com` trước khi viết; tên nút, tên ô phải khớp màn hình.
- Ngắn gọn: mỗi việc là các bước đánh số. Form nhiều ô thì dùng bảng **Ô | Điền gì**; ví dụ cụ thể nằm ngay trong ảnh, không lặp thành cột trong bảng.
- Khung đỏ chỉ khoanh chỗ người đọc phải tìm mới thấy, thường 1–2 khung một ảnh. Ảnh form nhiều ô thì **không khoanh** (`"marks": []`) vì trông rối mắt.
- Ví dụ dùng chung một doanh nghiệp: Công ty TNHH Hạt Vàng Việt, làm bánh gạo. Tài khoản trên trang chính thức đã lưu theo ví dụ này (theo yêu cầu người dùng): hồ sơ doanh nghiệp, cơ sở "Nhà máy cơm cháy Hạt Vàng Việt", vùng "Vùng gạo tám Đồng Quê – Khu B" (mã TMP, chưa có mã thật), kho "Kho nguyên liệu Hạt Vàng Việt", nhà cung cấp "Nhà cung cấp mật ong Minh An", vật tư NL-GAO-01, NL-MO-01, BB-TUI-01, phiếu nhập NK-2610-0001 (40 lít mật ong, lô MO-2610). Ảnh nên hiện đúng dữ liệu ví dụ.
- Tạo thêm dữ liệu thật trên trang chính thức phải hỏi người dùng theo từng lần.
- Ảnh chụp toàn màn hình máy tính, **không** cắt riêng form hay khung trượt hẹp (`clip`) vì trông như màn điện thoại. Ảnh `clip` của các chương cũ đổi lại khi viết lại chương đó.

### Viết chữ cho phần web thêm vào (chú thích ảnh, hộp, nhãn nút)

Người đọc là nhân viên lần đầu mở NacenCheck. Câu ngắn, tiếng Việt tự nhiên; gọi đúng tên nút y như màn hình và in đậm (**Tạo lô mới**); giải thích thuật ngữ bằng lời thường; nói rõ vì sao phải làm. Nhãn chú thích ảnh viết theo hành động: "Bấm **Đăng nhập** để vào Bảng điều khiển", không viết "Nút Đăng nhập".

## 5. Giao diện

- Header hai hàng màu xanh NacenCheck (`SiteHeader.vue`): hàng 1 logo, tên sổ tay, ô tìm kiếm (local search tiếng Việt), nút sáng/tối; hàng 2 sáu tab **Trang chủ · Mở đầu · Bắt đầu · Luồng chính · Mở rộng · Hỗ trợ** (khai trong `themeConfig.nav`, tab sáng theo `activeMatch`). Thanh điều hướng mặc định của VitePress bị ẩn.
- **Không có sidebar.** Giữ khung "Trên trang này" (outline cấp `##`).
- 9 trang Luồng chính có `FlowSteps` (thanh 9 bước) và hộp "Trước khi bắt đầu" ở đầu, hộp "Kết quả sau bước này" ở cuối.
- Màu nhấn `#0f6e56`, font Be Vietnam Pro, chữ 16.5px, giãn dòng 1.7, nội dung rộng tối đa 760px. Không gradient, không hiệu ứng động.

## 6. Chụp ảnh màn hình (Playwright + Visual Grounding)

### Quy tắc an toàn – BẮT BUỘC

Tài khoản dữ liệu thật. Script chỉ được **xem và chụp**:

- **Không bấm** nút lưu dữ liệu: Lưu, Tạo lô hàng, Ghi nhận, Xuất bản, Lưu định mức, Lưu sản phẩm, Đăng ký vùng, Xóa, Phát hành tem, Ghi nhận bán cho các người mua, **Bắt đầu** (trình hướng dẫn, vì ghi tiến độ)… Script có danh sách chặn (`FORBIDDEN`) và từ chối bấm các nút này; nút chỉ mở form nhưng trùng tên nút lưu thì khai trong `OPENERS`. Ngoài đăng nhập và làm mới phiên, script còn hủy mọi yêu cầu ghi (POST/PUT/PATCH/DELETE) ở tầng mạng, và tắt service worker (`serviceWorkers: 'block'`) vì yêu cầu đi qua service worker thì `page.route` không chặn được.
- Chỉ bấm nút **mở** form/khung trượt/tab, rồi đóng bằng `Escape`. Được gõ dữ liệu ví dụ vào form bằng bước `fill` và chọn ô thả xuống để ảnh hiện đúng ví dụ, miễn không lưu (yêu cầu ghi đã bị hủy ở tầng mạng).

### Cách script hoạt động

- Đăng nhập ở `/sign-in`, lưu phiên vào `.auth/state.json` sau mỗi ảnh (token làm mới bị xoay vòng nên phải lưu lại liên tục); bị đẩy về `/sign-in` thì tự đăng nhập lại. Ảnh `02-dang-nhap` dùng trình duyệt sạch để form trống.
- Viewport `desktop` 1440×900, `desktop-tall` 1440×1200, `desktop-wide` 1920×1080, `mobile` 390×844; `deviceScaleFactor: 2`, giao diện sáng, `vi-VN`.
- Chờ mạng yên và vùng `main` hết chữ "Đang tải", thêm 800ms. Ẩn hộp "Cài đặt NacenCheck", bong bóng TraceBot và nút dev của Next.js.
- Mỗi khung định vị bằng DOM thật (`boundingBox()`), vẽ lớp phủ `position: fixed` (viền 3px `#E5484D`, cách 4px, huy hiệu số tròn ở góc trên trái), chụp, rồi xóa lớp phủ. Khung không tìm thấy, hoặc phần tử bị che hay cuộn khuất dù đã thử cuộn tới (kiểm tra bằng `elementFromPoint`), thì bỏ, in cảnh báo, vẫn chụp.
- `fullPage`: bố cục quản trị cuộn bên trong khung 100vh, nên script nới chiều cao khung nhìn thay vì dùng `fullPage` của Playwright.
- Kết quả ghi vào `docs/public/images/_report.json`: ảnh nào chụp được, khung nào đã vẽ (đánh số lại liên tục), khung nào thiếu và vì sao. `Shot.vue` đọc file này để in chú thích dưới ảnh, nên số dưới ảnh luôn khớp số trên ảnh.

### Khai báo một ảnh trong `docs/annotations.json`

```json
"08-form-tao-lo": {
  "url": "/dashboard/batches",
  "auth": true,
  "viewport": "desktop-tall",
  "clip": { "role": "dialog" },
  "steps": [ { "click": { "role": "button", "name": "Tạo lô mới", "exact": true } }, { "wait": 1500 } ],
  "marks": [
    { "n": 1, "label": "Gõ tên hoặc SKU vào ô **Sản phẩm đã công bố** rồi chọn sản phẩm", "locator": { "within": { "role": "dialog" }, "field": "Sản phẩm đã công bố" } }
  ]
}
```

- `locator`: `role`+`name` → `text` → `label` → `css` (ưu tiên theo thứ tự này). Thêm `within` để giới hạn vùng tìm (lấy phần tử đầu tiên khớp, kể cả phần tử ẩn; với khung trượt nên dùng `css` có `[role=dialog]:visible`), `nth` để chọn phần tử thứ n, `card: true` để khoanh cả thẻ/khung có viền chứa phần tử, `field: "Nhãn"` để khoanh cả nhãn lẫn ô nhập, `union: [...]` để khoanh chung nhiều phần tử. Cho một mảng locator để thử lần lượt.
- `if: n` / `ifNot: n`: khung chỉ vẽ khi khung số n có / không có (dùng làm khung thay thế khi màn hình chưa có dữ liệu).
- `steps`: `click`, `fill` (kèm `value`, tùy chọn `press`), `waitFor`, `scroll`, `wait`; `optional: true` để bỏ qua nếu lỗi. `click` chỉ dùng thao tác **mở**.
- Khác: `fullPage`, `clip` (chụp riêng một vùng), `pickBatch` (lô gợi ý không tồn tại thì mở lô đầu tiên chưa "Đã bán"), `failIf` (trang chứa chữ này thì coi là lỗi, không chụp), `url: "{publicUrl}"` (link truy xuất công khai lấy từ ảnh `09-chi-tiet-lo`, nên ảnh này phải đứng trước trong `annotations.json`).

### Danh sách ảnh

`BASE = https://trace.nacencheck.com`

| Tên file | Trang / thao tác mở | Khoanh |
|---|---|---|
| `02-dang-nhap` | `/sign-in`, chưa đăng nhập | ô Email, ô Mật khẩu, nút Đăng nhập |
| `02-bang-dieu-khien` | `/dashboard` | menu trái, ô Tìm kiếm sổ cái, 4 thẻ chỉ số, Hoàn thiện hồ sơ |
| `02-onboarding` | `/dashboard/onboarding` | danh sách 10 bước, thanh tiến độ |
| `03-mo-ho-so` | `/dashboard/brand`, cuộn menu trái tới Hồ sơ thương hiệu | mục Hồ sơ thương hiệu ở menu, Cập nhật thông tin |
| `03-ho-so-doanh-nghiep` | `/dashboard/brand` → Cập nhật thông tin, toàn màn hình máy tính (**không bấm Lưu**; form đã có dữ liệu ví dụ Hạt Vàng Việt) | khung Hồ sơ doanh nghiệp |
| `03-them-nhan-vien` | `/dashboard/users` → Thêm thành viên, toàn màn hình máy tính (**không bấm Tạo tài khoản**) | không khoanh |
| `03-cong-khai-trang` | `/dashboard/brand` (**không bấm Công khai trang**) | Công khai trang, khung Trang công khai |
| `04-co-so` | `/dashboard/facilities` | Thêm cơ sở |
| `04-them-co-so` | `/dashboard/facilities` → Thêm cơ sở, gõ dữ liệu ví dụ (**không bấm Tạo**) | không khoanh |
| `04-vung-danh-sach` | `/dashboard/zones` | Đăng ký vùng mới |
| `04-vung-nguyen-lieu` | `/dashboard/zones` → Đăng ký vùng mới, gõ dữ liệu ví dụ (**không bấm Đăng ký vùng**) | Chưa có mã |
| `04-vung-toa-do` | như trên, dán 4 điểm toạ độ, cuộn tới bản đồ | Đăng ký vùng |
| `04-don-vi-san-xuat` | `/dashboard/zones/plots` | Thêm đơn vị, Phân công ở dòng đầu |
| `04-phan-cong` | `/dashboard/zones/plots` → Phân công (**không bấm Lưu phân công**) | không khoanh |
| `05-tao-kho` | `/dashboard/facilities` → Thêm cơ sở, gõ ví dụ (**không bấm Tạo**) | ô Loại cơ sở |
| `05-them-doi-tac` | `/dashboard/distribution/network` → Thêm đối tác, gõ ví dụ (**không bấm Lưu đối tác**) | ô Loại |
| `05-danh-muc-vat-tu` | `/dashboard/warehouse/items` | Thêm vật tư |
| `05-them-vat-tu` | `/dashboard/warehouse/items` → Thêm vật tư, gõ ví dụ (**không bấm Lưu vật tư**) | không khoanh |
| `05-phieu-nhap`, `05-phieu-nhap-gia` | `/dashboard/warehouse/receipts` → Lập phiếu nhập, gõ ví dụ, cuộn bảng trái / phải (**không bấm Lưu phiếu**) | không khoanh |
| `05-ton-kho` | `/dashboard/warehouse/stock` | Tạo lô truy xuất (**không bấm**) |
| `05-the-kho` | `/dashboard/warehouse/stock-card`, chọn Mật ong → Xem | không khoanh |
| `06-them-san-pham` | `/dashboard/products` → Thêm sản phẩm | Ngành, Tên (VI), SKU, Đơn vị |
| `06-dinh-muc` | `/dashboard/bom` → sản phẩm có định mức (không có thì chụp danh sách) | Sửa định mức, danh sách vật tư |
| `06-quy-trinh` | `/dashboard/products/workflows` → quy trình sản phẩm đầu tiên | công đoạn, xem trước biểu mẫu, Xuất bản |
| `07-nhap-nguyen-lieu` | `/dashboard/warehouse/receipts` → Mua trong nước | ba tab, nút thêm/lập phiếu nhập |
| `07-nhat-ky-canh-tac` | `/dashboard/farming-journal` | danh sách thửa, Tạo vụ mới |
| `08-form-tao-lo` | `/dashboard/batches` → Tạo lô mới (chụp riêng khung trượt) | Sản phẩm đã công bố, Công thức, Lý do chưa gán đủ, Tạo lô hàng |
| `09-chi-tiet-lo` | chi tiết lô chưa "Đã bán", toàn trang | 4 thẻ chỉ số, Cần xử lý, hàng nút, Truy xuất công khai, 5 tab |
| `09-ghi-cong-doan` | `/m/events/record`, mobile | danh sách lô cần ghi |
| `10-in-tem-nhanh` | `/dashboard/quick-label` | ô chọn sản phẩm |
| `10-trang-truy-xuat` | link "Truy xuất công khai" của lô ở ảnh 09, mobile | các thẻ, thông tin sản phẩm |
| `11-ban-phan-phoi` | chi tiết lô → Bán / phân phối (**không bấm Ghi nhận**) | tên người mua, khối lượng, Thêm người mua, Ghi nhận bán |

## 7. Kiểm tra trước khi bàn giao

- 14 chương (00–13) hiển thị đủ, đúng nhóm, đúng thứ tự; không có sidebar; tab nhóm sáng đúng khi đang đọc.
- `FlowSteps` chỉ có ở 9 trang Luồng chính, bước hiện tại đúng.
- Mở vài ảnh: số trên ảnh khớp chú thích dưới ảnh; không popup che; không có dữ liệu nhập dở.
- `_report.json` không còn ảnh lỗi; nếu còn, ghi lý do khi bàn giao.
- Không có mật khẩu trong file nào ngoài `.env`; `.env` và `.auth/` nằm trong `.gitignore`.
- `npm run build` chạy không lỗi; xem thử trên desktop và khung 390px.

## 8. Khi bổ sung nội dung

- Chương mới: thêm file `.md` vào đúng thư mục nhóm với `title`, `order`, `group` (và `prerequisites`, `outcome` nếu thuộc Luồng chính). Nếu là chương Luồng chính, thêm bước vào `FlowSteps.vue`.
- Ảnh mới: thêm mục vào `docs/annotations.json`, chèn `![mô tả](/images/<tên>.png)` vào bài, chạy `npm run shots -- <tên>` rồi `npm run build`.
- Thuật ngữ mới: thêm vào `docs/glossary.json` (`term`, `match`, `def`).
