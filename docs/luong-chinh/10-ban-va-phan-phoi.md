---
title: Bán và phân phối
order: 10
group: Luồng chính
prerequisites:
  - text: "Có lô hàng còn hàng chưa bán (chương 7)"
    link: /luong-chinh/07-nguon-nguyen-lieu-va-tao-lo
  - text: "Đã ghi công đoạn Đóng gói cho lô (chương 8)"
    link: /luong-chinh/08-chi-tiet-lo-va-ghi-cong-doan
  - text: "Đã in tem QR cho lô (chương 9)"
    link: /luong-chinh/09-tem-va-truy-xuat
outcome: "Mỗi người mua có một lô con với mã riêng. Lô gốc giữ nguyên số sản xuất và cho biết phần còn lại."
---

# Bước 8 – Bán và phân phối

Ghi bán để biết hàng đã đi đến đâu. Khi có sự cố phải thu hồi, bạn tra được ngay từng phần hàng đang ở đâu, liên hệ ai.

```
Lô gốc BGNM-20261030-JWQZ (10 gói, cột Số lượng vẫn ghi 10)
   │   Phân bổ: đã tách 2 gói · còn lại 8 gói
   └──→ Lô con DST-20261030-dd50a11a (2 gói, trạng thái Đã bán)
```

Bán hàng là **tách lô**: hệ thống không sửa con số 10 thành 8, mà tạo một lô con có mã riêng cho phần đã bán.

| # | Việc | Màn hình | Cần làm |
|---|---|---|---|
| 8.1 | Ghi bán | Trang chi tiết lô | Bắt buộc |
| 8.2 | Xem phần còn lại | Trang chi tiết lô | Khi cần |
| 8.3 | Xem hàng đang ở đâu | Tình trạng phân phối | Nên làm |
| 8.4 | Xem doanh thu | `/dashboard/distribution` | Khi cần |
| 8.5 | Khai đại lý, ghi chặng giao | `/dashboard/distribution/network` | Khi bán qua nhiều cấp |
| 8.6 | Giao cho doanh nghiệp dùng NacenCheck | `/dashboard/partners/traders` | Khi đối tác cũng dùng hệ thống |
| 8.7 | Thu hồi lô | Tình trạng phân phối | Khi có sự cố |

## 8.1 Ghi bán

Lô phải đã ghi công đoạn **Đóng gói** thì mới bán được. Chưa ghi thì hệ thống báo lô chưa được bán.

1. Trên trang chi tiết lô, bấm **Bán / phân phối**. Form hiện sẵn lô nguồn và số **Tồn còn**.
2. Điền thông tin người mua theo bảng bên dưới. Bán cho nhiều người thì bấm **Thêm người mua**.
3. Bấm **Ghi nhận bán cho các người mua**. Mục **Kết quả** hiện mã lô con của từng người mua.
4. Bấm **In tem QR cho các lô con (PDF A4)**, rồi dán đúng tem lên đúng phần hàng.

![Form bán hàng](/images/11-ban-phan-phoi.png)

| Ô | Điền gì |
|---|---|
| Tên người mua | Chọn đối tác đã lưu hoặc gõ tên mới |
| SĐT | Nên điền ngay. Thiếu thì khi thu hồi không gọi được người mua, và hiện chưa bổ sung được về sau (mục 8.3). |
| Loại người mua | Hộ kinh doanh / Đại lý, Doanh nghiệp / Nhà máy, Chuỗi bán lẻ / Cửa hàng, Cá nhân, Ẩn danh |
| Kênh bán | Bán sỉ / Đại lý, Chợ đầu mối / Tổng kho, Điểm bán truyền thống, Siêu thị / Chuỗi, Cửa hàng / Bán lẻ, Sàn TMĐT / Online |
| Khối lượng | Lượng bán cho người này, theo đơn vị của lô |
| Đơn giá | Không bắt buộc. Có đơn giá mới có số liệu doanh thu. |
| Địa chỉ người mua | Không bắt buộc |
| Số hoá đơn, Ngày hoá đơn, Ảnh / PDF hoá đơn | Không bắt buộc, nên đính kèm |
| Thanh toán | Tiền mặt, Chuyển khoản, QR, Thẻ POS, Công nợ, Khác |
| Lấy vị trí điểm giao | Không bắt buộc. Lấy tọa độ khi đang đứng tại điểm giao. |

Muốn mỗi phần giao có mã thùng thì tick **Đóng kiện + cấp mã SSCC cho mỗi người mua**. Việc này cần mã GS1 (mục 1.4).

Lô con hiện trong danh sách **Lô hàng** với trạng thái **Đã bán**. Trang truy xuất của lô gốc hiện thêm dòng đã phân phối.

![Lô gốc và lô con trong danh sách lô](/images/11-lo-con.png)

Bạn không phải chuyển trạng thái lô bằng tay. Lô gốc còn hàng vẫn ở **Đang xử lý**, trạng thái đổi theo tiến trình.

## 8.2 Xem phần còn lại

1. Trên trang chi tiết lô, mở tab **Nguồn đầu vào/đầu ra**.
2. Xem mục **Phân bổ & Theo dõi lưu thông lô hàng**, ví dụ còn lại 8 gói / 10 gói.

![Phân bổ của lô](/images/11-phan-bo.png)

## 8.3 Xem hàng đang ở đâu

1. Trên trang chi tiết lô, bấm **Tình trạng phân phối**.
2. Xem số **Đã biết đích** và **Chưa rõ**.
3. Đọc các dòng trong **Việc phải làm** để biết còn thiếu gì, ví dụ người mua chưa có số điện thoại, chưa ghi chặng giao.

![Tình trạng phân phối](/images/11-tinh-trang.png)

"Chưa rõ" không có nghĩa là mất hàng, mà là hệ thống chưa ghi nhận số hàng đó đang ở đâu. Hàng có thể vẫn ở kho nhà máy. Muốn giảm phần này thì bán tiếp, hoặc nhập thành phẩm vào kho (mục 3.6).

Trên bản đồ, người mua chỉ hiện khi đã có tỉnh. Form bán chưa có ô chọn tỉnh, nên phần này có thể trống dù đã điền địa chỉ.

> Lưu ý: tại thời điểm viết (30/10/2026), nút **Bổ sung liên hệ** và **Ghi chặng giao** chỉ mở danh sách đối tác. Người mua gõ tên lúc bán không nằm trong danh sách này, và nút **Chưa có số — bổ sung** bấm vào chưa có tác dụng. Vì vậy hãy điền SĐT ngay trong form bán.

## 8.4 Xem doanh thu

Mở `/dashboard/distribution` để xem các giao dịch bán, doanh thu hôm nay, doanh thu tháng và kênh dẫn đầu. Muốn xem riêng một lô thì trên trang chi tiết lô bấm **Thao tác khác**, chọn **Xem giao dịch của lô**.

![Tiêu thụ nội địa](/images/11-tieu-thu.png)

> Lưu ý: tại thời điểm viết (30/10/2026), màn hình này và mục phân bổ hiện đơn vị là kg dù lô tính theo gói. Số lượng vẫn đúng, chỉ chữ đơn vị bị sai.

## 8.5 Khai đại lý, ghi chặng giao

Bán thẳng cho người mua thì mục 8.1 là đủ. Mục này dùng khi hàng còn đi tiếp qua nhiều cấp, ví dụ tổng đại lý → đại lý → điểm bán lẻ, và bạn muốn lần được từng chặng.

**Khai đối tác**

1. Mở `/dashboard/distribution/network`. Trang này không có ở menu trái, vào từ nút **Mạng lưới đa cấp** ở `/dashboard/distribution`.
2. Bấm **Thêm đối tác**, điền form như mục 3.2. Ở ô **Loại**, chọn **Tổng đại lý**, **Đại lý**, **Nhà bán buôn** hoặc **Điểm bán lẻ**.
3. Điền **Điện thoại** và **Tỉnh/thành** ngay, vì sau khi lưu chưa có chỗ sửa.
4. Bấm **Lưu đối tác**.

![Mạng lưới phân phối](/images/11-mang-luoi.png)

Ô điểm đi của chặng chỉ chọn được trong danh sách đối tác, và danh sách không có sẵn doanh nghiệp của bạn. Vì vậy hãy khai cả nơi xuất hàng. Ví dụ Hạt Vàng Việt khai nhà máy với loại **Tổng đại lý**, vì form không có loại Nhà sản xuất.

**Ghi một chặng**

1. Mở tab **Ghi chặng giao hàng**.
2. Điền form theo bảng bên dưới.
3. Bấm **Ghi chặng**.

![Form ghi chặng giao hàng](/images/11-ghi-chang.png)

| Ô | Điền gì |
|---|---|
| Lô hàng | Lô đi trong chặng này. Hàng đã bán thì chọn lô con. |
| Từ, Đến | Đối tác giao và đối tác nhận |
| Số lượng, Đơn vị | Lượng giao. Đơn vị để sẵn kg, nhớ sửa nếu lô tính theo gói. |
| Ghi hộ cấp dưới | Tick khi bạn ghi thay cho đại lý cấp dưới |

> Lưu ý: tại thời điểm viết (30/10/2026), hai ô **Từ** và **Đến** không giữ đối tác vừa chọn, nên form báo "Chọn GLN nguồn và GLN đích" và chưa ghi được chặng. Lô ví dụ vì thế chưa có chặng nào.

Tab **Truy xuất cây phân phối** cho xem toàn tuyến của một lô: chọn lô, bấm **Truy xuất tuyến**.

Muốn ghi xe và tài xế của chuyến hàng thì bấm **Ghi chuyến vận chuyển** trên trang chi tiết lô. Form bắt buộc có biển số xe, tên tài xế và ít nhất 2 điểm dừng.

## 8.6 Giao cho doanh nghiệp dùng NacenCheck

Khi bên nhận cũng dùng NacenCheck, hai bên có thể xác nhận giao nhận trên hệ thống. Làm một lần phần liên kết, sau đó mỗi đợt giao gửi một phiếu.

**Liên kết đối tác**

1. Bấm **Liên kết đối tác** ở menu trái, rồi bấm **Mời đối tác**.
2. Gõ mã số thuế của bên kia, bấm **Tra cứu**, kiểm tra đúng tên pháp lý.
3. Chọn **Loại liên kết**, bấm **Gửi yêu cầu**. Bên kia duyệt thì liên kết mới có hiệu lực.

![Liên kết đối tác](/images/11-lien-ket.png)

Liên kết không tự chia sẻ dữ liệu của hai doanh nghiệp.

**Gửi phiếu giao**

1. Trên trang chi tiết lô, bấm **Thao tác khác**, chọn **Gửi xác nhận giao–nhận**.
2. Chọn **Đối tác nhận hàng**, gõ **Số lượng** và **Đơn vị**. Mã phiếu do hệ thống tự sinh.
3. Bấm **Giao lô + yêu cầu xác nhận**.

![Form giao lô](/images/11-giao-nhan.png)

Bên nhận mở trang **Lô hàng**, bấm **Hàng đến chờ xác nhận** để xác nhận hoặc từ chối. Xác nhận xong, họ nhập lô vào kho của mình.

## 8.7 Thu hồi lô

> Không bấm thử. Lệnh thu hồi được ghi vào nhật ký không sửa được, cơ quan quản lý có thể yêu cầu xem khi thanh tra.

1. Trên trang chi tiết lô, bấm **Tình trạng phân phối**, rồi bấm **Thu hồi lô này**. Hoặc bấm **Thu hồi** ở menu trái, rồi **Thu hồi lô** và chọn lô.
2. Điền form theo bảng bên dưới.
3. Xem khung **Lệnh này sẽ chạm** để biết bao nhiêu đầu mối đang giữ hàng, ai không có số điện thoại, bao nhiêu hàng chưa rõ ở đâu.
4. Tick ô xác nhận, bấm **Khởi tạo lệnh thu hồi**.
5. Theo dõi lệnh ở trang **Thu hồi**.

![Form thu hồi](/images/11-thu-hoi.png)

| Ô | Điền gì |
|---|---|
| Mức độ nghiêm trọng | Mức 1: nguy hiểm tính mạng. Mức 2: ảnh hưởng sức khỏe tạm thời. Mức 3: sai nhãn, chất lượng, không hại sức khỏe. |
| Mã lý do | Chọn đúng lý do, ví dụ **Sai nhãn**, **Nhiễm vi sinh vật**, **Phát hiện dị vật** |
| Số đơn vị bị ảnh hưởng | Số hàng cần thu hồi, theo đơn vị của lô |
| Mô tả chi tiết lý do | Càng cụ thể càng tốt |
| Phạm vi phân phối | Nơi hàng đã đến, ví dụ Hà Nội |
| Ghi chú nội bộ | Thông tin liên hệ, kế hoạch ban đầu |

> Lưu ý: phần **Mô tả chi tiết lý do** hiện công khai. Người mua quét QR và đại lý đều đọc được, nên đừng ghi tên khách hàng, giá hay thông tin nội bộ.
