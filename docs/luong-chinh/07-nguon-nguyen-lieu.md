---
title: Chuẩn bị nguồn nguyên liệu
order: 7
group: Luồng chính
prerequisites:
  - text: "Đã khai vật tư (chương 5)"
    link: /luong-chinh/05-danh-muc-vat-tu
  - text: "Sản phẩm đã có định mức (chương 6)"
    link: /luong-chinh/06-san-pham-dinh-muc-quy-trinh
  - text: "Nếu tự trồng: đã có vùng và đơn vị sản xuất được phân công (chương 4)"
    link: /luong-chinh/04-co-so-va-vung-nguyen-lieu
outcome: "Mỗi nguyên liệu trong công thức đều có ít nhất một lô nguyên liệu hoặc lô thu hoạch để chọn khi tạo lô."
---

# Bước 5 – Chuẩn bị nguồn nguyên liệu

## Vì sao nguyên liệu phải vào hệ thống trước khi tạo lô?

Định mức ở chương trước mới nói "bánh gạo cần gạo". Người mua và cơ quan quản lý muốn biết nhiều hơn: **gạo nào, mua của ai, ngày nào, có hóa đơn không**. Câu trả lời nằm ở **lô nguyên liệu** – bản ghi của một lần nhận hàng thật.

Khi tạo lô thành phẩm (chương 8), mỗi ô nguyên liệu trong công thức sẽ hỏi: "nguyên liệu này lấy từ lô nào?". Nếu bạn chưa ghi nhận nguyên liệu, ô chọn sẽ trống. Vì vậy bước này đi trước bước tạo lô.

## Nguyên liệu vào hệ thống bằng ba con đường

| Con đường | Dùng khi | Kết quả |
|---|---|---|
| **A. Mua trong nước** | Mua từ nhà cung cấp, đại lý, nông hộ ngoài hệ thống | Một lô nguyên liệu |
| **B. Nhập khẩu** | Nhập hàng có tờ khai hải quan | Một lô nguyên liệu gắn tờ khai |
| **C. Tự trồng / tự nuôi** | Doanh nghiệp có vùng trồng, ao nuôi riêng | Một lô thu hoạch |

Một lô thành phẩm có thể dùng nguyên liệu từ nhiều con đường cùng lúc. Ví dụ: gạo lấy từ vùng trồng của công ty (C), còn mật ong, đường, dầu, muối mua ngoài (A).

Ngoài ra còn hai nguồn đặc biệt sẽ gặp khi tạo lô: **"Mua cùng đơn vị dùng NacenCheck"** (đối tác cũng dùng hệ thống, xem chương 12) và **"Từ lô khác của tôi"** (dùng bán thành phẩm từ lô trước).

---

## Con đường A và B – Nhập nguyên liệu mua vào

Đường dẫn: nhóm **Kho** → **Nguyên liệu / Nhập đầu vào** (`/dashboard/warehouse/receipts`). Trang có các tab **Phiếu**, **Nhập khẩu**, **Mua trong nước**.

Nguyên tắc của trang: *mỗi lần nhận hàng tạo ra một lô nguyên liệu truy xuất được*. Ghi nhận hàng vào kho trước; việc liên kết tờ khai và tạo lô truy xuất diễn ra ở các bước tiếp theo.

![Nhập nguyên liệu](/images/07-nhap-nguyen-lieu.png)

### Mua trong nước

Chọn tab **Mua trong nước** → **Thêm nguyên liệu mua trong nước**, khai:

| Ô | Ghi chú |
|---|---|
| **Tên nguyên liệu** (bắt buộc) | Nên trùng tên vật tư đã khai để hệ thống ghép đúng. |
| **Ngày nhận** (bắt buộc) | Ngày hàng về thực tế. |
| Nhà cung cấp | Bên giao hàng. |
| Số hóa đơn / chứng từ, Ảnh hóa đơn | Bằng chứng mua hàng, nên đính kèm. |
| Số lượng thực nhận, Đơn vị tính | Lượng thực tế nhận, không phải lượng đặt. |
| Tỉnh/thành xuất xứ | Nơi nguyên liệu được sản xuất. |
| Vị trí GPS | Tọa độ điểm nhận hàng (tùy chọn). |

### Nhập khẩu

Chọn tab **Nhập khẩu** → **Nhập khẩu mới**. Ngoài các thông tin như trên, bạn khai mã tờ khai hải quan, mã HS, nước xuất xứ, cảng nhập, giá trị FOB. Tờ khai có trạng thái riêng (ví dụ "Chờ duyệt").

### Loại nguyên liệu tự sinh

Bạn **không cần** khai tay mục **Loại nguyên liệu** (`/dashboard/materials/types`). Danh mục này tự bổ sung mỗi khi bạn nhận hàng. Nó chỉ dùng để gộp các tên gọi trùng nhau (ví dụ "Gạo tám", "Gạo tám thơm", "Gạo Tám Xoan") thành một, giúp công thức và lệnh sản xuất nhận đúng lô.

---

## Con đường C – Tự trồng, tự nuôi

Con đường này dùng vùng nguyên liệu và đơn vị sản xuất đã khai ở chương 4. Nếu chưa khai, hãy quay lại chương 4 trước.

Con đường này dài hơn, vì nó ghi lại cả mùa vụ trước khi có nguyên liệu. Thứ tự **bắt buộc**:

```
Vùng nguyên liệu → Đơn vị sản xuất (chương 4) → Vụ sản xuất → Nhật ký canh tác → Thu hoạch → Lô thu hoạch
```

Hệ thống kiểm tra thứ tự này: không có thửa thì không ghi được nhật ký; không có nhật ký thì không thu hoạch được.

### C.1 Tạo vụ sản xuất và ghi nhật ký canh tác

Đường dẫn: `/dashboard/farming-journal`.

1. Chọn **thửa đất** trong danh sách (mỗi thửa ghi rõ cây trồng và trạng thái vụ). Thửa đất ở đây chính là đơn vị sản xuất đã khai ở chương 4.
2. Nếu thửa "Chưa có vụ sản xuất", bấm **Tạo vụ mới**.
3. Chọn **hoạt động**: gieo trồng, bón phân, phun thuốc… rồi khai ngày, giống, liều lượng, ảnh. Có thể khai bằng giọng nói, chụp ảnh, lấy GPS; hệ thống tự lưu nháp.
4. Lặp lại mỗi khi có hoạt động trên đồng.

![Nhật ký canh tác](/images/07-nhat-ky-canh-tac.png)

**Vì sao nhật ký phun thuốc quan trọng?** Hệ thống dùng ngày phun thuốc để tính **thời gian cách ly** – khoảng thời gian tối thiểu từ lần phun cuối đến khi được thu hoạch. Nếu còn trong thời gian cách ly, bước thu hoạch sẽ bị chặn.

### C.2 Thu hoạch

Đường dẫn: `/dashboard/harvest` → chọn ngành → **Ghi nhận thu hoạch** (có hai kiểu: Ghi nhận nhanh hoặc Biểu mẫu đầy đủ).

Chọn thửa đã có nhật ký, nhập sản lượng. Hệ thống kiểm tra thời gian cách ly thuốc rồi tạo một **lô thu hoạch**. Lô này là nguyên liệu đầu vào khi tạo lô thành phẩm, với loại nguồn "Vùng nguyên liệu của tôi".

> Với một số ngành, hệ thống yêu cầu nhật ký đạt mức đầy đủ tối thiểu mới cho thu hoạch. Nếu bị chặn, hãy kiểm tra công đoạn nào còn thiếu. Nếu trang báo ngành chưa được cấu hình luồng thu hoạch, hãy liên hệ bộ phận hỗ trợ.

---

## Ví dụ ghép lại

Công ty bánh gạo chuẩn bị nguyên liệu cho mẻ ngày 27/10:

- **Gạo tám thơm:** thu hoạch từ thửa 1 vùng trồng của công ty → có lô thu hoạch.
- **Mật ong, đường mía, dầu ăn, muối:** mua từ các nhà cung cấp, mỗi lần nhận hàng ghi một phiếu "Mua trong nước" kèm ảnh hóa đơn → có 4 lô nguyên liệu.

Khi tạo lô bánh gạo, cả 5 ô nguyên liệu đều có lô để chọn. Chuỗi truy xuất nối liền từ ruộng lúa và hóa đơn mua hàng đến gói bánh.

## Điều cần nhớ

Định mức trả lời "cần gì", còn lô nguyên liệu và lô thu hoạch trả lời "đã dùng cái gì cụ thể". Ghi nhận nguyên liệu **ngay khi nhận hàng hoặc thu hoạch**, đừng đợi đến lúc tạo lô mới làm bù. Với tự trồng, nhớ thứ tự Vùng → Thửa → Vụ → Nhật ký → Thu hoạch.
