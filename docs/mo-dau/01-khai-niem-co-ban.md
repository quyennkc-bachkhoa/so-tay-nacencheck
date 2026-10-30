---
title: Các khái niệm cần biết trước
order: 1
group: Mở đầu
---

# Các khái niệm cần biết trước

Nắm tám khái niệm này thì đọc hiểu được mọi màn hình. Phần lớn bối rối khi mới dùng đến từ việc nhầm giữa chúng.

## 1. Sản phẩm

**Sản phẩm** là một mặt hàng trong danh mục, ví dụ "Bánh gạo nướng mật ong 180g". Nó chỉ mô tả loại hàng: tên, mã nội bộ (SKU), đơn vị, mã vạch (GTIN), ngành hàng, ảnh, thông tin nhãn. Sản phẩm không phải hàng có thật trong kho.

## 2. Lô hàng

**Lô hàng** là một mẻ hàng cụ thể, ví dụ 10 gói bánh gạo làm ngày 30/10/2026. Mọi nguyên liệu, công đoạn, chứng từ, mã QR đều gắn vào lô. Khi khách quét QR, họ xem câu chuyện của lô.

Sản phẩm giống mẫu áo trong catalog, còn lô hàng là chiếc áo may hôm qua. Một sản phẩm có thể có hàng trăm lô.

## 3. Quy trình và công đoạn

**Quy trình** là danh sách **công đoạn** mà mọi lô của sản phẩm phải đi qua, ví dụ Nhập nguyên liệu → Chế biến → Đóng gói → Kiểm định → Lưu kho → Vận chuyển. Quy trình chỉ có hiệu lực sau khi bấm **Xuất bản**. Mỗi lô tạo ra sẽ kế thừa phiên bản đã xuất bản.

## 4. Sự kiện

Khi hoàn thành một công đoạn và ghi lại, hệ thống tạo một **sự kiện**: ai làm, lúc nào, ở đâu, có chứng từ gì. Chuỗi sự kiện chính là hành trình khách thấy khi quét QR.

Sự kiện đã ghi không xóa và không sửa đè được. Ghi sai thì dùng **đính chính**, bản gốc vẫn được giữ.

## 5. Vật tư và định mức

**Vật tư** là thứ dùng để làm ra sản phẩm: nguyên liệu, gia vị, bao bì. **Định mức** là công thức: làm 1 đơn vị sản phẩm cần bao nhiêu mỗi vật tư. Ví dụ 1 gói bánh gạo cần 0,15 kg gạo, 0,01 lít mật ong, 1 túi.

## 6. Lô nguyên liệu

Định mức chỉ nói "cần gạo". **Lô nguyên liệu** trả lời "gạo nào": 500 kg gạo tám thơm nhận ngày 20/10 từ nhà cung cấp X, kèm hóa đơn. Nhờ đó chuỗi truy xuất nối được ngược về nguồn.

## 7. Vùng nguyên liệu và đơn vị sản xuất

Với doanh nghiệp tự trồng, tự nuôi, **vùng nguyên liệu** là khu sản xuất khai báo với cơ quan quản lý. Mỗi vùng gồm các **đơn vị sản xuất**, còn gọi là thửa. Thửa là nơi ghi nhật ký canh tác hằng ngày, và thu hoạch tạo ra **lô thu hoạch**.

## 8. Truy vết chuỗi

NacenCheck ghi lại quan hệ giữa các lô khi nguyên liệu đi vào sản xuất, khi tách lô để bán, khi gộp lô:

```
Lô nguyên liệu  →  Lô thành phẩm 10 gói  →  Lô con 2 gói đã bán cho đại lý
(lô đầu vào)        (lô hiện tại)            (lô đầu ra)
```

Nhờ đó khi có sự cố, bạn trả lời được cả hai chiều: lô này làm từ gì, và lô nguyên liệu này đã đi vào gói hàng nào, bán cho ai.

## Thuật ngữ kỹ thuật

| Thuật ngữ | Nghĩa ngắn gọn |
|---|---|
| GS1 | Tổ chức quốc tế quản lý hệ thống mã vạch |
| GTIN | Dãy số dưới mã vạch in trên bao bì sản phẩm |
| GPC | Mã nhóm sản phẩm theo phân loại của GS1 |
| SSCC | Mã định danh một thùng hoặc pallet. Kho quét một mã là nhận cả thùng. |
| SGTIN | Mã vạch GTIN kèm một số serial riêng, để phân biệt từng gói hàng |
| GLN | Mã định danh địa điểm: trụ sở, kho, nhà máy, vùng trồng |
| Mã HS | Mã phân loại hàng hóa trong hải quan, cần khi xuất nhập khẩu |
| eLabel | Nhãn điện tử, hiện khi quét QR, bổ sung cho nhãn giấy |
| NBC | Cổng truy xuất nguồn gốc quốc gia mà NacenCheck đồng bộ dữ liệu lô lên |
