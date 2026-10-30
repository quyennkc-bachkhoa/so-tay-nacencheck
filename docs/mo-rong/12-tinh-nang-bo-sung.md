---
title: Các tính năng bổ sung
order: 12
group: Mở rộng
---

# Các tính năng bổ sung

Khi đã chạy trơn tru luồng chính (từ thiết lập đến bán hàng), doanh nghiệp có thể dùng thêm các nhóm tính năng dưới đây. Chương này giới thiệu mỗi tính năng ở mức **dùng để làm gì và nằm ở đâu**; hướng dẫn chi tiết sẽ được bổ sung trong các phiên bản sau của sổ tay.

## Kho theo lô

**Đường dẫn:** `/dashboard/warehouse` – các tab Tồn kho, Phiếu, Thẻ kho, Truy xuất, Danh mục vật tư.

**Giải quyết vấn đề gì?** Trang Lô hàng ghi lại *câu chuyện nguồn gốc*; Kho trả lời câu hỏi *trong kho đang có gì, bao nhiêu, của lô nào*. Tồn kho không tự thay đổi: nó chỉ tăng hoặc giảm khi có **phiếu** được ghi sổ.

Một vòng luân chuyển điển hình gồm 4 phiếu:

```
Phiếu nhập (mua hàng)        → nguyên liệu vào kho nguyên liệu
Phiếu xuất (cho lô sản xuất) → nguyên liệu ra xưởng
Phiếu nhập thành phẩm        → thành phẩm vào kho thành phẩm
Phiếu xuất (bán hàng)        → hàng giao cho khách
```

- **Tồn kho:** xem tồn theo kho, vật tư, lô và hạn dùng; cảnh báo hàng sắp hết hạn.
- **Thẻ kho:** lịch sử nhập – xuất – tồn của một vật tư theo khoảng ngày.
- **Truy xuất (kho):** chọn một lô, xem chiều ngược (lô làm từ gì) hoặc chiều xuôi (lô đi đến đâu).

## Hóa đơn chứng từ

**Đường dẫn:** `/dashboard/invoices`.

Quản lý hóa đơn mua vào và bán ra. Hóa đơn có thể lập trực tiếp từ phiếu kho (nút **Lập từ phiếu**). Hệ thống đối chiếu số lượng giữa phiếu và hóa đơn, báo trạng thái: chưa có hóa đơn, có một phần, đủ, hoặc lệch.

## Liên kết đối tác

**Đường dẫn:** `/dashboard/partners/traders`.

Khi nhà cung cấp hoặc người mua cũng dùng NacenCheck, hai doanh nghiệp liên kết với nhau bằng mã số thuế: một bên gửi yêu cầu, bên kia duyệt. Liên kết **không tự chia sẻ dữ liệu** của hai bên. Sau khi liên kết, bạn dùng được nguồn "Mua cùng đơn vị dùng NacenCheck" khi tạo lô, và hàng giao đến sẽ nằm ở mục **Hàng đến chờ xác nhận**.

## Gom lô

Từ trang chi tiết lô → **Thao tác khác** → **Gom lô**. Dùng khi gộp nhiều lô thành một, ví dụ gom lúa của nhiều thửa hoặc nhiều hộ về một lô chung. Quan hệ gộp được ghi vào sơ đồ truy vết.

## Vận chuyển và xuất khẩu

- **Ghi chuyến vận chuyển:** ghi từng chặng di chuyển của hàng.
- **Lập vận đơn xuất khẩu** và hồ sơ **chứng nhận xuất xứ (C/O)** cho các thị trường.
- **Quản lý tài sản / phương tiện & IoT** (`/dashboard/doi-phuong-tien`): khai xe, container, thiết bị cảm biến nhiệt độ – độ ẩm; gắn hành trình vận chuyển vào lô, hữu ích cho chuỗi lạnh.

## Tuân thủ và an toàn

**Đường dẫn:** `/dashboard/compliance` và các mục con.

| Tính năng | Dùng để |
|---|---|
| **Nhãn (NĐ37)** | Kiểm tra sớm nhãn sản phẩm đủ thông tin bắt buộc trước khi in và xuất khẩu. |
| **Hộ chiếu sản phẩm** | Định danh số của sản phẩm trên toàn chuỗi cung ứng. |
| **Chứng cứ & kiểm toán** | Kho chứng cứ phục vụ kiểm tra, kiểm toán. |
| **Đánh giá rủi ro, Báo cáo tuân thủ** | Đánh giá mức rủi ro và lập báo cáo. |
| **Tem chống giả & lịch sử quét** | Phát hành tem có chữ ký số, theo dõi quét bất thường (chương 10). |
| **Thu hồi sản phẩm** (`/dashboard/recalls`) | Khởi tạo lệnh thu hồi lô (mức nghiêm trọng, lý do, số lượng ảnh hưởng), theo dõi trạng thái. Mọi thao tác ghi vào nhật ký không sửa được. |
| **Vi phạm & sự cố** (`/dashboard/violations`) | Nhận thông báo vi phạm từ cơ quan quản lý, nộp kế hoạch khắc phục và phòng ngừa (CAPA), theo dõi hạn xử lý. |

**Truy xuất hai chiều** (`/dashboard/trace`): tra một mã tem, SSCC hoặc mã lô để xem nguồn gốc và bên nhận trực tiếp. Tính năng này cần gói dịch vụ mức **Chuyên sâu**.

## Hợp tác xã và nông hộ

**Đường dẫn:** `/dashboard/cooperative`.

Dành cho hợp tác xã: tạo tài khoản nông hộ, khai thửa cho từng hộ, đăng ký thành viên hàng loạt, phát quy trình kỹ thuật (hệ thống tự sinh thẻ việc theo ngày cho từng hộ), quản lý giấy ủy quyền và khai nhật ký thay hộ.

## Tiện ích khác

- **Trợ lý AI** (`/dashboard/agent`): gõ hoặc nói một câu mô tả kế hoạch kinh doanh, trợ lý gợi ý chuỗi cung ứng, phân phối và cảnh báo tuân thủ.
- **Thông báo** (`/dashboard/notifications`): các cảnh báo theo mức độ ưu tiên.
- **Thùng rác** (`/dashboard/trash`): lô và sản phẩm đã xóa; khôi phục hoặc xóa vĩnh viễn (chỉ Quản trị). Quá 30 ngày hệ thống tự dọn.
- **Cài đặt** (`/dashboard/settings/account`): tài khoản, bảo mật, gói dịch vụ và thanh toán, tích hợp, khóa API, môi trường thử nghiệm (sandbox).

## Điều cần nhớ

Các tính năng bổ sung không thay đổi luồng chính; chúng làm dày thêm dữ liệu quanh lô hàng. Gợi ý thứ tự mở rộng: **Kho và hóa đơn** trước (để số liệu khớp với kế toán), sau đó **Đối tác và vận chuyển**, cuối cùng là các công cụ **Tuân thủ** khi chuẩn bị xuất khẩu.
