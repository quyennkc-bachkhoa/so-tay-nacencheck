---
title: Các khái niệm cần biết trước
order: 1
group: Mở đầu
---

# Các khái niệm cần biết trước

Trước khi bấm vào bất kỳ màn hình nào, bạn nên nắm tám khái niệm dưới đây. Chúng xuất hiện ở khắp nơi trên web, và phần lớn sự bối rối khi mới dùng NacenCheck đến từ việc nhầm lẫn giữa các khái niệm này.

## 1. Sản phẩm – "mặt hàng bạn bán"

**Sản phẩm** là một mặt hàng trong danh mục của doanh nghiệp, ví dụ "Bánh gạo nướng mật ong 180g". Sản phẩm giống như một tờ khai lý lịch: tên, mã nội bộ (SKU), đơn vị tính, mã vạch (GTIN), ngành hàng, ảnh, thông tin nhãn.

Sản phẩm **không phải** hàng hóa có thật trong kho. Nó chỉ mô tả "loại hàng này là gì".

## 2. Lô hàng – "mẻ hàng cụ thể đã làm ra"

**Lô hàng** là một mẻ sản phẩm cụ thể: 10 gói bánh gạo làm ngày 27/10/2026 tại nhà máy Hạt Vàng Việt. Đây là **đơn vị truy xuất chính** của NacenCheck. Mọi nguyên liệu, công đoạn, chứng từ, mã QR đều gắn vào lô.

**Phân biệt sản phẩm và lô hàng:** sản phẩm giống "mẫu áo" trong catalog, còn lô hàng là "chiếc áo cụ thể may ngày hôm qua". Một sản phẩm có thể có hàng trăm lô. Khi khách quét QR, họ xem câu chuyện của **lô**, không phải của sản phẩm chung chung.

## 3. Quy trình và công đoạn – "lô này phải đi qua những bước nào"

Mỗi sản phẩm gắn với một **quy trình**: danh sách các **công đoạn** mà mọi lô của sản phẩm đó phải trải qua. Ví dụ quy trình bánh gạo: Tiếp nhận nguyên liệu → Sơ chế → Nấu → Kiểm tra an toàn thực phẩm → Đóng gói → Lưu kho → Giao hàng…

Quy trình được thiết kế một lần ở cấp sản phẩm và chỉ có hiệu lực khi bạn bấm **Xuất bản**. Từ đó trở đi, mỗi lô tạo ra sẽ tự kế thừa quy trình này như một danh sách việc cần làm.

## 4. Sự kiện – "một việc đã thực sự xảy ra"

Khi công nhân hoàn thành một công đoạn và ghi lại trên hệ thống, một **sự kiện** được tạo ra: ai làm, lúc nào, ở đâu, kết quả ra sao, có ảnh hay chứng từ gì. Chuỗi sự kiện theo thời gian chính là **hành trình** mà khách hàng nhìn thấy khi quét QR.

Sự kiện đã ghi **không xóa hay sửa đè được**. Nếu ghi sai, bạn dùng nghiệp vụ **đính chính**: hệ thống tạo bản ghi mới và hiển thị nhãn "Đã đính chính". Cách làm này đảm bảo không ai có thể âm thầm "làm đẹp" lịch sử của lô.

## 5. Vật tư và định mức – "công thức của sản phẩm"

**Vật tư** là mọi thứ dùng để làm ra sản phẩm: nguyên liệu (gạo, mật ong), gia vị, bao bì (túi, tem). **Định mức** là công thức: để làm 1 đơn vị sản phẩm cần bao nhiêu mỗi loại vật tư.

Ví dụ định mức của "Giò ngựa tiêu đen 500g" trên hệ thống: 1,2 kg thịt ngựa, 0,02 kg mắc khén, 2 túi hút chân không, 2 tem QR.

## 6. Lô nguyên liệu – "nguyên liệu thật đã nhận về"

Định mức chỉ nói "cần gạo". **Lô nguyên liệu** mới trả lời "gạo nào": 500 kg gạo tám thơm nhận ngày 20/10 từ nhà cung cấp X, kèm hóa đơn. Khi tạo lô thành phẩm, bạn chỉ ra lô thành phẩm dùng những lô nguyên liệu nào. Nhờ đó chuỗi truy xuất nối được ngược về nguồn.

**Đối chiếu:** định mức là lý thuyết (công thức trên giấy), lô nguyên liệu là thực tế (hàng có hóa đơn). NacenCheck cần cả hai.

## 7. Vùng trồng và thửa – "nơi nguyên liệu mọc lên"

Với doanh nghiệp tự trồng hoặc tự nuôi, **vùng trồng** (hoặc ao nuôi, trang trại) là khu vực sản xuất, có thể có mã vùng do cơ quan quản lý cấp. Mỗi vùng chia thành các **thửa**. Thửa là nơi bạn ghi nhật ký canh tác hằng ngày, và là nơi thu hoạch tạo ra **lô thu hoạch**. Lô thu hoạch đóng vai trò như lô nguyên liệu cho các lô chế biến sau đó.

## 8. Truy vết chuỗi – "quan hệ cha – con giữa các lô"

Lô hàng không đứng một mình. Khi nguyên liệu đi vào sản xuất, khi một lô được tách ra để bán cho nhiều người, hay khi nhiều lô được gộp lại, NacenCheck ghi lại quan hệ giữa chúng. Kết quả là một **sơ đồ truy vết**:

```
Lô nguyên liệu (gạo, mật ong…)  →  Lô thành phẩm 10 gói  →  Lô con 2 gói đã bán cho đại lý
         (lô đầu vào)                  (lô hiện tại)                (lô đầu ra)
```

Nhờ sơ đồ này, khi có sự cố bạn trả lời được cả hai chiều: "lô thành phẩm này làm từ nguyên liệu nào?" và "lô nguyên liệu này đã đi vào những gói hàng nào, bán cho ai?".

## Thuật ngữ kỹ thuật thường gặp

| Thuật ngữ | Nghĩa ngắn gọn |
|---|---|
| **GS1** | Tổ chức quốc tế quản lý hệ thống mã vạch. Dữ liệu NacenCheck được phân loại theo chuẩn GS1 EPCIS 2.0 để liên thông được với cổng quốc gia và đối tác nước ngoài. Bạn không cần biết chi tiết kỹ thuật. |
| **GTIN** | Mã số thương phẩm, chính là dãy số dưới mã vạch in trên bao bì sản phẩm. |
| **SSCC** | Mã định danh một thùng hoặc pallet hàng. Kho quét một mã là nhận cả thùng. |
| **GLN** | Mã định danh địa điểm (trụ sở, kho, nhà máy, vùng trồng). |
| **Mã HS** | Mã phân loại hàng hóa dùng trong hải quan, cần khi xuất nhập khẩu. |
| **eLabel (nhãn điện tử)** | Thông tin nhãn hiển thị dưới dạng điện tử khi quét QR, bổ sung cho nhãn giấy. |
| **NBC** | Cổng truy xuất nguồn gốc quốc gia mà NacenCheck đồng bộ dữ liệu lô lên. |

## Điều cần nhớ

Sản phẩm là "loại hàng", lô là "mẻ hàng thật". Quy trình nói lô **phải làm gì**, sự kiện ghi lại lô **đã làm gì**. Định mức nói sản phẩm **cần gì**, lô nguyên liệu chứng minh lô **đã dùng gì**. Nắm được bốn cặp đối chiếu này, bạn sẽ đọc hiểu mọi màn hình của NacenCheck.
