---
title: Các loại tem và trang truy xuất
order: 9
group: Luồng chính
prerequisites:
  - text: "Đã có lô hàng (chương 7)"
    link: /luong-chinh/07-nguon-nguyen-lieu-va-tao-lo
  - text: "Đã ghi công đoạn cho lô (chương 8)"
    link: /luong-chinh/08-chi-tiet-lo-va-ghi-cong-doan
  - text: "Nên công khai trang giới thiệu (chương 3)"
    link: /luong-chinh/03-thiet-lap-doanh-nghiep
outcome: "Tem QR đã in và dán lên bao bì. Người mua quét là thấy trang truy xuất của đúng lô hàng."
---

# Bước 7 – Các loại tem và trang truy xuất

Tem mang mã QR trỏ tới trang truy xuất của đúng lô. Người mua chỉ cần quét bằng camera điện thoại, không phải cài ứng dụng. Trang đó không có dữ liệu riêng, nên hãy kiểm tra trước rồi mới in số lượng lớn.

Nhóm **Tem in** ở menu trái có nhiều màn hình, nhưng để bán được hàng thì chỉ cần mục 7.1 và 7.3. Các mục còn lại dùng khi cần kiểm soát kỹ hơn.

| # | Việc | Màn hình | Cần làm |
|---|---|---|---|
| 7.1 | Kiểm tra trang khách thấy | Trang chi tiết lô | Nên làm trước khi in |
| 7.2 | Chọn loại tem | Bảng trong mục này | Đọc một lần |
| 7.3 | In tem theo lô | `/dashboard/quick-label` | Bắt buộc |
| 7.4 | Thiết kế bố cục tem | `/dashboard/labels/designer` | Khi cần |
| 7.5 | Tem serial từng gói | `/dashboard/labels/packaging` | Khi cần |
| 7.6 | Tem chống giả | `/dashboard/compliance/anti-counterfeiting` | Khi cần |
| 7.7 | Nhãn thùng, pallet | `/dashboard/labels/packaging` | Khi giao theo thùng |
| 7.8 | Theo dõi tem | `/dashboard/labels` | Khi cần |

## 7.1 Kiểm tra trang khách thấy

1. Trên trang chi tiết lô, bấm **Xem như khách hàng**.
2. Xem lần lượt các thẻ theo bảng bên dưới.

![Trang truy xuất trên điện thoại](/images/10-trang-truy-xuat.png)

| Thẻ | Khách thấy gì | Thiếu thì sửa ở đâu |
|---|---|---|
| Tổng quan | Tên sản phẩm, GTIN, xuất xứ, nhà sản xuất, ngày sản xuất, số lần quét, nguồn nguyên liệu | Sản phẩm (chương 6), nguồn của lô (chương 7) |
| Hành trình | Các công đoạn đã ghi, nơi đã phân phối | Ghi công đoạn (chương 8), bán hàng (chương 10) |
| Nhãn | Thành phần, bảo quản, nhà sản xuất, hạn sử dụng | Phần nhãn của sản phẩm (mục 4.1) |
| Đánh giá | Đánh giá của người mua | Người mua tự gửi |

![Thẻ Hành trình trên trang truy xuất](/images/10-truy-xuat-hanh-trinh.png)

Khi doanh nghiệp đã công khai trang giới thiệu (mục 1.2), trang có thêm phần **Thương hiệu**. Lô còn **Nháp** thì trang hiện cảnh báo dữ liệu thử nghiệm, chưa phát hành chính thức.

> Lưu ý: mỗi lần mở trang này được tính thêm một lượt quét, kể cả khi bạn chỉ kiểm tra. Muốn xem mà không tăng lượt quét thì dùng **Hồ sơ toàn trình** trên trang chi tiết lô.

## 7.2 Chọn loại tem

Khác nhau ở chỗ tem đó phân biệt được đến đâu: cả lô, từng gói, hay từng thùng.

| Loại tem | Mỗi con tem mang | Dùng khi | Làm ở |
|---|---|---|---|
| Tem QR theo lô | Cùng một mã cho cả lô | Tem dán thông thường. Không tạo thêm dữ liệu. | Mục 7.3 |
| Nhãn bao bì | QR cùng thành phần, hạn dùng, nhà sản xuất | In thẳng thông tin nhãn lên bao bì | Mục 7.3 |
| Tem serial | Mã riêng cho từng gói | Cần biết chính xác gói nào. Màn hình gợi ý cho dược, đồ uống, điện tử. | Mục 7.5 |
| Tem chống giả | Mã riêng có chữ ký số, kèm mã PIN bí mật | Hàng dễ bị làm nhái, cần cảnh báo khi một tem bị quét quá nhiều | Mục 7.6 |
| Nhãn thùng SSCC | Mã riêng cho một thùng hoặc pallet | Giao hàng theo thùng, kho quét một mã là nhận cả thùng | Mục 7.7 |

Một lô có thể dùng nhiều loại cùng lúc. Với Hạt Vàng Việt: mỗi gói bánh dán tem QR theo lô, thùng giao đại lý có nhãn SSCC, và chỉ thêm tem chống giả nếu sản phẩm bị làm nhái. Mới bắt đầu thì dùng tem QR theo lô là đủ.

Hệ thống còn tạo sẵn 3 mã vạch từ GTIN của sản phẩm, in kèm QR nếu cần: EAN-13 để quét ở quầy bán lẻ, ITF-14 cho thùng carton, GS1 DataMatrix cho bao bì nhỏ.

## 7.3 In tem theo lô

1. Bấm **Quản lý tem** ở menu trái, rồi bấm **In tem nhanh**.
2. Ở ô **Sản phẩm**, chọn sản phẩm.
3. Ở ô **Lô hàng**, chọn lô cần in. Màn hình hiện nhãn điện tử và các nút in.
4. Gõ số tem và chọn khổ tem, rồi bấm nút in theo bảng bên dưới. Tờ tem mở ở tab mới.
5. Dán tem lên bao bì.

![In tem nhanh](/images/10-in-tem-nhanh.png)

| Nút | Dùng khi |
|---|---|
| **In tem QR hàng loạt** | In tem cùng một mã cho cả lô |
| **In nhãn Đ.42 k1 (bao bì)** | In nhãn bao bì đủ thông tin theo Nghị định 37 |
| **Khổ nhỏ ~38mm**, **Khổ vừa ~62mm** | Tem nhỏ dán lên quả, hộp; tem vừa có QR, tên và mã |
| **Tải QR (PNG)** | Lấy ảnh QR để đưa vào file thiết kế bao bì |
| **Xuất CSV**, **Xuất ZPL** | Gửi dữ liệu sang máy in tem |

> Lưu ý: nút **In tem serial riêng** không chỉ in. Mỗi lần bấm, hệ thống sinh thêm serial mới cho lô, tối đa 500 serial một lần. Không bấm thử nếu chưa cần tem serial.

Tab **Đóng gói và tem** trên trang chi tiết lô và màn **Tem & bao gói** cũng có đủ các nút này. Nội dung nhãn lấy từ phần nhãn của sản phẩm (mục 4.1), không nhập lại ở đây.

Nên kiểm tra nhãn trước khi in số lượng lớn: mở `/dashboard/compliance/labels`, bấm **Kiểm tra nhãn mới**, chọn sản phẩm.

## 7.4 Thiết kế bố cục tem

Dùng khi muốn đổi khổ tem hoặc vị trí các phần trên tem. Màn này chỉ lo bố cục. Khung xem trước dùng dữ liệu mẫu, khi in thật thông tin sẽ lấy theo lô.

1. Bấm **Thiết kế tem in** ở menu trái.
2. Chọn **Khổ tem** và **Loại serial**.
3. Tick các phần cần hiện trên tem, rồi kéo chúng trên khung xem trước tới vị trí mong muốn.
4. Gõ **Tên mẫu**, bấm **Lưu mẫu**.

![Thiết kế tem in](/images/10-thiet-ke-tem.png)

| Loại serial | Tương ứng với |
|---|---|
| Cùng mã (nông hộ — rẻ) | Tem QR theo lô |
| SGTIN per đơn vị (GS1) | Tem serial |
| Tem chống giả Ed25519 | Tem chống giả |

## 7.5 Tem serial từng gói

1. Bấm **Tem & bao gói** ở menu trái. Gõ mã lô rồi chọn lô.
2. Cuộn tới khối **Tem serial từng sản phẩm (SGTIN)**.
3. Gõ số lượng. Ô mã vạch tự điền GTIN của sản phẩm.
4. Bấm **Sinh serial**. Danh sách serial hiện ngay bên dưới.
5. Bấm **In sheet tem** để in.

![Tem & bao gói](/images/10-tem-bao-goi.png)

![Sinh serial cho lô](/images/10-tem-serial.png)

> Lưu ý: nút **In sheet tem** chỉ hiện ngay sau khi sinh serial, tải lại trang là mất. Hãy in luôn sau bước 4.

## 7.6 Tem chống giả

Mỗi con tem có mã riêng và mã PIN bí mật. Hệ thống đếm số lần quét từng tem và cảnh báo khi vượt ngưỡng, vì một tem bị quét quá nhiều có thể đã bị sao chép.

**Phát hành và in**

1. Bấm **Tem chống giả** ở menu trái, rồi bấm **Phát hành tem**.
2. Điền form theo bảng bên dưới, rồi bấm **Phát hành tem** ở cuối khung.
3. Tem hiện trong bảng với trạng thái **Đã xuất**, cột **Lô** còn trống. Khung **Dải tem** ghi lại đợt vừa phát hành.
4. Bấm **In PDF (lưới tem A4)** để tải file in, hoặc **Xuất CSV** để gửi xưởng in.

![Màn Tem chống giả](/images/10-chong-gia.png)

![Form phát hành tem](/images/10-chong-gia-phat-hanh.png)

| Ô | Điền gì |
|---|---|
| Loại tem | Chọn **Chống giả** |
| Số lượng | Số tem cần in. Nên phát hành vừa đủ, vì đây là dữ liệu thật. |
| Tiền tố lô tem | Vài ký tự để nhận ra đợt tem, đứng đầu mọi số sê-ri |
| Ngưỡng cảnh báo quét | Số lần quét tối đa trước khi cảnh báo. Mặc định 100, hạ xuống nếu muốn cảnh báo sớm hơn. |

> Lưu ý: file **Xuất CSV** chứa mã PIN bí mật của từng tem. Giữ kín file này, chỉ gửi cho đơn vị in.

**Gắn tem vào lô**

Phát hành không hỏi lô, nên tem chỉ thuộc về lô sau khi kích hoạt.

1. Ở dòng của tem, bấm **Thao tác**, chọn **Kích hoạt**.
2. Gõ mã lô, ví dụ `BGNM-20261030-JWQZ`, rồi bấm **Xác nhận**.

![Menu thao tác của một tem](/images/10-chong-gia-menu.png)

Menu **Thao tác** còn có:

| Mục | Dùng khi |
|---|---|
| **Tải QR** | Lấy ảnh QR của riêng tem này |
| **In lại** | Tem bị rách, mờ, cần in lại |
| **Tạm khoá** | Nghi tem bị sao chép, đang xác minh. Phải ghi lý do. |
| **Hủy** | Tem in hỏng, mất, thu hồi. Phải ghi lý do. |

**Tra một con tem**

Dán mã tem vào khung **Tra một con tem**, bấm **Tra**. Màn hình cho biết tem đã bị quét bao nhiêu lần, từ bao nhiêu nguồn, mã PIN đã dùng chưa. Việc tra này không làm tăng số lần quét.

Doanh nghiệp đã có tem của đơn vị khác thì bấm **Nhập vào đây** ở cuối trang, rồi điền **Nhà cung cấp** và **Danh sách serial**.

## 7.7 Nhãn thùng, pallet

Thùng có nhãn SSCC thì kho chỉ cần quét một mã là nhận cả thùng. Cần khai mã GS1 trước (mục 1.4) và đã sinh serial cho lô (mục 7.5).

1. Trong **Tem & bao gói**, chọn lô rồi cuộn tới khối **Thùng & Pallet (SSCC)**.
2. Giữ **Để hệ thống cấp**, chọn **Carton (thùng)**, bấm **Tạo 1 thùng**. Thùng hiện ra kèm mã SSCC.
3. Bấm **Đóng hàng có serial** ở dòng thùng, tick đúng các serial đã đặt vào thùng.
4. Bấm **Xác nhận đóng**. Nút **In nhãn** lúc này mới bấm được.
5. Bấm **In nhãn**, dán nhãn lên thùng.

![Đóng hàng vào thùng](/images/10-thung-sscc.png)

Giao nhiều tầng thì gõ số lượng từng cấp ở dòng **Pallet × Case/pallet × Carton/case** rồi bấm **Tạo cây**. Ví dụ 1 × 4 × 6 là 1 pallet, 4 case, 24 carton.

> Lưu ý: màn hình báo mức **Cơ bản** chỉ có một cấp thùng, pallet nhiều tầng cần mức **Nâng cao** hoặc **Chuyên sâu**. Tài khoản mức Cơ bản vẫn tạo được 1 thùng có SSCC như các bước trên.

Khối **Chia lô thành các lô con** trên cùng màn hình chỉ dùng được khi lô đã hoàn tất quy trình.

## 7.8 Theo dõi tem

Mở **Quản lý tem** để xem sổ các lô tem theo trạng thái. Nút **Chi tiết** và **In tem** đều mở trang chi tiết lô. Nút **Tra cứu** mở trang công khai nên có thể tăng lượt quét.

![Sổ quản lý tem](/images/10-so-tem.png)

Mục **Truy xuất hai chiều** dùng để tra một mã tem, SSCC hoặc mã lô, xem nguồn gốc và bên nhận trực tiếp. Tính năng này cần mức **Chuyên sâu**. Chưa đăng ký thì màn hình chỉ hiện nút **Xem các gói dịch vụ** và **Liên hệ hỗ trợ**.
