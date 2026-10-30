---
title: Trang chi tiết lô và ghi công đoạn
order: 9
group: Luồng chính
prerequisites:
  - text: "Đã tạo lô hàng (chương 8)"
    link: /luong-chinh/08-tao-lo-hang
  - text: "Quy trình của sản phẩm đã có các công đoạn cần ghi (chương 6)"
    link: /luong-chinh/06-san-pham-dinh-muc-quy-trinh
outcome: "Lô hàng được ghi đủ công đoạn theo quy trình, kèm chứng cứ. Bấm **Xem như khách hàng** là thấy đủ hành trình."
---

# Bước 7 – Trang chi tiết lô và ghi công đoạn

## Trang chi tiết lô là "hồ sơ sống" của mẻ hàng

Sau khi tạo lô, mọi việc tiếp theo diễn ra trên **trang chi tiết lô** (`/dashboard/batches/<mã lô>`). Mở bằng cách vào **Lô hàng** và bấm vào một dòng. Đây là màn hình quan trọng nhất của NacenCheck: nó tập trung toàn bộ thông tin và thao tác của một lô.

![Trang chi tiết lô](/images/09-chi-tiet-lo.png)

Trang chia làm bốn khu, đọc từ trên xuống.

## Khu 1 – Thanh nút trên cùng

| Nút | Dùng để |
|---|---|
| **Tình trạng phân phối** | Xem hàng **sau khi rời kho**: bao nhiêu đã rõ nơi nhận, bao nhiêu chưa rõ (chương 11). |
| **Hồ sơ toàn trình** | Mở hồ sơ tổng hợp toàn bộ hành trình để kiểm tra, in hoặc tải PDF. Gồm cả phần khách không thấy. Mở hồ sơ không tính vào lượt quét. |
| **Xuất báo cáo** | Tải báo cáo của lô. |
| **Mã QR** | Chuyển tới tab Đóng gói và tem để lấy QR. |
| **⋮** | Các thao tác thêm. |

Cạnh tên lô là **trạng thái** (ví dụ "Đang xử lý") và trạng thái **đồng bộ** lên cổng quốc gia (ví dụ "Chờ đồng bộ").

## Khu 2 – Bốn chỉ số và thanh tiến độ

- **Số lượng:** sản lượng lúc tạo lô, cố định làm mốc. Bán hàng **không** trừ vào con số này (giải thích ở chương 11).
- **Công đoạn:** số bước đã ghi trên tổng số bước của quy trình, ví dụ 9/9.
- **Hoàn thiện hồ sơ:** mức đầy đủ của chứng từ, tính theo phần trăm. Hệ thống yêu cầu **≥ 85%** thì lô mới đủ điều kiện thu hoạch/xuất khẩu.
- **Tài liệu:** số chứng từ đã đính kèm.

Bên dưới là **Tiến độ quy trình** với nút **Xem công đoạn**, và khung **"Cần xử lý"** liệt kê việc còn thiếu kèm nút làm ngay (ví dụ "Hồ sơ mới hoàn thiện 0% → Ghi công đoạn", "Chưa có tài liệu → Thêm hồ sơ").

## Khu 3 – Các nút thao tác tiếp theo

Đây là lối vào chính cho mọi việc tiếp theo của lô. Các biểu mẫu mở ra đã điền sẵn mã lô. Nút nào hiện phụ thuộc vai trò của bạn.

| Nút | Mở ra | Vai trò thấy |
|---|---|---|
| **Ghi công đoạn** | Ghi bước tiếp theo trong quy trình | Quản trị, Quản lý, Vận hành, Nông dân, Công nhân, Tài xế, KTV lab |
| **Ghi chuyến vận chuyển** | Ghi một chặng di chuyển của hàng | Quản trị, Quản lý, Vận hành, Tài xế |
| **Bán / phân phối** | Ghi bán cho người mua (chương 11) | Quản trị, Quản lý |
| Thao tác khác → **Gom lô** | Gộp nhiều lô thành một | Quản trị, Quản lý, Vận hành |
| Thao tác khác → **Lập vận đơn xuất khẩu** | Lập vận đơn cho lô xuất khẩu | Quản trị, Quản lý |
| Thao tác khác → **Gửi xác nhận giao–nhận** | Gửi phiếu giao nhận cho đối tác | Quản trị, Quản lý |
| Thao tác khác → **Xem giao dịch của lô** | Danh sách giao dịch bán của lô | Quản trị, Quản lý, Vận hành, Người xem |

Ngay dưới là khung **Truy xuất công khai**: đường link trang khách hàng thấy khi quét QR, cùng nút **Xem như khách hàng** và **Sao chép link**. Hãy bấm "Xem như khách hàng" sau mỗi lần ghi thêm công đoạn để kiểm tra khách sẽ thấy gì.

## Khu 4 – Năm tab thông tin

| Tab | Chứa gì |
|---|---|
| **Tổng quan lô** | "Thẻ căn cước" của lô: số lô, tên lô, GTIN, ngày sản xuất, hạn sử dụng, xuất xứ; cơ sở sản xuất và đóng gói (nút **Đính chính cơ sở** nếu khai nhầm); tem của lô và số lượt quét. Cuối tab là thẻ **Lô tiêu thụ nội địa / xuất khẩu**. |
| **Quy trình và sự kiện** | Danh sách công đoạn theo quy trình, nhật ký sự kiện đã ghi, sơ đồ truy vết thu nhỏ. |
| **Nguồn đầu vào/đầu ra** | Nguồn nguyên liệu của lô, phần phân bổ (đã bán, đã tách, còn lại), các lô liên kết. |
| **Đóng gói và tem** | Sản lượng thực, định lượng in nhãn, nhãn điện tử, mã QR, phát hành tem. |
| **Hồ sơ và chứng cứ** | Tài liệu đính kèm theo loại: hóa đơn, hợp đồng, phiếu kiểm nghiệm, ảnh, video… |

**Thẻ nội địa / xuất khẩu.** Lô nội địa ẩn các công đoạn và hồ sơ xuất khẩu (C/O, nhãn nước nhập) cho gọn. Hệ thống tự chuyển sang lô xuất khẩu khi lô khai nước đích ở nước ngoài hoặc đã ghi sự kiện xuất khẩu; bạn cũng có thể bật tay bằng nút **Lô này để xuất khẩu**.

---

## Ghi công đoạn – làm thế nào?

### Nguyên lý

Quy trình đã xuất bản là danh sách việc phải làm. Mỗi lần một bước hoàn thành ngoài xưởng, người phụ trách ghi lại trên hệ thống → tạo ra một **sự kiện**. Tiến độ tăng dần đến khi đủ, ví dụ từ 8/9 lên 9/9.

Hệ thống luôn chỉ ra **bước tiếp theo** cần ghi. Các bước phải làm theo thứ tự; nếu không bấm được bước nào, kiểm tra xem bước trước nó đã ghi chưa.

### Các bước thao tác

1. Trên trang chi tiết lô, bấm **Ghi công đoạn**.
2. Hệ thống mở đúng bước kế tiếp. Điền các ô thông tin hiện trường của bước đó (các ô đã khai sẵn khi dựng quy trình ở chương 6).
3. Đính kèm ảnh nếu cần, bấm lưu.
4. Sự kiện mới hiện trong tab **Quy trình và sự kiện**, tiến độ tăng lên một bước.

![Ghi công đoạn](/images/09-ghi-cong-doan.png)

### Ghi trên điện thoại

Công nhân dùng đường dẫn **Ghi nhanh** `/m/events/record`: màn hình liệt kê các lô; chọn lô, hệ thống chỉ đúng bước tiếp theo cần ghi. Đây là cách ghi tiện nhất tại hiện trường.

### Đọc nhật ký sự kiện

Tab **Quy trình và sự kiện** gom các sự kiện theo nhóm công đoạn (sản xuất – chế biến – đóng gói; lưu kho – vận chuyển…). Mỗi sự kiện cho biết **người ghi, thời điểm, nơi ghi** và **trạng thái xác nhận**. Bên phải là sơ đồ truy vết thu nhỏ.

Toàn bộ sự kiện của doanh nghiệp còn được tập trung ở trang **Sự kiện** (`/dashboard/events`) để tra cứu chung.

### Ghi sai thì sao?

Sự kiện đã ghi không xóa, không sửa đè được. Hãy dùng nghiệp vụ **đính chính**: hệ thống tạo bản ghi mới chỉnh lại thông tin, và trang truy xuất hiện nhãn "Đã đính chính". Khách hàng thấy được sự minh bạch này, thay vì một lịch sử bị sửa âm thầm.

---

## Bổ sung hồ sơ và chứng cứ

Tab **Hồ sơ và chứng cứ**: chọn **loại tài liệu** (hóa đơn, hợp đồng, phiếu kiểm nghiệm, chứng nhận, ảnh…), chọn file và tải lên. Bấm **Mở trang Bằng chứng chính thức** để xem các chứng cứ đã được công nhận.

**Vì sao chứng cứ quan trọng?** Sự kiện chỉ là lời khai "chúng tôi đã làm bước này". Chứng cứ là bằng chứng đi kèm lời khai đó. Phần trăm **Hoàn thiện hồ sơ** đo mức đầy đủ của chứng cứ, và là điều kiện để lô đủ điều kiện xuất khẩu.

## Bổ sung nguồn nguyên liệu sau khi tạo lô

Nếu lúc tạo lô bạn dùng ô "Lý do chưa gán đủ nguyên liệu", hãy bổ sung sau: tab **Nguồn đầu vào/đầu ra** → **Thêm nguồn đầu vào cho lô**. Có đủ 6 loại nguồn như khi tạo lô. Bảng **Danh sách nguồn đã khai báo** cho biết loại nguồn, nhà cung cấp, số lượng, chứng từ và tổng khối lượng.

## Điều cần nhớ

Trang chi tiết lô gom mọi thứ về một chỗ: chỉ số ở trên, nút thao tác ở giữa, năm tab ở dưới. Việc thường xuyên nhất là **Ghi công đoạn** theo đúng thứ tự quy trình, kèm **chứng cứ** cho từng bước. Ghi xong, bấm **Xem như khách hàng** để kiểm tra kết quả.
