---
title: Ngành, quy trình, biểu mẫu
order: 17
group: Quản trị
prerequisites:
  - text: "Có ít nhất một tổ chức để cấu hình (chương 16)"
    link: /quan-tri/16-to-chuc-va-nguoi-dung
  - text: "Hiểu quy trình và công đoạn phía doanh nghiệp (chương 6)"
    link: /luong-chinh/06-san-pham-dinh-muc-quy-trinh
outcome: "Biết thay đổi đặt ở tầng nào, thêm được ngành, công đoạn, biểu mẫu riêng mà không cần sửa phần mềm."
---

# Bước 3 – Ngành, quy trình, biểu mẫu

Mỗi loại hàng đi qua các công đoạn khác nhau: gạo có xay xát, thuốc có kiểm nghiệm. Thay vì viết phần mềm cho từng ngành, NacenCheck khai các công đoạn thành dữ liệu cấu hình. Vì vậy thêm ngành, công đoạn hay ô nhập đều áp dụng ngay, không cần dừng hệ thống hay viết code.

Trước khi sửa, xác định thay đổi thuộc tầng nào. Sửa sai tầng thì hoặc ảnh hưởng tới cả ngành, hoặc không có tác dụng.

| Muốn đổi | Tác động tới | Làm ở |
|---|---|---|
| Công đoạn chuẩn của một ngành | Mọi tổ chức trong ngành | **Quy trình & gói ngành** (mục 1–3) |
| Công đoạn, biểu mẫu của một khách | Chỉ tổ chức đó | **Cấu hình Quy trình & Form** (mục 4–5) |
| Ô đặc thù trong form tạo lô | Mọi tổ chức trong ngành | **Trường tạo lô theo ngành** (mục 6) |
| Danh sách thuốc bảo vệ thực vật | Toàn hệ thống | **Danh mục BVTV** (mục 7) |

## 1. Xem các ngành đang có

Bấm **Quy trình & gói ngành** ở nhóm **Cấu hình nghiệp vụ**. Mỗi dòng là một gói ngành: bộ công đoạn chuẩn của ngành đó, được ký số để không ai sửa lén được. Doanh nghiệp nạp bộ này bằng nút **Áp dụng quy trình chuẩn ngành** ([chương 6](/luong-chinh/06-san-pham-dinh-muc-quy-trinh)), và lô đã tạo vẫn giữ quy trình đã ghim.

![Ngành và công đoạn chuẩn](/images/17-goi-nganh.png)

| Nút | Dùng để |
|---|---|
| **Chi tiết** | Xem, sửa công đoạn của ngành |
| **Xác minh** | Kiểm tra chữ ký của gói còn đúng không |
| **Nạp lại** | Nạp lại gói ngành. Có thể ảnh hưởng tới mọi tổ chức trong ngành, nên chỉ làm khi đã rõ lý do |

## 2. Nạp ngành mới

1. Bấm **Nạp ngành mới**.
2. Ở **Bắt đầu từ**, tìm một ngành gần giống để đỡ phải khai lại từ đầu, hoặc để **Trống**.
3. Điền form theo bảng bên dưới. Người quen kỹ thuật có thể chuyển sang tab **YAML**.
4. Bấm **Nạp ngành**. Hệ thống tự đóng gói, ký và nạp, ngành hiện ngay trong danh sách.

![Nạp ngành mới](/images/17-nap-nganh.png)

| Ô | Điền gì |
|---|---|
| Tên ngành (tiếng Việt) | Bắt buộc |
| Tên ngành (tiếng Anh) | Không bắt buộc |
| Mã ngành | Bắt buộc. Chữ hoa, số, gạch dưới, ví dụ `AGRI_TEA_VN` |
| Phiên bản | Bắt buộc, ngành mới để `1.0.0` |
| Nhà phát hành | Đơn vị đứng tên gói |
| Mã GPC (GS1) | Đúng 8 chữ số, hoặc để trống |
| Gói nền | Ngành mới kế thừa các bước chung của gói được chọn |
| GS1 và văn bản pháp lý | Phiên bản chuẩn EPCIS, CBV, Digital Link, các loại sự kiện GS1 hỗ trợ và văn bản pháp lý liên quan |

Trong đó, GS1 là tổ chức ban hành chuẩn mã vạch quốc tế, còn EPCIS là chuẩn của họ để ghi lại sự kiện hàng hoá. Khai đúng thì dữ liệu mới liên thông được với hệ thống khác.

## 3. Sửa công đoạn của ngành

Bấm **Chi tiết** ở dòng ngành. Bảng **Loại sự kiện + vocab nhật ký** liệt kê mọi công đoạn: tên tiếng Việt, pha (thu hoạch, chế biến, đóng gói...), có bắt buộc không, thứ tự.

![Chi tiết ngành Nông nghiệp](/images/17-chi-tiet-nganh.png)

> Bắt buộc bấm **Ký lại** sau khi sửa mã GPC, vì giá trị mới làm chữ ký cũ hết hiệu lực. Bấm **Nhân bản** nếu muốn lấy ngành này làm gốc cho ngành mới, **Tải YAML** để lưu bản sao.

## 4. Chỉnh quy trình cho riêng một tổ chức

Dùng khi khách có công đoạn mà ngành của họ chưa có, ví dụ thêm bước lên men.

1. Mở **Tổ chức**, bấm **Chi tiết** ở dòng khách.
2. Bấm **Cấu hình Quy trình & Form**.
3. Xem **Trình tự quy trình (đã ghép)**: danh sách công đoạn thực tế của khách, ghép từ ngành và các bước riêng. Cột **Nguồn** cho biết bước đó lấy từ đâu.

![Cấu hình Quy trình và Form](/images/17-quy-trinh-to-chuc.png)

> Lưu ý: ô **Ngành áp dụng** có thể khác ngành sản phẩm của khách đang chạy. Ví dụ Hạt Vàng Việt hiện `AGRICULTURE`, còn sản phẩm thuộc `AGRI_RICE`. Xem ngành ở trang sản phẩm của khách trước khi sửa.

**Thêm một công đoạn**

1. Cuộn xuống **Các bước tuỳ chỉnh đã thêm**, bấm **Thêm bước tuỳ chỉnh**.
2. Điền form theo bảng bên dưới.
3. Bấm **Thêm bước**.

![Thêm bước tuỳ chỉnh](/images/17-buoc-tuy-chinh.png)

| Ô | Điền gì |
|---|---|
| Chèn sau bước chuẩn | Công đoạn đứng ngay trước bước mới |
| Loại mã sự kiện | Dùng mã đã đăng ký, hoặc khai mã mới |
| Mã sự kiện | Viết hoa, ví dụ `FERMENTATION` |
| Bắt buộc hoàn thành bước này | Tick nếu không được bỏ qua |

Mã mới phải gắn vào một trong các loại sự kiện chuẩn của GS1 EPCIS để dữ liệu liên thông. Lưu xong dùng được ngay.

## 5. Thiết kế biểu mẫu của một công đoạn

Biểu mẫu là các ô người dùng điền khi ghi công đoạn đó, ví dụ thu hoạch cần sản lượng và độ ẩm. Form thật của khách ([chương 8](/luong-chinh/08-chi-tiet-lo-va-ghi-cong-doan)) còn có các ô lấy từ ngành và ô khách tự thêm trong quy trình.

1. Trong **Cấu hình Quy trình & Form**, bấm **Form** ở dòng công đoạn.
2. Bấm một loại ô ở **Bảng widget**, hoặc kéo thả vào danh sách.
3. Trong khung **Sửa trường**, đặt **Nhãn hiển thị (VI)**, tick **Bắt buộc nhập** nếu cần, rồi bấm **Lưu**.
4. Xem kết quả ở khung **Xem trước**. Kéo để đổi thứ tự trong **Trường đã thêm**.
5. Bấm **Xuất bản**.

![Thiết kế biểu mẫu](/images/17-dung-form.png)

Có 15 loại ô: văn bản 1 dòng, văn bản nhiều dòng, số, ngày, ngày giờ, chọn 1 (thả xuống hoặc radio), chọn nhiều, hộp kiểm, tải file, chụp ảnh kèm GPS, vị trí GPS, bảng lặp, tra cứu danh mục (BVTV, GLN...), và JSON thô.

> Lưu ý: chưa bấm **Xuất bản** thì biểu mẫu chưa lưu, tải lại trang là mất. Nút **Phiên bản** để xem các bản đã xuất bản trước đó.

## 6. Thêm trường vào form tạo lô

Dùng khi một ngành cần thêm thông tin ngay lúc tạo lô, ví dụ giống lúa, vụ mùa. Các ô này hiện trong form tạo lô của khách ([chương 7](/luong-chinh/07-nguon-nguyen-lieu-va-tao-lo)).

1. Bấm **Trường tạo lô theo ngành** ở nhóm **Cấu hình nghiệp vụ**.
2. Chọn ngành ở ô **Mã / Danh mục ngành**, rồi bấm **Tải trường**.
3. Bấm **Thêm trường**, điền thông tin ô.
4. Bấm **Lưu thông tin**. Lưu xong áp dụng ngay.

![Trường tạo lô theo ngành](/images/17-truong-tao-lo.png)

Ngành chưa tùy biến sẽ dùng bộ trường mặc định của nền tảng.

## 7. Danh mục thuốc bảo vệ thực vật

Danh sách thuốc được phép dùng, lấy theo danh mục của Bộ Nông nghiệp (MARD). Trợ lý AI dựa vào đây để kiểm tra hoạt chất khi nông hộ ghi phun thuốc ([chương 14](/hop-tac-xa/14-hop-tac-xa)).

![Danh mục BVTV](/images/17-bvtv.png)

| Việc | Cách làm |
|---|---|
| Cập nhật hàng loạt | Bấm **Import từ MARD CSV** |
| Thêm một thuốc | Bấm **Thêm sản phẩm** |
| Thuốc bị cấm | Bấm **Cấm** ở dòng thuốc |
| Thuốc bị hạn chế | Bấm **Hạn chế** ở dòng thuốc |
| Gỡ cấm, gỡ hạn chế | Bấm **Khôi phục** |

Đối chiếu với văn bản của cơ quan nhà nước trước khi đổi trạng thái, vì danh mục này dùng chung cho toàn hệ thống.

## 8. Bật, tắt tính năng

Màn hình **Tính năng** dùng để bật hoặc tắt một tính năng cho toàn hệ thống hay cho từng tổ chức, mỗi cờ ghi rõ phạm vi và người sửa cuối. Hiện danh sách còn trống và nút **Cờ mới** đang bị khoá.
