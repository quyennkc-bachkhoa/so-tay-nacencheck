---
title: Khai sản phẩm, định mức và quy trình
order: 6
group: Luồng chính
prerequisites:
  - text: "Đã khai mã GS1 để hệ thống tự cấp mã vạch (chương 3)"
    link: /luong-chinh/03-thiet-lap-doanh-nghiep
  - text: "Đã có cơ sở sản xuất (chương 4)"
    link: /luong-chinh/04-co-so-va-vung-nguyen-lieu
  - text: "Đã khai vật tư (chương 5)"
    link: /luong-chinh/05-danh-muc-vat-tu
outcome: "Sản phẩm có định mức, quy trình đã Xuất bản và đã Kích hoạt, nên chọn được khi tạo lô."
---

# Bước 4 – Khai sản phẩm, định mức và quy trình

Bước này khai ba thứ cho một mặt hàng: hàng gì, làm từ gì và làm qua những công đoạn nào. Làm đủ năm việc dưới đây thì sản phẩm mới chọn được khi tạo lô.

```
Thêm sản phẩm → Lập định mức → Dựng quy trình → Xuất bản → Kích hoạt → Chọn được khi tạo lô
```

| # | Việc | Màn hình | Cần làm |
|---|---|---|---|
| 4.1 | Thêm sản phẩm | `/dashboard/products` | Bắt buộc |
| 4.2 | Lập định mức | `/dashboard/bom` | Nên làm với hàng chế biến |
| 4.3 | Dựng và xuất bản quy trình | Trang quy trình của sản phẩm | Bắt buộc |
| 4.4 | Kích hoạt sản phẩm | Trang chi tiết sản phẩm | Bắt buộc |

Ví dụ trong chương này là Bánh gạo nướng mật ong Hạt Vàng Việt 180g.

## 4.1 Thêm sản phẩm

1. Bấm **Sản phẩm** ở menu trái, rồi bấm **Thêm sản phẩm**.

![Danh sách sản phẩm](/images/06-san-pham.png)

2. Điền form theo bảng bên dưới.

![Form sản phẩm, phần thông tin chính](/images/06-them-san-pham.png)

| Ô | Điền gì |
|---|---|
| Ngành của sản phẩm | Bắt buộc. Chọn đúng ngành, vì ngành quyết định biểu mẫu và quy trình chuẩn, và mọi lô đều kế thừa ngành này. Không có ngành khớp hẳn thì chọn ngành gần nhất. |
| Tên sản phẩm (VI) | Bắt buộc. Tên đầy đủ, gồm cả quy cách. |
| Tên (EN) | Khi cần bán ra nước ngoài |
| Ảnh sản phẩm | Tối đa 8 ảnh. Ảnh đầu tiên hiện khi khách quét QR. |
| SKU | Bắt buộc. Mã hàng nội bộ, hệ thống tự gợi ý từ tên, sửa được. |
| Đơn vị | Bắt buộc. Đơn vị bán, ví dụ gói, hộp, kg. |
| Barcode (GTIN) | Đã có mã vạch thì bấm **Đã có GTIN** và nhập. Chưa có thì bấm **Chưa có — tự cấp**, hệ thống cấp ngay sau khi lưu, nhưng phải khai mã GS1 trước. |
| Mã HS | Khi xuất khẩu. Chưa rõ thì để trống. |
| Mã GPC | Nhóm hàng theo GS1. Hệ thống gợi ý theo ngành, kiểm tra lại cho đúng. |

3. Mở mục **Nhãn eLabel** và điền thông tin in trên nhãn. Chỉ cần nhập một lần ở đây, tem in và trang QR đều dùng lại.

![Form sản phẩm, phần nhãn](/images/06-them-san-pham-nhan.png)

4. Kéo xuống **Cơ sở đủ điều kiện của sản phẩm**, tick **Sản xuất**, **Đóng gói** ở cơ sở làm ra hàng. Có thể chọn **Cơ sở sản xuất mặc định** để điền sẵn khi tạo lô.

![Form sản phẩm, phần cơ sở](/images/06-them-san-pham-co-so.png)

5. Bấm **Lưu sản phẩm**. Sản phẩm hiện trong danh sách với trạng thái **Nháp**, chưa dùng được để tạo lô.

## 4.2 Lập định mức

Định mức là công thức: làm 1 đơn vị sản phẩm cần bao nhiêu mỗi vật tư. Khi tạo lô, hệ thống dựa vào đây để tính lượng cần, đối chiếu tồn kho và kiểm tra đã khai nguồn cho từng nguyên liệu chưa.

1. Bấm **Định mức** ở menu trái, rồi bấm **Chi tiết** trên dòng sản phẩm.
2. Bấm **Lập định mức**.

![Trang định mức của sản phẩm](/images/06-dinh-muc.png)

3. Chọn vật tư, rồi gõ lượng cần cho **1 đơn vị sản phẩm**. Dùng dấu phẩy cho phần thập phân, ví dụ 0,15. Danh sách chỉ có vật tư đã khai ở mục 3.3.
4. Bấm **Thêm dòng** cho vật tư tiếp theo. Tối đa 50 vật tư.
5. Bấm **Lưu định mức**.

![Form định mức](/images/06-dinh-muc-form.png)

*Ví dụ:* 1 gói bánh gạo cần 0,15 kg gạo tám thơm, 0,01 lít mật ong và 1 túi đựng.

## 4.3 Dựng và xuất bản quy trình

Quy trình là danh sách công đoạn mà mọi lô của sản phẩm phải đi qua, theo đúng thứ tự.

1. Ở danh sách sản phẩm, bấm vào chữ trong cột **Quy trình** của dòng sản phẩm.
2. Bấm **Áp dụng quy trình chuẩn ngành** để nạp sẵn các công đoạn.
3. Bấm dấu **×** để xóa công đoạn không làm. Bấm mũi tên để đổi thứ tự.
4. Kiểm tra **bước đầu tiên phải là bước tạo lô**: thu hoạch, thu gom hoặc nhận hàng, ví dụ **Nhập nguyên liệu**. Thiếu bước này thì không xuất bản được.
5. Kiểm tra dòng **Chuỗi truy vết** vẫn báo đạt đủ 4 nhóm sự kiện trọng yếu.

![Quy trình đã dựng của sản phẩm](/images/06-quy-trinh.png)

6. Bấm từng công đoạn để chỉnh ở khung bên phải:
   - **Ai chịu trách nhiệm ghi nhận:** chọn vai trò được ghi bước này.
   - **Bước bắt buộc:** tick nếu lô nào cũng phải ghi.
   - **Trường thông tin cần nhập:** bấm **Mẫu ngành**, rồi bấm **Chèn vào bước** ở ô cần ghi tại hiện trường. Không có sẵn thì bấm **Thêm ô nhập**.

![Thư viện ô nhập mẫu của ngành](/images/06-quy-trinh-mau.png)

7. Bấm **Lưu (nháp)**. Nút **Xuất bản** chỉ sáng khi không còn thay đổi chưa lưu.
8. Bấm **Xuất bản**, đọc bảng kiểm, rồi bấm **Xác nhận xuất bản quy trình**.

> Lưu ý: nút **Bỏ bước tùy chọn** chỉ giữ lại các bước đang đánh dấu bắt buộc, nên có thể mất bước bạn cần như **Đóng gói**. Với xưởng chế biến, nên xóa từng bước thay vì dùng nút này. Luôn giữ bước **Đóng gói**, vì lô chưa ghi bước này thì không bán được.

Sửa quy trình và xuất bản lại thì lô cũ vẫn giữ phiên bản đã ghim, chỉ lô mới dùng bản mới. Một sản phẩm cần quy trình khác hẳn thì bấm **Tạo bản sao** ở trang sản phẩm.

## 4.4 Kích hoạt sản phẩm

Xuất bản quy trình xong, sản phẩm vẫn là **Nháp**. Phải kích hoạt thì mới chọn được khi tạo lô.

1. Ở danh sách sản phẩm, bấm **Chi tiết** trên dòng sản phẩm.
2. Bấm **Kích hoạt**. Trạng thái đổi thành **Đang hoạt động**.

![Nút Kích hoạt trên trang sản phẩm](/images/06-kich-hoat.png)

> Lưu ý: form tạo lô báo "Chưa có sản phẩm đã công bố phù hợp" thì kiểm tra lại đã **Xuất bản** quy trình và **Kích hoạt** sản phẩm chưa.

Sau khi kích hoạt, nên làm thêm hai việc:

- **Khai vật tư thành phẩm:** quay lại mục 3.3, thêm một vật tư và chọn sản phẩm này ở ô **Thương phẩm** để sau này nhập được thành phẩm vào kho.
- **Kiểm tra nhãn:** mở `/dashboard/compliance/labels`, bấm **Kiểm tra nhãn mới**, chọn sản phẩm để xem còn thiếu mục nào theo quy định.
