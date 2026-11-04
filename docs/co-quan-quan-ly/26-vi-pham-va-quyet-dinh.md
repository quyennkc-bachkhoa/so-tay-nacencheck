---
title: Vi phạm, CAPA và quyết định xử lý
order: 26
group: Cơ quan quản lý
prerequisites:
  - text: "Biết mã lô có dấu hiệu sai phạm (chương 23)"
    link: /co-quan-quan-ly/23-tra-cuu-lo-va-truy-vet
  - text: "Có kết quả kiểm tra hoặc bằng chứng sai phạm (chương 25)"
    link: /co-quan-quan-ly/25-thanh-tra
outcome: "Ghi được vi phạm gắn với lô hàng, theo dõi doanh nghiệp nộp khắc phục đúng hạn, và biết chỗ ký quyết định xử lý."
---

# Bước 5 – Vi phạm, CAPA và quyết định xử lý

Khi phát hiện sai phạm (nhãn sai, thiếu hồ sơ, không an toàn thực phẩm…), cán bộ ghi **vi phạm** trên cổng. Vi phạm được gửi sang doanh nghiệp. Doanh nghiệp phải nộp **CAPA** (kế hoạch khắc phục và phòng ngừa) trước hạn. Sở kiểm tra CAPA, rồi đóng vi phạm hoặc chuyển lên cấp cao hơn.

```
1. Cán bộ lập vi phạm
       ↓
2. Doanh nghiệp tiếp nhận
       ↓
3. Doanh nghiệp nộp CAPA trước hạn
       ↓
4. Sở kiểm CAPA → đạt: đóng vi phạm
                → cần xử lý nặng hơn: chuyển cấp cao hơn
```

## 1. Ghi nhận vi phạm

1. Bấm **Vi phạm & CAPA** ở menu trái, rồi bấm **Lập vi phạm**.
2. Gõ mã lô vào ô **Lô bị thanh tra (DN) — nhập mã lô**, bấm **Tìm**. Cổng hiện dòng xác nhận lô và tên sản phẩm. Chọn nhầm lô thì bấm **đổi**.
3. Điền các ô còn lại theo bảng dưới.
4. Bấm **Gửi vi phạm**.

![Form ghi nhận vi phạm](/images/26-lap-vi-pham.png)

| Ô | Điền gì |
|---|---|
| **Danh mục** | Loại sai phạm: **Môi trường**, **Hồ sơ**, **An toàn**, **Chất lượng** hoặc **Nhãn mác** |
| **Mức độ** | **LOW** (nhẹ), **MEDIUM**, **HIGH** hoặc **CRITICAL** (nặng nhất) |
| **Căn cứ pháp lý** | Điều, khoản hoặc văn bản bị vi phạm |
| **Mô tả** | Sai phạm cụ thể, đủ để doanh nghiệp hiểu phải sửa gì |

Doanh nghiệp được tìm theo lô, nên không cần chọn doanh nghiệp riêng. Gõ mã lô đầy đủ, chép từ màn Tra cứu lô cho khỏi sai.

> Lưu ý: vi phạm đã gửi được chuyển ngay sang doanh nghiệp. Kiểm tra kỹ mã lô, mức độ và căn cứ trước khi bấm **Gửi vi phạm**.

## 2. Theo dõi vi phạm và hạn CAPA

Danh sách vi phạm chia theo tình trạng xử lý. Bấm **Chi tiết** ở một dòng để mở khung bên phải.

![Danh sách và chi tiết vi phạm](/images/26-vi-pham.png)

| Tab | Hiện gì |
|---|---|
| **Đang mở** | Vi phạm chưa đóng |
| **Quá hạn CAPA** | Doanh nghiệp chưa nộp CAPA khi đã hết hạn. Xử lý nhóm này trước |
| **Chờ kiểm CAPA** | Doanh nghiệp đã nộp, chờ Sở kiểm tra |
| **Đã chuyển cấp** | Đã chuyển lên cấp cao hơn |
| **Đã đóng**, **Tất cả** | Vi phạm đã xong, hoặc mọi vi phạm |

Trên danh sách, cột **Mức** ghi từ SEV1 (nặng nhất) đến SEV4. Ô **Mọi mức** lọc theo mức này.

Khung chi tiết cho biết:

- **Trạng thái**, **Hạn CAPA** và **Người lập** vi phạm. Ví dụ trên ảnh lập ngày 03/11/2026, hạn CAPA là 03/12/2026.
- **Mức phạt dự tính**: nút **Tính khung phạt theo NĐ37** tính mức phạt tham khảo cho vi phạm.
- Diễn biến xử lý theo thời gian, ví dụ **Lập vi phạm** rồi **Chờ doanh nghiệp tiếp nhận**.
- Ô **Quyết định của Sở — lý do / ghi chú** và nút **Chuyển cấp cao hơn**.

> Không bấm **Chuyển cấp cao hơn** khi chưa có quyết định của lãnh đạo. Ghi rõ lý do vào ô ghi chú trước khi bấm.

> Lưu ý: tab **Đang mở** và **Quá hạn CAPA** chỉ lọc trong trang đang xem. Khi danh sách dài nhiều trang, hãy chuyển sang tab **Tất cả** và lật từng trang để khỏi sót.

Doanh nghiệp nhận vi phạm và nộp CAPA trên trang của mình, xem [chương 12, mục Vi phạm và CAPA](/mo-rong/12-tuan-thu#vi-pham-va-capa).

## 3. Ký quyết định trong Hộp quyết định

Quyết định xử lý vi phạm mức **SEV1** (nặng nhất) cần **hai người ký**: người đề xuất ký thứ nhất, Trưởng phòng hoặc Lãnh đạo Sở ký thứ hai. Bấm **Hộp quyết định** ở menu trái.

![Hộp quyết định](/images/26-hop-quyet-dinh.png)

| Tab | Hiện gì |
|---|---|
| **Chờ tôi ký** | Quyết định đã có chữ ký thứ nhất, chờ bạn ký thứ hai. Bạn không ký thứ hai được quyết định mà chính bạn đã ký thứ nhất |
| **Kẹt ở chữ ký thứ nhất** | Quyết định cũ còn dừng ở chữ ký thứ nhất. Người đề xuất rút lại được. Từ 31/08/2026 hệ thống không sinh thêm trường hợp này |

Chọn một quyết định để xem chi tiết. Bấm **Làm mới danh sách** để lấy quyết định mới nhất.
