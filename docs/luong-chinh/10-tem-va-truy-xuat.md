---
title: In tem QR và trang truy xuất
order: 10
group: Luồng chính
prerequisites:
  - text: "Đã có lô hàng (chương 8)"
    link: /luong-chinh/08-tao-lo-hang
  - text: "Đã ghi công đoạn cho lô (chương 9)"
    link: /luong-chinh/09-chi-tiet-lo-va-ghi-cong-doan
  - text: "Nên bật hồ sơ thương hiệu (chương 3)"
    link: /luong-chinh/03-thiet-lap-doanh-nghiep
outcome: "Tem QR đã in và dán lên bao bì. Người mua quét là thấy trang truy xuất của đúng lô hàng."
---

# Bước 8 – In tem QR và trang truy xuất

## Tem là cầu nối giữa dữ liệu và gói hàng

Mọi dữ liệu bạn đã ghi chỉ có ích khi người mua xem được. Con tem dán trên bao bì làm nhiệm vụ đó: nó mang mã QR trỏ tới **trang truy xuất công khai** của đúng lô hàng. Người mua không cần cài ứng dụng, chỉ cần quét bằng camera điện thoại.

## In tem nhanh – cách đơn giản nhất

Đường dẫn: `/dashboard/quick-label` (**In tem nhanh**).

1. **Chọn sản phẩm** cần tạo tem.
2. **Chọn lô** có sẵn của sản phẩm đó.
3. Xem trước tem, bấm in. Tem kèm QR và mã in dưới QR.

Không cần gõ mã kỹ thuật nào. Nếu chưa có sản phẩm hoặc lô, màn hình cho phép tạo mới ngay tại chỗ.

![In tem nhanh](/images/10-in-tem-nhanh.png)

## Quản lý tem và thiết kế tem

- **Quản lý tem & eLabel** (`/dashboard/labels`): sổ các lô tem đã tạo, theo trạng thái Đang hoạt động, Bản nháp, Đã hoàn tất. Từ đây mở nhanh trang tra cứu công khai của từng lô.
- **Thiết kế tem** (`/dashboard/labels/designer`): chọn khổ tem, kéo thả các phần tử (tên sản phẩm, QR, mã lô, số serial, logo) rồi lưu thành mẫu. Nội dung nhãn (thành phần, hạn dùng…) không khai ở đây mà lấy từ hồ sơ sản phẩm.

## Khách hàng thấy gì khi quét QR?

Trang truy xuất công khai (ưu tiên hiển thị trên điện thoại) có các thẻ:

| Thẻ | Nội dung | Lấy từ đâu |
|---|---|---|
| **Tổng quan** | Tên sản phẩm, xuất xứ, nhà sản xuất, ngày sản xuất, số lần quét | Sản phẩm, cơ sở, lô |
| **Hành trình** | Các công đoạn kèm ảnh | Sự kiện đã ghi (chương 9) |
| **Nhãn** | Nhãn điện tử: thành phần, bảo quản, hướng dẫn… | Hồ sơ sản phẩm (chương 6) |
| **Thương hiệu** | Giới thiệu doanh nghiệp, logo, liên hệ | Hồ sơ thương hiệu (chương 3) – chỉ hiện khi đã bật |
| **Đánh giá** | Phản hồi của người mua | Người quét |

Kèm theo là dấu xác thực chống giả.

![Trang truy xuất công khai](/images/10-trang-truy-xuat.png)

**Bảng trên cho thấy điều gì?** Trang khách thấy không có dữ liệu riêng; nó chỉ hiển thị lại những gì bạn đã khai ở các bước trước. Trang truy xuất nghèo nàn nghĩa là có bước trước bị bỏ trống. Ví dụ: thẻ Hành trình trống vì chưa ghi công đoạn; thẻ Thương hiệu không hiện vì chưa bật hồ sơ thương hiệu.

Để kiểm tra trước khi in tem hàng loạt, vào trang chi tiết lô và bấm **Xem như khách hàng**.

## Nhãn điện tử theo Nghị định 37

Theo tài liệu của NacenCheck, Nghị định 37/2026/NĐ-CP cho phép doanh nghiệp thể hiện thông tin nhãn ở dạng điện tử (eLabel). Đây là quyền của doanh nghiệp, không phải thủ tục xin phép cơ quan. Tab **Đóng gói và tem** của lô hiển thị nhãn điện tử, phần lớn dữ liệu lấy từ hồ sơ sản phẩm.

Dùng công cụ **Tuân thủ → Nhãn (NĐ37)** (chương 6) để kiểm tra nhãn đủ thông tin bắt buộc trước khi in.

## Hai lớp tem nâng cao

Luồng chính chỉ cần tem QR của lô. Khi doanh nghiệp lớn hơn, có thêm hai lớp:

- **Tem & bao gói** (`/dashboard/labels/packaging`): dựng cây đóng gói pallet → thùng → hộp → đơn vị, in nhãn SSCC cho từng cấp. Kho quét một mã là nhận cả thùng. Cần khai mã GS1 trước (chương 3).
- **Tem chống giả** (`/dashboard/compliance/anti-counterfeiting`): phát hành dải tem QR có chữ ký số, kích hoạt theo lô. Tra một con tem cho biết đã bị quét bao nhiêu lần, từ bao nhiêu nguồn, mã PIN đã dùng chưa, còn hạn không; hệ thống cảnh báo khi có quét bất thường. Có thể in PDF lưới tem A4 hoặc xuất CSV.

## Điều cần nhớ

Tem chỉ là "cánh cửa"; những gì khách thấy sau cánh cửa là dữ liệu bạn đã ghi. Trước khi in tem số lượng lớn, luôn bấm **Xem như khách hàng** để chắc trang truy xuất đã đầy đủ.
