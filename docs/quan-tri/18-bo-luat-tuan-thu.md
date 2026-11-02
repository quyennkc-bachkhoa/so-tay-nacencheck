---
title: Bộ luật tuân thủ
order: 18
group: Quản trị
prerequisites:
  - text: "Biết ngành và công đoạn được khai ở đâu (chương 17)"
    link: /quan-tri/17-nganh-quy-trinh-bieu-mau
  - text: "Có một người thứ hai để duyệt, vì người soạn không tự duyệt được (tạo tài khoản ở chương 16)"
    link: /quan-tri/16-to-chuc-va-nguoi-dung
outcome: "Soạn được một bộ luật, chạy thử, biết đường đi đến khi xuất bản, và biết cách lùi khi có sự cố."
---

# Bước 4 – Bộ luật tuân thủ

Bộ luật là tập quy tắc để máy tự kiểm tra, ví dụ cà phê bán vào EU phải có dư lượng glyphosate không quá 0,1. Khi quy định thay đổi, chỉ cần xuất bản bộ luật mới, không cần sửa phần mềm. Bên doanh nghiệp, kết quả và **Ngoại lệ tuân thủ** nằm ở màn **Tuân thủ** ([chương 12](/mo-rong/12-tuan-thu)).

Vì một bộ luật sai có thể chặn hoạt động của nhiều doanh nghiệp, mọi bản đều phải đi qua các bước sau:

```
1. Soạn nháp
       ↓
2. Chạy thử trên dữ liệu mẫu     (Sandbox)
       ↓
3. Gửi duyệt                     (người khác duyệt, không tự duyệt)
       ↓
4. Ký số
       ↓
5. Xuất bản                      (áp dụng trong vài giây, không cần khởi động lại)
       ↓
6. Kiểm tra nhanh                (Smoke test). Có lỗi thì Rollback
```

## 1. Đọc danh sách bộ luật

Bấm **Bảng điều khiển luật** ở nhóm **Cấu hình nghiệp vụ**.

![Bộ luật tuân thủ](/images/18-bo-luat.png)

| Cột | Ý nghĩa |
|---|---|
| **Phạm vi** | Việc bộ luật này kiểm tra, ví dụ `GEO_FENCE` là vùng địa lý, `RESIDUE_LIMIT` là giới hạn dư lượng |
| **Nhà phát hành** | Đơn vị đứng tên: nền tảng, ngành hay cơ quan nhà nước |
| **Hiệu lực** | Khoảng thời gian áp dụng |
| **Trạng thái** | **Nháp** chưa có tác dụng, **Đang thực thi** đang kiểm tra thật |

Khi nhiều bộ luật cùng áp dụng, cấp cao hơn thắng theo thứ tự: GOVERNMENT → MINISTRY → INDUSTRY → ENTERPRISE → DN_SANDBOX.

## 2. Soạn bộ luật

1. Bấm **Soạn bộ luật**.
2. Điền **Bước 1 – Thông tin bundle** theo bảng bên dưới.
3. Ở **Bước 1B – DCRE rules**, bấm **Thêm rule** để viết từng quy tắc. Có thể để trống nếu bộ luật chỉ có thông tin.
4. Bấm **Lưu nháp**. Bản nháp chưa có tác dụng gì.

![Soạn bộ luật](/images/18-soan-bo-luat.png)

| Ô | Điền gì |
|---|---|
| Mã bundle | Bắt buộc. Chữ hoa, số, gạch dưới. Không đổi được sau khi đã xuất bản |
| Version | Bắt buộc, dạng `1.0.0` |
| Phạm vi | Bắt buộc. Chọn đúng tên phạm vi đang chạy, gõ tên khác sẽ tạo phạm vi mới |
| Đơn vị phát hành | Bắt buộc |
| Tên hiển thị tiếng Việt | Bắt buộc |
| Tên hiển thị tiếng Anh | Không bắt buộc |
| Mô tả ngắn | 1–3 câu, dùng để hiển thị và ghi nhật ký |
| Khu vực pháp lý, Chủ đề / Ngành | Nơi và ngành bộ luật áp dụng |
| Hiệu lực từ | Để trống là có hiệu lực ngay khi xuất bản |
| Hết hiệu lực vào | Để trống là vô thời hạn |

## 3. Chạy thử trong Sandbox

Sandbox là nơi chạy thử quy tắc trên dữ liệu giả, không đụng tới dữ liệu thật.

1. Bấm **Sandbox thử CEL**. Có thể chọn một quy tắc mẫu ở **Tải ví dụ mẫu**.
2. Ô **CEL Source**: viết quy tắc. CEL là ngôn ngữ viết điều kiện, ví dụ `event.market == "EU"`.
3. Ô **Fixture (JSON)**: viết dữ liệu mẫu cần kiểm tra.
4. Bấm **Chạy thử**, xem ô **Kết quả**.

![Sandbox thử quy tắc](/images/18-sandbox.png)

Quy tắc trả về `true` nghĩa là cho phép, `false` nghĩa là chặn. Nên thử cả hai: một mẫu phải qua và một mẫu phải bị chặn.

> Lưu ý: Sandbox chỉ chạy từng quy tắc độc lập. Nó không kiểm tra được việc ghép nhiều bộ luật với nhau, nên vẫn phải chạy smoke test sau khi xuất bản.

## 4. Gửi duyệt, ký số, xuất bản

| Trạng thái | Nghĩa là | Ai làm |
|---|---|---|
| Bản nháp | Đang soạn | Người soạn |
| Đã gửi duyệt, đang duyệt | Chờ người thứ hai xem | Người duyệt |
| Đã duyệt | Được phép ký | Người ký |
| Đang ký, đã ký | Đã có chữ ký số | Người ký |
| Đã xuất bản | Đang áp dụng thật | Hệ thống |

Xem các bản đang chờ ở tab **Hàng đợi duyệt**. Người soạn không tự duyệt bản của mình.

![Hàng đợi duyệt](/images/18-hang-doi.png)

Theo tài liệu của NacenCheck, bấm **Ký số** ở trang chi tiết bộ luật. Môi trường thử nghiệm ký bằng khoá phần mềm, môi trường thật ký bằng thiết bị bảo mật chuyên dụng. Luôn xuất bản trên giao diện quản trị. Chỉ dùng dòng lệnh khi giao diện hỏng, và phải ghi lại mỗi lần dùng.

> Lưu ý: lúc viết sổ tay, các bản nháp đang có trên hệ thống chưa hiện nút gửi duyệt, ký và xuất bản ở trang chi tiết, nên phần này chưa làm thử được đến cùng. Nếu không thấy nút, hỏi đội phát triển trước khi làm tiếp, không xuất bản bằng cách khác.

## 5. Kiểm tra sau khi xuất bản, lùi khi có sự cố

Bấm **Chi tiết** ở dòng bộ luật để xem thông tin, **Bản kê gói** và **Danh sách quy tắc**.

![Chi tiết bộ luật](/images/18-chi-tiet.png)

| Việc | Cách làm |
|---|---|
| Kiểm tra nhanh | Bấm **Chạy smoke test**. Kết quả từng quy tắc được tô màu theo đạt, không đạt |
| Xem các đời trước | Bấm **Các phiên bản** |
| So hai phiên bản | Bấm **So sánh**, chọn **BASE** và **TARGET**, xem quy tắc nào được thêm, sửa, xoá |
| Lùi khẩn cấp | Bấm **Mở dialog rollback**, xem trước phiên bản sẽ quay lại, nhập lý do rồi xác nhận |

Rollback áp dụng trong khoảng 10 giây. Hãy dùng ngay khi thấy doanh nghiệp bị chặn sai, rồi mới tìm nguyên nhân sau.

## 6. Sổ ghi vết và nhà phát hành

Tab **Sổ ghi vết** ghi lại mọi thay đổi trên các gói quy tắc, lọc được theo hành động, đối tượng và ngày.

Tab **Nhà phát hành** liệt kê các đơn vị đứng tên bộ luật. Cột **Cấp độ tin cậy** cho biết đó là cơ quan nhà nước, ngành hay nền tảng.

![Nhà phát hành](/images/18-nha-phat-hanh.png)

## 7. Thẩm định tuân thủ

Thẩm định là bước duyệt hai lớp cho một lô, sản phẩm hoặc định mức trước khi phát hành, ví dụ phát hành lô thuốc theo chuẩn GMP. Trạng thái đi từ **Bản nháp**, **Đã ký bước 1** đến **Đã phát hành**.

> Lưu ý: tính năng này đang hoàn thiện, chưa bật cho vận hành thật, nên danh sách trống là bình thường. Màn hình chưa có trên menu, mở trực tiếp ở `/admin/compliance-reviews`.

1. Bấm **Tạo thẩm định mới**.
2. Chọn **Loại thẩm định**. Chỉ nhận các loại đã khai trong gói ngành.
3. Chọn **Đối tượng thẩm định**, dán mã của đối tượng vào ô **Mã đối tượng (UUID)**.
4. Bấm **Tạo bản nháp**.

![Tạo thẩm định mới](/images/18-tham-dinh.png)

Khi mở một hồ sơ, người thẩm định xem dữ liệu và minh chứng, rồi chọn **Đạt**, **Yêu cầu bổ sung** hoặc **Không đạt** kèm lý do. Hệ thống báo lại cho doanh nghiệp, và mọi quyết định được ghi nhật ký không sửa được.
