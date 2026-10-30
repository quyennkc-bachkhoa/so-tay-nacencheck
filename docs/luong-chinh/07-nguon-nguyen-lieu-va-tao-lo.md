---
title: Khai nguồn nguyên liệu và tạo lô hàng
order: 7
group: Luồng chính
prerequisites:
  - text: "Đã khai nhà cung cấp và vật tư (chương 5)"
    link: /luong-chinh/05-danh-muc-vat-tu
  - text: "Sản phẩm đã xuất bản quy trình và đã kích hoạt (chương 6)"
    link: /luong-chinh/06-san-pham-dinh-muc-quy-trinh
  - text: "Đã có cơ sở sản xuất. Nếu tự trồng thì có vùng và người được phân công (chương 4)"
    link: /luong-chinh/04-co-so-va-vung-nguyen-lieu
outcome: "Bạn có một lô hàng với mã lô và mã QR riêng, đã khai nguyên liệu đến từ đâu."
---

# Bước 5 – Khai nguồn nguyên liệu và tạo lô hàng

Lô hàng là một mẻ hàng cụ thể. Mọi việc về sau như ghi công đoạn, in tem, bán hàng đều gắn vào mã lô. Khi tạo lô, bạn trả lời ba câu: làm sản phẩm nào, nguyên liệu từ đâu, làm ở cơ sở nào.

```
Sản phẩm đã kích hoạt  ─┐
Nguồn nguyên liệu      ─┼─→  Tạo lô hàng  →  Mã lô + mã QR  →  Công bố lô
Cơ sở sản xuất         ─┘
```

| # | Việc | Màn hình | Cần làm |
|---|---|---|---|
| 5.1 | Chọn loại nguồn | Form tạo lô | Bắt buộc |
| 5.2 | Chuẩn bị nguồn | `/dashboard/warehouse/receipts`, `/dashboard/harvest` | Tùy loại nguồn |
| 5.3 | Tạo lô hàng | `/dashboard/batches` | Bắt buộc |
| 5.4 | Công bố lô | Trang chi tiết lô | Tự động khi ghi công đoạn đầu tiên |

## 5.1 Chọn loại nguồn

Mỗi loại nguồn cần chuẩn bị một thứ khác nhau. Một lô có thể có nhiều nguồn, ví dụ gạo từ vùng của công ty và mật ong mua ngoài.

![Các loại nguồn trong form tạo lô](/images/07-loai-nguon.png)

| Loại nguồn | Dùng khi | Cần chuẩn bị |
|---|---|---|
| Mua từ đơn vị khác | Mua của nhà cung cấp, đại lý, nông hộ | Nhà cung cấp trong danh bạ (mục 3.2), số hóa đơn |
| Vùng nguyên liệu của tôi | Tự trồng, tự nuôi | Vùng và đơn vị sản xuất (chương 4), nhật ký và thu hoạch nếu có |
| Từ kho của tôi | Dùng hàng đã nhập kho | Phiếu nhập và lô truy xuất |
| Nhập khẩu | Hàng có tờ khai hải quan | Tờ khai nhập khẩu |
| Mua cùng đơn vị dùng NacenCheck | Đối tác cũng dùng hệ thống | Đối tác ở mục **Liên kết đối tác**, hoặc tên đơn vị gửi |
| Không xác định | Chưa rõ nguồn | Lý do. Nên tránh: lô bị xếp hạng tin cậy Bronze, hiện cảnh báo trên trang tra cứu và không xuất khẩu được. |

Dùng **Mua từ đơn vị khác** hoặc **Vùng nguyên liệu của tôi** thì có thể sang thẳng mục 5.3.

## 5.2 Chuẩn bị nguồn

### Ghi nhận hàng mua trong nước

Dùng khi hàng về kho và bạn muốn theo dõi tồn kho.

1. Bấm **Kho** ở menu trái, mở tab **Phiếu**, rồi mở tab nhỏ **Mua trong nước**.
2. Bấm **Lập phiếu nhập**.
3. Điền form theo bảng bên dưới, rồi bấm **Save**. Hàng hiện ngay ở tab **Tồn kho**.

![Form mua trong nước](/images/07-mua-trong-nuoc.png)

| Ô | Điền gì |
|---|---|
| Kho, Vật tư, Nhà cung cấp trên phiếu | Bắt buộc. Chọn trong danh mục đã khai ở chương 5. |
| Đơn giá | Bắt buộc. Không dùng dấu phân cách hàng nghìn. |
| Hạn dùng | Bắt buộc với vật tư đã tick **Có hạn dùng** |
| Tên nguyên liệu | Bắt buộc. Gõ tên, nếu chưa có thì bấm dòng **Dùng tên** để thêm vào danh mục. |
| Ngày nhận | Bắt buộc. Ngày hàng về thực tế, hệ thống điền sẵn hôm nay. |
| Số hóa đơn / chứng từ, Số lượng thực nhận | Theo từng nhà cung cấp. Ghi số lượng thực nhận, không phải số đặt. |
| Đơn vị tính | Đơn vị của số lượng |
| Tỉnh/thành xuất xứ | Nơi nguyên liệu được sản xuất |

Hệ thống tự đặt số lô theo dạng VN-DOM kèm ngày. Muốn tự đặt số lô thì dùng nút **Lập phiếu nhập** ở tab **Phiếu** (mục 3.4).

### Tạo lô truy xuất từ tồn kho

Hàng mới nhập kho chưa chọn được ở nguồn **Từ kho của tôi**. Phải tạo lô truy xuất trước.

1. Mở tab **Tồn kho**.
2. Trên dòng lô cần dùng, bấm **Tạo lô truy xuất**.

![Tạo lô truy xuất từ tồn kho](/images/07-ton-kho.png)

> Lưu ý: tại thời điểm viết (30/10/2026), nút này đang báo lỗi `BATCH_CREATION_FAILED`, nên nguồn **Từ kho của tôi** chưa dùng được. Trong lúc chờ sửa, hãy khai nguồn **Mua từ đơn vị khác** khi tạo lô.

### Khai tờ khai nhập khẩu

1. Ở tab **Phiếu**, mở tab nhỏ **Nhập khẩu**, rồi bấm **Nhập khẩu mới**.
2. Chọn cách khai: **Ghi thông tin nhập khẩu lên phiếu kho** với hàng đã nhập kho, hoặc **Gắn vào lô hàng có sẵn** với hàng thương mại nhập về bán.
3. Điền form theo bảng bên dưới, rồi bấm **Nộp tờ khai**.

Cách **Ghi thông tin nhập khẩu lên phiếu kho** chỉ lưu tờ khai, chưa tạo lô truy xuất. Sau đó vẫn phải tạo lô truy xuất cho lô kho này.

![Form tờ khai nhập khẩu](/images/07-nhap-khau.png)

| Ô | Điền gì |
|---|---|
| Số tờ khai | Bắt buộc. Số trên tờ khai VNACCS. |
| Lô kho đã nhận | Bắt buộc. Chọn lô đã lập phiếu nhập. |
| Số lượng, Đơn vị | Lượng hàng trên tờ khai |
| Nhà xuất khẩu, Mã HS, Nước xuất xứ, Cảng vào | Theo tờ khai |
| Trị giá FOB (USD), Ngày thông quan | Theo tờ khai |
| Tờ khai đã thông quan | Bắt buộc. Đính kèm bản scan hoặc PDF. |

### Tự trồng, tự nuôi

Thứ tự phải đi đúng, vì thu hoạch cần thửa đã có nhật ký:

```
Vùng → Đơn vị sản xuất → Phân công → Nhật ký canh tác → Thu hoạch
```

**Ghi nhật ký canh tác**

1. Đăng nhập bằng tài khoản đã được phân công ở mục 2.3.
2. Bấm **Nhật ký canh tác** ở menu trái.
3. Chọn đơn vị sản xuất, vụ sản xuất và hoạt động như gieo trồng, bón phân, phun thuốc, rồi ghi lại.
4. Ghi mỗi khi có việc trên đồng. Đừng để đến lúc thu hoạch mới ghi bù.

Chưa được phân công thì màn hình báo như ảnh dưới. Hãy nhờ quản trị phân công ở mục 2.3.

![Nhật ký khi chưa được phân công](/images/07-nhat-ky-canh-tac.png)

**Ghi nhận thu hoạch**

1. Bấm **Thu hoạch** ở menu trái, rồi bấm **Ghi nhận nhanh**.
2. Chọn **Sản phẩm thu hoạch**, **Vùng trồng**, **Thửa thu hoạch**, rồi gõ **Sản lượng thu hoạch**.
3. Bấm **Ghi nhận thu hoạch**. Mỗi lần thu hoạch tạo một lô thu hoạch.

![Form ghi nhận thu hoạch](/images/07-thu-hoach.png)

> Lưu ý: hệ thống kiểm tra thời gian cách ly thuốc từ nhật ký của thửa trước khi ghi nhận thu hoạch, nên hãy ghi đúng ngày phun thuốc.

## 5.3 Tạo lô hàng

1. Bấm **Lô hàng** ở menu trái, rồi bấm **Tạo lô mới**.
2. Điền phần thông tin cơ bản theo bảng bên dưới.

![Form tạo lô, phần thông tin cơ bản](/images/08-form-tao-lo.png)

| Ô | Điền gì |
|---|---|
| Sản phẩm đã công bố | Bắt buộc. Gõ tên hoặc SKU rồi chọn. Không thấy sản phẩm thì kiểm tra đã **Kích hoạt** chưa (mục 4.4). |
| Tên lô hàng | Không bắt buộc. Tên để bạn dễ nhận ra, không phải mã lô. |
| Mô tả sản phẩm | Không bắt buộc. Đặc tính, tiêu chuẩn của lô. |
| Ngày sản xuất / thu hoạch | Hệ thống điền sẵn hôm nay. Hạn sử dụng của lô tự tính từ ngày này cộng số ngày đã khai ở sản phẩm. |
| Mã HS | Tự điền theo sản phẩm. Chưa khai thì có thể để trống. |

3. Ở phần **Chi tiết nguồn gốc**, chọn **Loại nguồn** rồi điền các ô hiện ra. Bấm **Thêm nguồn** nếu có nhiều nguồn.
4. Nếu chưa đủ nguồn cho mọi nguyên liệu, điền ô **Lý do chưa khai đủ nguồn nguyên liệu**. Xem giải thích bên dưới ảnh.

![Form tạo lô, phần nguồn nguyên liệu](/images/08-lo-nguon.png)

Với sản phẩm có định mức, hệ thống đối chiếu từng vật tư trong công thức. Khai nguồn **Vùng nguyên liệu của tôi** hay **Mua từ đơn vị khác** vẫn chưa được tính là đủ cho vật tư, nên khi bấm tạo lô, hệ thống báo "Thiếu nguồn nguyên liệu" kèm tên từng vật tư. Điền lý do thì tạo được lô, và lý do được lưu kèm lô để tra lại.

5. Kéo xuống, kiểm tra **Xuất xứ của lô này**. Hệ thống tự lấy từ nguồn đã khai, bấm **Sửa** nếu chưa đúng.
6. Ở **Nơi sơ chế / đóng gói lô**, bấm **Đúng, lô làm ở đây** nếu đúng cơ sở gợi ý, hoặc chọn cơ sở khác.
7. Ở **Đóng gói ở đâu?**, chọn nơi đóng gói.

![Form tạo lô, phần cơ sở](/images/08-lo-co-so.png)

8. Gõ **Số lượng** của lô. Hệ thống hiện bảng **Định mức và tồn kho dự kiến**: cần bao nhiêu mỗi vật tư, đang tồn bao nhiêu, còn thiếu bao nhiêu. Thiếu tồn kho vẫn tạo được lô.
9. Để trống **Mã lô** thì hệ thống tự sinh, ví dụ BGNM-20261030-JWQZ.
10. Bấm **Tạo lô hàng**.

![Form tạo lô, phần số lượng và định mức](/images/08-lo-so-luong.png)

Nút **Tạo lô hàng** mờ khi chưa đủ điều kiện, và dòng lý do hiện ngay phía trên nút. Đọc dòng đó rồi xử lý theo bảng:

| Thông báo | Cách xử lý |
|---|---|
| Hãy chọn sản phẩm đã công bố | Chọn sản phẩm. Không có thì xuất bản quy trình và kích hoạt ở chương 6. |
| Hãy chọn nơi sơ chế / đóng gói của lô | Bấm **Đúng, lô làm ở đây** |
| Hãy nhập Khối lượng/Số lượng lớn hơn 0 | Gõ ô **Số lượng** |

Nút đã sáng mà bấm vẫn hiện thông báo đỏ **Thiếu nguồn nguyên liệu** thì bổ sung nguồn, hoặc điền ô **Lý do chưa khai đủ nguồn nguyên liệu** rồi bấm lại.

## 5.4 Công bố lô

Lô mới tạo ở trạng thái **Nháp**, trang tra cứu hiện cảnh báo dữ liệu thử nghiệm. Có hai cách đưa lô ra khỏi Nháp:

- **Ghi công đoạn đầu tiên** (chương 8): lô tự chuyển sang **Đang xử lý** và **Chờ đồng bộ**, không hỏi lại.
- **Bấm Công bố lô** trên trang chi tiết lô, rồi bấm **Công bố** để xác nhận. Dùng khi muốn công bố trước khi ghi công đoạn.

Vì vậy hãy kiểm tra kỹ thông tin lô trước khi ghi công đoạn đầu tiên.

![Trang chi tiết lô vừa tạo](/images/08-lo-ket-qua.png)

Trên trang chi tiết lô có sẵn mã QR, liên kết truy xuất công khai và danh sách công đoạn theo quy trình đã xuất bản.

- **Bổ sung nguồn sau khi tạo lô:** mở tab **Nguồn đầu vào/đầu ra**, bấm **Thêm nguồn đầu vào cho lô**.
- **Lấy vật tư cho lô:** theo hướng dẫn trên form, vào tab **Định mức** của lô để lập lệnh sản xuất, rồi từ lệnh lập phiếu xuất theo lô vật tư. Tại thời điểm viết (30/10/2026) tab này đang báo lỗi, nên tạm lập **Lập phiếu xuất** ở Kho (mục 3.6).
- **Tạo nhầm khi còn Nháp:** ở danh sách **Lô hàng**, bấm **Xóa**. Lô vào **Thùng rác**, có thể khôi phục, và hệ thống tự dọn sau 30 ngày.

> Lưu ý: gói Free giới hạn số lô truy xuất mỗi tháng. Nguồn **Mua từ đơn vị khác** có thể sinh thêm một lô đầu vào, và mỗi lần bán tạo một lô con, nên một mẻ hàng có thể trừ nhiều lượt. Xem số còn lại ở tab **Sản phẩm** của **Hồ sơ thương hiệu**.
