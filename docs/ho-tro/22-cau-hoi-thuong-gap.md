---
title: Câu hỏi thường gặp
order: 22
group: Hỗ trợ
---

# Câu hỏi thường gặp

Gặp vướng mắc thì tìm câu giống tình huống của bạn. Mỗi câu trỏ về mục có hướng dẫn chi tiết.

## Thiết lập và danh mục

**Không thấy mục Vùng nguyên liệu, Nhật ký canh tác, Thu hoạch trên menu.**
Mở `/dashboard/settings/preferences`, tick **DN có hoạt động nông nghiệp**. Vẫn không thấy thì kiểm tra vai trò của tài khoản (mục 1.3).

**Ô Kho trên phiếu nhập trống dù đã có nhà máy.**
Ô này chỉ nhận cơ sở có loại đúng là **Kho**. Hãy thêm một cơ sở loại Kho (mục 3.1).

**Ô Nhà cung cấp trên phiếu nhập trống.**
Khai đối tác ở `/dashboard/distribution/network` và đổi **Loại** thành **Nhà cung cấp** (mục 3.2).

**Khai nguyên liệu của sản phẩm ở đâu?**
Ở **Định mức**, không phải form sản phẩm. Thứ tự là vật tư, sản phẩm, rồi định mức (mục 4.2).

**Danh mục vật tư và Mẫu vật tư khác nhau thế nào?**
Danh mục vật tư dùng cho định mức và phiếu kho. Mẫu vật tư dùng cho quy trình canh tác và hợp tác xã (mục 3.3).

## Sản phẩm và tạo lô

**Ô chọn sản phẩm khi tạo lô không có sản phẩm vừa khai.**
Xuất bản quy trình của sản phẩm, rồi bấm **Kích hoạt** ở trang sản phẩm (mục 4.3, 4.4).

**Không tạo được lô, nút Tạo lô hàng mờ.**
Đọc dòng lý do ngay phía trên nút. Thường là chưa bấm **Đúng, lô làm ở đây** hoặc chưa gõ số lượng (mục 5.3).

**Đã khai nguồn mà vẫn báo Thiếu nguồn nguyên liệu.**
Hệ thống đối chiếu từng vật tư trong định mức. Điền ô **Lý do chưa khai đủ nguồn nguyên liệu** để tạo lô, rồi bổ sung nguồn sau (mục 5.3, 6.5).

**Nguồn Từ kho của tôi không có lô để chọn.**
Hàng trong kho phải có lô truy xuất mới chọn được. Trong lúc nút **Tạo lô truy xuất** đang lỗi, hãy dùng nguồn **Mua từ đơn vị khác** (mục 5.2).

## Ghi công đoạn

**Ghi nhật ký canh tác bị báo chưa được phân công.**
Quản trị cần phân công đúng tài khoản nhân viên vào thửa (mục 2.3).

**Ghi sai công đoạn thì xóa thế nào?**
Không xóa được. Bấm vào bước đã ghi rồi bấm **Đính chính**, bản gốc vẫn được giữ (mục 6.4).

**Đủ công đoạn nhưng Hoàn thiện hồ sơ vẫn 0%.**
Hai chỉ số này khác nhau. Hoàn thiện hồ sơ đo chứng từ đính kèm, hãy tải tài liệu lên tab **Hồ sơ và chứng cứ** (mục 6.5).

## Tem QR

**Số lần quét tăng dù chưa bán.**
Mỗi lần mở trang truy xuất đều được tính, kể cả khi bạn bấm **Xem như khách hàng** để kiểm tra (mục 7.1).

**Trang truy xuất báo dữ liệu thử nghiệm.**
Lô còn ở trạng thái **Nháp**. Bấm **Công bố lô** hoặc ghi công đoạn đầu tiên (mục 5.4).

## Bán hàng

**Bán hàng báo lô chưa được bán.**
Lô chưa qua đóng gói. Ghi công đoạn **Đóng gói** trước (mục 6.2, 8.1).

**Đã bán 2 gói mà lô vẫn ghi 10 gói.**
Đúng thiết kế. Số lượng là sản lượng lúc sản xuất, phần đã bán thành lô con. Số còn lại xem ở mục **Phân bổ & Theo dõi lưu thông lô hàng** (mục 8.2).

**Tình trạng phân phối báo chưa rõ 8 gói, hàng bị mất à?**
Không. Hệ thống chỉ chưa ghi nhận số hàng đó đang ở đâu (mục 8.3).

**Làm sao chuyển lô sang hoàn tất?**
Trạng thái đổi tự động theo tiến trình, không chuyển bằng tay (mục 8.1).

**Bán hàng rồi nhưng không thấy doanh thu.**
Khai **Đơn giá** khi bán, rồi xem ở `/dashboard/distribution` (mục 8.4).

## Đăng nhập

**Đang làm thì bị đưa về trang đăng nhập.**
Phiên làm việc đã hết hạn, hoặc tài khoản vừa đăng nhập ở nơi khác. Đăng nhập lại là được. Dữ liệu đã lưu không mất, phần đang nhập dở trong form có thể mất.

## Quản trị hệ thống

**Khách quên mật khẩu.**
Xác minh đúng người, rồi bấm **Đặt lại** ở `/admin/users` (chương 16, mục 7).

**Khách bị tính sai tiền.**
Các công cụ giá không cộng dồn. Dùng **Tra cứu giá theo doanh nghiệp** ở `/admin/billing/pricing` để xem con số thật (chương 19, mục 1).

**Doanh nghiệp bị chặn sai sau khi xuất bản bộ luật.**
Mở bộ luật, bấm **Mở dialog rollback** (chương 18, mục 5).

**Lô đã lên cổng quốc gia chưa.**
NBC đang chờ cấp quyền kết nối, nên dữ liệu chưa tự động gửi lên. Xem `/admin/nbc-sync` (chương 20, mục 2).

## Cần hỗ trợ thêm

- Tài liệu chính thức: `https://docs.nacencheck.com`
- Mục **Hỗ trợ** trong ứng dụng: `/dashboard/support`
- Hotline 0911 105 567 (8:00–17:30, thứ Hai đến thứ Sáu), Zalo OA NacenCheck, email lienhe@nacenx.com
