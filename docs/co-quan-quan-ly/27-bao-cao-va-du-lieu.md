---
title: Báo cáo kỳ, dữ liệu và nhật ký truy cập
order: 27
group: Cơ quan quản lý
prerequisites:
  - text: "Đã có vi phạm, thanh tra trong kỳ cần báo cáo (chương 25, 26)"
    link: /co-quan-quan-ly/26-vi-pham-va-quyet-dinh
outcome: "Lấy được báo cáo tháng, quý, năm; biết dữ liệu nào là bảo mật; tra lại được ai đã truy cập gì."
---

# Bước 6 – Báo cáo kỳ, dữ liệu và nhật ký truy cập

Chương cuối gom các việc tổng hợp và kiểm soát: báo cáo định kỳ gửi lên trên, quy tắc bảo mật dữ liệu doanh nghiệp, nhật ký truy cập của cán bộ, và trợ lý AI để hỏi nhanh.

## 1. Báo cáo kỳ

Bấm **Báo cáo kỳ** ở menu trái. Màn **Báo cáo tháng / quý / năm** liệt kê các báo cáo đã có.

![Báo cáo kỳ](/images/27-bao-cao-ky.png)

Cổng tự tạo báo cáo lúc 02:00 ngày 1 hằng tháng, không cần làm gì. Bấm vào một báo cáo để xem chi tiết và tải xuống. Lọc theo **Kỳ báo cáo** hoặc **Trạng thái báo cáo** khi danh sách dài.

### Tạo báo cáo ngoài kỳ

Dùng khi cần số liệu một khoảng thời gian bất kỳ, ví dụ để họp giao ban.

1. Bấm **Tạo báo cáo mới**. Khung **Tạo báo cáo ad-hoc** mở ra.
2. Chọn **Template báo cáo** (bảng dưới).
3. Chọn **Từ ngày**, **Đến ngày**.
4. Bấm **Tạo báo cáo**.
5. Đợi khoảng 10 giây rồi bấm **Làm mới**. Báo cáo chuyển từ **Đang tạo** sang sẵn sàng thì tải xuống được.

![Chọn mẫu báo cáo](/images/27-tao-bao-cao.png)

| Mẫu | Dành cho |
|---|---|
| **Báo cáo vi phạm thương mại tháng** | Lĩnh vực công thương |
| **Báo cáo quyết định Sở NN&MT tháng** | Quyết định của Sở Nông nghiệp và Môi trường |
| **Báo cáo vi phạm nông sản tháng** | Lĩnh vực nông sản |
| **Báo cáo vi phạm Y tế tháng** | Lĩnh vực y tế |

Mục **Đối soát tuân thủ** ở menu hiện mở cùng màn Báo cáo kỳ.

## 2. Phân hạng dữ liệu

Bấm **Phân hạng dữ liệu** ở menu trái. Màn **Phân loại và bảo vệ dữ liệu cá nhân** cho biết mỗi trường dữ liệu doanh nghiệp ghi thuộc tầng bảo mật nào, theo Nghị định 13/2023/NĐ-CP.

![Phân hạng dữ liệu](/images/27-phan-hang-du-lieu.png)

| Tầng | Ai được xem |
|---|---|
| **Công khai** | Người tiêu dùng khi quét mã QR |
| **Cơ quan nhà nước** | Cán bộ thanh tra, quản lý |
| **Nội bộ doanh nghiệp** | Chỉ doanh nghiệp, là thông tin bảo mật |

Bấm một tầng để chỉ xem các trường thuộc tầng đó, bấm **Xem tất cả** để xem lại toàn bộ. Mỗi dòng ghi loại sự kiện (ví dụ `APPLY_PESTICIDE` là phun thuốc), đường dẫn trường và tầng của trường đó.

Dùng màn này khi doanh nghiệp hỏi vì sao cán bộ thấy, hay không thấy, một thông tin nào đó. Màn chỉ để xem, không đổi được tầng.

## 3. Sổ vết truy cập

Bấm **Sổ vết truy cập** ở menu trái. Màn **Nhật ký kiểm toán** ghi lại hoạt động trên hệ thống: ai đăng nhập, ai tạo, xác minh gì, lúc nào.

![Nhật ký kiểm toán](/images/27-so-vet.png)

1. Gõ tên người dùng, tổ chức hoặc chi tiết vào ô tìm kiếm.
2. Chọn loại hành động ở ô **All Actions**. Bấm **Tìm kiếm nâng cao** để chọn thêm **Khoảng thời gian**.
3. Bấm **Lọc**.
4. Bấm **Xuất CSV** để tải nhật ký đang xem.

| Cột | Nghĩa |
|---|---|
| **Inspection ID** | Số thứ tự bản ghi |
| **Inspector** | Mã người thực hiện |
| **Batch ID** | Mã lô liên quan, nếu có |
| **Action** | Hành động, ví dụ `VERIFY` (xác minh, đăng nhập), `CREATE` (tạo mới) |
| **Finding** | Chi tiết kỹ thuật của hành động |
| **Timestamp** | Thời điểm, giờ Việt Nam |

> Lưu ý: cột **Finding** chứa địa chỉ IP và thông tin trình duyệt của người đăng nhập. Không gửi file CSV ra ngoài cơ quan. Trên ảnh, cột này đã được che.

## 4. Trợ lý AI

Bấm **Trợ lý AI** ở menu trái để hỏi nhanh bằng câu thường về doanh nghiệp, vi phạm, thu hồi và lô hàng trong địa bàn.

![Trợ lý AI](/images/27-tro-ly-ai.png)

1. Bấm một câu hỏi gợi ý, hoặc gõ câu hỏi vào ô dưới cùng, ví dụ "Doanh nghiệp Hạt Vàng Việt có lô nào đang bị thu hồi không".
2. Bấm **Gửi**.

> Lưu ý: trợ lý trả lời bằng văn bản tự sinh. Trước khi đưa con số nào vào báo cáo hay biên bản, hãy đối chiếu lại trên màn hình gốc (Tổng quan, Tra cứu lô, Vi phạm & CAPA).
