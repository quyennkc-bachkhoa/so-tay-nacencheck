---
title: Tổ chức và người dùng
order: 16
group: Quản trị
prerequisites:
  - text: "Đăng nhập được cổng quản trị (chương 15)"
    link: /quan-tri/15-tong-quan-cong-quan-tri
outcome: "Mở được tổ chức mới, cấp dùng thử, tạo tài khoản, và biết thao tác nào dùng khi khách gặp vấn đề."
---

# Bước 2 – Tổ chức và người dùng

Doanh nghiệp có thể tự đăng ký tài khoản, nên phần lớn việc ở đây là theo dõi và hỗ trợ. Chỉ tạo tổ chức bằng tay khi khách nhờ làm giúp.

| # | Việc | Màn hình | Khi nào |
|---|---|---|---|
| 1 | Xem danh sách tổ chức | `/admin/tenants` | Thường xuyên |
| 2 | Tạo tổ chức | `/admin/tenants` | Khách nhờ tạo giúp |
| 3 | Xem chi tiết, đổi gói | `/admin/tenants/<id>` | Khi hỗ trợ khách |
| 4 | Siết quy định của tổ chức | `/admin/tenants/<id>` | Khi khách yêu cầu |
| 5 | Cấp dùng thử | `/admin/trials` | Khi có khách muốn thử gói cao hơn |
| 6 | Tạo, khoá tài khoản | `/admin/users` | Khi khách nhờ |

## 1. Xem danh sách tổ chức

Bấm **Tổ chức** ở nhóm **Khách hàng**. Lọc theo gói, trạng thái, hoặc bấm **Xuất Excel** để lấy danh sách.

![Danh sách tổ chức](/images/16-to-chuc.png)

Cột **Sự kiện/Tháng** cho biết khách có đang dùng thật hay không. Khách còn ở 0 sau vài tuần thường đang vướng ở đâu đó, nên chủ động hỏi thăm.

## 2. Tạo tổ chức

1. Bấm **Thêm tổ chức**.
2. Điền theo bảng bên dưới.
3. Bấm **Tạo mới**.
4. Nếu có điền email, chép ngay mật khẩu tạm. Hệ thống chỉ hiện một lần.

![Form Thêm tổ chức](/images/16-them-to-chuc.png)

| Ô | Điền gì |
|---|---|
| Tên công ty | Bắt buộc |
| Ngành | Bỏ trống thì mặc định là Nông nghiệp. Ngành quyết định công đoạn chuẩn của khách (chương 17) |
| Gói | Bắt buộc. Xem giá các gói ở chương 19 |
| Email quản trị | Có email thì hệ thống tạo luôn tài khoản quản trị |
| Mã số thuế, Số điện thoại, Địa chỉ chi tiết | Không bắt buộc |

## 3. Xem chi tiết một tổ chức

Bấm **Chi tiết** ở dòng tổ chức. Đây là màn hình dùng nhiều nhất khi hỗ trợ khách.

![Chi tiết tổ chức](/images/16-chi-tiet-to-chuc.png)

| Tab | Có gì |
|---|---|
| **Tổng quan** | Thông tin doanh nghiệp, gói dịch vụ, **Cổng vai theo công đoạn** |
| **Sử dụng & thanh toán** | Điểm **Sức khoẻ khách hàng**, số lô theo tháng, danh sách nhân viên, hoá đơn |
| **Ghi chú & hoạt động** | Ghi chú nội bộ chỉ đội hỗ trợ thấy, nhật ký hoạt động của tổ chức |
| **Vùng nguy hiểm** | Các thao tác khó hoàn tác, xem mục 5 |

![Tab Sử dụng và thanh toán](/images/16-su-dung.png)

Hai chỗ dễ lệch với trang doanh nghiệp:

- **Thông tin pháp lý:** tên pháp lý, mã số thuế ở đây chưa cập nhật theo hồ sơ khách tự khai. Cần số đúng thì xem hồ sơ của khách ([chương 3](/luong-chinh/03-thiet-lap-doanh-nghiep)).
- **Số lô:** danh sách lô của khách không tính lô vật tư, nên có thể ít hơn số ở đây.

**Sửa** và **Đổi gói** cùng mở một khung, có 2 ô: **Tên doanh nghiệp** và **Gói dịch vụ**.

Sau mỗi lần trao đổi với khách, ghi một dòng ở **Ghi chú nội bộ** để người trực sau nắm được chuyện gì đã xảy ra.

**Đăng nhập hộ** cho phép vào hệ thống dưới danh nghĩa tổ chức để xem đúng thứ khách đang thấy. Chỉ dùng khi khách nhờ, vì bạn sẽ thấy toàn bộ dữ liệu của họ.

## 4. Siết quy định của tổ chức

Hai cài đặt này mặc định để lỏng, nên chỉ đổi khi khách yêu cầu.

**Ai được ghi công đoạn nào**

Trong quy trình sản phẩm, mỗi bước có thể khai vai phụ trách ([chương 6](/luong-chinh/06-san-pham-dinh-muc-quy-trinh)). Khối **Cổng vai theo công đoạn** ở tab **Tổng quan** quyết định hệ thống xử lý thế nào khi người ghi không đúng vai đó.

![Cổng vai theo công đoạn](/images/16-cong-vai.png)

| Mức | Khi người ghi không đúng vai |
|---|---|
| **Theo mức chung của hệ** | Chạy theo cấu hình toàn hệ thống, là mặc định |
| **Tắt** | Không kiểm tra, ai trong đơn vị cũng ghi được mọi công đoạn |
| **Cảnh báo** | Vẫn ghi được nhưng để lại vết. Bật mức này trước để biết dữ liệu vai còn thiếu ở đâu |
| **Siết** | Chặn không cho ghi. Chỉ bật khi mọi bước đã khai vai đầy đủ |

Nên đi từ **Cảnh báo** sang **Siết**, không nhảy thẳng, vì khách sẽ bị chặn ghi ngay giữa ca sản xuất.

**Cài đặt Truy xuất & Tem**

Bấm **Cài đặt Truy xuất & Tem** trên trang chi tiết tổ chức.

![Cài đặt Truy xuất và Tem](/images/16-cai-dat-truy-xuat.png)

| Cài đặt | Tác dụng |
|---|---|
| **Bật chặn cứng** | Mặc định lệnh sản xuất chứa lô bị giữ hoặc bị loại chỉ cảnh báo và hỏi lý do. Bật lên thì chặn hẳn |
| **Tiền tố mã lô** | Điền tiền tố để hệ thống tự cấp mã lô dạng `PREFIX-YYMMDD-001` khi người dùng để trống mã. Chỉ gồm A–Z, 0–9, dấu gạch, tối đa 16 ký tự. Xoá trống thì trở lại nhập tay. Khách thấy ở form tạo lô ([chương 7](/luong-chinh/07-nguon-nguyen-lieu-va-tao-lo)) |

## 5. Vùng nguy hiểm

Tab **Vùng nguy hiểm** gom các thao tác ảnh hưởng tới toàn bộ tổ chức. Nút **Tạm ngưng** ở đầu trang cũng thuộc nhóm này.

![Vùng nguy hiểm](/images/16-vung-nguy-hiem.png)

| Thao tác | Hệ quả | Dùng khi |
|---|---|---|
| **Tạm ngưng ngay** | Mọi người của tổ chức không đăng nhập được nữa. Phải nhập lý do | Khách vi phạm hoặc quá hạn thanh toán |
| **Bắt đầu xoá** | Xoá vĩnh viễn tổ chức và toàn bộ dữ liệu liên quan | Khách yêu cầu xoá, đã có xác nhận bằng văn bản |
| **Đặt lại khoá** | Toàn bộ khoá API cũ ngừng hoạt động, khách phải tạo khoá mới | Nghi lộ khoá |
| **Buộc đăng xuất** | Kết thúc ngay mọi phiên đang đăng nhập | Nghi lộ tài khoản |

> Không bấm thử các nút ở đây trên hệ thống thật. **Bắt đầu xoá** không hoàn tác được, và tem đã in của khách sẽ không còn dữ liệu để tra.

## 6. Cấp dùng thử

Bấm **Bản dùng thử** ở nhóm **Khách hàng** để theo dõi các tổ chức đang dùng thử: còn bao nhiêu ngày, sẽ chuyển sang gói nào. Mỗi thao tác gia hạn, chuyển đổi, hủy đều được lưu vết. Nút **Gửi nhắc** dùng để nhắc các tổ chức được tick chọn trong bảng.

1. Bấm **Cấp dùng thử**.
2. Điền theo bảng bên dưới.
3. Bấm **Cấp dùng thử** ở cuối khung.

![Cấp dùng thử](/images/16-dung-thu.png)

| Ô | Điền gì |
|---|---|
| Doanh nghiệp | Gõ ít nhất 2 ký tự để tìm |
| Gói dùng thử | Gói khách muốn thử, mặc định Pro |
| Số ngày dùng thử | Từ 1 đến 90, mặc định 14 |
| Lý do | Bắt buộc. Lý do được ghi vào nhật ký kiểm toán và không xoá được |

Mỗi doanh nghiệp chỉ có một kỳ dùng thử đang chạy.

## 7. Tạo và khoá tài khoản

Bấm **Người dùng** ở nhóm **Khách hàng** để xem tài khoản của mọi tổ chức. Lọc theo vai trò, tổ chức, trạng thái.

![Quản lý người dùng](/images/16-nguoi-dung.png)

**Tạo tài khoản**

1. Bấm **Mời người dùng**.
2. Điền **Email**, chọn **Vai trò** và **Tổ chức**.
3. Bấm **Gửi lời mời**.
4. Chép mật khẩu tạm và tự gửi cho người dùng. Hệ thống chưa gửi email tự động.

![Mời người dùng](/images/16-moi-nguoi-dung.png)

**Khi khách gặp vấn đề**

| Tình huống | Làm gì |
|---|---|
| Quên mật khẩu | Xác minh đúng người, rồi bấm **Đặt lại** |
| Nhân viên nghỉ việc | Bấm **Khoá** để họ không vào được nữa |

> Lưu ý: **Đặt lại** và **Khoá** ảnh hưởng ngay tới việc đăng nhập của người đó, nên làm đúng quy trình hỗ trợ và xác minh người yêu cầu trước. Tài khoản do doanh nghiệp tự quản thì ưu tiên để quản trị viên của họ tự xử lý ở `/dashboard/users`.
