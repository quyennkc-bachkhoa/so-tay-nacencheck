# Quan hệ giữa trang Doanh nghiệp và Cổng Quản trị

> **Bản nháp để duyệt, chưa đưa lên web.** Rà soát ngày 31/10/2026 trên `https://trace.nacencheck.com/dashboard` (tài khoản ví dụ Hạt Vàng Việt) và `https://admin.nacencheck.com/admin`.
> Đã bỏ các quan hệ cơ bản như tài khoản, người dùng, vai trò đăng nhập, theo yêu cầu.

## 1. Tóm tắt

Hai trang là hai cửa vào cùng một dữ liệu. Cổng Quản trị đặt ra **khuôn**: ngành, luật, giá, kết nối. Trang Doanh nghiệp **làm việc trong khuôn đó**, và số liệu phát sinh lại chảy ngược về Quản trị để theo dõi.

```
          CỔNG QUẢN TRỊ                              TRANG DOANH NGHIỆP
  ┌──────────────────────────┐                ┌───────────────────────────────┐
  │ Gói ngành                │ ── khuôn ───→  │ Quy trình sản phẩm, nhật ký   │
  │ Trường tạo lô, Biểu mẫu  │ ── ô nhập ──→  │ Form tạo lô, ghi công đoạn    │
  │ Cổng vai, Cài đặt tem    │ ── siết ────→  │ Quyền ghi công đoạn, mã lô    │
  │ Bộ luật                  │ ── kiểm tra →  │ Tuân thủ, chặn thao tác       │
  │ Giá, hạn mức             │ ── giới hạn →  │ Gói, tính năng mở khoá        │
  │ Tài khoản nhận tiền      │ ── số TK ───→  │ Trang chuyển khoản            │
  │ Tên miền phụ             │ ── địa chỉ ─→  │ Mã QR, trang công khai        │
  │ Đồng bộ NBC              │ ── trạng thái→ │ "Chờ đồng bộ" trên lô         │
  │ Kỹ năng, Công cụ AI      │ ── phạm vi ─→  │ TraceBot                      │
  │                          │                │                               │
  │ Tổng quan, Sức khoẻ      │ ←─ số liệu ──  │ Lô, sự kiện, sản phẩm         │
  │ Nhật ký kiểm toán        │ ←─ thao tác ─  │ Mọi lần ghi, bán hàng         │
  │ Đối soát                 │ ←─ tiền ─────  │ Khách chuyển khoản            │
  └──────────────────────────┘                └───────────────────────────────┘
```

**Ba phát hiện quan trọng nhất**

1. **Admin và doanh nghiệp đang nhìn hai ngành khác nhau.** Admin xem Hạt Vàng Việt là `AGRICULTURE`, còn sản phẩm và lô chạy theo `AGRI_RICE` (mục 2.1). Chỉnh quy trình ở admin có nguy cơ không tới được doanh nghiệp.
2. **Lô có thể nằm ở "Chờ đồng bộ" đến khi có quyền kết nối cổng quốc gia.** Admin ghi NBC đang chờ cấp quyền, và doanh nghiệp không có thao tác nào để gỡ trạng thái này (mục 2.7).
3. **Hồ sơ doanh nghiệp không sang admin.** Doanh nghiệp đã khai tên pháp nhân, mã số thuế, địa chỉ, nhưng admin vẫn ghi tên pháp lý là "admin" và để trống hai ô còn lại (mục 3.2).

## Cách đọc mức chứng cứ

| Mức | Nghĩa là |
|---|---|
| **Đã khớp** | Đã thấy cùng dữ liệu hoặc cùng API ở cả hai bên |
| **Theo màn hình** | Chữ trên màn hình hoặc tài liệu nói vậy, nhưng chưa thấy nó tác động thật |
| **Chưa thấy** | Đã tìm nhưng chưa thấy điểm nối, có thể do chưa có dữ liệu |

> **Giới hạn quan trọng:** không có quan hệ nào được thử bằng cách đổi cấu hình rồi xem bên kia thay đổi, vì đây là hệ thống thật. "Đã khớp" chỉ có nghĩa là hai bên đang đọc cùng dữ liệu. Muốn chốt chắc "đổi A thì B đổi", cần thử trên môi trường thử nghiệm.

## 2. Quản trị tác động xuống Doanh nghiệp

### 2.1. Gói ngành → Quy trình, nhật ký canh tác — Đã khớp

| Bên Quản trị | Bên Doanh nghiệp |
|---|---|
| **Quy trình & gói ngành** `/admin/industry-bundles` | **Quy trình sản phẩm** `/dashboard/products/<id>/workflow`, Nhật ký canh tác |

**Quan hệ:** gói ngành là danh sách công đoạn gốc. Doanh nghiệp không tạo loại công đoạn, chỉ chọn từ danh sách này để dựng quy trình cho sản phẩm.

**Chứng cứ**

- `GET /config/industries` bên doanh nghiệp trả đúng 10 mã ngành như 10 dòng bên admin.
- `GET /config/event-types?industry=AGRI_RICE` có các trường tên tiếng Việt, pha, tuần tự, nhật ký, trùng các cột **Tên VI, Pha, Tuần tự, Nhật ký** ở chi tiết gói ngành.
- `GET /farming-journal/vocab?industry=AGRI_RICE` cấp danh mục hoạt động cho nhật ký canh tác: gieo trồng, bón phân, phun thuốc.
- Màn doanh nghiệp ghi rõ "Quy trình chuẩn ngành Lúa gạo" và có nút **Nạp lại quy trình chuẩn ngành**.

**Thứ tự truyền xuống**

```
Gói ngành (admin) → Quy trình sản phẩm (doanh nghiệp xuất bản) → Lô ghim phiên bản lúc tạo
```

Màn hình ghi: "Lô dùng quy trình đã ghim khi tạo", nên đổi quy trình sau đó chỉ áp dụng cho lô mới. Chưa rõ sửa gói ngành có tự đổi quy trình đã xuất bản hay không, hay phải chờ doanh nghiệp bấm **Nạp lại**.

**Điểm lệch**

| Bên Quản trị | Bên Doanh nghiệp |
|---|---|
| Ngành của tổ chức: `AGRICULTURE`, cả ở danh sách và API `/admin/tenants/<id>` | `GET /tenant/industries` trả `AGRI_RICE` là ngành chính. Sản phẩm và lô đều `AGRI_RICE` |
| **Cấu hình Quy trình & Form** tự mở `AGRICULTURE`, ghép ra 14 bước | Theo `AGRI_RICE`, cùng API admin ghép ra 17 bước |
| Gói `AGRI_RICE` có 45 mã | Doanh nghiệp nhận 42 loại công đoạn |

**Hệ quả có thể xảy ra (suy luận, chưa thử):** nhân viên vận hành thêm bước tuỳ chỉnh cho khách trong khung đang mở `AGRICULTURE`, nhưng sản phẩm của khách thuộc `AGRI_RICE` nên không nhận được.

### 2.2. Biểu mẫu, trường nhập → Form của doanh nghiệp — Đã khớp một phần

| Bên Quản trị | Bên Doanh nghiệp | API doanh nghiệp đọc |
|---|---|---|
| **Trường tạo lô theo ngành** | Form **Tạo lô hàng truy xuất** | `/batches/form-schema?lifecycle=crop&industry=AGRI_RICE` |
| Gói ngành | Form ghi công đoạn | `/forms/event-schema?eventType=...` |
| **Cấu hình form** của tổ chức | Chưa thấy form nào đọc | `/forms/schema/HARVEST` |

**Biết chắc nguồn của từng ô:** API form ghi công đoạn trả về nguồn gốc mỗi ô (`fieldSources`). Ví dụ công đoạn Chế biến của lô ví dụ:

| Ô | Nguồn |
|---|---|
| Nhiệt độ sấy, Độ ẩm sau sấy | `pinned-product-workflow`: doanh nghiệp tự thêm vào quy trình sản phẩm |
| Phương pháp, Ghi chú, Thời điểm, Sản lượng | `industry`: lấy từ cấu hình ngành |

**Chưa khẳng định được:** biểu mẫu admin thiết kế cho từng tổ chức (`forms/schema/HARVEST`) đọc được từ cả hai bên và cùng trả về `EMPTY`. Tuy nhiên form ghi công đoạn lại gọi `forms/event-schema`, và chưa có biểu mẫu nào được xuất bản, nên chưa thấy nó được trộn vào form thật.

**Điểm lệch:** ô chọn ở **Trường tạo lô theo ngành** có 63 ngành, trong khi doanh nghiệp chỉ nhận 10 ngành qua `/config/industries`.

### 2.3. Cổng vai theo công đoạn → Quyền ghi công đoạn — Đã khớp

| Bên Quản trị | Bên Doanh nghiệp |
|---|---|
| Tổ chức → **Cổng vai theo công đoạn**: Tắt, Cảnh báo, Siết | Quy trình sản phẩm: ô vai phụ trách ở từng bước |

**Quan hệ:** doanh nghiệp khai ai phụ trách bước nào, còn admin quyết định làm sai thì bị xử lý đến mức nào.

**Chứng cứ:** trang quy trình doanh nghiệp đọc `GET /settings/workflow-stage-role-gate`, trả về `mode: null`, `effectiveMode: off`, `missingRoleCount: 12`. Khớp với admin đang chọn **Theo mức chung của hệ**.

**Lưu ý vận hành:** hệ thống đang đếm 12 chỗ chưa khai vai. Nếu admin bật **Siết** cho khách lúc này, các bước đó có thể bị chặn ghi. Đây chính là lý do màn hình khuyên bật **Cảnh báo** trước.

### 2.4. Cài đặt Truy xuất & Tem → Tạo lô, Lệnh sản xuất — Theo màn hình

| Cài đặt ở admin | Tác động bên doanh nghiệp |
|---|---|
| **Tiền tố mã lô** | Để trống mã thì tự cấp `PREFIX-YYMMDD-001`. Lô hiện tại có dạng khác: `BGNM-20261030-JWQZ` |
| **Bật chặn cứng** | Lệnh sản xuất chứa lô bị giữ, bị loại đang chỉ cảnh báo và hỏi lý do, bật lên thì chặn hẳn |

Chưa thấy màn nào bên doanh nghiệp đổi được hai cài đặt này, nên có lẽ phải nhờ đội vận hành.

### 2.5. Bộ luật → Tuân thủ, chặn thao tác — Theo màn hình

Bộ luật chạy ở phía máy chủ, nên các màn doanh nghiệp không gọi API riêng để đọc luật. Dấu vết thấy được:

| Bộ luật ở admin | Điểm nối bên doanh nghiệp |
|---|---|
| Luật chặn cứng (DCRE) nói chung | **Bypass Tuân thủ** `/dashboard/compliance/risk/override`: xin vượt chặn, 2 chữ ký, tự báo cơ quan nhà nước trong 24 giờ theo NĐ37 Đ.40. Màn này ghi nhãn gói ENTERPRISE |
| Luật chặn cứng (DCRE) nói chung | **Gợi ý** `/dashboard/settings/recommendations`: AI cảnh báo sớm khi sắp vi phạm luật |
| `geo-fence-v1`: giới hạn toạ độ theo vùng, ví dụ lúa chỉ ở ĐBSCL, không phá rừng sau 2020 | Có thể là toạ độ khi đăng ký vùng nguyên liệu (suy luận) |
| `data-classification-*`: mỗi trường là PUBLIC, GOV_REGULATORY hay INTERNAL | Có thể quyết định thông tin nào hiện trên trang truy xuất công khai (suy luận). Trình dựng biểu mẫu admin cũng gắn nhãn INTERNAL cho ô mới |
| `storage-type-default-v1`: loại bảo quản mặc định theo ngành | Chưa thấy ô tương ứng trên các màn đã mở |
| Cấp `DN_SANDBOX` trong thứ tự ưu tiên luật | **Môi trường thử nghiệm** `/dashboard/settings/sandbox` |

**Nghi có liên quan, chưa chứng minh:** màn **Nhãn NĐ37** báo "Ngành AGRI_RICE chưa đọc được danh sách trường bắt buộc", đúng lúc gói `AGRI_RICE` bên admin báo đỏ "thiếu khối gs1_conformance". Hậu quả thấy được: doanh nghiệp không được kết luận nhãn đạt hay chưa.

### 2.6. Giá, hạn mức → Gói, tính năng — Đã khớp

| Bên Quản trị | Bên Doanh nghiệp |
|---|---|
| **Giá & khuyến mại** `/admin/billing/pricing` | **Chọn gói đăng ký** `/dashboard/settings/billing/plans`, ô **Mã khuyến mại** |

**Số khớp hoàn toàn**

| Gói | Giá tháng hai bên | Giá năm ở admin | Doanh nghiệp hiện theo tháng khi trả năm |
|---|---|---|---|
| Khởi đầu (Starter) | 320.000 đ | 3.000.000 đ | 250.000 đ, đúng bằng giá năm chia 12 |
| Chuyên nghiệp (Pro) | 3.900.000 đ | 37.000.000 đ | 3.083.333 đ, đúng bằng giá năm chia 12 |
| Doanh nghiệp (Enterprise) | 12.000.000 đ | 115.000.000 đ | 9.583.333 đ, đúng bằng giá năm chia 12 |

Các mức giảm 15%, 25% trên trang gói của doanh nghiệp cũng trùng tab **Kỳ hạn nhiều năm**.

**Các nối khác**

- **Mã phát cho khách** ở admin ↔ ô **Mã khuyến mại** dạng `NC-XXXX-XXXX` bên doanh nghiệp. Theo màn hình, chưa thử đổi mã.
- **Ưu đãi** ở admin có điều kiện hợp tác xã theo số thành viên ↔ tuỳ chọn **Đơn vị là hợp tác xã** bên doanh nghiệp. Theo màn hình.
- Doanh nghiệp đọc hạn mức từ `GET /billing/usage`: 5 lô, 2.000 sự kiện, 2 thành viên, 5 sản phẩm, 5 RPS API. Hiển thị ở thanh **Mức sử dụng** và ô **Gói hiện tại** dưới menu.

**Điểm hổng:** khung **Sửa giá** ở admin chỉ sửa giá, không sửa hạn mức. API `/billing/usage` ghi nguồn hạn mức là cơ sở dữ liệu (`source: DB`). Bộ luật `PLAN_QUOTA_BASELINE` vẫn là Nháp, không có quy tắc nào và chỉ nhắc 3 gói trong khi có 4 gói. Vậy **chưa thấy màn nào ở admin sửa được hạn mức của gói**.

### 2.7. Đồng bộ NBC → Trạng thái lô — Đã khớp

| Bên Quản trị | Bên Doanh nghiệp |
|---|---|
| **Đồng bộ NBC** `/admin/nbc-sync` và màn giám sát | Nhãn **Chờ đồng bộ** trên lô, **Tích hợp & Kết nối** `/dashboard/settings/connectors` |

**Chứng cứ**

- API lô trả `nbcSyncStatus: PENDING`, chính là nhãn **Chờ đồng bộ**.
- Danh mục công đoạn có cờ `requiresNbcSync`, bật cho 12 loại như Thu hoạch, Chế biến, Đóng gói, Vận chuyển, Kiểm định. Cờ này đi từ gói ngành xuống.
- Cùng các hệ thống ở hai bên, đối chiếu theo tên: NBC Vietnam ↔ `NBC_TXNG`, `NBC_VNPC`; NDATrace ↔ `BOCA_NDATRACE`; VNACCS ↔ `VNACCS`.

**Ý nghĩa cho người dùng:** admin ghi NBC đang chờ cấp quyền kết nối. Vì vậy lô của mọi doanh nghiệp có thể nằm ở **Chờ đồng bộ** cho đến lúc đó (suy luận). Hỗ trợ khách không nên nói là lỗi, và doanh nghiệp không có thao tác nào để gỡ.

**Điểm lệch**

| Nội dung | Bên Quản trị | Bên Doanh nghiệp |
|---|---|---|
| Kết nối NBC | Mọi adapter ghi "Đã tích hợp", giám sát ghi lần gần nhất "chưa có". Lịch sử có 4 dòng `DLQ` | NBC Vietnam "Ngừng hoạt động", đã đồng bộ 1 sự kiện lúc 14:06 ngày 30/10, thời gian hoạt động 0% |
| Lượng dùng | | Dòng "42.300 / 100.000 sự kiện", "2/3 adapter", trong khi thực dùng 6 / 2.000. Nhiều khả năng là số mẫu |
| Bước cần đồng bộ | Cờ loại công đoạn: Chế biến, Đóng gói, Vận chuyển, Kiểm định cần đồng bộ | 6 bước của sản phẩm đều `govSyncRequired: false` |

### 2.8. Tên miền phụ → Mã QR, trang công khai — Theo màn hình

| Bên Quản trị | Bên Doanh nghiệp |
|---|---|
| Slug tổ chức `hat-vang-viet` | Địa chỉ trang giới thiệu `https://verify.xacthucnguongoc.vn/hat-vang-viet`. **Đã khớp** |
| **Tên miền phụ** `/admin/domains` | Link truy xuất của lô `https://verify.xacthucnguongoc.vn/verify/<mã lô>`, tem QR |

**Quan hệ:** chưa có tên miền phụ thì mọi tem dùng tên miền chung ở trên. Có tên miền phụ thì từ **Mốc áp dụng**, lô in tem mới mang tên miền đó, còn lô đã in giữ tên cũ vĩnh viễn. Vì tem đã in không đổi được, nên đặt mốc theo lịch thay bao bì của khách.

Tên miền loại TENANT để trống logo và nhãn thì lấy từ **Hồ sơ thương hiệu** của doanh nghiệp. Đây là chỗ admin phụ thuộc vào dữ liệu doanh nghiệp tự khai.

Hiện chưa có tên miền phụ nào nên chưa thấy tác động thật.

### 2.9. Kỹ năng, Công cụ trợ lý → TraceBot — Theo màn hình

| Bên Quản trị | Bên Doanh nghiệp |
|---|---|
| **Kỹ năng trợ lý**: 6 kỹ năng theo nhóm người dùng | Khung **Trợ lý AI**, ô "Vai trò của bạn: Quản trị viên DN" |
| **Công cụ trợ lý**: 54 việc được phép gọi | Các nút gợi ý: Tra cứu lô hàng, Kiểm tra tuân thủ, Xuất báo cáo... |
| **Cấu hình tích hợp**: nhà cung cấp mô hình AI | Chất lượng và khả năng trả lời |

**Đáng lưu ý nhất:** công cụ có nhãn **Thay đổi dữ liệu**, ví dụ `CREATE_PRODUCT_DRAFT` tạo sản phẩm nháp, `CREATE_AGRICULTURAL_EVENT` ghi phun thuốc, nghĩa là trợ lý ghi thẳng vào dữ liệu doanh nghiệp. Chưa gửi tin nhắn nào để thử.

**Danh mục BVTV** (Chưa thấy trên dashboard): công cụ `BVTV_PESTICIDES` đọc danh mục này, và biểu mẫu có loại ô tra cứu BVTV. Chưa thấy màn doanh nghiệp nào gọi trực tiếp, vì tài khoản ví dụ chưa được phân công thửa nên không mở được form nhật ký.

### 2.10. Tài khoản nhận tiền → Trang chuyển khoản — Đã khớp

| Bên Quản trị | Bên Doanh nghiệp |
|---|---|
| **Thanh toán** → **Tài khoản nhận tiền** | **Nạp tiền / Thanh toán** `/dashboard/settings/billing/bank-transfer` |

**Chứng cứ:** trang doanh nghiệp đọc `GET /billing/bank-accounts`, hiện đúng ngân hàng, số tài khoản và chủ tài khoản đã khai ở admin.

**Ý nghĩa:** sửa tài khoản ở admin là đổi ngay nơi mọi khách chuyển tiền vào, nên phải cẩn thận. Tài khoản này khách nào cũng xem được, nên không cần giấu với khách, chỉ cần che trong tài liệu công khai.

**Điểm lệch:** khối đối soát ở admin ghi "chưa có tài khoản nhận nào đang bật", trong khi bảng và trang doanh nghiệp vẫn đang dùng tài khoản đó.

## 3. Doanh nghiệp tác động ngược lên Quản trị

### 3.1. Số liệu sử dụng → Tổng quan, Sức khoẻ khách hàng — Đã khớp

| Chỉ số | Bên Doanh nghiệp (`/billing/usage`) | Bên Quản trị |
|---|---|---|
| Sự kiện tháng | 6 | Cột **Sự kiện/Tháng**: 6 |
| Lô hàng | 3 | Trang chi tiết: 3 |
| Sản phẩm | 1 | Có trong tổng **Sản phẩm** của toàn nền tảng |

**Dễ nhầm:** danh sách **Lô hàng** bên doanh nghiệp ghi 2 lô, vì màn này loại lô vật tư (`materialLots=exclude`). Admin và mức sử dụng tính 3. Khi khách hỏi vì sao số lệch, đây là câu trả lời.

Từ số liệu này, admin tính **Sức khoẻ khách hàng** và các thẻ **Tổng quan**.

### 3.2. Hồ sơ doanh nghiệp → Thông tin tổ chức — Không khớp

| Trường | Bên Doanh nghiệp | Bên Quản trị | Kết quả |
|---|---|---|---|
| Tên hiển thị | Hạt Vàng Việt | Hạt Vàng Việt | Khớp |
| Tỉnh | Thành phố Hà Nội | Tỉnh quản lý `01` | Khớp |
| Tên pháp nhân | Công ty TNHH Hạt Vàng Việt | `admin` | **Lệch** |
| Mã số thuế | Đã khai | Trống | **Lệch** |
| Địa chỉ | Đã khai | Trống | **Lệch** |

**Hệ quả:** đội vận hành và các tính năng cần thông tin pháp lý, ví dụ xuất hoá đơn hay Doanh thu, không thể tin vào trang admin. Chưa rõ hoá đơn lấy tên từ đâu, vì tài khoản chưa có hoá đơn nào.

### 3.3. Thao tác của doanh nghiệp → Nhật ký kiểm toán — Đã khớp

Mọi lần ghi của doanh nghiệp đều hiện ở admin. Ví dụ `distribution_transaction dd50a11a` trong nhật ký chính là lô con `DST-20261030-dd50a11a` lúc bán 2 gói. Lần ghi công đoạn hiện là `epcis_event`.

**Công dụng:** khi khách hỏi "ai đã làm", đội vận hành tra được mà không cần vào tài khoản khách.

### 3.4. Tiền của doanh nghiệp → Đối soát, Doanh thu — Theo màn hình

```
Doanh nghiệp chọn gói → Hệ thống tạo mã giao dịch → Khách chuyển khoản
       → SePay báo về, hoặc admin khớp tay ở Đối soát → Hoá đơn hiện đã trả ở cả hai bên → Doanh thu
```

Toàn bộ chuỗi chưa quan sát được vì chưa có hoá đơn nào. Hiện tại SePay còn đang tắt, nên mọi khoản phải đối soát tay.

**Chưa thấy:** doanh nghiệp có lựa chọn **Nạp ví**, nhưng chưa thấy màn nào ở admin quản lý số dư ví.

**Lệch số:** trang **Doanh thu** ghi 0 tổ chức hoạt động, 0 miễn phí, trong khi có 3 tổ chức gói miễn phí.

### 3.5. Khoá API và lượng gọi — Theo màn hình

| Bên Doanh nghiệp | Bên Quản trị |
|---|---|
| **Khóa API** `/dashboard/settings/api-keys`, tự tạo và thu hồi | **Đặt lại khoá** ở Vùng nguy hiểm: vô hiệu toàn bộ khoá của khách |
| Giới hạn tốc độ theo gói: 5, 20, 60, 1000 RPS | Luồng doanh thu `MCP-API-USAGE-OVERAGE` |

## 4. Chưa thấy quan hệ trực tiếp với dashboard

| Màn hình admin | Ghi chú |
|---|---|
| **Quản lý bài viết**, **Quản lý liên hệ** | Phục vụ trang công khai, không phải dashboard |
| **Tham số cấu hình** | Trang **Hỗ trợ** của doanh nghiệp có cùng email, hotline, nhưng ghi giờ làm việc 8:00–17:30 trong khi admin để "Chưa thiết lập". Có vẻ trang Hỗ trợ không đọc từ đây, cần đội phát triển xác nhận |
| **Tính năng** | Danh sách trống, chưa thấy tác động |
| **Chiến dịch tài trợ**, **Ăn chia đối tác** | Không tìm thấy màn doanh nghiệp tương ứng trên menu. Danh sách admin cũng trống |
| **Thẩm định tuân thủ** | Tính năng đang hoàn thiện, chưa thấy điểm nối |
| **Giám sát**, **Hiệu năng** | Nội bộ. Riêng **Run All** của Hiệu năng gọi API thật nên có thể ảnh hưởng ngược lên khách |

## 5. Bảng tra nhanh theo tình huống

| Khách hỏi hoặc gặp | Xem bên Doanh nghiệp | Xử lý bên Quản trị |
|---|---|---|
| Thiếu một công đoạn trong danh sách chọn | Quy trình sản phẩm → **Thêm công đoạn** | Bước tuỳ chỉnh của tổ chức, hoặc gói ngành. **Kiểm tra đúng ngành trước** |
| Form tạo lô cần thêm ô | Form **Tạo lô hàng** | **Trường tạo lô theo ngành** |
| Không ghi được công đoạn vì sai vai | Vai phụ trách ở quy trình | **Cổng vai theo công đoạn** |
| Lô mãi "Chờ đồng bộ" | Trang chi tiết lô | **Đồng bộ NBC**: đang chờ cấp quyền, không phải lỗi của khách |
| Hỏi vì sao bị tính số tiền này | **Gói & Thanh toán** | **Tra cứu giá theo doanh nghiệp** |
| Chuyển khoản rồi vẫn chưa nhận gói | **Lịch sử hoá đơn** | **Đối soát thu tiền** |
| Hết hạn mức 5 lô | Thanh **Mức sử dụng** | **Đổi gói** hoặc **Cấp dùng thử** |
| Muốn mã lô tự sinh theo tiền tố | Form tạo lô | **Cài đặt Truy xuất & Tem** |
| Muốn tem chạy trên tên miền riêng | Tem, mã QR | **Tên miền phụ**, chú ý **Mốc áp dụng** |
| Bị luật chặn | **Bypass Tuân thủ** | **Bộ luật**, rollback nếu chặn sai |

## 6. Cần đội phát triển xác nhận

1. Vì sao tổ chức có hai ngành (`AGRICULTURE` và `AGRI_RICE`), và màn **Cấu hình Quy trình & Form** nên mở ngành nào?
2. Biểu mẫu admin xuất bản có thật sự vào form ghi công đoạn của doanh nghiệp không? Form gọi `forms/event-schema`, còn admin lưu ở `forms/schema`.
3. Sửa gói ngành có tự cập nhật quy trình đã xuất bản không, hay doanh nghiệp phải bấm **Nạp lại**?
4. Sửa hạn mức của gói ở đâu?
5. Vì sao hồ sơ doanh nghiệp không cập nhật sang thông tin pháp lý ở admin?
6. `AGRI_RICE` thiếu danh sách trường bắt buộc của nhãn có do thiếu khối `gs1_conformance` không?
7. Bước quy trình có `govSyncRequired: false` thì có gửi lên cổng quốc gia không, khi loại công đoạn đó đang bật `requiresNbcSync`?

## 7. Phương pháp và giới hạn

- **Cách làm:** mở cùng lúc hai trang trên trình duyệt đã đăng nhập, đối chiếu màn hình, theo dõi API mỗi màn gọi, và đọc phản hồi của các API `GET`.
- **Không lưu gì:** không bấm nút lưu, không mở trang truy xuất công khai, không gửi tin cho TraceBot. Riêng trang doanh nghiệp tự gọi `PUT /me/ui-preferences` khi chuyển màn, để cập nhật mục **Gần đây** trên menu.
- **Dữ liệu ít:** chỉ có một doanh nghiệp ví dụ gói miễn phí, chưa có hoá đơn, tên miền phụ hay yêu cầu duyệt luật, nên nhiều chuỗi chưa chạy thật.
- **Đoán đường dẫn:** tôi có thử vài đường dẫn API đoán tên cho BVTV và cờ tính năng, đều trả 404. Việc này không đủ để kết luận các liên kết đó không tồn tại.
- **Giữ kín:** không ghi số tài khoản, tên chủ tài khoản, thông tin doanh nghiệp khác vào file này.
