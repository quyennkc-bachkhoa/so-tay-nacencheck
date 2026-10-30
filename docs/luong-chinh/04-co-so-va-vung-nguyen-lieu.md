---
title: Thiết lập cơ sở và vùng nguyên liệu
order: 4
group: Luồng chính
prerequisites:
  - text: "Đã khai hồ sơ doanh nghiệp (chương 3)"
    link: /luong-chinh/03-thiet-lap-doanh-nghiep
  - text: "Đã thêm nhân viên sẽ ghi nhật ký (chương 3)"
    link: /luong-chinh/03-thiet-lap-doanh-nghiep
outcome: "Có cơ sở sản xuất; nếu tự trồng thì có vùng nguyên liệu và đơn vị sản xuất đã phân công người ghi."
---

# Bước 2 – Thiết lập cơ sở và vùng nguyên liệu

**Cơ sở** trả lời câu hỏi hàng được làm ở đâu. **Vùng nguyên liệu** trả lời câu hỏi nguyên liệu mọc ở đâu. Khai cơ sở trước, vì form vùng cần chọn cơ sở phụ trách.

| # | Việc | Màn hình | Cần làm |
|---|---|---|---|
| 2.1 | Thêm cơ sở | `/dashboard/facilities` | Bắt buộc |
| 2.2 | Đăng ký vùng nguyên liệu | `/dashboard/zones` | Khi tự trồng, tự nuôi |
| 2.3 | Phân công người ghi nhật ký | `/dashboard/zones/plots` | Khi tự trồng, tự nuôi |

Chỉ mua nguyên liệu, không tự trồng: làm xong 2.1 rồi chuyển sang chương 5.

## 2.1 Thêm cơ sở

Cơ sở là địa điểm thật: nhà máy, kho, trang trại, ao nuôi. Ví dụ dưới đây là nhà máy của Hạt Vàng Việt.

1. Bấm **Quản lý cơ sở** ở menu trái, rồi bấm **Thêm cơ sở**.

![Danh sách cơ sở](/images/04-co-so.png)

2. Điền form theo bảng bên dưới.
3. Bấm **Tạo**. Cơ sở mới hiện trong danh sách như ảnh trên.

![Form thêm cơ sở](/images/04-them-co-so.png)

| Ô | Điền gì |
|---|---|
| Tên cơ sở | Tên thường gọi của địa điểm |
| Mã cơ sở | Hệ thống tự gợi ý từ tên. Có quy ước mã riêng thì sửa lại. |
| Loại cơ sở | Chọn đúng loại: Nhà máy, Kho, Trang trại, Ao nuôi… Nơi chứa hàng để lập phiếu nhập, xuất phải chọn **Kho** (chương 5). |
| Tỉnh quản lý | Tỉnh nơi đặt cơ sở |
| Địa chỉ | Không bắt buộc, nhưng nên điền chính xác |
| Vùng nuôi trồng | Tick nếu cơ sở này có vùng nuôi trồng, canh tác |

> Lưu ý: xuất xứ của lô hàng lấy từ địa chỉ cơ sở, và người mua sẽ thấy thông tin này khi quét QR.

## 2.2 Đăng ký vùng nguyên liệu

Vùng là khu sản xuất khai báo với cơ quan quản lý, ví dụ một cánh đồng hoặc khu ao nuôi.

1. Bấm **Vùng nguyên liệu** ở menu trái, rồi bấm **Đăng ký vùng mới**.

![Danh sách vùng nguyên liệu](/images/04-vung-danh-sach.png)

2. Điền form theo bảng bên dưới.

![Form đăng ký vùng nguyên liệu](/images/04-vung-nguyen-lieu.png)

| Ô | Điền gì |
|---|---|
| Loại vùng | Vùng trồng, nuôi thủy sản, đánh bắt, khai thác hoặc chăn nuôi |
| Mã vùng | Đã được cấp mã thì bấm **Đã có mã** và nhập mã. Chưa có thì bấm **Chưa có mã**, hệ thống tạo mã nội bộ TMP để quản lý. |
| Tên vùng | Bắt buộc. Tên dễ nhận ra của khu sản xuất. |
| Tỉnh / Thành phố, Xã/Phường | Chọn tỉnh trước, rồi chọn xã |
| Địa chỉ chi tiết | Thôn, ấp hoặc mô tả vị trí |
| Cơ sở phụ trách | Chọn cơ sở đã thêm ở mục 2.1 |
| Sản phẩm chính | Gõ tên rồi bấm Enter |
| Thị trường dự kiến | Bắt buộc. Có sẵn Việt Nam (nội địa), thêm nước khác nếu định xuất khẩu. |
| Chứng nhận | Không bắt buộc. Bấm **Thêm chứng nhận** nếu có. |

3. Kéo xuống phần **Toạ độ vùng** và khai ranh giới. Cần ít nhất 3 điểm. Chọn một trong ba cách:
   - **Vẽ trên bản đồ:** bấm **Vẽ ranh giới**, rồi bấm lên bản đồ tại từng góc của vùng.
   - **Đứng tại ruộng:** bấm **Dùng vị trí GPS hiện tại** tại mỗi góc.
   - **Dán toạ độ:** mở **Nhập từ GeoJSON / KML / danh sách điểm**, dán mỗi dòng một điểm, bấm **Áp dụng**.
4. Bấm **Đăng ký vùng**.

![Khai toạ độ vùng](/images/04-vung-toa-do.png)

Diện tích hệ thống tự tính chỉ để tham khảo, không thay đo đạc địa chính.

Khi nhận được thông báo cấp mã, mở chi tiết vùng để nhập mã chính thức.

> Lưu ý: không thấy mục **Vùng nguyên liệu** ở menu thì mở `/dashboard/settings/preferences`, tick **DN có hoạt động nông nghiệp** hoặc **DN tự sản xuất / nuôi trồng nguyên liệu nguồn**.

## 2.3 Phân công người ghi nhật ký

Nhật ký canh tác ghi theo từng **đơn vị sản xuất** (thửa), không ghi theo vùng. Tạo vùng xong, hệ thống tự sinh một đơn vị **Thửa 1**.

1. Mở `/dashboard/zones/plots`.
2. Xem cột **Vùng**: đơn vị chưa gắn vùng thì lô thu hoạch không truy xuất được về vùng.
3. Trên dòng của thửa, bấm **Phân công**.

![Danh sách đơn vị sản xuất](/images/04-don-vi-san-xuat.png)

4. Chọn tài khoản nhân viên, bấm **Thêm**, rồi bấm **Lưu phân công**. Danh sách chỉ có người đã tạo ở mục 1.3, chưa có ai thì ô này trống.

![Form phân công thửa](/images/04-phan-cong.png)

Người canh tác được phân công sẽ ghi được nhật ký. Tài khoản quản trị chưa được phân công thì vẫn bị báo chưa được ghi, nên hãy phân công đúng người ghi.

> Lưu ý: nếu đã tick **Đơn vị là hợp tác xã** ở trang Tùy chọn, tạo vùng sẽ không tự sinh Thửa 1. Khi đó bạn khai đơn vị riêng cho từng hộ.
