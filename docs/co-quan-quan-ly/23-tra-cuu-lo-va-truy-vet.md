---
title: Tra cứu lô và truy vết chuỗi cung ứng
order: 23
group: Cơ quan quản lý
prerequisites:
  - text: "Đăng nhập được, phạm vi tài khoản đúng địa bàn (chương 22)"
    link: /co-quan-quan-ly/22-lam-quen-cong-co-quan-quan-ly
  - text: "Biết lô hàng, lô con, truy vết chuỗi là gì (chương 1)"
    link: /mo-dau/01-khai-niem-co-ban
outcome: "Tìm được một lô theo mã hoặc tên sản phẩm, đọc được lô đó làm từ nguyên liệu nào và đã bán đi đâu."
---

# Bước 2 – Tra cứu lô và truy vết chuỗi cung ứng

Đây là việc cán bộ làm nhiều nhất: có một mã lô trong tay (từ tem, hóa đơn, phản ánh của người dân), cần biết lô đó của doanh nghiệp nào, làm từ đâu, đã đi đến đâu.

```
Tra cứu lô (tìm theo mã hoặc tên)
      ↓
Chi tiết → sơ đồ truy vết (nguyên liệu → chế biến → phân phối)
      ↓
Có dấu hiệu sai → lập cuộc thanh tra (chương 25) hoặc ghi vi phạm (chương 26)
```

Cả ba màn trong chương này chỉ để xem. Không có nút nào ghi dữ liệu.

## 1. Tra cứu một lô

1. Bấm **Tra cứu lô** ở menu trái.
2. Gõ mã lô hoặc tên sản phẩm vào ô tìm kiếm. Có thể gõ một phần mã, ví dụ `BGNM` thay vì cả `BGNM-20261030-JWQZ`.
3. Bấm **Tra cứu**.

![Tra cứu lô](/images/23-tra-cuu-lo.png)

Kết quả gồm mọi lô của doanh nghiệp do Sở quản lý, không lọc theo nơi xuất xứ của nguyên liệu. Mỗi dòng cho biết sản phẩm, mã lô, doanh nghiệp, ngành, ngày tạo và trạng thái. Bấm **Xuất CSV** để tải danh sách đang xem về máy.

Gõ tên có dấu cho đúng. Gõ không dấu (`banh gao`) sẽ không ra lô **Bánh gạo**.

### Lọc thêm

| Bộ lọc | Dùng khi |
|---|---|
| **Ngành** | Chỉ xem lô của một ngành |
| **Trạng thái** | Chỉ xem lô đang hoạt động, đang vận chuyển, đã hoàn tất, đã xuất khẩu hoặc đã thu hồi |
| **Tìm kiếm nâng cao** | Mở thêm ô **Mã HS**, **Xuất xứ**, **Từ ngày**, **Đến ngày**. Bấm **Đặt lại bộ lọc** để xóa hết |

## 2. Đọc sơ đồ truy vết của lô

Bấm **Chi tiết** ở dòng kết quả. Cổng mở trang **Xem truy vết** của lô.

![Sơ đồ truy vết của lô](/images/23-truy-vet.png)

| Phần | Cho biết gì |
|---|---|
| Dải số liệu trên cùng | **Nút** là số lô trong chuỗi, **Liên kết** là số mối nối giữa các lô, **Cấp** là số tầng của chuỗi |
| **Trạng thái tuân thủ** | Lô đã được theo dõi tuân thủ hay chưa |
| Bản đồ | Các điểm đi qua của chuỗi, nối bằng đường xanh |
| Các cột Level 0, 1, 2… | Chuỗi đọc từ trái sang phải: nguyên liệu (RAW), chế biến (PROCESSING), phân phối (DISTRIBUTION) |

Với lô ví dụ `BGNM-20261030-JWQZ` của Hạt Vàng Việt, chuỗi có 3 cấp: lô mật ong nhập từ nhà cung cấp, lô bánh gạo đang chế biến, và lô con đã bán cho đại lý.

### Xem một lô trong chuỗi

Bấm một ô bất kỳ trong chuỗi. Khung **Chi tiết nút** mở bên phải, cho biết mã lô, sản phẩm, xuất xứ, trạng thái, loại, thời gian tạo và lô đó nối sang lô nào.

![Chi tiết một lô trong chuỗi](/images/23-chi-tiet-nut.png)

Đây là cách lần ngược về nguồn nguyên liệu: bấm ô ở cột Level 0 để biết lô nguyên liệu nhập từ ai, ngày nào.

## 3. Xem toàn bộ chuỗi cung ứng trong địa bàn

Bấm **Chuỗi cung ứng** ở menu trái. Màn này (tiêu đề **Truy vết**) liệt kê mọi lô trong phạm vi, mới nhất ở trên, không cần gõ gì trước.

1. Gõ mã lô hoặc tên doanh nghiệp vào ô tìm kiếm để lọc, ví dụ `Hạt Vàng`.
2. Bấm **Chi tiết** ở dòng cần xem. Trang mở ra giống mục 2.

![Danh sách chuỗi cung ứng](/images/23-chuoi-cung-ung.png)

Bấm hình bánh răng ở góc phải bảng để ẩn, hiện cột. Dùng màn này khi muốn rà cả một doanh nghiệp. Dùng **Tra cứu lô** khi đã có mã lô cụ thể.

## 4. Xác minh giấy chứng nhận xuất xứ (C/O)

Dùng khi cần kiểm tra một giấy C/O của lô xuất khẩu có thật hay không.

1. Bấm **Xác minh C/O** ở menu trái.
2. Gõ số C/O vào ô **Xác minh chứng nhận**.
3. Bấm **Xác minh tính xác thực**.

![Xác minh C/O](/images/23-xac-minh-co.png)

Chưa có ảnh kết quả vì dữ liệu thử chưa có giấy C/O nào. Khối **Lô hàng** ở màn Tổng quan cho biết địa bàn hiện có bao nhiêu giấy C/O. Nếu là 0 thì chưa có gì để xác minh.

Doanh nghiệp xem cùng chuỗi lô này ở trang của mình, mục [Biểu đồ truy vết](/mo-rong/12-tuan-thu#bieu-do-truy-vet).
