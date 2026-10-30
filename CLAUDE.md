# Web Sổ tay hướng dẫn sử dụng NacenCheck

Web tĩnh dựng bằng **VitePress** từ các file Markdown trong `docs/`, kèm ảnh màn hình thật chụp bằng **Playwright** có khoanh vùng đánh số (Visual Grounding). Đọc hết file này trước khi sửa code.

## 1. Mục tiêu

Sổ tay hướng dẫn sử dụng trang quản trị doanh nghiệp NacenCheck (`https://trace.nacencheck.com/dashboard`) cho người mới, chưa biết gì về hệ thống. Nội dung nằm trong `docs/`, viết theo màn hình thật và **ảnh màn hình thật** chỉ đúng vào chỗ cần bấm.

Luồng chính 9 bước (bước 1–8 ứng với chương 03–10; bước 9 là khách quét QR, nằm trong chương 09). Nguồn nguyên liệu và tạo lô đã gộp làm một chương theo yêu cầu người dùng:

```
1. Thiết lập doanh nghiệp (03) → 2. Cơ sở và vùng nguyên liệu (04) → 3. Danh mục vật tư và kho (05)
→ 4. Sản phẩm, định mức, quy trình (06) → 5. Nguồn nguyên liệu và tạo lô (07)
→ 6. Chi tiết lô, ghi công đoạn (08) → 7. Tem QR, trang truy xuất (09) → 8. Bán, phân phối (10)
→ 9. Khách hàng quét QR
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
    │   ├── config.mts           ← menu 6 nhóm, tìm kiếm, nút trước/sau, thời gian đọc
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
    ├── luong-chinh/ 03 … 10     (04 = cơ sở và vùng nguyên liệu)
    ├── mo-rong/     11 (tổng hợp), 12 tuân thủ, 13 quản lý tài sản
    ├── hop-tac-xa/  14
    └── ho-tro/      15
```

## 4. Quy tắc về nội dung

- Toàn bộ chương đã được viết lại theo yêu cầu người dùng, theo mục "Cách viết chương Luồng chính" bên dưới. Khi giao diện đổi, cứ sửa bài cho khớp màn thật.
- Frontmatter mỗi chương: `title`, `order`, `group`. Chương Luồng chính (03–10) có thêm `prerequisites` (2–3 việc phải xong, mỗi việc có `text` và `link`) và `outcome` (một câu kết quả).
- Thứ tự chương và nút **Chương trước / Chương sau** lấy theo `order` (tính trong `config.mts`).
- Ảnh viết dạng `![mô tả](/images/xx.png)`; plugin tự đổi thành `<Shot name="xx">`. Thiếu ảnh thì hiện khung "Ảnh minh họa đang cập nhật".
- Khối ` ``` ` là sơ đồ luồng dạng chữ (monospace, nền nhạt, giữ xuống dòng). Khối `>` là hộp lưu ý: bắt đầu bằng "Lưu ý"/"Về kỹ thuật" → biểu tượng i; chứa "không bấm", "không xóa được", "bắt buộc" → cảnh báo cam.
- Chuỗi `/dashboard/...` hoặc `/m/...` trong dấu `` ` `` tự hiển thị thành nhãn breadcrumb, bấm mở trang thật ở tab mới.
- Thuật ngữ trong `glossary.json` được gạch chân chấm ở lần xuất hiện đầu tiên mỗi trang (trừ chương 01, trừ chữ in đậm và tiêu đề).
- Lỗi và điểm bất hợp lý của trang NacenCheck, phần bài chưa kiểm chứng được: ghi vào `docs/_goi-y-sua-noi-dung.md`.

### Cách viết chương Luồng chính

- Thao tác ngay trên màn hình chuyên trách của việc đó (ví dụ `/dashboard/brand`), **không** đi qua trình Bắt đầu `/dashboard/onboarding`.
- Mở màn thật trên `https://trace.nacencheck.com` trước khi viết; tên nút, tên ô phải khớp màn hình.
- Ngắn gọn: mỗi việc là các bước đánh số. Form nhiều ô thì dùng bảng **Ô | Điền gì**; ví dụ cụ thể nằm ngay trong ảnh, không lặp thành cột trong bảng.
- Khung đỏ chỉ khoanh chỗ người đọc phải tìm mới thấy, thường 1–2 khung một ảnh. Ảnh form nhiều ô thì **không khoanh** (`"marks": []`) vì trông rối mắt.
- Ví dụ dùng chung một doanh nghiệp: Công ty TNHH Hạt Vàng Việt, làm bánh gạo. Tài khoản trên trang chính thức đã lưu theo ví dụ này (theo yêu cầu người dùng): hồ sơ doanh nghiệp, cơ sở "Nhà máy cơm cháy Hạt Vàng Việt", vùng "Vùng gạo tám Đồng Quê – Khu B" (mã TMP, chưa có mã thật), kho "Kho nguyên liệu Hạt Vàng Việt", nhà cung cấp "Nhà cung cấp mật ong Minh An", vật tư NL-GAO-01, NL-MO-01, BB-TUI-01, phiếu nhập NK-2610-0001 (40 lít mật ong, lô MO-2610), mã GS1 khai nhanh 893801234, sản phẩm BG-MO-180 (GTIN 8938012340017, có định mức, quy trình 6 bước đã xuất bản, đã kích hoạt), phiếu nhập NK-2610-0002 (20 lít mật ong qua tab Mua trong nước), lô BGNM-20261030-JWQZ (10 gói, Đang xử lý, Chờ đồng bộ, đã ghi Nhập nguyên liệu, Chế biến, Đóng gói), lô con DST-20261030-dd50a11a (bán 2 gói cho Đại lý bánh kẹo An Bình), 10 tem chống giả tiền tố HVV2610 (dải HVV2610-261030-001, chưa kích hoạt vào lô), 10 serial và 1 thùng CARTON-MVV59RF6 (SSCC 089380123400000017, chưa đóng hàng) của lô BGNM, 2 đối tác phân phối NM-HVV-01 (nhà máy, loại Tổng đại lý) và DL-AB-01 (Đại lý bánh kẹo An Bình, không có SĐT vì số giả có thể trùng số thật). Chưa có chặng giao vì ô Từ, Đến đang lỗi. Không tạo lệnh thu hồi, yêu cầu liên kết, phiếu giao trên tài khoản ví dụ. Ảnh nên hiện đúng dữ liệu ví dụ.
- Mở trang truy xuất công khai (kể cả khi chụp `10-trang-truy-xuat`, `10-truy-xuat-hanh-trinh`) làm tăng số lượt quét của lô ví dụ.
- Nút **In tem serial riêng**, **Sinh serial** tạo serial thật mỗi lần bấm, nên script và bài không được bấm thử. File CSV tem chống giả chứa mã PIN bí mật, không đưa PIN vào bài hay ảnh.
- Ảnh `06-kich-hoat`, `08-lo-ket-qua` chụp lúc sản phẩm và lô còn Nháp; nay các nút đó đã mất nên đừng chụp lại, giữ nguyên ảnh.
- Script và người dùng dùng chung một tài khoản nên đăng nhập ở nơi này có thể đẩy phiên ở nơi kia ra.
- Tạo thêm dữ liệu thật trên trang chính thức phải hỏi người dùng theo từng lần. Tài khoản nông hộ, nhân viên do người dùng tự tạo, không tạo bằng script. Không điền số CCCD thật hay giả vào form.
- Ảnh chụp toàn màn hình máy tính, **không** cắt riêng form hay khung trượt hẹp (`clip`) vì trông như màn điện thoại. Ảnh `clip` của các chương cũ đổi lại khi viết lại chương đó.

### Viết chữ cho phần web thêm vào (chú thích ảnh, hộp, nhãn nút)

Người đọc là nhân viên lần đầu mở NacenCheck. Câu ngắn, tiếng Việt tự nhiên; gọi đúng tên nút y như màn hình và in đậm (**Tạo lô mới**); giải thích thuật ngữ bằng lời thường; nói rõ vì sao phải làm. Nhãn chú thích ảnh viết theo hành động: "Bấm **Đăng nhập** để vào Bảng điều khiển", không viết "Nút Đăng nhập".

## 5. Giao diện

- Header hai hàng màu xanh NacenCheck (`SiteHeader.vue`): hàng 1 logo, tên sổ tay, ô tìm kiếm (local search tiếng Việt), nút sáng/tối; hàng 2 bảy tab **Trang chủ · Mở đầu · Bắt đầu · Luồng chính · Mở rộng · Hợp tác xã · Hỗ trợ** (khai trong `themeConfig.nav`, tab sáng theo `activeMatch`). Thanh điều hướng mặc định của VitePress bị ẩn.
- **Không có sidebar.** Giữ khung "Trên trang này" (outline cấp `##`).
- 8 trang Luồng chính có `FlowSteps` (thanh 8 bước) và hộp "Trước khi bắt đầu" ở đầu, hộp "Kết quả sau bước này" ở cuối.
- Màu nhấn `#0f6e56`, font Be Vietnam Pro, chữ 16.5px, giãn dòng 1.7, nội dung rộng tối đa 760px. Không gradient, không hiệu ứng động.

## 6. Chụp ảnh màn hình (Playwright + Visual Grounding)

### Quy tắc an toàn – BẮT BUỘC

Tài khoản dữ liệu thật. Script chỉ được **xem và chụp**:

- **Không bấm** nút lưu dữ liệu: Lưu, Tạo lô hàng, Ghi nhận, Xuất bản, Lưu định mức, Lưu sản phẩm, Đăng ký vùng, Xóa, Phát hành tem, Ghi nhận bán cho các người mua, **Bắt đầu** (trình hướng dẫn, vì ghi tiến độ)… Script có danh sách chặn (`FORBIDDEN`) và từ chối bấm các nút này; nút chỉ mở form nhưng trùng tên nút lưu thì khai trong `OPENERS`. Ngoài đăng nhập và làm mới phiên, script còn hủy mọi yêu cầu ghi (POST/PUT/PATCH/DELETE) ở tầng mạng, và tắt service worker (`serviceWorkers: 'block'`) vì yêu cầu đi qua service worker thì `page.route` không chặn được.
- Chỉ bấm nút **mở** form/khung trượt/tab, rồi đóng bằng `Escape`. Được gõ dữ liệu ví dụ vào form bằng bước `fill` và chọn ô thả xuống để ảnh hiện đúng ví dụ, miễn không lưu (yêu cầu ghi đã bị hủy ở tầng mạng).

### Cách script hoạt động

- Đăng nhập ở `/sign-in`, lưu phiên vào `.auth/state.json` sau mỗi ảnh (token làm mới bị xoay vòng nên phải lưu lại liên tục); bị đẩy về `/sign-in` thì tự đăng nhập lại. Ảnh `02-dang-nhap` dùng trình duyệt sạch để form trống.
- Viewport `desktop` 1440×900, `desktop-tall` 1440×1200, `desktop-wide` 1920×1080, `tablet` 1024×768, `mobile` 390×844; `deviceScaleFactor: 2`, giao diện sáng, `vi-VN`.
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
- `steps`: `click`, `fill` (kèm `value`, tùy chọn `press`), `type` (gõ vào ô đang mở), `waitFor`, `scroll`, `wait`; `optional: true` để bỏ qua nếu lỗi. `click` chỉ dùng thao tác **mở**.
- Khác: `fullPage`, `clip` (chụp riêng một vùng), `pickBatch` (lô gợi ý không tồn tại thì mở lô đầu tiên chưa "Đã bán"), `failIf` (trang chứa chữ này thì coi là lỗi, không chụp), `hideText` (ẩn khỏi ảnh thông báo nổi chứa chữ này, chỉ dùng cho lỗi tạm đã ghi vào `_goi-y-sua-noi-dung.md`), `geolocation` (cấp quyền và vị trí giả cho form tự xin định vị), `url: "{publicUrl}"` (link truy xuất công khai lấy từ ảnh `09-chi-tiet-lo`, nên ảnh này phải đứng trước trong `annotations.json`).

### Danh sách ảnh

Tiền tố tên ảnh giữ số chương cũ (`08-…`, `09-…`, `10-…`, `11-…`) để khỏi đổi tên file; ảnh `08-…` thuộc chương 07, ảnh `09-…` thuộc chương 08, ảnh `10-…` thuộc chương 09, ảnh `11-…` thuộc chương 10.

`BASE = https://trace.nacencheck.com`

| Tên file | Trang / thao tác mở | Khoanh |
|---|---|---|
| `02-dang-nhap` | `/sign-in`, chưa đăng nhập | nút Đăng nhập |
| `02-bang-dieu-khien` | `/dashboard` | ô Tìm kiếm sổ cái, Hoàn thiện hồ sơ |
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
| `03-ma-gs1` | `/dashboard/gs1` | khung Khai nhanh |
| `06-san-pham` | `/dashboard/products` | Thêm sản phẩm |
| `06-them-san-pham`, `06-them-san-pham-nhan`, `06-them-san-pham-co-so` | `/dashboard/products` → Thêm sản phẩm, gõ ví dụ (**không bấm Lưu sản phẩm**) | nút tự cấp GTIN; không khoanh; hàng cơ sở |
| `06-dinh-muc`, `06-dinh-muc-form` | `/dashboard/bom/<id>` → Sửa định mức (**không bấm Lưu định mức**) | Sửa định mức; không khoanh |
| `06-quy-trinh`, `06-quy-trinh-mau` | `/dashboard/products/<id>/workflow` → Mẫu ngành (**không bấm Lưu, Xuất bản**) | không khoanh; Chèn vào bước |
| `06-kich-hoat` | `/dashboard/products/<id>`. Sản phẩm đã kích hoạt nên chụp lại sẽ thiếu nút này, giữ ảnh hiện có. | Kích hoạt |
| `07-loai-nguon` | `/dashboard/batches` → Tạo lô mới, chọn sản phẩm, nguồn Mua từ đơn vị khác (**không bấm Tạo lô hàng**) | hàng Loại nguồn |
| `07-mua-trong-nuoc` | `/dashboard/warehouse/receipts?tab=domestic` → Lập phiếu nhập, gõ ví dụ (**không bấm Save**) | không khoanh |
| `07-ton-kho` | `/dashboard/warehouse/stock` (**không bấm**) | Tạo lô truy xuất |
| `07-nhap-khau` | `/dashboard/warehouse/receipts?tab=import` → Nhập khẩu mới (**không bấm Nộp tờ khai**) | không khoanh |
| `07-nhat-ky-canh-tac` | `/dashboard/farming-journal`, quản trị viên chưa được phân công | không khoanh |
| `07-thu-hoach` | `/dashboard/harvest` → Ghi nhận nhanh (**không bấm Ghi nhận thu hoạch**) | không khoanh |
| `08-form-tao-lo`, `08-lo-nguon`, `08-lo-co-so`, `08-lo-so-luong` | `/dashboard/batches` → Tạo lô mới, gõ ví dụ (**không bấm Tạo lô hàng**) | ô lý do; nút xác nhận cơ sở; bảng định mức |
| `08-lo-ket-qua` | `/dashboard/batches/<id>` (**không bấm Công bố lô**) | Công bố lô |
| `09-chi-tiet-lo` | chi tiết lô ví dụ | Ghi công đoạn, Xem như khách hàng |
| `09-ghi-tien-trinh`, `09-ghi-form` | `/dashboard/events/new?batchId=<id>` → Ghi nhận công đoạn này (**không bấm Ghi nhận sự kiện**) | nút mở form; không khoanh |
| `09-nhat-ky`, `09-ho-so` | chi tiết lô → tab | Nhật ký sự kiện; Chọn file |
| `09-dinh-chinh` | `/dashboard/events/new?batchId=<id>` → bấm bước đã ghi (**không bấm Đính chính**) | Đính chính |
| `09-ghi-cong-doan` | `/m/events/record`, mobile | không khoanh |
| `10-in-tem-nhanh` | `/dashboard/quick-label` → chọn sản phẩm, lô (**không bấm in**) | In tem QR hàng loạt |
| `10-so-tem` | `/dashboard/labels` | In tem nhanh |
| `10-thiet-ke-tem` | `/dashboard/labels/designer` (**không bấm Lưu mẫu**) | ô Loại serial, Lưu mẫu |
| `10-tem-bao-goi`, `10-tem-serial`, `10-thung-sscc` | `/dashboard/labels/packaging`, chọn lô ví dụ, cuộn tới khối (**không bấm Sinh serial, Tạo 1 thùng, Xác nhận đóng**) | ô chọn lô; Sinh serial; Đóng hàng có serial, Xác nhận đóng |
| `10-chong-gia`, `10-chong-gia-phat-hanh`, `10-chong-gia-menu` | `/dashboard/compliance/anti-counterfeiting` → Phát hành tem, gõ ví dụ / → Thao tác (**không bấm Phát hành tem trong form, Kích hoạt**) | Phát hành tem, Tra một con tem; không khoanh; Kích hoạt |
| `10-trang-truy-xuat`, `10-truy-xuat-hanh-trinh` | link "Truy xuất công khai" lấy từ ảnh 09, mobile | không khoanh |
| `11-ban-phan-phoi` | chi tiết lô → Bán / phân phối, gõ ví dụ (**không bấm Ghi nhận bán**) | không khoanh |
| `11-lo-con`, `11-phan-bo`, `11-tinh-trang`, `11-tieu-thu` | danh sách lô; tab Nguồn; `.../control-tower`; `/dashboard/distribution` | dòng lô con; Phân bổ; Việc phải làm; không khoanh |
| `11-mang-luoi`, `11-ghi-chang` | `/dashboard/distribution/network`; tab Ghi chặng giao hàng, gõ ví dụ (**không bấm Lưu đối tác, Ghi chặng**) | Thêm đối tác, tab Ghi chặng; không khoanh |
| `11-lien-ket`, `11-giao-nhan` | `/dashboard/partners/traders`; chi tiết lô → Thao tác khác → Gửi xác nhận giao–nhận (**không bấm Gửi yêu cầu, Giao lô**) | Mời đối tác; không khoanh |
| `11-thu-hoi` | `/dashboard/batches/<id>/recall`, gõ ví dụ (**không bấm Khởi tạo lệnh thu hồi**) | không khoanh |
| `12-tuan-thu`, `12-kiem-tra-nhan`, `12-lich-su-quet`, `12-rui-ro`, `12-ho-chieu-lo`, `12-bang-chung`, `12-vi-pham`, `12-truy-vet` | `/dashboard/compliance` và các mục con, `/dashboard/violations`, `/dashboard/lineage` (**không bấm Kiểm tra, Xuất bản, Phát hành, Tạo**) | hàng công cụ; Kiểm tra; không khoanh; không khoanh; không khoanh; Tạo; không khoanh; không khoanh |
| `13-tong-quan`, `13-tai-san`, `13-thiet-bi`, `13-hanh-trinh`, `13-ket-noi-iot` | `/dashboard/doi-phuong-tien/...` → Tạo mới, gõ ví dụ (**không bấm Lưu, Tạo token**) | không khoanh, riêng `13-ket-noi-iot` khoanh Tạo token |
| `14-tong-quan`, `14-tao-nong-ho`, `14-dang-ky-hang-loat`, `14-khai-thua`, `14-lich-mau`, `14-phat-quy-trinh`, `14-uy-quyen`, `14-khai-ho` | `/dashboard/cooperative` và các màn liên quan, `14-khai-ho` là `/m/htx-proxy` khung `tablet` (**không bấm Tạo tài khoản, Lưu thửa, Sao chép, Phát hành quy trình, Ghi giấy uỷ quyền, Gửi nhật ký**) | Tải mẫu CSV; Sao chép để chỉnh, Ban hành mùa vụ; còn lại không khoanh |

## 7. Kiểm tra trước khi bàn giao

- 16 chương (00–15) hiển thị đủ, đúng nhóm, đúng thứ tự; không có sidebar; tab nhóm sáng đúng khi đang đọc.
- `FlowSteps` chỉ có ở 8 trang Luồng chính, bước hiện tại đúng.
- Mở vài ảnh: số trên ảnh khớp chú thích dưới ảnh; không popup che; không có dữ liệu nhập dở.
- `_report.json` không còn ảnh lỗi; nếu còn, ghi lý do khi bàn giao.
- Không có mật khẩu trong file nào ngoài `.env`; `.env` và `.auth/` nằm trong `.gitignore`.
- `npm run build` chạy không lỗi; xem thử trên desktop và khung 390px.

## 8. Khi bổ sung nội dung

- Chương mới: thêm file `.md` vào đúng thư mục nhóm với `title`, `order`, `group` (và `prerequisites`, `outcome` nếu thuộc Luồng chính). Nếu là chương Luồng chính, thêm bước vào `FlowSteps.vue`.
- Ảnh mới: thêm mục vào `docs/annotations.json`, chèn `![mô tả](/images/<tên>.png)` vào bài, chạy `npm run shots -- <tên>` rồi `npm run build`.
- Thuật ngữ mới: thêm vào `docs/glossary.json` (`term`, `match`, `def`).
