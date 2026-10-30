# Gợi ý xem lại nội dung sổ tay

Ghi chú khi dựng web và chụp ảnh ngày 30/10/2026 trên `https://dev-trace.nacencheck.com`, tài khoản `admin@comchayhanoi.test`. File này không hiển thị trên web (đã loại trong `srcExclude`). Chưa sửa câu chữ nào trong các chương; người viết xem và quyết định. Số chương bên dưới đã đổi theo cách đánh số mới (14 chương, chương 04 là "Cơ sở và vùng nguyên liệu").

## Nội dung lệch với giao diện hiện tại

| Chương, đoạn | Sổ tay viết | Giao diện thấy được | Gợi ý |
|---|---|---|---|
| 07, "Mua trong nước" | Chọn tab **Mua trong nước** → **Thêm nguyên liệu mua trong nước** | Trong tab **Mua trong nước** chỉ có nút **Lập phiếu nhập** (góc trên phải). Ba mục Phiếu / Nhập khẩu / Mua trong nước là nút lọc dưới tab **Phiếu** của trang Kho. | Đổi tên nút cho khớp, hoặc kiểm tra lại nút có bị đổi tên không. |
| 07, C.1 | Trang `/dashboard/farming-journal`: "Chọn **thửa đất** trong danh sách" | Tiêu đề trang là **Nhật ký sản xuất**, dòng hướng dẫn ghi "Chọn **đơn vị sản xuất**, vụ sản xuất và hoạt động". Khi chưa có sản phẩm, trang chỉ báo "Đơn vị chưa có ngành từ sản phẩm đã khai. Hãy khai sản phẩm trước khi ghi nhật ký." | Dùng đúng chữ trên màn hình; nên nói rõ phải khai sản phẩm trước thì mới ghi được nhật ký. |
| 06, 3.3 | Đường dẫn `/dashboard/products/workflows` | Mở thẳng đường dẫn này báo "Không tìm thấy sản phẩm – Đường dẫn không hợp lệ" (hệ thống hiểu `workflows` là mã sản phẩm). Tài khoản lúc đó chưa có sản phẩm nên chưa kiểm tra được đường vào đúng. | Xác minh lại lối vào trình dựng quy trình (ví dụ từ cột **Quy trình** ở danh sách sản phẩm). |
| 08, Khối 1–4 | Khối 3 là "Cơ sở sản xuất thực tế"; ngày sản xuất và mã HS nằm ở Khối 4 | Form "Tạo lô hàng truy xuất" hiện có: **Thông tin cơ bản** (gồm luôn Ngày sản xuất / thu hoạch và Mã HS), **Chi tiết nguồn gốc**, **Xuất xứ của lô này** (hai lựa chọn Trong nước / Nhập khẩu), **Số lượng** (Số lượng, Đơn vị, Mã lô). | Kiểm tra lại thứ tự và tên khối. Nút "Đúng, lô làm ở đây" có thể chỉ hiện sau khi chọn sản phẩm và chọn "Trong nước". |
| 02, Đăng nhập | Bước 2: nhập Email và Mật khẩu | Nếu trình duyệt đã từng đăng nhập, trang chỉ hiện "Xin chào quay trở lại, ‹email›" và ô Mật khẩu, không có ô Email. | Thêm một câu cho trường hợp này, tránh người mới tưởng thiếu ô. |
| 09, 11 | Lô ví dụ `BGNM-20261027-5TBR` (`/dashboard/batches/fc726789-…`) | Lô này không còn trong tài khoản; trang báo "Không tìm thấy lô hàng". | Khi có lô mới, cập nhật mã lô ví dụ hoặc ghi rõ đây là ví dụ minh họa. |

## Chỗ người mới có thể khó hiểu

- **Chương 06, bảng 3.1:** "Mã GPC" chỉ có chú thích ngắn trong bảng, chương 01 chưa giải thích. Gợi ý thêm một dòng vào bảng thuật ngữ chương 01: "GPC – mã nhóm sản phẩm theo phân loại của GS1".
- **Mô hình hoạt động (5 ô tick ở `/dashboard/settings/preferences`):** đã bỏ khỏi chương 03 theo yêu cầu. Các ô này quyết định menu có mục Vùng nguyên liệu, Nhật ký canh tác, Nhập kho hay không, nên khi viết lại chương 07 cần nói rõ phải tick ô nào (chương 04 đã có lưu ý).
- **Lỗi nghi ngờ trên trang NacenCheck (30/10/2026):** tab Bản đồ trong chi tiết vùng (`/dashboard/zones/<id>`) không vẽ lại ranh giới đã lưu: bản đồ về vị trí mặc định 10.59, 105.69 dù ô Tổng diện tích vẫn tính từ toạ độ. Nên báo đội phát triển.
- **Góp ý cho đội phát triển NacenCheck, phần kho (30/10/2026):**
  - Trang `/dashboard/distribution/network` không có trong menu trái, người dùng không tự tìm ra được, trong khi đây là nơi duy nhất khai nhà cung cấp, khách hàng cho phiếu kho.
  - Ô Nhà cung cấp và ô Kho của phiếu trống mà không báo lý do, không có nút thêm nhanh.
  - Form Thêm đối tác để mặc định Loại là Đại lý, nên đối tác tạo vội sẽ không hiện ở ô Nhà cung cấp.
  - Ô Kho chỉ nhận cơ sở loại Kho. Cơ sở loại Kho lạnh và Tổng kho/Depot không chọn được, cần xác nhận đây có phải chủ ý.
  - Danh sách phiếu ở cột Kho hiện mã cơ sở thay vì tên. Mã cơ sở tự gợi ý bị cắt ở 28 ký tự (ví dụ `KHO-NGUYEN-LIEU-HAT-VANG-VIE`).
  - Form Mua trong nước có nút ghi "Save" chưa dịch sang tiếng Việt.
- **Chương 07 lệch giao diện, cần viết lại:** tab Mua trong nước giờ dùng chung nút **Lập phiếu nhập** và cần kho, vật tư, nhà cung cấp, đơn giá. Mục Loại nguyên liệu nằm ở `/dashboard/warehouse/material-types`. Phần lập phiếu đã có ở chương 05.
- **Chương 02 và 03:** "vai trò" và "mô hình hoạt động" được dùng ở chương 02 trước khi chương 03 giải thích. Chương 02 đã có ghi "(chương 3)", nhưng có thể thêm một câu định nghĩa ngắn ngay tại chỗ.
- **Chương 08, mở đầu:** câu "Ngay khi bấm **Tạo lô hàng**…" xuất hiện trước khi người đọc biết form ở đâu. Gợi ý đảo đoạn "Mở form tạo lô" lên trước, hoặc thêm "(nút ở cuối form)".

## Phát sinh khi đổi luồng (đưa "Cơ sở và vùng nguyên liệu" lên chương 04)

- **Chương 04 nói "Mùa vụ không chờ được", nhưng màn Nhật ký đòi có sản phẩm trước.** Theo dòng 07, C.1 ở bảng trên, trang Nhật ký báo "Đơn vị chưa có ngành từ sản phẩm đã khai. Hãy khai sản phẩm trước khi ghi nhật ký." Như vậy khai vùng sớm thì được, nhưng nhật ký vẫn phải chờ khai sản phẩm (chương 06). Gợi ý: kiểm tra lại trên tài khoản đã có sản phẩm, rồi chỉnh lý do thứ hai ở đầu chương 04 hoặc thêm một câu nhắc ở mục 2.4.
- **Chương 06 vẫn đánh số mục 3.1, 3.2, 3.3** trong khi tiêu đề đã là "Bước 4". Các chương khác đánh số mục theo số bước (chương 03 là 1.x, chương 04 là 2.x). Gợi ý đổi thành 4.1, 4.2, 4.3. Chưa đổi vì yêu cầu chỉ cho sửa số chương và tiêu đề H1 ở chương này.
- **Chương 03, đoạn "Vì sao phải làm bước này trước?"** vẫn nhắc "cơ sở sản xuất là nơi các lô hàng được làm ra" dù mục Cơ sở đã chuyển sang chương 04. Câu vẫn đúng nhưng có thể thêm "(chương 4)".
- **Chương 01 mục 7 và chương 02** vẫn gọi "vùng trồng và thửa", còn menu và chương 04 gọi "Vùng nguyên liệu" và "Đơn vị sản xuất". Thuật ngữ đã ghi tên gọi khác trong `glossary.json`; người viết có thể cân nhắc thống nhất tên ở chương 01.
- **Chương 07, bảng "ba con đường" và mục "Ví dụ ghép lại"** vẫn dùng "vùng trồng", "thửa 1 vùng trồng". Không sai, nhưng có thể đổi sang "vùng nguyên liệu" cho khớp chương 04.
- **Chương 13, câu "Nút Tạo lô hàng mờ"** có nhắc "chưa xác nhận cơ sở sản xuất" và trỏ chương 8. Giữ chương 8 vì việc xác nhận làm trong form tạo lô; nếu muốn, thêm "(khai cơ sở ở chương 4)".
