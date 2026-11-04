---
title: Làm quen cổng cơ quan quản lý
order: 22
group: Cơ quan quản lý
prerequisites:
  - text: "Có tài khoản cổng cơ quan quản lý. Biết sản phẩm, lô hàng, công đoạn là gì (chương 1)"
    link: /mo-dau/01-khai-niem-co-ban
  - text: "Biết doanh nghiệp ghi lô hàng và công đoạn thế nào (chương 8)"
    link: /luong-chinh/08-chi-tiet-lo-va-ghi-cong-doan
outcome: "Đăng nhập được, biết tài khoản đang xem dữ liệu của địa bàn nào, và tìm được từng màn hình trên menu."
---

# Bước 1 – Làm quen cổng cơ quan quản lý

Cổng cơ quan quản lý dành cho cán bộ Sở và cơ quan nhà nước. Cán bộ dùng cổng này để tra cứu lô hàng, kiểm tra chuỗi cung ứng, lập cuộc thanh tra, ghi vi phạm và theo dõi doanh nghiệp khắc phục. Đây là một ứng dụng riêng ở `/gov`, không phải trang doanh nghiệp hay cổng quản trị.

| | Trang doanh nghiệp | Cổng cơ quan quản lý |
|---|---|---|
| Địa chỉ | `https://trace.nacencheck.com` | `/gov` |
| Ai dùng | Nhân viên của một doanh nghiệp | Cán bộ Sở, cơ quan quản lý |
| Thấy dữ liệu của | Riêng doanh nghiệp đó | Các doanh nghiệp trong địa bàn được giao |
| Ghi được gì | Lô hàng, công đoạn, tem, bán hàng | Cuộc thanh tra, vi phạm, quyết định, báo cáo |

Cổng chỉ **đọc** dữ liệu của doanh nghiệp. Cán bộ không sửa được lô hàng hay công đoạn. Vi phạm cán bộ ghi được gửi sang doanh nghiệp để khắc phục.

> Lưu ý: cổng đang chạy bản thử nghiệm, góc trên phải màn hình có dải chữ **THỬ NGHIỆM**. Dữ liệu trên ảnh là dữ liệu thử, trong đó có lô của doanh nghiệp ví dụ Hạt Vàng Việt.

## 1. Đăng nhập

1. Mở `/gov/sign-in`.
2. Gõ **Địa chỉ email** và **Mật khẩu**.
3. Tick **Ghi nhớ** nếu đây là máy riêng của bạn.
4. Bấm **Đăng nhập**.

![Đăng nhập cổng cơ quan quản lý](/images/22-dang-nhap.png)

Lần sau mở lại trên cùng máy, cổng nhớ email và chỉ hỏi mật khẩu.

> Lưu ý: nút **Quên mật khẩu?** hiện chưa dùng được khi chưa đăng nhập, bấm vào lại quay về trang đăng nhập. Quên mật khẩu thì nhờ quản trị viên hệ thống đặt lại.

## 2. Kiểm tra phạm vi của tài khoản

Mỗi tài khoản được gắn với một cơ quan và một địa bàn. Mọi danh sách trong cổng chỉ hiện doanh nghiệp, lô hàng thuộc địa bàn đó. Phạm vi lấy theo tài khoản, không đổi được trên trình duyệt.

Xem phạm vi ở hai chỗ:

- Khung đầu menu trái: tên cơ quan và vai trò của bạn.
- Dòng **Phạm vi:** ở thanh trên cùng.

Nếu không thấy doanh nghiệp mà bạn phụ trách, hãy kiểm tra phạm vi trước. Thường là tài khoản bị gắn sai địa bàn, không phải doanh nghiệp chưa có dữ liệu.

## 3. Màn hình Tổng quan

Đăng nhập xong, cổng mở màn hình **Tổng quan tỉnh**. Đây là bức tranh chung của địa bàn tính đến hôm nay.

![Tổng quan tỉnh](/images/22-tong-quan.png)

| Khối | Cho biết gì |
|---|---|
| **Doanh nghiệp trong phạm vi** | Số doanh nghiệp do Sở quản lý |
| **Lô hàng** | Số lô hàng của các doanh nghiệp đó, kèm số giấy C/O |
| **Vi phạm đã lập** | Số vi phạm cán bộ đã ghi nhận |
| **Đợt kiểm tra** | Số cuộc thanh tra, tính mọi trạng thái |
| **Vi phạm cần xử lý** | Vi phạm chưa đóng. Bấm **Xem tất cả** để mở danh sách đầy đủ |
| **Thanh tra gần đây** | Các cuộc thanh tra mới nhất. Bấm **Mở danh sách thanh tra** để xem hết |

Hai nút ở góc phải là lối tắt: **Xuất báo cáo kỳ** mở màn Báo cáo kỳ (chương 27), **Lập cuộc thanh tra** mở màn Thanh tra (chương 25).

## 4. Tìm màn hình trên menu

Menu trái chia 5 nhóm. Mục **Gần đây** ở trên cùng hiện các màn vừa mở. Bấm **Thu gọn tất cả** khi menu quá dài.

| Nhóm | Mục | Dùng để | Chương |
|---|---|---|---|
| Tổng quan | **Tổng quan** | Xem nhanh tình hình địa bàn | 22 |
| Giám sát | **Tra cứu lô**, **Chuỗi cung ứng**, **Xác minh C/O** | Tìm một lô, xem lô đó làm từ đâu, đi đâu | 23 |
| Giám sát | **Bản đồ vùng trồng** | Xem số liệu tô màu theo tỉnh, xã | 24 |
| Thanh tra & xử lý | **Thu hồi**, **Tem theo tỉnh** | Theo dõi lệnh thu hồi, tem chống giả | 24 |
| Thanh tra & xử lý | **Thanh tra** | Lên lịch và ghi biên bản kiểm tra | 25 |
| Thanh tra & xử lý | **Vi phạm & CAPA**, **Hộp quyết định** | Ghi vi phạm, theo dõi khắc phục, ký quyết định | 26 |
| Báo cáo | **Báo cáo kỳ**, **Đối soát tuân thủ** | Báo cáo tháng, quý, năm | 27 |
| Khác | **Phân hạng dữ liệu**, **Sổ vết truy cập**, **Trợ lý AI** | Quy tắc bảo mật dữ liệu, nhật ký truy cập, hỏi nhanh | 27 |

### Tìm kiếm nhanh

Bấm ô **Tìm kiếm nhanh** trên cùng (hoặc nhấn Ctrl+K) rồi gõ vài chữ. Cổng gợi ý màn hình có tên khớp, và dòng **Tra cứu lô: "…"** để tìm lô theo chữ vừa gõ. Dùng phím mũi tên để chọn, Enter để mở, Esc để đóng.

![Tìm kiếm nhanh](/images/22-tim-kiem-nhanh.png)

Khi chưa gõ gì, khung tìm kiếm liệt kê đủ 15 màn hình. Cạnh mỗi màn có hình ngôi sao **Yêu thích** để đánh dấu màn hay dùng.

## 5. Tài khoản và giao diện

Bấm ảnh đại diện ở góc trên phải để mở menu tài khoản. Menu hiện tên, email và vai trò của bạn.

![Menu tài khoản](/images/22-tai-khoan.png)

| Mục | Dùng để |
|---|---|
| **Cấu hình giao diện** | Chọn chế độ sáng, tối, bộ màu, phông chữ và **Cỡ chữ** (Nhỏ, Tiêu chuẩn, Lớn). Lựa chọn lưu trên máy đang dùng |
| **Hồ sơ cá nhân** | Đổi mật khẩu, bật bảo mật 2 lớp, đăng xuất khỏi máy khác (mục bên dưới) |
| **Đăng xuất** | Thoát khỏi cổng. Luôn đăng xuất khi dùng máy chung |

### Hồ sơ cá nhân và bảo mật

Bấm **Hồ sơ cá nhân** trong menu tài khoản. Trang mất vài giây để tải.

![Hồ sơ cá nhân](/images/22-ho-so-ca-nhan.png)

| Khối | Dùng để |
|---|---|
| Thông tin tài khoản | Xem họ tên, email, vai trò. Muốn đổi các thông tin này thì liên hệ quản trị viên hệ thống. Bấm **Đổi ảnh đại diện** để thay ảnh |
| **Đổi mật khẩu** | Gõ mật khẩu hiện tại, mật khẩu mới (ít nhất 8 ký tự, khác mật khẩu cũ) hai lần, bấm **Đổi mật khẩu** |
| **Bảo mật 2 lớp (2FA)** | Bấm **Bật 2FA** để mỗi lần đăng nhập phải nhập thêm một mã. Nên bật, vì tài khoản xem được dữ liệu của nhiều doanh nghiệp |
| **Đăng nhập bằng vân tay / khóa bảo mật** | Đăng nhập bằng vân tay, khuôn mặt của máy thay cho mật khẩu. Bản thử nghiệm chưa bật tính năng này |
| **Phiên đăng nhập** | Nghi tài khoản bị dùng trên máy lạ thì bấm **Đăng xuất khỏi các thiết bị khác**. Máy đang dùng vẫn giữ đăng nhập |
| **Xóa tài khoản** | Vô hiệu hóa tài khoản khi nghỉ việc, chuyển công tác. Quản trị viên khôi phục được |

> Lưu ý: đổi mật khẩu sẽ xóa các khóa đăng nhập bằng vân tay đã đăng ký. Không bấm **Xóa tài khoản** để thử: mọi phiên đăng nhập bị thoát ngay.

Nút hình mặt trời trên thanh trên cùng chuyển giao diện sáng, tối. Nút hình quyển sách mở trang hướng dẫn sử dụng.

> Lưu ý: tài khoản dùng để chụp ảnh trong nhóm này là tài khoản quản trị hệ thống, xem được toàn quốc. Tài khoản của Sở chỉ thấy địa bàn của mình, nên số liệu trên màn của bạn sẽ khác ảnh. Email quản trị và thông tin của doanh nghiệp khác trên ảnh đã được che.
