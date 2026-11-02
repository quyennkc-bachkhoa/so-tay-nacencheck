---
title: Làm quen cổng quản trị
order: 15
group: Quản trị
prerequisites:
  - text: "Có tài khoản quản trị hệ thống. Bố cục màn hình giống trang doanh nghiệp (chương 2)"
    link: /bat-dau/02-dang-nhap-va-giao-dien
  - text: "Biết sản phẩm, lô hàng, quy trình là gì (chương 1)"
    link: /mo-dau/01-khai-niem-co-ban
outcome: "Biết cổng quản trị dùng để làm gì, tìm được từng màn hình trên menu, và biết việc nào làm trước."
---

# Bước 1 – Làm quen cổng quản trị

Cổng quản trị là nơi đội vận hành NacenCheck quản lý toàn bộ nền tảng: các doanh nghiệp đang dùng, ngành, bộ luật tuân thủ, giá và thu tiền. Đây là một ứng dụng riêng ở `https://admin.nacencheck.com/admin`, không phải trang doanh nghiệp ở các chương trước.

| | Trang doanh nghiệp | Cổng quản trị |
|---|---|---|
| Địa chỉ | `https://trace.nacencheck.com` | `https://admin.nacencheck.com/admin` |
| Ai dùng | Nhân viên của một doanh nghiệp | Đội vận hành NacenCheck |
| Thấy dữ liệu của | Riêng doanh nghiệp đó | Mọi doanh nghiệp trên hệ thống |
| Tài khoản | Tài khoản doanh nghiệp | Tài khoản vai trò **Quản trị nền tảng** |


Trên màn hình, **tổ chức**, **đơn vị**, **doanh nghiệp** và **tenant** đều chỉ một khách hàng trên nền tảng. Dữ liệu của mỗi tổ chức tách biệt hoàn toàn với tổ chức khác.

Hai trang dùng chung dữ liệu. Cổng này đặt ngành, luật, giá, kết nối. Trang doanh nghiệp làm việc theo đó, rồi số liệu phát sinh chảy ngược về đây.

## 1. Luồng công việc

Đi theo thứ tự này khi mới nhận việc. Các bước sau dùng lại những gì đã khai ở bước trước.

```
1. Làm quen cổng quản trị          (chương này)
       ↓
2. Tổ chức và người dùng           (mở khách mới, gói dùng thử, tài khoản)
       ↓
3. Ngành, quy trình, biểu mẫu      (công đoạn chuẩn, biểu mẫu riêng của từng khách)
       ↓
4. Bộ luật tuân thủ                (soạn → chạy thử → duyệt → ký → xuất bản)
       ↓
5. Giá và thu tiền                 (bảng giá, tài khoản nhận tiền, đối soát)
       ↓
6. Tích hợp và tên miền            (cổng quốc gia, tên miền riêng, trợ lý AI)
       ↓
7. Giám sát và nội dung            (nhật ký kiểm toán, bài viết, liên hệ)
```

Khi đã quen, công việc thường chia theo tình huống:

| Khi nào | Làm gì | Đọc |
|---|---|---|
| Mỗi đầu ngày | Xem **Cần xử lý**, liên hệ mới, khoản tiền chờ đối soát | Mục 3 bên dưới, chương 19, 21 |
| Có khách mới | Tạo tổ chức, cấp dùng thử, tạo tài khoản, chỉnh quy trình nếu cần | Chương 16, 17 |
| Khách quên mật khẩu, nghỉ việc | Đặt lại hoặc khoá tài khoản | Chương 16 |
| Có ngành mới | Nạp ngành, thêm trường tạo lô | Chương 17 |
| Có quy định mới | Soạn bộ luật, chạy thử, gửi duyệt | Chương 18 |
| Đổi giá, làm khuyến mại | Bảng giá, ưu đãi, mã giảm giá | Chương 19 |
| Có sự cố, cần tra ai làm gì | Giám sát, nhật ký kiểm toán | Chương 21 |

## 2. Tìm màn hình trên menu

Menu trái chia 7 nhóm. Mục **Gần đây** ở trên cùng hiện các màn vừa mở. Bấm **Thu gọn tất cả** khi menu quá dài.

| Nhóm | Mục | Dùng để | Chương |
|---|---|---|---|
| Điều hành | **Tổng quan**, **Giám sát**, **Hiệu năng** | Xem sức khoẻ nền tảng | 15, 21 |
| Khách hàng | **Tổ chức**, **Bản dùng thử**, **Người dùng** | Quản lý khách và tài khoản | 16 |
| Khách hàng | **Tên miền phụ** | Cổng chạy trên tên miền riêng | 20 |
| Khách hàng | **Ăn chia đối tác** | Hoa hồng cho đối tác | 19 |
| Cấu hình nghiệp vụ | **Quy trình & gói ngành**, **Trường tạo lô theo ngành**, **Danh mục BVTV**, **Tính năng** | Cấu hình dùng chung theo ngành | 17 |
| Cấu hình nghiệp vụ | **Bảng điều khiển luật** | Bộ luật tuân thủ | 18 |
| Quản trị portal | **Quản lý bài viết**, **Quản lý liên hệ**, **Tham số cấu hình** | Nội dung trang công khai | 21 |
| Doanh thu | **Doanh thu**, **Đối soát thu tiền**, **Thanh toán**, **Giá & khuyến mại**, **Chiến dịch tài trợ** | Giá và tiền | 19 |
| Tích hợp | **Cấu hình tích hợp**, **Đồng bộ NBC**, **Kỹ năng trợ lý**, **Công cụ trợ lý** | Kết nối ra ngoài, trợ lý AI | 20 |
| Hệ thống | **Nhật ký kiểm toán** | Tra lại ai đã làm gì | 21 |

## 3. Màn hình Tổng quan

Đăng nhập xong, cổng mở màn hình **Tổng quan nền tảng**. Số liệu tự làm mới mỗi 60 giây, hoặc bấm **Làm mới** để lấy ngay.

![Tổng quan nền tảng](/images/15-tong-quan.png)

| Khối | Cho biết gì |
|---|---|
| **Doanh nghiệp hoạt động** | Số tổ chức đang hoạt động trên tổng số |
| **Đang dùng thử** | Số tổ chức đang dùng thử, và bao nhiêu sắp hết hạn trong 7 ngày |
| **Sự kiện 24 giờ** | Lượng công đoạn được ghi trong ngày, số lô mới, số người đăng nhập |
| **Bộ luật chờ duyệt** | Số bản chờ duyệt, và bao nhiêu bản đã quá 48 giờ |
| **Quy mô nền tảng** | Tổng doanh nghiệp, người dùng, lô hàng, sản phẩm, tài liệu, sự kiện |
| **Cần xử lý** | Việc tồn đọng cần làm ngay. Nếu trống thì hiện "Không có việc cần xử lý" |

Tập thói quen mở màn hình này đầu ngày. Nếu **Bộ luật chờ duyệt** có bản quá 48 giờ, hoặc **Đang dùng thử** có khách sắp hết hạn, xử lý trước các việc khác.

> Lưu ý: các ảnh trong nhóm Quản trị chụp từ hệ thống thật, lúc mới có ít dữ liệu nên nhiều danh sách còn trống. Thông tin của doanh nghiệp khác, số tài khoản ngân hàng và email quản trị đã được che.
