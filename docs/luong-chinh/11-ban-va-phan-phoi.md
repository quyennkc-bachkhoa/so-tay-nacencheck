---
title: Bán và phân phối
order: 11
group: Luồng chính
prerequisites:
  - text: "Có lô hàng còn hàng chưa bán (chương 8)"
    link: /luong-chinh/08-tao-lo-hang
  - text: "Đã ghi công đoạn cho lô (chương 9)"
    link: /luong-chinh/09-chi-tiet-lo-va-ghi-cong-doan
  - text: "Đã in tem QR cho lô (chương 10)"
    link: /luong-chinh/10-tem-va-truy-xuat
outcome: "Mỗi người mua có một lô con với mã riêng. Lô gốc giữ nguyên số sản xuất và cho biết phần còn lại."
---

# Bước 9 – Bán và phân phối

## Vì sao phải ghi nhận việc bán?

Đến đây, chuỗi truy xuất đã đi từ nguyên liệu tới thành phẩm. Nhưng nếu dừng lại ở nhà máy, chuỗi còn thiếu một đoạn quan trọng: **hàng đã đi đến đâu**. Đoạn này cần cho hai việc:

- **Khép kín chuỗi tới điểm phân phối**, để người mua cuối biết sản phẩm đã qua những tay nào.
- **Thu hồi khi có sự cố.** Nếu phát hiện lô có vấn đề, doanh nghiệp phải biết ngay từng phần hàng đang ở đại lý nào, liên hệ ai.

## Bán hàng trên NacenCheck là "tách lô"

Đây là điểm người mới hay hiểu nhầm nhất, nên cần nói rõ trước.

Khi bạn bán 2 gói từ lô 10 gói, hệ thống **không** sửa con số 10 thành 8. Thay vào đó, nó làm hai việc:

1. **Tạo một lô con** cho đúng phần đã bán. Lô con có mã riêng (dạng `DST-…`), trạng thái **Đã bán**, và nối ngược về lô gốc. Bên mua truy xuất đúng phần hàng họ nhận.
2. **Ghi phân bổ vào lô gốc.** Số lượng 10 gói giữ nguyên làm mốc sản xuất; phần còn lại xem ở tab **Nguồn đầu vào/đầu ra** → mục **Phân bổ & theo dõi lưu thông**: "còn lại 8 / 10 gói".

```
Lô gốc BGNM-20261027-5TBR (10 gói, cột Số lượng vẫn ghi 10)
   │   Phân bổ: đã bán 2 · còn lại 8
   └──→ Lô con DST-20261028-… (2 gói, trạng thái Đã bán)
```

**Vì sao thiết kế như vậy?** Con số 10 gói là sự thật lịch sử: mẻ hàng ngày 27/10 làm ra 10 gói. Mỗi lần bán là một "chuyến hàng" có người nhận riêng, nên cần mã riêng để truy xuất riêng. Nếu chỉ trừ số lượng, bạn sẽ mất dấu từng chuyến đã đi đâu.

## Các bước ghi bán

Trên trang chi tiết lô, bấm **Bán / phân phối**. Màn **Bán / Giao cho người mua** mở ra, đã chọn sẵn lô nguồn.

![Form bán hàng](/images/11-ban-phan-phoi.png)

**Bước 1 – Khai từng người mua.** Mỗi người mua một dòng:

| Ô | Ghi chú |
|---|---|
| **Tên người mua** | Chọn từ đối tác đã lưu hoặc gõ tên mới. Nếu là doanh nghiệp dùng NacenCheck, hai bên sẽ bàn giao trên hệ thống. |
| **SĐT** | Nên khai, đặc biệt khi người mua chưa có tài khoản. Đây là đầu mối liên hệ khi cần thu hồi. |
| Địa chỉ người mua | Tùy chọn, nhưng nên khai tỉnh để hiện trên bản đồ phân phối. |
| **Loại người mua** | Hộ kinh doanh/Đại lý, Doanh nghiệp/Nhà máy, Chuỗi bán lẻ/Cửa hàng, Cá nhân, Ẩn danh. |
| **Kênh bán** | Bán sỉ/Đại lý (B2B), Chợ đầu mối/Tổng kho, Điểm bán truyền thống, Siêu thị/Chuỗi, Cửa hàng/Bán lẻ, Sàn TMĐT/Online. |
| **Khối lượng** | Lượng bán cho người này. Kiểm tra kỹ **đơn vị** khớp với đơn vị của lô (gói, kg…). |
| Đơn giá | Tùy chọn. Khai để có số liệu doanh thu. |
| Số hóa đơn, Ngày hóa đơn, Ảnh/PDF hóa đơn | Tùy chọn, nên đính kèm. |
| Thanh toán | Tiền mặt, Chuyển khoản, QR, Thẻ POS, Công nợ, Khác. |
| Lấy vị trí điểm giao | Tọa độ hiện trên bản đồ truy xuất. |

Bấm **Thêm người mua** để tách tiếp cho người khác. Tổng lượng bán không được vượt tồn của lô; hệ thống chặn bán quá.

**Bước 2 – Đóng kiện, cấp SSCC (tùy chọn).** Tích ô này để mỗi phần giao thành một kiện có mã SSCC chuẩn GS1. Cần khai mã GS1 trước; chưa khai thì bỏ ô này, giao dịch vẫn ghi bình thường.

**Bước 3 – Ghi nhận và in tem cho lô con.** Bấm **Ghi nhận bán cho các người mua**, sau đó bấm **In tem QR cho các lô con** để in một tờ A4 nhiều tem, mỗi tem trỏ tới trang truy xuất của một lô con. Dán đúng tem lên đúng phần hàng của từng người mua.

**Xác nhận hai bên.** Nếu người mua là doanh nghiệp có tài khoản NacenCheck, hệ thống gửi yêu cầu tiếp nhận. Người mua xác nhận đã nhận hàng (mục **Hàng đến chờ xác nhận** ở trang Lô hàng của họ) rồi khai tiếp phần của mình.

## Tình trạng phân phối – "hàng còn lại đang ở đâu?"

Bấm **Tình trạng phân phối** trên trang chi tiết lô. Màn hình chia hàng thành hai phần: **đã biết đích** và **chưa rõ**.

*Ví dụ:* lô 10 gói, đã bán 2 gói → "Đã biết đích 2 gói, chưa rõ 8 gói".

"Chưa rõ" **không có nghĩa là mất hàng**. Nó có nghĩa hệ thống chưa có ghi nhận nào về nơi 8 gói đó đang nằm. Thực tế chúng có thể vẫn ở kho nhà máy. Hệ thống tính "rõ đích" để phục vụ thu hồi: nếu phải thu hồi, nó cần biết từng phần hàng đang ở đâu.

Muốn giảm phần "chưa rõ", hãy ghi nơi đến cho số hàng đó: bán tiếp bằng **Bán / phân phối**, ghi chặng giao bằng **Ghi chuyến vận chuyển**, hoặc nhập thành phẩm vào kho bằng phiếu kho (chương 12).

Màn này cũng nhắc những thiếu sót có thể cản trở thu hồi, ví dụ người mua chưa có số điện thoại hoặc chưa khai tỉnh.

## Trạng thái lô thay đổi thế nào?

Bạn **không** chuyển trạng thái lô bằng tay. Trạng thái thay đổi tự động theo tiến trình: đang xử lý, đang vận chuyển/lưu thông, đã bán, đã xuất khẩu, bị thu hồi… Trên danh sách lô, bộ lọc trạng thái dùng các giá trị như ACTIVE, IN_TRANSIT, PROCESSING, EXPORTED, CREATED, RECALLED.

Ví dụ: lô con 2 gói tự chuyển "Đã bán" vì đã bán hết. Lô gốc còn 8 gói chưa phân bổ nên vẫn ở trạng thái đang xử lý/lưu thông.

## Doanh thu bán hàng xem ở đâu?

Trang **Tiêu thụ nội địa** (`/dashboard/distribution`) liệt kê các giao dịch bán: mã giao dịch, kênh, người mua, số lượng, tổng tiền, hóa đơn, thời gian, trạng thái. Đầu trang có các thẻ Doanh thu hôm nay, Doanh thu tháng, Kênh dẫn đầu. Muốn có số doanh thu, nhớ khai **đơn giá** khi bán.

Nút **Xem giao dịch của lô** trên trang chi tiết lô mở danh sách giao dịch của riêng lô đó.

## Điều cần nhớ

Bán hàng là **tách lô**: mỗi người mua nhận một lô con có mã riêng; lô gốc giữ nguyên số sản xuất và theo dõi phần còn lại. Ghi đủ người mua, số điện thoại và tỉnh để khi cần thu hồi, bạn biết ngay hàng đang ở đâu.
