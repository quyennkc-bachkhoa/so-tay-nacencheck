---
title: Hợp tác xã
order: 14
group: Hợp tác xã
---

# Hợp tác xã

Chương này dành cho hợp tác xã (HTX) và doanh nghiệp quản lý nhiều nông hộ. Khác với doanh nghiệp tự trồng, mỗi thửa ở đây có một nông hộ làm chủ, và nhật ký canh tác do nông hộ tự ghi hoặc HTX ghi thay.

Bấm **Hợp tác xã** ở nhóm **Vùng nguyên liệu & Hợp tác xã** trên menu trái để mở màn hình tổng hợp các công cụ.

![Màn hình Hợp tác xã](/images/14-tong-quan.png)

```
1. Bật chế độ HTX
       ↓
2. Đăng ký vùng nguyên liệu
       ↓
3. Tạo tài khoản nông hộ       (từng hộ hoặc hàng loạt từ file)
       ↓
4. Khai thửa cho nông hộ       (thửa thuộc vùng nào, hộ nào)
       ↓
5. Chuẩn bị lịch canh tác mẫu
       ↓
6. Phát quy trình kỹ thuật     (nông hộ nhận thẻ việc theo ngày)
       ↓
7. Nhật ký canh tác            (nông hộ tự ghi, hoặc HTX ghi thay khi có giấy uỷ quyền)
       ↓
8. Thu hoạch rồi tạo lô hàng
```

| # | Việc | Màn hình | Cần làm |
|---|---|---|---|
| 1 | Bật chế độ HTX | `/dashboard/settings/preferences` | Làm đầu tiên |
| 2 | Đăng ký vùng | `/dashboard/zones` | Bắt buộc |
| 3 | Tạo tài khoản nông hộ | `/dashboard/users`, `/dashboard/cooperative/bulk-signup` | Bắt buộc |
| 4 | Khai thửa | `/dashboard/cooperative/signup` | Bắt buộc |
| 5 | Lịch canh tác mẫu | `/dashboard/templates/workflows` | Nên làm |
| 6 | Phát quy trình | `/dashboard/cooperative/broadcasting` | Nên làm |
| 7 | Uỷ quyền, ghi nhật ký thay | `/dashboard/proxy-authorizations` | Khi nông hộ không tự ghi được |
| 8 | Thu hoạch, tạo lô | `/dashboard/harvest` | Bắt buộc |

> Lưu ý: tài khoản ví dụ trong sổ tay chưa có nông hộ nào, nên các danh sách nông hộ trong ảnh còn trống.

## 1. Bật chế độ HTX

1. Bấm **Cài đặt** ở menu trái, rồi bấm **Tùy chọn**.
2. Bật **DN có hoạt động nông nghiệp** để menu hiện vùng trồng, nhật ký, thu hoạch và HTX.
3. Bật **Đơn vị là hợp tác xã**.

HTX có thể được ưu đãi giá theo số thành viên ([chương 19](/quan-tri/19-gia-va-thu-tien)). Nên bật trước khi đăng ký vùng. Khi bật, vùng mới không tự sinh sẵn "Thửa 1". Nếu để thửa chung phủ cả vùng, thửa này sẽ chồng lên thửa của từng hộ và làm tổng diện tích bị đếm đôi.

## 2. Đăng ký vùng nguyên liệu

Làm như Bước 2 của luồng chính (chương 4). Nhập ranh giới cả vùng, còn thửa của từng hộ khai ở mục 4 bên dưới.

## 3. Tạo tài khoản nông hộ

Mỗi nông hộ cần một tài khoản vai trò **Nông hộ**. Có tài khoản rồi thì mới chọn được hộ đó khi khai thửa.

**Tạo từng hộ**

1. Bấm **Quản lý nhân viên**, rồi bấm **Thêm thành viên**.
2. Ở ô **Vai trò**, chọn **Nông hộ**. Form đổi sang các ô dành cho nông hộ.
3. Điền theo bảng bên dưới, rồi bấm **Tạo tài khoản**.

![Tạo tài khoản nông hộ](/images/14-tao-nong-ho.png)

| Ô | Điền gì |
|---|---|
| Số điện thoại nông hộ | Số nông hộ dùng để đăng nhập |
| Email khôi phục | Không bắt buộc |
| Họ và tên | Tên chủ hộ |
| Số CCCD nông hộ | Đúng 12 chữ số, để tránh khai trùng. Hệ thống không hiện lại số đầy đủ. |
| Mật khẩu | Tối thiểu 8 ký tự, gồm chữ và số. Nhớ đưa cho nông hộ. |

**Tạo hàng loạt từ file**

Dùng khi có hàng trăm hộ.

1. Trên màn hình **Hợp tác xã**, bấm **Đăng ký thành viên hàng loạt**.
2. Bấm **Tải mẫu CSV**, rồi điền danh sách theo bảng bên dưới. Giữ nguyên dòng tiêu đề.
3. Bấm **Tiếp tục → Tải file lên**, chọn file. File tối đa 2 MB, khoảng 10.000 dòng.
4. Xem trước kết quả kiểm tra, rồi hoàn tất.

![Đăng ký hàng loạt](/images/14-dang-ky-hang-loat.png)

| Cột | Điền gì |
|---|---|
| `ho_ten` | Họ tên chủ hộ |
| `cccd` | Đúng 12 chữ số |
| `sdt_zalo` | Dạng +84xxx, 84xxx hoặc 0xxx |
| `dien_tich_m2` | Diện tích, số lớn hơn 0, tính bằng m² |
| `ma_thua` | Mã thửa, không trùng trong file |
| `ghi_chu` | Không bắt buộc |

> Lưu ý: file này chứa số CCCD của nông hộ. Giữ kín, không gửi qua nhóm chat, và xóa khỏi máy sau khi tải lên.

## 4. Khai thửa cho nông hộ

1. Trên màn hình **Hợp tác xã**, bấm **Khai thửa cho nông hộ**.
2. Điền form theo bảng bên dưới, rồi bấm **Lưu thửa**. Mã thửa do hệ thống tạo.

![Khai thửa cho nông hộ](/images/14-khai-thua.png)

| Ô | Điền gì |
|---|---|
| Chủ thửa (nông hộ) | Chọn nông hộ đã tạo ở mục 3 |
| Tên thửa | Tên dễ nhận ra, ví dụ theo xứ đồng |
| Diện tích (m²) | Diện tích thửa |
| Cây trồng | Chọn loại cây |
| Vùng trồng | Không bắt buộc, có thể gán sau |
| Ghi chú | Không bắt buộc |

Thửa chưa có vùng thì không được tính vào hồ sơ vùng, và lô thu hoạch không truy được về vùng. Mở **Thửa đất** trên màn hình **Hợp tác xã** để tìm thửa chưa gắn vùng và gán vào.

## 5. Chuẩn bị lịch canh tác mẫu

Lịch mẫu là danh sách việc theo ngày tính từ đầu vụ, ví dụ Ngày 0 làm đất, Ngày 3 gieo sạ, Ngày 95 thu hoạch.

1. Bấm **Lịch canh tác mẫu** ở nhóm **Danh mục**, hoặc trên màn hình **Hợp tác xã**.
2. Mẫu **Hệ thống Core** chỉ đọc. Muốn đổi ngày hoặc công việc thì bấm **Sao chép để chỉnh** để có bản riêng, rồi sửa.
3. Bấm **Ban hành mùa vụ** để chuyển sang mục 6.

![Lịch canh tác mẫu](/images/14-lich-mau.png)

> Lưu ý: lịch này chỉ để nhắc việc cho nông hộ, không phải quy trình của sản phẩm. Quy trình dùng để ghi công đoạn và in tem nằm ở **Sản phẩm** (mục 4.3).

## 6. Phát quy trình kỹ thuật

Hệ thống tạo thẻ việc theo ngày cho từng nông hộ được chọn. Nông hộ xem ở mục **Việc** và **Bản tin nhóm** trên điện thoại.

1. Bấm **Ban hành mùa vụ** ở mục 5, hoặc mở **Phát quy trình kỹ thuật** rồi bấm **Quy trình mới**.
2. Điền form theo bảng bên dưới.
3. Bấm **Phát hành quy trình**.

![Phát hành quy trình kỹ thuật](/images/14-phat-quy-trinh.png)

| Ô | Điền gì |
|---|---|
| Mùa vụ | Chọn vụ đang mở, hoặc **Nhập tên vụ mùa khác** |
| Vùng trồng | Một vùng, hoặc toàn bộ các vùng của HTX |
| Nạp nhanh từ Lịch canh tác mẫu | Chọn lịch để tự điền các giai đoạn |
| Tên quy trình | Ví dụ Vụ Đông Xuân 2026 – Khu B |
| Ngày bắt đầu, Ngày kết thúc | Thời gian của vụ |
| Nông hộ áp dụng | Tick các hộ sẽ nhận thẻ việc |
| Các giai đoạn theo lịch | Sửa ngày nếu cần, hoặc bấm **Thêm giai đoạn** |

## 7. Nhật ký canh tác: nông hộ tự ghi hoặc HTX ghi thay

Nông hộ tự ghi nhật ký trên điện thoại (mục 5.2). Với hộ lớn tuổi hoặc không quen dùng điện thoại, HTX hay trưởng nhóm có thể ghi thay, nhưng bắt buộc phải có giấy uỷ quyền còn hiệu lực. Không có giấy thì hệ thống chặn, vì đây là dữ liệu cá nhân của nông hộ.

**Ghi giấy uỷ quyền**

1. Trên màn hình **Hợp tác xã**, bấm **Giấy uỷ quyền khai hộ**, rồi bấm **Ghi giấy uỷ quyền**.
2. Tick các nông hộ uỷ quyền. Tick nhiều hộ thì dùng giấy uỷ quyền tập thể có danh sách kèm chữ ký.
3. Chọn **Người được uỷ quyền**, rồi tải ảnh hoặc PDF giấy uỷ quyền.
4. Gõ số giấy và ngày hết hạn nếu có, rồi bấm **Ghi giấy uỷ quyền**.

![Ghi giấy uỷ quyền](/images/14-uy-quyen.png)

Hệ thống lưu mỗi hộ một bản, nên có thể thu hồi uỷ quyền của từng người bất cứ lúc nào.

**Ghi nhật ký thay**

1. Trên màn hình **Hợp tác xã**, bấm **Khai nhật ký hộ nông dân**. Màn hình này thiết kế cho máy tính bảng.
2. Chọn **Hàng loạt** để ghi một việc cho nhiều hộ, tối đa 200 hộ một lượt, hoặc **Từng hộ**.
3. Chọn hoạt động, thời điểm, rồi tick các nông dân.
4. Bấm **Gửi nhật ký**.

![Ghi nhật ký thay nông hộ](/images/14-khai-ho.png)

**Phun thuốc BVTV**, **Trị bệnh cây**, **Đi thăm ruộng** không ghi thay được. Nông dân phải tự ghi các việc này. Danh mục thuốc do đội vận hành quản lý ([chương 17](/quan-tri/17-nganh-quy-trinh-bieu-mau)).

## 8. Thu hoạch rồi tạo lô hàng

Làm như mục 5.2 và 5.3 của luồng chính: ghi nhận thu hoạch ở **Thu hoạch**, rồi tạo lô hàng từ vùng và thửa đó. Nhờ thửa đã gắn với nông hộ và vùng, lô truy được ngược về đúng hộ đã trồng.

Báo cáo tổng quan thu mua mùa vụ và hiệu suất nông dân đang được NacenCheck phát triển, chưa có trên màn hình.
