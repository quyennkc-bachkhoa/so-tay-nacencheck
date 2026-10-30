---
title: Tạo lô hàng
order: 8
group: Luồng chính
prerequisites:
  - text: "Đã xuất bản quy trình sản phẩm (chương 6)"
    link: /luong-chinh/06-san-pham-dinh-muc-quy-trinh
  - text: "Đã ghi nhận nguyên liệu (chương 7)"
    link: /luong-chinh/07-nguon-nguyen-lieu
  - text: "Đã khai cơ sở sản xuất (chương 4)"
    link: /luong-chinh/04-co-so-va-vung-nguyen-lieu
outcome: "Bạn có một lô hàng với mã lô và mã QR riêng."
---

# Bước 6 – Tạo lô hàng

## Tạo lô là gì?

Tạo lô là thời điểm bạn tuyên bố với hệ thống: "Hôm nay nhà máy làm ra một mẻ hàng cụ thể, từ những nguyên liệu cụ thể này". Ngay khi bấm **Tạo lô hàng**, hệ thống sinh ra **mã lô** và **mã QR** riêng cho mẻ đó. Mọi việc về sau (ghi công đoạn, in tem, bán hàng) đều gắn vào mã lô này.

Lô là điểm hội tụ của mọi bước trước:

```
Sản phẩm đã công bố  (chương 6)  ─┐
Lô nguyên liệu       (chương 7)  ─┼──→  LÔ HÀNG  →  mã lô + QR
Cơ sở sản xuất       (chương 4)  ─┘
```

## Mở form tạo lô

Đường dẫn: **Lô hàng** (`/dashboard/batches`) → **Tạo lô mới**. Form mở dạng khung trượt bên phải, chia thành các khối. Đầu form có hộp gợi ý ngắn; hãy đọc lướt một lần.

![Form tạo lô](/images/08-form-tao-lo.png)

## Khối 1 – Thông tin cơ bản

- **Sản phẩm đã công bố** (bắt buộc): gõ tên hoặc SKU rồi chọn. Sau khi chọn, hộp xanh hiện "Đã gắn sản phẩm…" và cho biết lô **kế thừa phiên bản quy trình đã xuất bản** của sản phẩm.
- **Tên lô hàng** (tùy chọn): tên gọi để bạn dễ nhận ra trong danh sách, ví dụ "Lô bánh gạo mật ong 27/10/2026 – Nhà máy Bắc Ninh". Đây **không phải** mã lô; mã lô in trên tem do hệ thống tự sinh.
- **Mô tả sản phẩm** (tùy chọn): đặc tính, tiêu chuẩn chất lượng của lô.

## Khối 2 – Chi tiết nguồn gốc (nguyên liệu)

Đây là khối quan trọng nhất, và cũng là khối người mới hay vướng.

Nếu sản phẩm đã có định mức, đầu khối hiện **"Công thức của sản phẩm – N nguyên liệu bắt buộc"** cùng tên từng nguyên liệu (ví dụ: Gạo tám thơm, Mật ong, Đường mía, Dầu ăn tinh luyện, Muối tinh). Mỗi nguyên liệu có sẵn một **ô nguồn** bên dưới.

Với mỗi ô nguồn, bạn chọn **loại nguồn**:

| Loại nguồn | Chọn khi | Bạn khai thêm |
|---|---|---|
| **Vùng nguyên liệu của tôi** | Nguyên liệu từ vùng trồng của công ty | Chọn lô thu hoạch |
| **Mua từ đơn vị khác** | Mua của nhà cung cấp ngoài hệ thống | Nhà cung cấp, số hóa đơn, ngày nhận, ảnh hóa đơn |
| **Mua cùng đơn vị dùng NacenCheck** | Nhà cung cấp cũng dùng NacenCheck | Chọn đối tác đã liên kết |
| **Nhập khẩu** | Hàng nhập có tờ khai | Thông tin tờ khai |
| **Từ lô khác của tôi** | Dùng bán thành phẩm hoặc lô nguyên liệu đã có | Chọn lô nguồn, số lượng |
| **Không xác định** | Thật sự không rõ nguồn | – |

Ngoài các ô theo công thức, bạn có thể bấm **Thêm nguồn** để khai thêm. Một lô có thể gồm nhiều nguồn khác loại; mỗi nguồn là một mắt xích riêng trên trang truy xuất.

**Chưa có đủ chứng từ nguyên liệu thì sao?** Ở cuối khối có ô **"Lý do chưa gán đủ nguyên liệu"**. Điền lý do (ví dụ "chứng từ nhà cung cấp mai mới có – khai lô trước để kịp dán tem") thì hệ thống **vẫn cho tạo lô** và lưu lý do kèm lô để tra lại sau. Các nguyên liệu chưa gán vẫn hiện màu đỏ; đó là đúng thiết kế. Bạn có thể bổ sung nguồn sau ở tab **Nguồn đầu vào/đầu ra** của lô (chương 9).

> Dùng ô lý do như một lối thoát tạm thời, không phải thói quen. Lô thiếu nguồn nguyên liệu sẽ có chuỗi truy xuất bị đứt ở đoạn đầu.

## Khối 3 – Cơ sở sản xuất thực tế

Hệ thống gợi ý cơ sở mặc định của sản phẩm, kèm nhãn "Gợi ý từ sản phẩm – chưa xác nhận". Bạn **phải** bấm **"Đúng, lô làm ở đây"** (hoặc chọn cơ sở khác) để xác nhận. Sau khi xác nhận, **xuất xứ** (tỉnh/xã) tự lấy từ địa chỉ cơ sở.

Khối này còn hỏi **"Đóng gói ở đâu?"**: ngay tại cơ sở sản xuất, ở cơ sở khác của đơn vị, tại cơ sở đối tác nước ngoài, hoặc chưa đóng gói – khai sau.

**Vì sao phải bấm xác nhận dù hệ thống đã gợi ý?** Vì cùng một sản phẩm có thể được làm ở nhiều nhà máy. Xuất xứ in trên trang truy xuất phải là nơi lô **thực sự** được làm, nên hệ thống bắt người tạo lô chịu trách nhiệm xác nhận.

## Khối 4 – Số lượng, ngày sản xuất, mã lô

- **Số lượng** (bắt buộc, lớn hơn 0) và đơn vị.
- **Ngày sản xuất / thu hoạch**. Hạn sử dụng có thể được tính từ ngày này.
- **Mã HS**: tự điền theo sản phẩm.
- **Mã lô, số lô**: để trống thì hệ thống tự sinh.

## Khối 5 – Thông tin đặc thù ngành

Tùy ngành của sản phẩm, form có thêm các ô riêng. Ví dụ với ngành **Thực phẩm chế biến**, hai ô **Mã lô nguyên liệu** và **Nhà cung cấp** là bắt buộc.

## Bấm Tạo lô hàng – và nếu nút không bấm được

Nút **Tạo lô hàng** ở cuối form chỉ sáng khi đủ điều kiện. Nếu nút mờ, hãy **rê chuột vào nút**: hệ thống hiện một dòng nhắc lỗi. Mỗi lần chỉ hiện một lỗi; sửa xong lỗi này, rê chuột lại để xem lỗi tiếp theo. Các lỗi thường gặp theo thứ tự:

| Thông báo | Cách xử lý |
|---|---|
| Hãy chọn sản phẩm đã công bố… | Quay lại chương 6, bấm Xuất bản quy trình. |
| Hãy chọn và xác nhận cơ sở sản xuất thực tế của lô. | Bấm "Đúng, lô làm ở đây". |
| Còn thiếu trường bắt buộc: Mã lô nguyên liệu, Nhà cung cấp. | Điền ở khối Thông tin đặc thù ngành. |
| Hãy nhập Khối lượng/Số lượng lớn hơn 0. | Điền ô Số lượng. |

Khi tạo thành công, hệ thống sinh mã lô (ví dụ `BGNM-20261027-5TBR`), mã QR, và lô ở trạng thái **chờ đồng bộ** lên cổng truy xuất quốc gia.

## Ví dụ: lô bánh gạo đầu tiên

1. Chọn sản phẩm "Bánh gạo nướng mật ong Hạt Vàng Việt 180g".
2. Đặt tên lô "Lô bánh gạo mật ong 27/10/2026 – Nhà máy Bắc Ninh".
3. Năm ô nguyên liệu: gạo chọn "Vùng nguyên liệu của tôi" → lô thu hoạch; bốn nguyên liệu còn lại chọn "Mua từ đơn vị khác" → khai nhà cung cấp và hóa đơn.
4. Bấm "Đúng, lô làm ở đây" với Nhà máy cơm cháy Hạt Vàng Việt.
5. Số lượng 10 gói, ngày sản xuất 27/10/2026.
6. Khai mã lô nguyên liệu và nhà cung cấp ở khối đặc thù ngành.
7. Bấm **Tạo lô hàng** → có lô `BGNM-20261027-5TBR` với 9 công đoạn chờ ghi.

## Điều cần nhớ

Tạo lô là ghép ba thứ đã chuẩn bị: sản phẩm đã công bố, nguồn nguyên liệu và cơ sở sản xuất. Nếu nút Tạo lô không bấm được, đừng đoán – hãy rê chuột vào nút để đọc lý do.
