---
title: Câu hỏi thường gặp
order: 13
group: Hỗ trợ
---

# Câu hỏi thường gặp

Các câu hỏi dưới đây đến từ những tình huống thực tế khi dùng thử NacenCheck. Mỗi câu trả lời giải thích **vì sao** hệ thống hoạt động như vậy, để bạn tự xử lý được các trường hợp tương tự.

## Về thiết lập và danh mục

**Tôi không thấy mục Vùng trồng / Nhật ký canh tác / Thu hoạch trên menu.**
Menu hiển thị theo mô hình hoạt động doanh nghiệp đã khai. Vào `/dashboard/settings/preferences`, bật "Doanh nghiệp có hoạt động nông nghiệp". Nếu vẫn không thấy, kiểm tra vai trò của tài khoản bạn (chương 2, 3).

**Khai sản phẩm ở đâu để có nguyên liệu?**
Form sản phẩm không có ô nguyên liệu. Nguyên liệu của sản phẩm được khai ở **Định mức** (`/dashboard/bom`), và vật tư trong định mức lấy từ **Kho → Danh mục vật tư**. Thứ tự: vật tư → sản phẩm → định mức (chương 5, 6).

**Danh mục vật tư và Mẫu vật tư khác nhau thế nào?**
Hai danh mục riêng, không liên kết. Danh mục vật tư kho dùng cho định mức và phiếu kho; Mẫu vật tư dùng cho quy trình canh tác và HTX. Luồng tạo lô chỉ cần Danh mục vật tư kho (chương 5).

## Về tạo lô

**Ô chọn sản phẩm khi tạo lô không có sản phẩm tôi vừa khai.**
Sản phẩm chưa được công bố. Vào quy trình của sản phẩm và bấm **Xuất bản** (chương 6).

**Nút Tạo lô hàng mờ, không bấm được.**
Rê chuột vào nút để đọc lý do. Mỗi lần chỉ hiện một lỗi; sửa xong rê lại. Các lỗi thường gặp: chưa xác nhận cơ sở sản xuất ("Đúng, lô làm ở đây"), thiếu ô bắt buộc ở khối thông tin đặc thù ngành, chưa nhập số lượng (chương 8).

**Các nguyên liệu trong công thức hiện màu đỏ dù tôi đã điền lý do chưa gán đủ.**
Đúng thiết kế. Ô lý do chỉ cho phép tạo lô khi chưa gán nguồn, không tự gán nguyên liệu thay bạn. Bổ sung nguồn sau ở tab Nguồn đầu vào/đầu ra của lô (chương 8, 9).

**Ô "Chọn lô nguồn đã có" trống.**
Tài khoản chưa có lô nguyên liệu nào cho nguyên liệu đó. Ghi nhận nguyên liệu trước ở **Kho → Nguyên liệu**, hoặc đổi loại nguồn sang "Mua từ đơn vị khác" để khai nhà cung cấp ngay trong form (chương 7, 8).

## Về ghi công đoạn

**Tôi không bấm được bước tiếp theo.**
Các bước phải làm theo thứ tự quy trình, và chỉ người có vai trò được phân công mới ghi được bước đó. Kiểm tra bước trước đã ghi chưa và vai trò của bạn (chương 9).

**Tôi ghi sai một công đoạn, xóa thế nào?**
Không xóa được, để đảm bảo toàn vẹn dữ liệu. Dùng nghiệp vụ **đính chính**; trang truy xuất sẽ hiện nhãn "Đã đính chính" (chương 9).

**Đủ công đoạn rồi nhưng Hoàn thiện hồ sơ vẫn 0%.**
Công đoạn và hồ sơ là hai chỉ số khác nhau. Hoàn thiện hồ sơ đo chứng cứ đính kèm. Vào tab **Hồ sơ và chứng cứ** để tải tài liệu lên (chương 9).

## Về bán hàng

**Tôi đã bán 2 gói nhưng lô vẫn ghi 10 gói.**
Cột Số lượng là sản lượng lúc sản xuất, giữ nguyên làm mốc. Bán hàng tạo ra một **lô con** cho phần đã bán. Số còn lại xem ở tab Nguồn đầu vào/đầu ra → Phân bổ & theo dõi lưu thông (chương 11).

**Màn Tình trạng phân phối báo "chưa rõ 8 gói". Hàng bị mất à?**
Không. "Chưa rõ" nghĩa là hệ thống chưa có ghi nhận nơi số hàng đó đang nằm. Ghi bán tiếp, ghi chuyến vận chuyển hoặc nhập thành phẩm vào kho để làm rõ (chương 11).

**Làm sao chuyển lô sang trạng thái hoàn tất?**
Trạng thái lô thay đổi tự động theo tiến trình, không chuyển bằng tay. Lô con bán hết sẽ tự chuyển "Đã bán"; lô gốc còn hàng chưa phân bổ thì vẫn ở trạng thái đang xử lý/lưu thông (chương 11).

**Bán hàng rồi nhưng không thấy doanh thu.**
Doanh thu bán hàng xem ở **Tiêu thụ nội địa** (`/dashboard/distribution`). Nhớ khai **đơn giá** khi bán; ô này là tùy chọn, bỏ trống thì không có số tiền (chương 11).

## Về đăng nhập

**Đang làm thì bị đưa về trang đăng nhập.**
Phiên làm việc hết hạn. Đăng nhập lại, hệ thống đưa bạn về đúng trang đang mở. Dữ liệu đã lưu không mất; dữ liệu đang nhập dở trong form chưa lưu có thể mất, nên lưu thường xuyên.

## Cần hỗ trợ thêm?

- Tài liệu chính thức của NacenCheck: `https://docs.nacencheck.com`
- Mục **Hỗ trợ** trong ứng dụng (`/dashboard/support`).
- Theo tài liệu chính thức: hotline 0911 105 567 (8:00–17:30, thứ Hai đến thứ Sáu) hoặc Zalo OA NacenCheck.
