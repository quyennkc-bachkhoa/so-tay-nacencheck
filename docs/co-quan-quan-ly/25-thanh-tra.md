---
title: Lập và theo dõi cuộc thanh tra
order: 25
group: Cơ quan quản lý
prerequisites:
  - text: "Đã tra được lô và chuỗi cung ứng của doanh nghiệp cần kiểm tra (chương 23)"
    link: /co-quan-quan-ly/23-tra-cuu-lo-va-truy-vet
  - text: "Đã chọn được nơi cần kiểm tra từ bản đồ, thu hồi, tem (chương 24)"
    link: /co-quan-quan-ly/24-giam-sat-dia-ban
outcome: "Lên lịch được một cuộc thanh tra và theo dõi nó qua các trạng thái Đã lên lịch, Đang thực hiện, Đã kết thúc."
---

# Bước 4 – Lập và theo dõi cuộc thanh tra

Màn **Thanh tra** là sổ ghi các đợt kiểm tra doanh nghiệp. Biên bản và từng phát hiện được lưu ngay lên máy chủ, nên không mất khi đóng trình duyệt giữa chừng.

```
1. Lập cuộc thanh tra   → Đã lên lịch
       ↓
2. Kiểm tra tại chỗ     → Đang thực hiện (ghi từng phát hiện)
       ↓
3. Gửi kết luận         → Đã kết thúc
```

Phát hiện sai phạm trong lúc kiểm tra thì ghi vi phạm ở chương 26.

## 1. Xem danh sách thanh tra

Bấm **Thanh tra** ở menu trái.

![Danh sách thanh tra](/images/25-thanh-tra.png)

| Tab | Hiện gì |
|---|---|
| **Đang thực hiện** | Cuộc thanh tra đang làm |
| **Đã lên lịch** | Cuộc thanh tra đã lập, chưa bắt đầu |
| **Đã kết thúc** | Cuộc thanh tra đã có kết luận |
| **Tất cả** | Mọi cuộc thanh tra |

Mỗi dòng cho biết doanh nghiệp, ngày, cán bộ phụ trách, số phát hiện và trạng thái. Gõ vào ô tìm kiếm để lọc theo doanh nghiệp, cán bộ hoặc phạm vi kiểm tra.

## 2. Lập cuộc thanh tra mới

1. Bấm **Lập cuộc thanh tra**. Khung bên phải mở ra.
2. Điền các ô theo bảng dưới.
3. Bấm **Lập cuộc thanh tra** ở cuối khung. Cuộc thanh tra mới nằm ở tab **Đã lên lịch**.

![Form lập cuộc thanh tra](/images/25-lap-thanh-tra.png)

| Ô | Điền gì |
|---|---|
| **Mã DN (tenantId)** | Mã định danh của doanh nghiệp trên hệ thống, dạng chuỗi dài gồm chữ, số và dấu gạch. Bắt buộc |
| **Loại kiểm tra** | **Định kỳ** (theo kế hoạch), **Đột xuất**, **Theo phản ánh** (có đơn, tin báo), hoặc **Thu hồi** (kiểm tra việc thu hồi hàng) |
| **Ngày kiểm tra dự kiến** | Ngày đoàn đến doanh nghiệp. Bắt buộc |
| **Phạm vi (tuỳ chọn)** | Nơi hoặc nội dung sẽ kiểm tra, ví dụ kho lạnh, vùng trồng số 2 |

> Lưu ý: ô **Mã DN (tenantId)** gợi ý chép mã từ trang Tra cứu lô, nhưng trang đó hiện chưa hiện mã này. Trong lúc chờ sửa, hãy xin mã doanh nghiệp từ đội vận hành NacenCheck.

Nút **Lập cuộc thanh tra** ở màn Tổng quan chỉ mở màn này, chưa mở form. Bấm thêm nút cùng tên ở góc phải để mở form.

## 3. Ghi phát hiện và kết thúc

Bấm vào một cuộc thanh tra trong danh sách để mở khung chi tiết. Đây là nơi ghi từng phát hiện trong lúc kiểm tra, rồi kết thúc và gửi kết luận.

> Lưu ý: tài khoản ví dụ chưa có cuộc thanh tra nào, nên mục này chưa có ảnh. Sổ tay sẽ bổ sung các bước khi có cuộc thanh tra thử trên hệ thống.

Kết luận thanh tra có sai phạm thì lập vi phạm ở màn **Vi phạm & CAPA** (chương 26) để doanh nghiệp nhận và khắc phục.
