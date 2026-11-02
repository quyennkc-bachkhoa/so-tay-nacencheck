---
title: Giá và thu tiền
order: 19
group: Quản trị
prerequisites:
  - text: "Có tổ chức đang dùng gói trả phí (chương 16)"
    link: /quan-tri/16-to-chuc-va-nguoi-dung
outcome: "Biết doanh nghiệp bị tính bao nhiêu tiền và vì sao, đổi được giá an toàn, khớp được tiền chuyển khoản với hoá đơn."
---

# Bước 5 – Giá và thu tiền

Tiền đi theo một chiều: giá quyết định số tiền trên hoá đơn, khách chuyển khoản vào tài khoản nhận tiền, rồi đội vận hành đối soát để xác nhận khách đã trả.

```
1. Giá & khuyến mại      (doanh nghiệp phải trả bao nhiêu)
       ↓
2. Thanh toán            (tiền vào tài khoản nào, đối soát tự động hay tay)
       ↓
3. Đối soát thu tiền     (khoản tiền nào của hoá đơn nào)
       ↓
4. Doanh thu             (tổng kết)
```

Các màn hình này chỉ đội vận hành NacenCheck thấy, doanh nghiệp không thấy.

## 1. Giá & khuyến mại

Bấm **Giá & khuyến mại** ở nhóm **Doanh thu**. Sáu tab bên dưới đều tác động lên số tiền doanh nghiệp phải trả.

![Giá và khuyến mại](/images/19-gia.png)

Các công cụ này **không cộng dồn**. Hệ thống chọn đúng một mức, theo thứ tự ưu tiên:

```
Kỳ được tặng → Giá riêng → Mã đã đổi → Ưu đãi → Giá bảng
```

Doanh nghiệp xem giá ở `/dashboard/settings/billing/plans` và nhập mã ở ô **Mã khuyến mại** tại `/dashboard/settings/billing`.

Vì thế, trước khi trả lời khách, dùng khối **Tra cứu giá theo doanh nghiệp**: dán mã tổ chức, chọn gói, bấm **Tra giá**. Số hiện ra đúng là số sẽ lên hoá đơn.

| Tab | Dùng khi | Lưu ý |
|---|---|---|
| **Bảng giá** | Đổi giá chung của một gói, bấm **Sửa giá** | Có hiệu lực ngay nhưng chỉ áp từ kỳ hoá đơn kế tiếp. Khung này chỉ sửa giá, không sửa hạn mức |
| **Ưu đãi** | Giảm tự động cho ai thoả điều kiện, không cần gõ mã | Điều kiện kiểm tại lúc xuất hoá đơn |
| **Mã phát cho khách** | Tặng tháng miễn phí, hoặc giảm phần trăm, bằng mã khách cầm trong tay | Mã có hiệu lực ngay sau khi tạo |
| **Giá riêng theo DN** | Giá theo hợp đồng của một doanh nghiệp | Hết hạn thì về giá bảng. Không cộng thêm ưu đãi hay mã giảm giá |
| **Kỳ hạn nhiều năm** | Đổi giá khi trả trước nhiều tháng | Giá trọn kỳ, phần trăm giảm dùng chung cho cả ba gói |
| **Thuế suất** | Đổi mức thuế trên hoá đơn | Hỏi kế toán trước |

> Không bấm **Sửa giá** khi chưa kiểm tra kỹ con số. Gõ nhầm là sai hoá đơn của mọi doanh nghiệp trên gói đó, trừ những nơi đang giữ giá riêng.

**Ưu đãi**

Khi nhiều ưu đãi cùng khớp, chỉ một ưu đãi được áp: cái có số ưu tiên nhỏ nhất. Nếu đặt ưu đãi mới với số ưu tiên lớn hơn ưu đãi đang chạy, nó sẽ không bao giờ có tác dụng.

![Tab Ưu đãi](/images/19-uu-dai.png)

**Kỳ hạn nhiều năm**

Hệ thống từ chối lưu nếu vi phạm một trong ba điều: giá không khớp phần trăm ghi trên huy hiệu, kỳ dài hơn lại đắt hơn khi quy về tháng, hoặc có kỳ đắt hơn trả tháng lẻ.

![Tab Kỳ hạn nhiều năm](/images/19-ky-han.png)

**Thuế suất**

![Tab Thuế suất](/images/19-thue.png)

Mức thuế đúng tuỳ cách phân loại dịch vụ theo quy định, nên kế toán quyết định, đội vận hành không tự đoán. Chọn sai thì phải sửa hồi tố trên các chứng từ đã phát hành.

## 2. Thanh toán: tài khoản nhận tiền và đối soát tự động

Bấm **Thanh toán** ở nhóm **Doanh thu**. Thay đổi ở đây có hiệu lực ngay.

![Cấu hình thanh toán](/images/19-thanh-toan.png)

**Tài khoản nhận tiền**: bấm **Thêm tài khoản** để khai ngân hàng và số tài khoản khách sẽ chuyển vào. Khách thấy ngay ở `/dashboard/settings/billing/bank-transfer`, nên sửa nhầm là khách chuyển sai nơi. Dùng **Tắt**, **Sửa** ở từng dòng. Luôn để ít nhất một tài khoản đang bật. Nếu không, hệ thống chấp nhận báo tiền về từ mọi tài khoản, và cấu hình sai bên SePay có thể đẩy giao dịch của đơn vị khác vào đây.

**Đối soát tự động (SePay)**: SePay là dịch vụ đọc biến động số dư từ ngân hàng rồi báo về hệ thống. Không bật thì mọi khoản chuyển khoản phải đối soát tay.

| Ô | Điền gì |
|---|---|
| Khoá API | Dán khi bên SePay chọn phương thức API Key |
| Bí mật HMAC | Dán khi bên SePay chọn HMAC-SHA256, là phương thức SePay khuyến nghị |
| Nhận thêm từ các số tài khoản này | Thường để trống. Dùng cho tài khoản đã ngừng nhận nhưng còn tiền đang trên đường về |

Bấm **Lưu**, rồi **Bật đối soát tự động**.

> Lưu ý: dán nhầm Khoá API vào ô Bí mật HMAC thì mọi thông báo từ SePay bị từ chối mà không có báo lỗi. Sau khi bật, chuyển thử một khoản nhỏ để chắc chắn tiền đã về.

## 3. Đối soát thu tiền

Đối soát là khớp từng khoản tiền ngân hàng báo về với đúng hoá đơn, để xác nhận tổ chức đã thanh toán. Bấm **Đối soát thu tiền** ở nhóm **Doanh thu**. Khách xem hoá đơn ở **Lịch sử hoá đơn** tại `/dashboard/settings/billing`.

![Đối soát thanh toán](/images/19-doi-soat.png)

| Bảng | Chứa gì | Làm gì |
|---|---|---|
| **Hóa đơn chờ đối soát** | Hoá đơn chưa khớp được với khoản tiền nào | Tìm khoản tiền tương ứng |
| **Hàng đợi giao dịch ngân hàng** | Khoản tiền về mà máy không tự khớp được | Đọc **Memo trích** (nội dung chuyển khoản) và **Chẩn đoán**, rồi khớp tay |

Lúc viết sổ tay chưa có giao dịch nào, nên chưa thấy các nút thao tác trong hai bảng này.

## 4. Doanh thu

Bấm **Doanh thu** để xem tổng kết, dành cho quản trị cấp cao theo dõi kinh doanh.

![Doanh thu nền tảng](/images/19-doanh-thu.png)

| Chỉ số | Nghĩa là |
|---|---|
| **MRR** | Doanh thu định kỳ mỗi tháng từ các gói thuê bao |
| **LTV** | Tổng tiền trung bình thu được từ một khách trong suốt thời gian họ dùng |
| **CAC** | Chi phí trung bình để có được một khách |
| **Bù đắp chi phí gói miễn phí** | Doanh thu trả phí bù được bao nhiêu phần chi phí của gói miễn phí |

Bảng **Các luồng doanh thu** tách tiền theo từng nguồn: thuê bao, phí API, hoa hồng, quảng cáo, đào tạo.

## 5. Chiến dịch tài trợ và ăn chia đối tác

| Màn hình | Dùng để |
|---|---|
| **Chiến dịch tài trợ** | Theo dõi các chiến dịch quảng cáo của doanh nghiệp: ngân sách, đã chi, lượt hiển thị, lượt nhấp |
| **Ăn chia đối tác** | Xem hoa hồng của đối tác, tính từ hoá đơn đã thanh toán. Đối tác được gắn vào tên miền phụ (chương 20) thì mới bắt đầu được tính |
