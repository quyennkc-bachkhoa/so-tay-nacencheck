---
title: Giám sát và nội dung
order: 21
group: Quản trị
prerequisites:
  - text: "Biết cách tìm màn hình trên menu (chương 15)"
    link: /quan-tri/15-tong-quan-cong-quan-tri
outcome: "Tra được ai đã làm gì, biết xem sức khoẻ hệ thống ở đâu, và cập nhật được nội dung trên trang công khai."
---

# Bước 7 – Giám sát và nội dung

Đây là phần việc lặp lại hằng ngày sau khi hệ thống đã chạy: theo dõi sức khoẻ nền tảng, tra lại lịch sử thao tác, chăm sóc nội dung và trả lời liên hệ.

| # | Việc | Màn hình | Khi nào |
|---|---|---|---|
| 1 | Xem sức khoẻ hệ thống | `/admin/monitoring` | Hằng ngày, khi có sự cố |
| 2 | Kiểm thử hiệu năng | `/admin/performance` | Chỉ khi có kế hoạch |
| 3 | Tra nhật ký kiểm toán | `/admin/audit-logs` | Khi cần biết ai làm gì |
| 4 | Viết, xuất bản bài | `/admin/portal/articles` | Khi có nội dung mới |
| 5 | Trả lời liên hệ | `/admin/portal/contacts` | Hằng ngày |
| 6 | Sửa thông tin liên hệ công khai | `/admin/portal/settings` | Khi đổi số điện thoại, địa chỉ |

## 1. Giám sát

Màn hình **Giám sát nền tảng** cho biết các số tổng: doanh nghiệp, người dùng, lô hàng, sự kiện, số người hoạt động và số sự kiện trong 24 giờ.

![Giám sát nền tảng](/images/21-giam-sat.png)

Bảng cảnh báo và tình trạng hạ tầng chưa có trong cổng quản trị. Bấm **Mở Grafana** để xem. Grafana là công cụ riêng, nếu chưa vào được thì hỏi đội kỹ thuật.

Dấu hiệu nên báo đội kỹ thuật: số sự kiện 24 giờ giảm mạnh so với mọi ngày trong khi không phải ngày nghỉ, hoặc nhiều khách cùng báo lỗi một lúc.

## 2. Hiệu năng

Màn hình **Đánh giá hiệu năng** chạy 14 bài kiểm thử sức chịu tải: tạo lô, ghi sự kiện, quét QR, ghi vào cơ sở dữ liệu.

![Đánh giá hiệu năng](/images/21-hieu-nang.png)

> Không bấm **Run All** hay nút chạy của từng bài trên hệ thống thật khi chưa có kế hoạch. Các bài này gọi API thật với khối lượng lớn, ví dụ tạo 50 lô, ghi 200 sự kiện, ghi trực tiếp 100.000 dòng vào cơ sở dữ liệu. Khách đang dùng có thể bị chậm, và dữ liệu sinh ra có thể phải dọn.

## 3. Nhật ký kiểm toán

Mọi thao tác trên hệ thống đều được ghi lại ở **Nhật ký kiểm toán**, nhóm **Hệ thống**: ai, lúc nào, làm gì, trên dữ liệu nào, từ địa chỉ IP nào. Dùng khi khách hỏi "ai đã sửa cái này".

![Nhật ký kiểm toán](/images/21-nhat-ky.png)

1. Gõ tên người dùng hoặc tài nguyên vào ô tìm kiếm, hoặc lọc theo hành động.
2. Bấm **Dữ liệu** ở dòng cần xem để thấy chi tiết thay đổi.

| Hành động | Nghĩa là |
|---|---|
| **VERIFY** ở `auth_session` | Một lần đăng nhập |
| **Tạo mới** ở `epcis_event` | Một lần ghi công đoạn ([chương 8](/luong-chinh/08-chi-tiet-lo-va-ghi-cong-doan)) |
| **Tạo mới** ở `distribution_transaction` | Một lần bán hàng ([chương 10](/luong-chinh/10-ban-va-phan-phoi)) |

Muốn xem riêng một khách thì vào chi tiết tổ chức, tab **Ghi chú & hoạt động** (chương 16).

> Lưu ý: nhật ký chứa địa chỉ IP và thông tin cá nhân. Chỉ tra khi có lý do công việc, và làm mờ trước khi gửi ảnh ra ngoài.

## 4. Bài viết trên trang công khai

Bấm **Quản lý bài viết** ở nhóm **Quản trị portal**. Trang công khai chỉ hiện các phiên bản đã xuất bản và còn hiệu lực.

![Quản lý bài viết](/images/21-bai-viet.png)

**Viết bài mới**

1. Bấm **Thêm bài viết**.
2. Điền theo bảng bên dưới.
3. Bấm **Lưu bản nháp**, rồi gửi duyệt để xuất bản.

![Thêm bài viết](/images/21-them-bai.png)

| Ô | Điền gì |
|---|---|
| Tiêu đề, Tóm tắt | Tóm tắt nên ngắn gọn |
| Nội dung | Soạn trên thanh công cụ, tối đa 30.000 ký tự |
| Loại nội dung | Mặc định là Bài viết |
| Slug | Phần cuối đường dẫn, không dấu, ví dụ `truy-xuat-gao` |
| Ảnh đại diện | Bấm **Tải ảnh lên**: PNG, JPEG hoặc WebP, tối đa 1 MB. Lưu bài để áp dụng ảnh |
| URL ảnh, Mô tả ảnh | Dùng ảnh có sẵn trên mạng thay vì tải lên, và mô tả nội dung ảnh |
| URI bằng chứng consent, Consent hết hạn | Bằng chứng được phép dùng hình ảnh hoặc nội dung, và ngày hết hạn của quyền đó |
| Nội dung tự hết hạn | Không bắt buộc, đến ngày thì bài tự ngừng hiện |

**Bài đã xuất bản**: bấm **Thao tác** ở dòng bài.

| Mục | Dùng khi |
|---|---|
| **Xem trước** | Xem bài như người đọc |
| **Sửa** | Sửa nội dung |
| **Ẩn khẩn cấp** | Bài có sai sót nghiêm trọng, cần gỡ ngay |
| **Thu hồi consent** | Người trong ảnh hoặc chủ nội dung rút quyền sử dụng |

Cột **Quyền sử dụng** hiện **Chưa có bằng chứng** nghĩa là chưa lưu bằng chứng được phép dùng. Với ảnh người thật hoặc tài liệu của bên khác, nên có bằng chứng trước khi xuất bản.

## 5. Trả lời liên hệ

Khách để lại thông tin trên trang giới thiệu thì hiện ở **Quản lý liên hệ**.

![Quản lý liên hệ](/images/21-lien-he.png)

Cam kết phản hồi trong 1 ngày làm việc, nên xem cột **Hạn phản hồi** mỗi sáng. Hệ thống nhắc sau 60 ngày, và tự đóng yêu cầu sau 90 ngày không có hoạt động.

Lúc viết sổ tay chưa có liên hệ nào, nên chưa thấy các nút xử lý trong bảng.

## 6. Thông tin liên hệ công khai

Bấm **Tham số cấu hình** để xem thông tin hiện trên trang công khai: tên đơn vị, địa chỉ, email, số điện thoại, giờ làm việc, Zalo, Messenger, số nhận SMS hỗ trợ.

![Tham số cấu hình](/images/21-tham-so.png)

1. Bấm **Chỉnh sửa cấu hình**.
2. Sửa các ô cần đổi. Địa chỉ và giờ làm việc để trống thì không hiển thị.
3. Tick hoặc bỏ tick **Mở form liên hệ công khai** để bật, tắt form liên hệ.
4. Bấm **Lưu cấu hình**.

Sau khi lưu, mở trang công khai để kiểm tra lại. Sai số điện thoại nghĩa là khách không liên lạc được.
