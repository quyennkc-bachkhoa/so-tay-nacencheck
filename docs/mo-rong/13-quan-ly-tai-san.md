---
title: Quản lý tài sản
order: 13
group: Mở rộng
---

# Quản lý tài sản

Dùng khi doanh nghiệp có xe, tàu, container gắn GPS hoặc cảm biến nhiệt độ, và muốn dữ liệu đó gắn vào lô hàng. Chưa có thiết bị thì chỉ cần nút **Ghi chuyến vận chuyển** trên trang chi tiết lô (mục 8.5).

Làm theo đúng thứ tự, vì bước sau chọn lại những gì đã khai ở bước trước:

```
1. Tài sản        (xe, tàu, container)
       ↓
2. Thiết bị IoT   (GPS, cảm biến, gắn vào tài sản)
       ↓
3. Hành trình     (chuyến đi của tài sản, gắn vào lô)
       ↓
4. Kết nối IoT    (hệ thống giám sát tự gửi dữ liệu về)
```

| # | Việc | Màn hình | Cần làm |
|---|---|---|---|
| 1 | Khai tài sản | `/dashboard/doi-phuong-tien/tai-san` | Bắt buộc |
| 2 | Khai thiết bị | `/dashboard/doi-phuong-tien/thiet-bi` | Khi có GPS, cảm biến |
| 3 | Mở hành trình | `/dashboard/doi-phuong-tien/hanh-trinh` | Mỗi chuyến |
| 4 | Kết nối hệ thống giám sát | `/dashboard/doi-phuong-tien/iot` | Khi muốn dữ liệu tự chạy về |

Bấm **Quản lý tài sản** ở nhóm **Vận hành** trên menu trái để mở cả 4 màn hình.

![Quản lý tài sản](/images/13-tong-quan.png)

> Lưu ý: không thấy mục này ở menu thì vào **Cài đặt**, **Tùy chọn**, bật **DN theo dõi phương tiện / thiết bị IoT**.

## 1. Khai tài sản

1. Bấm **Tài sản**, rồi bấm **Tạo mới**.
2. Điền form theo bảng bên dưới, rồi bấm **Lưu**.

![Form đăng ký tài sản](/images/13-tai-san.png)

| Ô | Điền gì |
|---|---|
| Loại phương tiện | Tàu / thuyền, Xe tải / xe tải lạnh, Container, Khác |
| Số đăng ký / biển số | Biển số xe hoặc số đăng ký tàu |
| Tên phương tiện | Tên dễ nhận ra |
| Nhóm / Đội | Không bắt buộc. Dùng khi có nhiều đội xe. |
| Trọng tải, Năm sản xuất | Không bắt buộc |

## 2. Khai thiết bị

1. Bấm **Thiết bị IoT**, rồi bấm **Tạo mới**.
2. Điền form theo bảng bên dưới, rồi bấm **Lưu**.

![Form đăng ký thiết bị](/images/13-thiet-bi.png)

| Ô | Điền gì |
|---|---|
| Mã nhận dạng | GPS: số IMEI 15 chữ số. Cảm biến: số serial, DevEUI hoặc MAC. |
| Loại thiết bị | GPS Tracker, cảm biến nhiệt độ, độ ẩm, pH, oxy hòa tan, đầu đọc RFID, cân điện tử, loại khác |
| Kiểu máy, Nhà cung cấp, SIM ICCID, Ngày lắp đặt | Không bắt buộc |
| Gắn vào tài sản | Chọn tài sản đã khai ở bước 1. Có gắn thì thiết bị mới bắt đầu nhận tín hiệu thực tế. |

## 3. Mở hành trình

Mỗi chuyến đi mở một hành trình. Gắn mã lô thì lô đó có thêm dữ liệu của chuyến.

1. Bấm **Hành trình**, rồi bấm **Tạo mới**.
2. Điền form theo bảng bên dưới, rồi bấm **Lưu**.
3. Theo dõi trạng thái trong danh sách: **Đã lên lịch**, **Đang di chuyển**, **Đã hoàn thành**.

![Form mở hành trình](/images/13-hanh-trinh.png)

| Ô | Điền gì |
|---|---|
| Tài sản / Phương tiện | Chọn xe, tàu đã khai. Ô trống nghĩa là chưa làm bước 1. |
| Loại hành trình | Vận chuyển hàng hóa, Đánh bắt thủy sản, Khác |
| Điểm xuất phát, Điểm đến | Ví dụ từ nhà máy tới đại lý |
| Giờ khởi hành | Thời điểm xe chạy |
| Mã lô liên kết | Không bắt buộc. Ô này cần mã dài của lô, không phải mã `BGNM-…`. |

Mã dài của lô nằm ở cuối địa chỉ trang chi tiết lô, ví dụ `58710f64-9b10-4e62-8da3-6b388da22313`.

## 4. Kết nối hệ thống giám sát

Bước này để hệ thống giám sát bên ngoài (ví dụ giám sát hành trình, cảm biến chuỗi lạnh) tự gửi vị trí và số đo về NacenCheck. Thường do bộ phận kỹ thuật hoặc đơn vị cung cấp thiết bị làm.

1. Bấm **Kết nối IoT**.
2. Gõ tên gợi nhớ ở khung **Token webhook**, rồi bấm **Tạo token**.
3. Gửi token và địa chỉ webhook cho bên cung cấp hệ thống giám sát. Cả GPS và cảm biến dùng chung một token.
4. Khi dữ liệu về, thiết bị tự hiện ở khung **Thiết bị đang theo dõi**.

![Kết nối IoT](/images/13-ket-noi-iot.png)

> Lưu ý: tại thời điểm viết (30/10/2026), địa chỉ webhook trên màn hình ghi `localhost`, thiết bị bên ngoài không gửi tới được. Hãy hỏi hỗ trợ NacenCheck địa chỉ đúng trước khi cấu hình.

Giữ token như mật khẩu, vì ai có token đều gửi được dữ liệu vào tài khoản của doanh nghiệp.

Số đo cảm biến gắn vào lô theo trường `batchCode`, là mã lô như `BGNM-20261030-JWQZ`.
