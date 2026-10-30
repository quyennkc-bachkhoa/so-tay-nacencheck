---
title: Thiết lập doanh nghiệp
order: 3
group: Luồng chính
prerequisites:
  - text: "Đăng nhập được vào trang quản trị NacenCheck (chương 2)"
    link: /bat-dau/02-dang-nhap-va-giao-dien
  - text: "Biết sản phẩm, lô hàng, quy trình là gì (chương 1)"
    link: /mo-dau/01-khai-niem-co-ban
outcome: "Hồ sơ doanh nghiệp đã khai đủ, trang giới thiệu đã công khai, mỗi nhân viên có tài khoản riêng."
---

# Bước 1 – Thiết lập doanh nghiệp

Mọi sản phẩm và lô hàng về sau đều gắn vào doanh nghiệp này, nên khai trước tiên. Hai việc đầu làm ở cùng một màn hình **Hồ sơ thương hiệu**.

| # | Việc | Màn hình | Cần làm |
|---|---|---|---|
| 1.1 | Khai hồ sơ doanh nghiệp | `/dashboard/brand` | Bắt buộc |
| 1.2 | Công khai trang giới thiệu | `/dashboard/brand` | Nên làm |
| 1.3 | Thêm nhân viên | `/dashboard/users` | Nên làm |
| 1.4 | Khai mã GS1 | `/dashboard/gs1` | Nên làm trước khi thêm sản phẩm |

Ví dụ trong chương này là Công ty TNHH Hạt Vàng Việt, làm bánh gạo. Khi làm thật, bạn thay bằng thông tin của mình.

## 1.1 Khai hồ sơ doanh nghiệp

Chuẩn bị sẵn giấy đăng ký kinh doanh để điền đúng tên pháp nhân và mã số thuế.

1. Bấm **Hồ sơ thương hiệu** ở menu trái. Chưa thấy mục này thì kéo thanh menu xuống. Trang mở sẵn tab **Thông tin chung**.
2. Trong khung **Hồ sơ doanh nghiệp**, bấm **Cập nhật thông tin**.

![Mở form hồ sơ doanh nghiệp](/images/03-mo-ho-so.png)

3. Điền form theo bảng bên dưới.
4. Bấm **Lưu**. Các dòng **Chưa khai báo** trong khung sẽ đổi thành thông tin bạn vừa điền.

![Form hồ sơ doanh nghiệp](/images/03-ho-so-doanh-nghiep.png)

| Ô | Điền gì |
|---|---|
| Loại hình tổ chức | Chọn đúng loại. Chọn Hộ nông dân / Cá nhân hoặc Hộ kinh doanh cá thể thì không có ba ô tên pháp nhân, mã số thuế, số ĐKKD. |
| Tên hiển thị | Tên khách nhìn thấy |
| Tỉnh / Thành phố | Chọn trong danh sách |
| Tên pháp nhân | Đúng như trên giấy đăng ký kinh doanh |
| Mã số thuế | 10 hoặc 13 chữ số |
| Số ĐKKD | Số trên giấy đăng ký kinh doanh |
| Số điện thoại | Số liên hệ của doanh nghiệp |
| Địa chỉ | Số nhà, đường, xã/phường, tỉnh |
| Logo thương hiệu | Không bắt buộc. Bấm **Tải logo lên**, chọn ảnh PNG, JPG hoặc WebP, tối đa 2MB. Bỏ trống thì dùng logo NacenCheck. |

## 1.2 Công khai trang giới thiệu

Đây là trang khách thấy ở thẻ **Thương hiệu** khi quét QR. Bỏ qua thì trang truy xuất sẽ thiếu phần giới thiệu doanh nghiệp.

1. Vẫn ở tab **Thông tin chung**, điền khung trên cùng: **Tên hiển thị** (Hạt Vàng Việt), **Số điện thoại liên hệ** (0912345678).
2. Bấm **Chụp hoặc chọn ảnh**, chọn logo hoặc ảnh cơ sở.
3. Bấm **Công khai trang**. Nút này chỉ sáng khi đủ cả ba mục trên.

![Công khai trang giới thiệu](/images/03-cong-khai-trang.png)

Muốn trang đầy đủ hơn, bạn làm thêm các việc sau, làm lúc nào cũng được:

- **Thêm nội dung:** điền khung **Nội dung trang giới thiệu**, ví dụ khẩu hiệu "Bánh gạo từ lúa nhà trồng", rồi bấm **Lưu thay đổi**.
- **Thêm chứng nhận:** mở tab **Chứng nhận**, bấm **Thêm chứng chỉ**.
- **Đổi giao diện:** mở tab **Giao diện landing**, bấm **Xem mẫu** để xem thử 10 mẫu có sẵn.

## 1.3 Thêm nhân viên

Mỗi người dùng một tài khoản riêng, để hành trình của lô hàng ghi đúng ai đã làm bước nào.

1. Bấm **Quản lý nhân viên** ở menu trái, rồi bấm **Thêm thành viên**.
2. Điền form theo bảng bên dưới.
3. Bấm **Tạo tài khoản**, rồi đưa thông tin đăng nhập và mật khẩu cho nhân viên.

![Form tạo tài khoản nhân viên](/images/03-them-nhan-vien.png)

| Ô | Điền gì | Ví dụ |
|---|---|---|
| Vai trò | Chọn theo việc chính của người đó, xem bảng tiếp theo | Công nhân |
| Loại định danh | Cách nhân viên đăng nhập | Tên đăng nhập |
| Giá trị định danh | Tên đăng nhập, số điện thoại hoặc email tương ứng | nong.dan01 |
| Email khôi phục | Không bắt buộc, dùng khi cần khôi phục tài khoản | an@hatvangviet.vn |
| Họ và tên | Tên thật của nhân viên | Nguyễn Văn An |
| Mật khẩu | Tối thiểu 8 ký tự, gồm chữ và số | Đặt riêng cho từng người |

Chọn vai trò theo việc chính của người đó:

| Người này làm gì | Chọn vai trò |
|---|---|
| Khai danh mục, tạo lô, bán hàng, quản lý nhân viên | Quản lý |
| Ghi công đoạn, ghi vận chuyển, gom lô | Nhân viên vận hành |
| Ghi công đoạn tại xưởng | Công nhân |
| Ghi nhật ký ngoài đồng | Nông hộ |
| Lái xe, ghi chuyến vận chuyển | Tài xế |
| Ghi bước kiểm tra chất lượng | Kiểm tra chất lượng (QC) |
| Ghi kết quả kiểm nghiệm | Kỹ thuật viên phòng lab |
| Chỉ xem dữ liệu | Người xem |

Có nhiều nhân viên thì bấm **Nhập hàng loạt nhân viên (CSV)** thay vì thêm từng người.

> Lưu ý: tài khoản mới đang ở chế độ thoáng, mọi vai trò đều ghi được mọi việc. Muốn giới hạn, vào **Vai trò & chức năng** tại `/dashboard/settings/roles`.

## 1.4 Khai mã GS1

Hệ thống dùng mã GS1 của doanh nghiệp để tự cấp mã vạch GTIN cho sản phẩm và in nhãn thùng, pallet (SSCC). Khai trước khi thêm sản phẩm thì khỏi phải quay lại. Doanh nghiệp bán trong nước chỉ cần khai nhanh.

1. Bấm **Mã GS1 / Mã vạch** ở menu trái.
2. Ở khung **Khai nhanh**, gõ mã GS1 doanh nghiệp đang có, từ 6 đến 12 chữ số.
3. Bấm **Lưu**. Đầu trang hiện **Mã đang dùng cho SSCC** kèm chữ khai nhanh.

![Khai nhanh mã GS1](/images/03-ma-gs1.png)

Sau này cần xuất khẩu thì dùng khung **Đăng ký chính thức**: gõ mã do GS1 Việt Nam cấp (thường bắt đầu bằng 893) rồi bấm **Đăng ký**. Chưa có mã thì bấm **Đề nghị NBC cấp**. Mã chính thức đang hoạt động được ưu tiên dùng cho SSCC.
