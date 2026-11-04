---
title: Giám sát địa bàn trên bản đồ, tem và thu hồi
order: 24
group: Cơ quan quản lý
prerequisites:
  - text: "Đăng nhập được, phạm vi tài khoản đúng địa bàn (chương 22)"
    link: /co-quan-quan-ly/22-lam-quen-cong-co-quan-quan-ly
  - text: "Biết tem chống giả và lệnh thu hồi của doanh nghiệp là gì (chương 9, 10)"
    link: /luong-chinh/10-ban-va-phan-phoi#_8-7-thu-hoi-lo
outcome: "Biết vùng nào nhiều vi phạm, doanh nghiệp nào đang thu hồi hàng, và tem nào bị nghi giả để chọn nơi kiểm tra."
---

# Bước 3 – Giám sát địa bàn

Chương 23 trả lời câu hỏi về **một** lô. Chương này nhìn **cả địa bàn** để chọn chỗ cần kiểm tra: tỉnh, xã nào nhiều vi phạm, lệnh thu hồi nào đang mở, tem nào bị nghi giả.

| Câu hỏi | Màn hình |
|---|---|
| Vùng nào có nhiều vi phạm, ít doanh nghiệp dùng truy xuất? | **Bản đồ vùng trồng** |
| Doanh nghiệp nào đang thu hồi hàng, đã báo tới đâu? | **Thu hồi** |
| Tem chống giả của doanh nghiệp trong tỉnh có bất thường không? | **Tem theo tỉnh** |

## 1. Bản đồ vùng trồng

Bấm **Bản đồ vùng trồng** ở menu trái. Màn **Bản đồ nhiệt quản lý nhà nước** tô màu từng tỉnh hoặc xã theo một chỉ số, để thấy ngay vùng nào nổi bật.

![Bản đồ nhiệt](/images/24-ban-do.png)

1. Chọn **Cấp hành chính**: **Tỉnh (34)** hoặc **Xã (~11.000)**. Cấp huyện không còn vì đã bỏ từ cải cách hành chính 2025.
2. Chọn **Chỉ số** muốn xem (bảng dưới).
3. Đổi **Từ ngày**, **Đến ngày** nếu cần. Mặc định là 30 ngày gần nhất.
4. Lọc thêm theo **Loại sự kiện** hoặc **Ngành** nếu chỉ quan tâm một nhóm.
5. Bấm **CSV** ở góc bản đồ để tải số liệu đang xem.

| Chỉ số | Dùng để |
|---|---|
| **Số vi phạm** | Tìm vùng nóng vi phạm để cử đoàn kiểm tra |
| **Số DN đang hoạt động** | Tìm tỉnh ít doanh nghiệp dùng truy xuất để vận động |
| **Tỉ lệ tuân thủ (%)** | So sánh mức tuân thủ giữa các vùng |
| **Tổng số sự kiện trace** | Xem vùng nào ghi công đoạn nhiều, vùng nào ít |
| **Số lô mới**, **Số lô xuất khẩu**, **Tổng sản lượng (kg)** | Xem quy mô sản xuất, xuất khẩu theo vùng |

Khung bên phải giải thích chỉ số đang chọn (**Mô tả chỉ số**), và cho biết số vùng đang hiện, giá trị nhỏ nhất, lớn nhất (**Tổng quan**).

> Lưu ý: số liệu trên bản đồ được tổng hợp lại mỗi 30 phút. Vi phạm vừa lập có thể chưa lên bản đồ ngay. Khi khung bên phải báo "Chưa có số liệu trong khoảng thời gian này", hãy nới khoảng ngày.

## 2. Theo dõi lệnh thu hồi

Bấm **Thu hồi** ở menu trái. Màn **Thu hồi sản phẩm** liệt kê lệnh thu hồi của doanh nghiệp trong địa bàn: cả lệnh doanh nghiệp tự nguyện lẫn lệnh cơ quan bắt buộc.

![Thu hồi sản phẩm](/images/24-thu-hoi.png)

| Phần | Cho biết gì |
|---|---|
| **Lệnh đang mở** | Số lệnh chưa xong |
| **Mức nghiêm trọng (Loại I)** | Số lệnh ở mức nặng nhất. Khác 0 thì xem ngay |
| Cột **Mức** | Loại I (nghiêm trọng), Loại II (trung bình)… |
| Cột **Trạng thái** | Lệnh đang ở bước nào, ví dụ **Đang báo đầu mối** |
| Cột **Lô liên đới** | Số lô liên quan tới lệnh thu hồi |
| Cột **Nguồn lệnh** | **DN tự nguyện** hay do cơ quan yêu cầu |

Mặc định màn chỉ hiện lệnh còn đang xử lý. Bỏ chọn **Chỉ việc đang xử** để xem cả lệnh đã xong. Chọn ô **Mọi mức** để lọc theo mức nghiêm trọng. Bấm **Tải lại** để lấy số mới nhất.

Màn này chỉ để theo dõi. Lệnh thu hồi do doanh nghiệp tạo trên trang của mình, xem [chương 10, mục 8.7](/luong-chinh/10-ban-va-phan-phoi#_8-7-thu-hoi-lo).

## 3. Giám sát tem chống giả

Bấm **Tem theo tỉnh** ở menu trái. Màn **Giám sát tem chống giả** liệt kê tem do doanh nghiệp trong tỉnh phát hành. Sở không duyệt tem trước khi phát hành, mà kiểm tra sau và gắn cờ tem nghi vấn.

![Giám sát tem chống giả](/images/24-tem-theo-tinh.png)

| Phần | Cho biết gì |
|---|---|
| **Tổng tem**, **Đang lưu hành**, **Đã gắn cờ** | Số tem theo tình trạng |
| Ô tìm kiếm | Tìm theo serial tem hoặc tên doanh nghiệp |
| **Tìm kiếm nâng cao** | Lọc theo tình trạng: Đã phát, Đang lưu hành, Đã gắn cờ, Tạm khoá, Đã hủy |
| Cột **Lượt quét** | Số lần tem được quét. Tem bị quét nhiều bất thường đáng kiểm tra |

Khi danh sách trống và báo "Chưa có DN nào trong tỉnh phát hành tem, hoặc tài khoản chưa gắn mã tỉnh", hãy kiểm tra phạm vi tài khoản trước (chương 22, mục 2).

Doanh nghiệp phát hành tem trên trang của mình, xem [chương 9](/luong-chinh/09-tem-va-truy-xuat).
