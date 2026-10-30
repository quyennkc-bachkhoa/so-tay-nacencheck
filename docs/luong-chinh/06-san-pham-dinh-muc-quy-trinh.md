---
title: Khai sản phẩm, định mức và quy trình
order: 6
group: Luồng chính
prerequisites:
  - text: "Đã khai vật tư ở **Kho → Danh mục vật tư** (chương 5)"
    link: /luong-chinh/05-danh-muc-vat-tu
  - text: "Đã có cơ sở sản xuất (chương 4)"
    link: /luong-chinh/04-co-so-va-vung-nguyen-lieu
outcome: "Sản phẩm có định mức, có quy trình đã **Xuất bản**, và ở trạng thái \"đã công bố\": chọn được khi tạo lô."
---

# Bước 4 – Khai sản phẩm, định mức và quy trình

## Bức tranh chung

Bước này dựng lên "bản thiết kế" của một mặt hàng, gồm ba lớp xếp chồng:

```
Sản phẩm      → hàng này là gì?            (tên, mã, đơn vị, ngành, nhãn)
   ↓
Định mức      → hàng này làm từ gì?        (công thức nguyên liệu)
   ↓
Quy trình     → hàng này làm qua bước nào? (các công đoạn) → bấm XUẤT BẢN
```

Chỉ khi cả ba lớp xong và quy trình đã **Xuất bản**, sản phẩm mới ở trạng thái **"đã công bố"** và mới xuất hiện trong ô chọn khi tạo lô hàng. Đây là điều kiện chặn cứng duy nhất của bước tạo lô.

## 3.1 Khai sản phẩm

Đường dẫn: `/dashboard/products` → bấm **Thêm sản phẩm**.

| Ô | Ý nghĩa |
|---|---|
| **Ngành của sản phẩm** (bắt buộc) | Ô quan trọng nhất. Ngành quyết định biểu mẫu khai báo, quy trình mẫu và quy tắc truy xuất. Mọi lô của sản phẩm kế thừa ngành này. |
| **Tên sản phẩm (VI)** (bắt buộc), Tên (EN) | Tên hiển thị trên trang truy xuất. Tên tiếng Anh dùng cho thị trường xuất khẩu. |
| **SKU** (bắt buộc) | Mã hàng nội bộ, hệ thống tự gợi ý từ tên. |
| **Đơn vị** (bắt buộc), Đơn vị tính khác | Đơn vị bán (gói, hộp, kg…). |
| **Barcode (GTIN)** | Mã vạch trên bao bì. Chưa có thì để trống, bổ sung sau. |
| **Mã HS**, Mã GPC | Mã phân loại hải quan và phân loại sản phẩm, cần khi xuất khẩu. |
| Ảnh sản phẩm, Hồ sơ đính kèm | Ảnh hiển thị cho khách và giấy tờ liên quan. |
| Cơ sở sản xuất mặc định | Nhà máy thường làm sản phẩm này; khi tạo lô, hệ thống gợi ý sẵn. |

![Form thêm sản phẩm](/images/06-them-san-pham.png)

**Thông tin nhãn.** Trong hồ sơ sản phẩm còn có phần nhãn điện tử: thành phần, hướng dẫn bảo quản, hướng dẫn sử dụng, cảnh báo, định lượng… Phần lớn dữ liệu nhãn của lô về sau được lấy từ đây, nên khai một lần ở sản phẩm là đủ cho mọi lô.

**Muốn kiểm tra nhãn đã đủ chưa?** Vào **Tuân thủ → Nhãn (NĐ37)** (`/dashboard/compliance/labels`), bấm **Kiểm tra nhãn mới**, chọn sản phẩm. Hệ thống đối chiếu và chỉ ra mục còn thiếu (nhà sản xuất, địa chỉ, định lượng, hạn dùng, hướng dẫn bảo quản…). Bổ sung ở trang sản phẩm rồi kiểm lại.

## 3.2 Khai định mức (công thức)

Đường dẫn: `/dashboard/bom` → chọn sản phẩm → **Sửa định mức**.

Bấm **Thêm dòng**, chọn vật tư (lấy từ danh mục vật tư ở chương 5) và nhập lượng cần cho **1 đơn vị sản phẩm**. Dấu phẩy là phần thập phân (0,25). Tối đa 50 vật tư. Bấm **Lưu định mức**.

![Định mức vật tư](/images/06-dinh-muc.png)

*Ví dụ thật trên hệ thống:* định mức của Giò ngựa tiêu đen 500g gồm thịt ngựa tươi 1,2 kg; mắc khén 0,02 kg; túi hút chân không 2 cái; tem QR 2 cái.

**Định mức để làm gì khi tạo lô?** Khi bạn tạo lô bánh gạo, hệ thống đọc định mức và hiện sẵn 5 ô nguồn – một ô cho mỗi nguyên liệu (gạo, mật ong, đường, dầu, muối) – kèm dòng "Công thức của sản phẩm – 5 nguyên liệu bắt buộc". Bạn chỉ việc chỉ ra từng nguyên liệu lấy từ lô nào. Không có định mức, bạn phải tự nhớ và tự khai từng nguồn, rất dễ sót.

> Về kỹ thuật, hệ thống vẫn cho tạo lô khi sản phẩm chưa có định mức. Nhưng với sản phẩm chế biến từ nhiều nguyên liệu, **hãy coi định mức là bắt buộc về nghiệp vụ**: thiếu công thức thì chuỗi truy xuất nguyên liệu sẽ không đầy đủ.

## 3.3 Dựng quy trình và Xuất bản

Đường dẫn: `/dashboard/products/workflows` → chọn sản phẩm → **Sửa quy trình** (trang `/dashboard/products/<mã sản phẩm>/workflow`).

**Quy trình là gì, nhìn từ góc độ vận hành?** Đó là "danh sách việc phải làm" cho mọi lô của sản phẩm này, theo đúng thứ tự. Mỗi công đoạn có:

- **Tên công đoạn**, ví dụ "Tiếp nhận nguyên liệu thịt và phụ gia".
- **Vai trò phụ trách:** công nhân, QC, tài xế… Chỉ người có vai trò này mới ghi được bước đó.
- **Bắt buộc hay tùy chọn.**
- **Trường thông tin cần nhập:** các ô mà người ghi phải điền tại hiện trường (nhiệt độ, khối lượng, ảnh…). Hệ thống có sẵn mẫu theo ngành.

Bạn không phải dựng từ đầu. Có hai cách nhanh:

1. **Áp dụng quy trình mẫu của ngành** rồi chỉnh lại cho đúng thực tế xưởng.
2. **Chép quy trình** từ một sản phẩm tương tự đã có.

![Trình dựng quy trình](/images/06-quy-trinh.png)

Màn dựng quy trình có khung **xem trước biểu mẫu hiện trường** mô phỏng màn hình điện thoại. Hãy dùng nó để kiểm tra xem công nhân sẽ thấy gì khi ghi từng bước.

Khi đã ưng, bấm **Xuất bản**. Từ lúc này:

- Sản phẩm trở thành **"đã công bố"** và chọn được khi tạo lô.
- Mỗi lô tạo ra sẽ **ghim** đúng phiên bản quy trình vừa xuất bản. Nếu sau này bạn sửa và xuất bản phiên bản mới, các lô cũ vẫn giữ quy trình cũ, lô mới dùng quy trình mới.

**Điều gì xảy ra nếu quên bấm Xuất bản?** Khi tạo lô, ô chọn sản phẩm không có mặt hàng này, kèm dòng nhắc "Chưa có sản phẩm đã công bố? Khai báo, hoàn tất quy trình và công bố tại Danh mục sản phẩm". Đây là lỗi người mới gặp nhiều nhất.

## Điều cần nhớ

Ba câu hỏi, ba màn hình: **hàng gì** (Sản phẩm), **làm từ gì** (Định mức), **làm thế nào** (Quy trình). Kết thúc bằng nút **Xuất bản**. Thiếu nút bấm này, bạn không tạo được lô nào.
