---
title: Trang chi tiết lô và ghi công đoạn
order: 8
group: Luồng chính
prerequisites:
  - text: "Đã tạo lô hàng (chương 7)"
    link: /luong-chinh/07-nguon-nguyen-lieu-va-tao-lo
  - text: "Quy trình của sản phẩm đã xuất bản (chương 6)"
    link: /luong-chinh/06-san-pham-dinh-muc-quy-trinh
outcome: "Lô hàng đã ghi các công đoạn theo quy trình, kèm chứng từ. Trang truy xuất hiện đủ hành trình cho khách."
---

# Bước 6 – Trang chi tiết lô và ghi công đoạn

Mỗi lô có một trang chi tiết, gom mọi thông tin và thao tác của lô đó. Việc làm nhiều nhất ở đây là ghi công đoạn: mỗi lần xong một bước ngoài xưởng, người phụ trách ghi lại để tạo thành hành trình khách nhìn thấy.

| # | Việc | Màn hình | Cần làm |
|---|---|---|---|
| 6.1 | Mở và đọc trang chi tiết lô | `/dashboard/batches` | Bắt buộc |
| 6.2 | Ghi công đoạn | Trang chi tiết lô | Bắt buộc |
| 6.3 | Ghi trên điện thoại | `/m/events/record` | Khi ghi tại hiện trường |
| 6.4 | Đính chính khi ghi sai | Trang chi tiết lô | Khi cần |
| 6.5 | Thêm hồ sơ, bổ sung nguồn | Trang chi tiết lô | Nên làm |

## 6.1 Mở và đọc trang chi tiết lô

Bấm **Lô hàng** ở menu trái, rồi bấm **Chi tiết** trên dòng lô.

![Trang chi tiết lô](/images/09-chi-tiet-lo.png)

| Khu vực | Cho biết gì |
|---|---|
| Số lượng | Sản lượng lúc tạo lô. Con số này giữ nguyên khi bán hàng. |
| Công đoạn | Số bước đã ghi trên tổng số bước của quy trình |
| Hoàn thiện hồ sơ | Mức đầy đủ của chứng từ. Màn hình yêu cầu từ 85% để đủ điều kiện xuất khẩu. |
| Tài liệu | Số chứng từ đã đính kèm |
| Cần xử lý | Việc còn thiếu, kèm nút để làm ngay |
| Truy xuất công khai | Liên kết trang khách thấy khi quét QR. Bấm **Xem như khách hàng** để kiểm tra. |

Phía dưới là 6 tab:

| Tab | Chứa gì |
|---|---|
| Tổng quan lô | Số lô, GTIN, ngày sản xuất, hạn sử dụng, xuất xứ, cơ sở, tem của lô, số lượt quét |
| Định mức | Công thức và lệnh sản xuất của lô |
| Quy trình và sự kiện | Các công đoạn và nhật ký đã ghi |
| Nguồn đầu vào/đầu ra | Nguồn nguyên liệu, phần đã bán và còn lại, các lô liên kết |
| Đóng gói và tem | Nhãn điện tử, mã QR, in tem, chia lô |
| Hồ sơ và chứng cứ | Tài liệu đính kèm của lô |

> Lưu ý: tại thời điểm viết (30/10/2026), tab **Định mức** của lô đang báo lỗi và không mở được.

## 6.2 Ghi công đoạn

1. Trên trang chi tiết lô, bấm **Ghi công đoạn**. Màn hình hiện các bước của quy trình, bước cần làm tiếp đang sáng.
2. Bấm **Ghi nhận công đoạn này**. Muốn ghi bù thì bấm thẳng vào bước chưa xong.

![Tiến trình công đoạn của lô](/images/09-ghi-tien-trinh.png)

3. Điền form theo bảng bên dưới.
4. Bấm **Ghi nhận sự kiện**. Hệ thống báo đã ghi và gợi ý bước tiếp theo.

![Form ghi công đoạn](/images/09-ghi-form.png)

| Ô | Điền gì |
|---|---|
| Cơ sở nơi công đoạn diễn ra | Bắt buộc. Chọn nơi thao tác thực sự xảy ra, hệ thống chỉ gợi ý chứ không tự chọn. |
| Các ô của công đoạn | Ô có dấu sao là bắt buộc. Ví dụ **Chế biến** cần ngày chế biến và các ô đã chèn ở mục 4.3, **Đóng gói** cần ngày đóng gói. |
| Hồ sơ / ảnh đính kèm | Không bắt buộc, nhưng nên có để làm chứng cứ |
| Vị trí GPS công đoạn | Bấm **Lấy vị trí** khi đang đứng tại nơi làm, hoặc gõ tọa độ |

Ô **Số lượng thực nhận** của công đoạn **Nhập nguyên liệu** chỉ nhận số nguyên. Gõ 1,5 sẽ bị từ chối.

Hai điều cần biết khi ghi:

- **Ghi công đoạn đầu tiên làm lô rời trạng thái Nháp.** Lô chuyển sang **Đang xử lý**, trang tra cứu bỏ cảnh báo bản nháp, và trạng thái đồng bộ thành **Chờ đồng bộ**. Hãy kiểm tra thông tin lô trước khi ghi.
- **Phải ghi Đóng gói thì mới bán được**, dù trong quy trình bước này có thể là tùy chọn.

Công đoạn đã ghi hiện ở tab **Quy trình và sự kiện**, kèm thời điểm, nơi ghi và người ghi. Tất cả sự kiện của doanh nghiệp nằm ở `/dashboard/events`.

![Nhật ký sự kiện của lô](/images/09-nhat-ky.png)

Các nút còn lại trên trang chi tiết lô dùng khi cần. Nút nào hiện phụ thuộc vai trò của bạn.

| Nút | Dùng để |
|---|---|
| Ghi chuyến vận chuyển | Ghi xe, tài xế, điểm đi, điểm đến của một chặng |
| Thao tác khác → Gom lô | Gộp nhiều lô thành một |
| Thao tác khác → Lập vận đơn xuất khẩu | Lập vận đơn cho lô xuất khẩu |
| Thao tác khác → Gửi xác nhận giao–nhận | Gửi phiếu giao nhận cho đối tác |
| Thao tác khác → Xem giao dịch của lô | Xem các lần bán của lô |
| Hồ sơ toàn trình | Xem, in hoặc tải PDF hồ sơ nội bộ. Mở hồ sơ không tính vào lượt quét. |
| Xuất báo cáo | Tải báo cáo của lô |

## 6.3 Ghi trên điện thoại

Công nhân và nông hộ dùng màn hình gọn cho điện thoại.

1. Mở `/m/events/record` trên điện thoại.
2. Chạm vào lô cần ghi.
3. Chạm **Ghi nhận công đoạn này** rồi điền như mục 6.2.

![Ghi công đoạn trên điện thoại](/images/09-ghi-cong-doan.png)

## 6.4 Đính chính khi ghi sai

Công đoạn đã ghi không sửa đè và không xóa được. Khi ghi sai, bạn tạo bản đính chính, bản gốc vẫn được giữ.

1. Bấm **Ghi công đoạn** trên trang chi tiết lô.
2. Bấm vào bước đã ghi để xem lại.
3. Bấm **Đính chính**.

![Xem lại công đoạn đã ghi](/images/09-dinh-chinh.png)

## 6.5 Thêm hồ sơ, bổ sung nguồn

**Thêm hồ sơ**

1. Mở tab **Hồ sơ và chứng cứ**.
2. Chọn **Loại tài liệu**, rồi bấm **Chọn file**.

![Tab hồ sơ và chứng cứ](/images/09-ho-so.png)

**Bổ sung nguồn nguyên liệu**

Nếu lúc tạo lô bạn điền ô lý do chưa khai đủ nguồn, hãy mở tab **Nguồn đầu vào/đầu ra** rồi bấm **Thêm nguồn đầu vào cho lô**.
