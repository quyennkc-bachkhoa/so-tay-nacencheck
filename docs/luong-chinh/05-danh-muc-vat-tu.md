---
title: Danh mục vật tư và kho
order: 5
group: Luồng chính
prerequisites:
  - text: "Đã khai hồ sơ doanh nghiệp (chương 3)"
    link: /luong-chinh/03-thiet-lap-doanh-nghiep
  - text: "Đã biết cách thêm cơ sở (chương 4)"
    link: /luong-chinh/04-co-so-va-vung-nguyen-lieu
outcome: "Có kho, nhà cung cấp và danh mục vật tư đúng đơn vị tính. Hàng mua về đã vào tồn kho theo từng lô."
---

# Bước 3 – Danh mục vật tư và kho

**Vật tư** là mọi thứ doanh nghiệp nhập, xuất hoặc tiêu hao: nguyên liệu, gia vị, bao bì. Công thức sản phẩm ở chương sau chỉ chọn được nguyên liệu trong danh mục này.

Muốn nhập hàng vào kho, bạn phải khai đủ ba thứ trước, vì form phiếu nhập chọn từ đó. Thiếu thứ nào thì ô tương ứng trên phiếu sẽ trống.

```
Cơ sở loại Kho  ─┐
Nhà cung cấp    ─┼─→  Lập phiếu nhập  →  Tồn kho theo lô  →  Tạo lô truy xuất
Vật tư          ─┘
```

| # | Việc | Màn hình | Cần làm |
|---|---|---|---|
| 3.1 | Tạo kho | `/dashboard/facilities` | Bắt buộc |
| 3.2 | Khai nhà cung cấp, khách hàng | `/dashboard/distribution/network` | Bắt buộc |
| 3.3 | Thêm vật tư | `/dashboard/warehouse/items` | Bắt buộc |
| 3.4 | Lập phiếu nhập | `/dashboard/warehouse/receipts` | Khi có hàng về |
| 3.5 | Xem tồn kho | `/dashboard/warehouse/stock` | Khi cần kiểm tra |
| 3.6 | Xuất kho, chuyển kho, hủy phiếu | `/dashboard/warehouse/receipts` | Khi cần |

## 3.1 Tạo kho

Ô **Kho** trên phiếu chỉ nhận cơ sở có loại đúng là **Kho**. Nhà máy, Kho lạnh, Tổng kho/Depot đều không hiện ở ô này, nên dù đã có nhà máy bạn vẫn phải tạo thêm một kho.

1. Bấm **Quản lý cơ sở** ở menu trái, rồi bấm **Thêm cơ sở**.
2. Điền form như chương 4, và chọn **Loại cơ sở** là **Kho**.
3. Bấm **Tạo**.

![Tạo cơ sở loại Kho](/images/05-tao-kho.png)

## 3.2 Khai nhà cung cấp, khách hàng

Ô **Nhà cung cấp** trên phiếu nhập lấy từ danh sách đối tác có loại **Nhà cung cấp**. Ô **Khách hàng** trên phiếu xuất lấy từ đối tác có loại **Khách hàng**.

1. Mở `/dashboard/distribution/network`. Trang này chưa có trong menu trái, nên bạn mở bằng đường dẫn này.
2. Bấm **Thêm đối tác**.
3. Điền form theo bảng bên dưới.
4. Bấm **Lưu đối tác**.

![Form thêm đối tác](/images/05-them-doi-tac.png)

| Ô | Điền gì |
|---|---|
| Mã đối tác | Bắt buộc. Mã bạn tự đặt, nên có quy tắc. |
| Tên đối tác | Bắt buộc. Tên in trên phiếu. |
| Loại | Mặc định là Đại lý, phải đổi thành **Nhà cung cấp** hoặc **Khách hàng**. Để Đại lý thì đối tác không hiện trên phiếu. |
| Cấp, Đối tác cấp trên | Để nguyên nếu chỉ dùng cho phiếu kho |
| GLN | Bỏ trống, hệ thống tự sinh |
| Điện thoại, Tỉnh/thành | Nên điền. Thiếu thì khi thu hồi hàng, hệ thống không báo được đối tác và không biết hàng đang ở tỉnh nào. |
| Mã số thuế | Điền nếu có |

> Lưu ý: mục **Liên kết đối tác** ở menu trái là việc khác, dùng để kết nối với doanh nghiệp cũng dùng NacenCheck qua mã số thuế. Muốn đối tác hiện trên phiếu kho, hãy khai ở trang trên.

## 3.3 Thêm vật tư

1. Bấm **Kho** ở menu trái, mở tab **Danh mục vật tư**, rồi bấm **Thêm vật tư**.

![Danh mục vật tư](/images/05-danh-muc-vat-tu.png)

2. Điền form theo bảng bên dưới.
3. Bấm **Lưu vật tư**.

![Form thêm vật tư](/images/05-them-vat-tu.png)

| Ô | Điền gì |
|---|---|
| Mã vật tư | Bắt buộc. Nên đặt theo nhóm, ví dụ NL cho nguyên liệu, BB cho bao bì. |
| Tên vật tư | Bắt buộc. Tên gọi thông thường. |
| ĐVT cơ sở | Bắt buộc. Đơn vị công thức và tồn kho dùng để tính. |
| Chỉ đếm số nguyên | Tick với hàng đếm theo cái, hộp, gói |
| Có hạn dùng | Tick thì mỗi lần nhập kho bắt buộc khai hạn dùng |
| ĐVT quy đổi | Khi nhà cung cấp giao theo đơn vị lớn hơn. Ví dụ 1 thùng = 20 lít: chọn Thùng, tỷ lệ 20. |
| Thương phẩm | Để trống với nguyên liệu và bao bì. Xem lưu ý bên dưới. |

> Lưu ý: muốn nhập thành phẩm vào kho, sản phẩm phải có vật tư gắn với nó. Hãy khai sản phẩm ở chương 6 trước, rồi quay lại thêm một vật tư và chọn sản phẩm đó ở ô **Thương phẩm**. Thiếu bước này, hệ thống báo chưa nhập kho được.

Trên menu còn có **Mẫu vật tư** và **Loại vật tư**. Đó là danh mục khác, dành cho giống, phân bón, thuốc bảo vệ thực vật trong quy trình canh tác. Công thức sản phẩm và phiếu kho chỉ dùng **Danh mục vật tư** ở mục này.

## 3.4 Lập phiếu nhập

Mỗi lần nhận hàng, bạn lập một phiếu. Phiếu được **ghi sổ ngay khi lưu**, không có bản nháp, nên hãy kiểm tra kỹ trước khi bấm.

1. Mở tab **Phiếu**, rồi bấm **Lập phiếu nhập**.
2. Chọn **Lý do**, **Kho** và đối tác.
3. Điền từng dòng hàng theo bảng bên dưới. Có nhiều loại hàng thì bấm **Thêm dòng**, tối đa 50 dòng.
4. Bấm **Lưu phiếu**. Hệ thống cấp mã phiếu, ví dụ NK-2610-0001.

![Form lập phiếu nhập, phần đầu dòng hàng](/images/05-phieu-nhap.png)

Bảng dòng hàng dài hơn khung form. Kéo bảng sang phải để thấy ô **Số lượng** và **Đơn giá**.

![Form lập phiếu nhập, phần cuối dòng hàng](/images/05-phieu-nhap-gia.png)

Các ô trên phiếu đổi theo **Lý do**:

| Lý do | Dùng khi | Cần thêm |
|---|---|---|
| Mua hàng | Mua từ nhà cung cấp | **Nhà cung cấp** và **Đơn giá** |
| Khách trả hàng | Khách trả lại hàng đã bán | **Khách hàng** |
| Tồn đầu kỳ | Khai hàng đang có sẵn lúc mới dùng hệ thống | Không cần đối tác |
| Nhập khác | Trường hợp còn lại | **Ghi chú** bắt buộc |

| Ô trên dòng | Điền gì |
|---|---|
| Vật tư | Chọn trong danh mục |
| Số lô | Số lô của nhà cung cấp, để sau này biết hàng thuộc lần nhập nào |
| Hạn dùng | Bắt buộc với vật tư đã tick **Có hạn dùng**, và phải sau ngày nhập |
| ĐVT | Đơn vị cơ sở hoặc đơn vị quy đổi đã khai |
| Số lượng | Lớn hơn 0, tối đa 3 chữ số thập phân, không dùng dấu phân cách hàng nghìn |
| Đơn giá | Giá một đơn vị, không dùng dấu phân cách hàng nghìn |

## 3.5 Xem tồn kho

Sau khi lưu phiếu, hàng hiện ở tab **Tồn kho**, tách riêng theo từng lô.

![Tồn kho theo lô](/images/05-ton-kho.png)

- **Tồn kho:** lượng còn theo lô và hạn dùng. Bấm **Sắp hết hạn (30 ngày)** để lọc lô sắp hết hạn.
- **Tạo lô truy xuất:** tạo lô nguyên liệu từ dòng tồn kho này để dùng trong chuỗi truy xuất. Xem lưu ý ở mục 5.2.
- **Thẻ kho:** lịch sử nhập, xuất của một vật tư. Chọn vật tư, khoảng ngày rồi bấm **Xem**.
- **Truy xuất:** tìm một lô để xem lô đó làm từ gì và đã đi đâu.

![Thẻ kho của vật tư](/images/05-the-kho.png)

## 3.6 Xuất kho, chuyển kho, hủy phiếu

Các nút nằm ở tab **Phiếu**.

- **Lập phiếu xuất:** chọn lý do **Bán hàng**, **Trả nhà cung cấp**, **Hủy do hỏng/hết hạn** hoặc **Xuất khác**, rồi chọn kho, vật tư và lô. Danh sách lô hiện lượng còn, nhà cung cấp và hạn dùng.
- **Chuyển kho:** chọn **Kho đi**, **Kho đến**, vật tư và lô. Cần có ít nhất hai cơ sở loại Kho.
- **Nhập thành phẩm:** chọn kho và lô sản xuất, sau khi đã có lô ở chương 7.
- **Hủy phiếu:** bấm **Chi tiết** trên dòng phiếu, rồi bấm **Hủy phiếu** và nhập lý do. Phiếu đã hủy không còn tính vào tồn kho.

> Lưu ý: nếu hàng của phiếu nhập đã được xuất hoặc chuyển đi, phải hủy các phiếu đó trước thì mới hủy được phiếu nhập.
