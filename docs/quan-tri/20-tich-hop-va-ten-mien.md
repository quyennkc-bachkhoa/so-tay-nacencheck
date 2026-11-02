---
title: Tích hợp và tên miền
order: 20
group: Quản trị
prerequisites:
  - text: "Đã nắm tổ chức và giá (chương 16, 19)"
    link: /quan-tri/16-to-chuc-va-nguoi-dung
outcome: "Biết dữ liệu đã lên cổng quốc gia chưa, tạo được tên miền riêng cho đối tác, và đọc được phạm vi của trợ lý AI."
---

# Bước 6 – Tích hợp và tên miền

Chương này gồm các kết nối giữa NacenCheck với bên ngoài: nhà cung cấp dịch vụ, cổng của cơ quan nhà nước, tên miền của đối tác và trợ lý AI.

| # | Việc | Màn hình | Khi nào |
|---|---|---|---|
| 1 | Xem khoá nhà cung cấp | `/admin/integrations` | Khi đổi nhà cung cấp |
| 2 | Theo dõi đồng bộ cổng quốc gia | `/admin/nbc-sync` | Hằng tuần, hoặc khi khách hỏi |
| 3 | Tạo tên miền phụ | `/admin/domains` | Khi Sở, Hội, doanh nghiệp cần cổng riêng |
| 4 | Xem trợ lý AI | `/admin/agent-skills`, `/admin/agent-tools` | Khi cần biết trợ lý làm được gì |

## 1. Cấu hình tích hợp

Nơi giữ khoá và token của nhà cung cấp ngoài: thanh toán, mô hình ngôn ngữ, nhận dạng giọng nói. Giá trị bí mật không bao giờ hiện ra, và theo màn hình chỉ vai trò `SUPER_ADMIN` xem được.

![Cấu hình tích hợp](/images/20-tich-hop.png)

| Khối | Cho biết |
|---|---|
| **Đã cấu hình trong kho** | Số nhà cung cấp đã lưu khoá ở đây |
| **Dùng biến môi trường** | Số nhà cung cấp lấy khoá từ cấu hình máy chủ |
| **Lỗi giải mã** | Số khoá không đọc được, khác 0 thì báo ngay cho đội kỹ thuật |

Bấm **Lịch sử** ở từng dòng để xem ai đã đổi khoá, khi nào. Hai dòng **Nhóm LLM** và **Nhóm STT** chọn nhà cung cấp được thử đầu tiên, các nhà cung cấp còn lại làm dự phòng.

> Lưu ý: dòng cảnh báo vàng cho biết hệ thống thật chưa có khoá chủ riêng, nên hiện chưa nhập hoặc đổi khoá được trên màn hình này. Các dịch vụ vẫn chạy bằng cấu hình máy chủ.

## 2. Đồng bộ cổng quốc gia

NBC là Trung tâm Mã vạch Quốc gia, đơn vị vận hành cổng truy xuất `https://truyxuatnguongoc.gov.vn`. Màn hình **Đồng bộ NBC** theo dõi việc gửi dữ liệu lên cổng này và các hệ thống của cơ quan nhà nước khác. Bên doanh nghiệp, kết quả là nhãn **Chờ đồng bộ** trên lô ([chương 8](/luong-chinh/08-chi-tiet-lo-va-ghi-cong-doan)) và danh sách kết nối ở `/dashboard/settings/connectors`.

![Đồng bộ API NBC](/images/20-nbc.png)

"Đã tích hợp" chỉ có nghĩa là phần mềm đã có sẵn đường kết nối, không có nghĩa là đang gửi được dữ liệu. Tình trạng hiện tại:

| Hệ thống | Chế độ |
|---|---|
| VNACCS (Hải quan) | Có kết nối trực tiếp |
| NBC | Chờ cổng quốc gia cấp quyền kết nối |
| Các hệ thống còn lại | Xuất hồ sơ thành file để nộp |

Trước khi được cấp quyền, dữ liệu vẫn được chuẩn bị đúng định dạng để nộp sau. Nên khi khách hỏi "lô đã lên cổng chưa", trả lời đúng theo bảng trên, tránh hứa hẹn.

Bấm **Giám sát log đồng bộ** để xem từng hệ thống đang ở chế độ nào, lần gửi gần nhất và lỗi nếu có. Số liệu theo thời gian thực nằm trên Grafana (chương 21).

![Giám sát đồng bộ](/images/20-nbc-monitor.png)

## 3. Tên miền phụ

Dùng khi Sở, Hội hoặc doanh nghiệp muốn cổng tra cứu chạy trên tên miền của họ, mang logo và tên của họ. Tên miền này thay cho địa chỉ trang giới thiệu ([chương 3](/luong-chinh/03-thiet-lap-doanh-nghiep)) và mã QR trên tem ([chương 9](/luong-chinh/09-tem-va-truy-xuat)).

1. Bấm **Tên miền phụ** ở nhóm **Khách hàng**, rồi bấm **Thêm tên miền**.
2. Điền form theo bảng bên dưới, rồi bấm **Tạo tên miền**.
3. Xem cột **Bản ghi DNS cần tạo**, nhờ người quản lý tên miền của đối tác tạo bản ghi TXT này.
4. Theo dõi cột **Xác minh** và **Hoạt động**.

![Thêm tên miền](/images/20-ten-mien.png)

Các ô trong form không có nhãn, nên đọc theo chữ mờ bên trong, từ trên xuống:

| Ô | Điền gì |
|---|---|
| Tên miền | Ví dụ `truyxuat.quangninh.gov.vn` |
| Loại | **PARTNER** là cổng chung của Sở, Hội. Có loại khác cho doanh nghiệp (TENANT) |
| Nhãn hiện trên dải đầu trang | Tên hiện trên cùng của cổng |
| affiliateId | Mã đối tác để tính hoa hồng, để trống nếu không chia |
| Màu | Màu thương hiệu |
| Mốc áp dụng | Từ ngày này, lô in tem mới mang tên miền này |
| Bề mặt | **PUBLIC** là cổng tra cứu cho người mua, **APP** là nơi doanh nghiệp đăng nhập |
| Logo | Bấm **Tải ảnh**: PNG, JPEG hoặc WebP, tối đa 1 MB. Không nhận SVG |
| Câu định vị, Ảnh bìa, Ghi chú chân trang | Không bắt buộc |

Ba điều dễ nhầm:

- **Mỗi tên miền chỉ có một bề mặt.** Sở muốn vừa có cổng tra cứu vừa có nơi doanh nghiệp đăng nhập thì khai hai tên miền, ví dụ `truyxuat.tinh.gov.vn` và `quanly.tinh.gov.vn`.
- **Loại PARTNER không tự lấy logo.** Bỏ trống là cổng không có logo. Loại TENANT bỏ trống thì lấy theo hồ sơ doanh nghiệp.
- **Mốc áp dụng chỉ chi phối mã QR.** Lô đã in tem giữ nguyên tên miền cũ vĩnh viễn, nên hãy đặt mốc khớp với lịch thay bao bì. Bỏ trống là áp dụng ngay khi xác minh xong.

## 4. Trợ lý AI

Hai màn hình này cho biết trợ lý AI được phép làm gì, chính là TraceBot bên doanh nghiệp ([chương 11](/mo-rong/11-tinh-nang-bo-sung)). Xem chúng khi khách hỏi trợ lý có đụng vào dữ liệu không.

**Kỹ năng trợ lý** liệt kê từng trợ lý theo nhóm người dùng, số công cụ được dùng và giới hạn số lượt trao đổi.

![Kỹ năng trợ lý AI](/images/20-ky-nang.png)

**Công cụ trợ lý** liệt kê từng việc trợ lý được phép gọi. Chú ý cột **Tác động dữ liệu**: **Chỉ đọc** thì không đổi gì, **Thay đổi dữ liệu** thì ghi vào hệ thống. Cột **Chi phí / lượt** là số tiền tốn cho mỗi lần gọi.

![Công cụ trợ lý AI](/images/20-cong-cu.png)
