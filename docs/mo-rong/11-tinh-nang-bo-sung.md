---
title: Các tính năng bổ sung
order: 11
group: Mở rộng
---

# Các tính năng bổ sung

Chạy được luồng chính rồi thì dùng thêm các tính năng dưới đây khi cần. Nên mở rộng theo thứ tự: **kho và hóa đơn** trước để số liệu khớp kế toán, rồi **đối tác và vận chuyển**, cuối cùng là **tuân thủ** khi chuẩn bị xuất khẩu.

## Tuân thủ và giám sát

Kiểm tra nhãn, xem lịch sử quét QR, đánh giá rủi ro từng lô, chuẩn bị hồ sơ thanh tra, xử lý vi phạm.

**[Đọc chương Tuân thủ và giám sát →](/mo-rong/12-tuan-thu)**

## Quản lý tài sản

Khai xe, tàu, container gắn GPS hoặc cảm biến, theo dõi hành trình và gắn dữ liệu vào lô.

**[Đọc chương Quản lý tài sản →](/mo-rong/13-quan-ly-tai-san)**

## Kho theo lô

Cách lập phiếu đã có ở chương 5. Tồn kho chỉ thay đổi khi có phiếu được ghi sổ. Một vòng luân chuyển thường gồm 4 phiếu:

```
Phiếu nhập (mua hàng)        → nguyên liệu vào kho
Phiếu xuất (cho lô sản xuất) → nguyên liệu ra xưởng
Phiếu nhập thành phẩm        → thành phẩm vào kho
Phiếu xuất (bán hàng)        → hàng giao cho khách
```

## Hóa đơn

Mở `/dashboard/invoices` để quản lý hóa đơn mua vào và bán ra. Bấm **Thêm hóa đơn** hoặc **Lập từ phiếu** để lập từ phiếu kho. Tab **Đối chiếu phiếu kho** so số lượng giữa phiếu và hóa đơn.

## Đối tác và phân phối

| Màn hình | Dùng để |
|---|---|
| **Liên kết đối tác** (`/dashboard/partners/traders`) | Kết nối với doanh nghiệp cũng dùng NacenCheck qua mã số thuế (mục 8.6) |
| **Mạng lưới phân phối** (`/dashboard/distribution/network`) | Khai chuỗi đại lý nhiều cấp, ghi từng chặng giao hàng, xem cây phân phối (mục 8.5) |
| **Mã địa điểm GLN** (`/dashboard/gln`) | Gán mã định danh cho trụ sở, kho, cơ sở, vùng trồng. Cần khi đã có mã GS1 hoặc chuẩn bị xuất khẩu. |

## Vận chuyển, gom lô, xuất khẩu

- **Ghi chuyến vận chuyển:** nút trên trang chi tiết lô, ghi xe, tài xế, điểm đi, điểm đến.
- **Gom lô:** vào **Thao tác khác** trên trang chi tiết lô, dùng khi gộp nhiều lô thành một.
- **Lập vận đơn xuất khẩu:** cũng nằm ở **Thao tác khác**.
- **Lô này để xuất khẩu:** nút ở tab **Tổng quan lô**, bật công đoạn và hồ sơ xuất khẩu cho lô.

## Tiện ích khác

| Màn hình | Dùng để |
|---|---|
| **TraceBot** (`/dashboard/agent`) | Trợ lý AI tra cứu lô hàng, kiểm tra tuân thủ, hướng dẫn thao tác. Một số việc trợ lý làm sẽ ghi vào dữ liệu ([chương 20](/quan-tri/20-tich-hop-va-ten-mien)). |
| **Thông báo** (`/dashboard/notifications`) | Xem cảnh báo theo mức độ ưu tiên |
| **Thùng rác** (`/dashboard/trash`) | Khôi phục lô, sản phẩm đã xóa. Hệ thống tự dọn sau 30 ngày. |
| **Cài đặt** (`/dashboard/settings/account`) | Tài khoản, bảo mật, gói dịch vụ ([chương 19](/quan-tri/19-gia-va-thu-tien)), tích hợp, khóa API |
