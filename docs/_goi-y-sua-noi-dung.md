# Góp ý gửi đội phát triển NacenCheck

Ghi chú khi kiểm tra trên `https://trace.nacencheck.com`, tài khoản `admin@comchayhanoi.test`, ngày 30/10/2026. File này không hiển thị trên web (đã loại trong `srcExclude`).

## Lỗi chặn luồng, nên sửa trước

1. **Nút Tạo lô truy xuất ở Tồn kho luôn lỗi.** `POST /api/v1/imports/from-inventory-lots/<id>/batch` trả về 422 `BATCH_CREATION_FAILED`, chi tiết `inconsistent types deduced for parameter $3 (SQLSTATE 42P08)`. Lặp lại trên cả hai lô đã thử. Hệ quả: nguồn **Từ kho của tôi** khi tạo lô không chọn được gì. Câu lỗi SQL còn hiện thẳng cho người dùng.
2. **Tab Định mức của lô không mở được.** Cả lô gốc đều báo `Cannot read properties of null (reading 'find')`, trong khi form tạo lô hướng dẫn vào tab này để lập lệnh sản xuất. Đã loại trừ do script chặn yêu cầu ghi.
3. **Nguồn không được tính cho vật tư trong định mức.** Khai **Vùng nguyên liệu của tôi** và **Mua từ đơn vị khác** vẫn báo "Thiếu nguồn nguyên liệu" cho mọi vật tư, và form không có ô gắn nguồn với vật tư. Kết hợp với lỗi 1, mọi sản phẩm có định mức hiện phải điền ô lý do.
4. **Ô Từ và Đến khi ghi chặng giao không giữ lựa chọn.** Ở `/dashboard/distribution/network`, tab Ghi chặng giao hàng, chọn đối tác xong ô vẫn trống, bấm **Ghi chặng** báo "Chọn GLN nguồn và GLN đích", không có yêu cầu nào được gửi. Đã thử chuột, bàn phím và cách bấm tự động của Playwright, các ô chọn khác trong hệ thống vẫn hoạt động. Chưa thử trên Chrome thường. Hệ quả: việc **Chưa ghi chặng giao hàng nào** (mức Cần xử ngay) không xử lý được.
5. **Không bổ sung được liên hệ của đối tác.** Nút **Chưa có số — bổ sung** bấm vào không có tác dụng, danh sách đối tác không có cột thao tác để sửa. Nút **Bổ sung liên hệ** ở Tình trạng phân phối cũng dẫn về danh sách này, và người mua gõ tên lúc bán không có trong đó. Đại lý An Bình được khai sau khi bán vẫn không nối với giao dịch bán cùng tên.
6. **Mở trang quy trình đã xuất bản hiện thông báo đỏ Lỗi máy chủ.** `GET /api/v1/products/<id>/workflow/industry-diff` trả về 500 `DB_ERROR`. Việc xuất bản vẫn thành công. Ảnh trong sổ tay đã ẩn thông báo này.

## Logic dễ gây nhầm

- **Đóng gói tùy chọn nhưng bắt buộc khi bán.** Quy trình cho đánh dấu Đóng gói là tùy chọn, nút **Bỏ bước tùy chọn** còn xóa bước này, nhưng bán hàng bị từ chối `BATCH_NOT_READY_FOR_SALE` nếu chưa ghi.
- **Ghi công đoạn đầu tiên tự chuyển lô khỏi Nháp**, sang Đang xử lý và Chờ đồng bộ, không hỏi lại. Nút **Công bố lô** biến mất, trong khi lô có thể đồng bộ lên cổng quốc gia.
- **Xuất bản quy trình xong sản phẩm vẫn là Nháp**, không có gợi ý phải bấm **Kích hoạt**. Form tạo lô chỉ báo chung "Chưa có sản phẩm đã công bố phù hợp".
- **Trang `/dashboard/distribution/network` không có trong menu trái**, trong khi đây là nơi duy nhất khai nhà cung cấp, khách hàng cho phiếu kho. Ô Nhà cung cấp và ô Kho của phiếu trống mà không báo lý do, không có nút thêm nhanh.
- **Form Thêm đối tác để mặc định Loại là Đại lý**, nên đối tác tạo vội không hiện ở ô Nhà cung cấp.
- **Ô Kho chỉ nhận cơ sở loại Kho.** Kho lạnh và Tổng kho/Depot không chọn được, cần xác nhận có phải chủ ý.
- **Form sản phẩm chỉ có 10 ngành, không có Thực phẩm chế biến**, trong khi trang Quy trình ngành có. Bánh gạo phải chọn tạm Lúa gạo. Quy trình và form công đoạn vì thế dùng ô của lúa gạo.
- **Form tạo lô ghi "không ai sửa hay xoá được"**, nhưng lô vẫn có nút **Sửa**, **Xóa** vào Thùng rác.
- **Hạn mức gói Free.** Tạo 1 lô có 1 nguồn mua làm hạn mức từ 5/5 còn 3/5, có vẻ do sinh thêm lô đầu vào `NHAP-…` ghi "0 gói". Bán hàng tạo lô con trừ thêm 1 (còn 2/5). Cần xác nhận.
- **Tab Mua trong nước ghi "liên kết lô truy xuất"**, nhưng khi lưu chỉ tạo phiếu nhập, **Loại nguyên liệu** không tự bổ sung như trang đó nói.
- **Quản trị viên không ghi được nhật ký khi chưa phân công**, trong khi form phân công nói ADMIN/MANAGER được ghi mọi thửa, và danh sách phân công không có tài khoản quản trị.
- **Mở trang truy xuất để kiểm tra cũng tính lượt quét**, nút **Xem như khách hàng** dẫn đến cùng trang đó.
- **Địa chỉ người mua không suy ra tỉnh.** Bán có địa chỉ "Thành phố Hà Nội" vẫn báo chưa khai tỉnh, và form bán không có ô chọn tỉnh.
- **Lịch sử quét QR ghi "Tổng 0 lượt quét"** trong khi lô ví dụ đã có lượt quét từ trang truy xuất. Chưa rõ màn này chỉ tính tem có serial hay bị lỗi. Tiêu đề còn chữ "Forensic".
- **Kết nối IoT hiện địa chỉ `http://localhost:9000/...`** cho cả 3 webhook. Thiết bị bên ngoài không gửi tới được, trong khi màn hình bảo chép địa chỉ này.
- **Form Hành trình yêu cầu "UUID lô hàng"** thay vì chọn lô hoặc gõ mã lô, trong khi webhook cảm biến lại dùng mã lô `batchCode`.
- **HTX không có màn quản lý nhóm, thành viên.** Form phát quy trình và trang ghi thay báo "Chưa có nông hộ trong nhóm", bảo thêm ở mục Thành viên, nhưng menu không có mục này, còn `/dashboard/cooperative/groups` và `/members` trống. Chưa rõ tài khoản Nông hộ có tự vào nhóm không.
- **Form Ghi giấy uỷ quyền liệt kê `admin (ADMIN)` là nông hộ** ("Chọn tất cả (1 nông hộ)"), trong khi màn Hợp tác xã ghi 0 hộ.
- **Tên gọi không thống nhất:** vai trò ghi "Nông hộ", nơi khác ghi "Nông dân", "xã viên".
- **Hộ chiếu sản phẩm và Báo cáo còn tiếng Anh:** form "Generate Passport", các loại báo cáo, "Create your first product passport". Mục Ngoại lệ tuân thủ ghi "Bypass Tuân thủ", "DCRE hard-block". Đánh giá rủi ro ghi "Risk by Industry x Origin", "Low/Med/High".
- **Trang Tuân thủ hiện mã UUID ở cột Mã lô**, và cột Xuất xứ ghi "Chưa khai báo" với lô con và lô nhập.
- **Kiểm tra nhãn báo "Ngành AGRI_RICE chưa đọc được danh sách trường bắt buộc"**, nên không kết luận được sản phẩm đã đạt hay chưa.
- **Danh sách đối tác không có sẵn chính doanh nghiệp**, trong khi ô điểm đi của chặng chỉ chọn trong danh sách này. Phải tự khai nhà máy thành đối tác, và không có loại Nhà sản xuất nên ví dụ đành chọn Tổng đại lý.
- **Ghi chặng để sẵn đơn vị kg** dù lô tính theo gói.
- **Trang chuyến hàng `/dashboard/shipments` chỉ nói về xuất khẩu**, còn nút **Ghi chuyến vận chuyển** có trên mọi lô nội địa. Ô lô của form ghi gợi ý mã `AGG-… / PRE-… / PKG-…`, không khớp mã lô thật.
- **Form thu hồi ghi lô bằng mã UUID** thay vì mã lô, và để sẵn Mức 2 cùng lý do Độc tố nấm mốc (OTA), dễ gửi nhầm.
- **`/dashboard/batches/incoming` hiện Lỗi tải dữ liệu.** Nút **Hàng đến chờ xác nhận** thật dẫn tới `/dashboard/shipments/receipts?view=incoming`.
- **Nút In tem serial riêng ghi dữ liệu mà không báo trước.** Tên nút giống một lệnh in, nhưng mỗi lần bấm gửi `POST /batches/<id>/items/bulk` sinh thêm serial (tối đa 500), không hỏi xác nhận.
- **Không in lại được serial đã sinh.** Nút **In sheet tem** chỉ hiện ngay sau khi sinh, tải lại trang là mất, danh sách serial bên dưới chỉ có **Mở landing**.
- **Phát hành tem chống giả không hỏi lô, và kích hoạt phải làm từng tem.** Đợt 1.000 tem sẽ phải mở menu và gõ mã lô 1.000 lần. Khối **Tem chống giả của lô** ở Tem & bao gói vẫn là 0 sau khi phát hành.
- **Form phát hành có 3 loại tem (Sản phẩm, Lô, Chống giả) nhưng các ô giống hệt nhau,** không giải thích khác nhau thế nào.
- **Tra tem nội bộ báo "Bạn là người đầu tiên quét tem này"** dù tem 0 lần quét và người tra là quản trị viên. Câu này dành cho người mua.
- **Thông báo mức dịch vụ mâu thuẫn.** Tem & bao gói ghi mức Cơ bản "chỉ hiện một cấp thùng" và cần bật mức cao hơn "trong cấu hình" để có SSCC, nhưng màn hình vẫn hiện form tạo cây pallet, vẫn cấp SSCC cho thùng. **Cài đặt → Tùy chọn** không có mục đổi mức, còn `/dashboard/trace` chỉ dẫn tới gói dịch vụ và hỗ trợ.
- **Ba tên miền cho cùng một lô.** Màn in hiện `trace.nacencheck.com/01/...`, chân nhãn in `trace.nacencheck.com/verify/...`, còn trang chi tiết lô và serial trỏ `verify.xacthucnguongoc.vn`.
- **Khối Chia lô để mặc định đơn vị Kilogram** ở Tem & bao gói, trong khi lô tính theo gói (tab Đóng gói và tem của lô thì hiện đúng Gói).

## Lỗi hiển thị

- Đơn vị bán hiện kg dù lô tính theo gói: cột Số lượng ở `/dashboard/distribution` ("2 kg @ 25.000 ₫/kg"), mục Phân bổ ("đã bán 2 kg · đã tách 2 gói", kèm cảnh báo khai đơn vị khác).
- Ô **Số lượng thực nhận** của công đoạn Nhập nguyên liệu chỉ nhận số nguyên, trong khi vật tư tính theo kg có số lẻ.
- Trang chi tiết lô: xuất xứ hiện mã thô "Tỉnh/TP mã 37" thay vì tên tỉnh.
- Tạo lô để trống mã: lần gửi đầu bị 422 `BATCH_CODE_REQUIRED`, form tự gửi lại với mã nó sinh.
- Tab Bản đồ trong chi tiết vùng không vẽ lại ranh giới đã lưu, bản đồ về vị trí mặc định.
- `/dashboard/compliance/labels` hiện `[object Object]` ở các thẻ thống kê.
- Quy trình chuẩn Lúa gạo hiện tên chưa dịch: `APPLY_PESTICIDE`, `IRRIGATE`.
- Form Ghi nhận thu hoạch: ô Vùng trồng hiện chữ gợi ý lỗi "Vn xxxxxx selectTab tu vung da da".
- Danh sách phiếu kho hiện mã cơ sở thay vì tên, mã tự gợi ý bị cắt ở 28 ký tự.
- Form Mua trong nước có nút "Save" chưa dịch.
- `/dashboard/distribution` còn chữ kỹ thuật như "Stage 8", "GS1 TransactionEvent", "CBV bizStep".

## Phần sổ tay chưa kiểm chứng được

Các đoạn này viết theo chữ trên màn hình hoặc bài cũ, chưa bấm thử đến cùng:

- **Nhật ký canh tác, thu hoạch (mục 5.2):** cần một tài khoản nhân viên được phân công vào thửa.
- **Từ kho của tôi (mục 5.1, 5.2):** bị chặn bởi lỗi 1 ở trên.
- **Nhập khẩu (mục 5.2):** chỉ mở form, chưa nộp tờ khai.
- **Nút Công bố lô (mục 5.4):** chỉ đọc hộp xác nhận, vì lô ví dụ đã tự rời Nháp khi ghi công đoạn.
- **Đính chính (mục 6.4):** chỉ mở đến nút, chưa lưu.
- **In tem theo lô (mục 7.3):** đã mở tờ tem và nhãn ở tab mới, chưa in ra giấy và chưa quét thử QR trên tem. Xuất CSV, Xuất ZPL, Tải QR chưa mở file.
- **Lưu mẫu tem (mục 7.4):** chưa lưu, nên chưa rõ mẫu đã lưu được chọn lại ở đâu khi in.
- **In sheet tem (mục 7.5):** chưa bấm. Chưa mở trang công khai của serial, chưa rõ có tính lượt quét không.
- **Tem chống giả (mục 7.6):** đã phát hành 10 tem, tải PDF và CSV. Chưa kích hoạt tem nào vào lô, nên chưa biết ô mã lô có nhận đúng không (form gửi mã lô vào trường `batchId`). Chưa mở PDF để xem có in PIN không. Chưa quét tem, nên chưa thấy cảnh báo vượt ngưỡng. Chưa dùng loại tem Sản phẩm, Lô và **Nhập vào đây**. In lại, Tạm khoá, Hủy chỉ mở đến hộp nhập.
- **Nhãn thùng (mục 7.7):** đã tạo 1 thùng có SSCC. Chưa bấm **Xác nhận đóng**, **In nhãn**, **Tạo cây**.
- **Truy xuất hai chiều (mục 7.8):** tài khoản ví dụ mức Cơ bản chỉ thấy màn khóa.
- **Xuất kho, chuyển kho, hủy phiếu (mục 3.6):** chỉ mở form.
- **Chương Tuân thủ:** chỉ mở màn hình và form, chưa bấm Kiểm tra, Phát hành, Nhận, Tạo gói, Tạo báo cáo. Nút **Chi tiết**, **Tạo kiểm tra** ở Đánh giá rủi ro chưa mở được bằng script, công dụng viết theo tên nút. Chưa thấy thông báo vi phạm thật, quy trình CAPA viết theo chữ trên màn hình. Chưa mở **Khoá đối tác ngoài**.
- **Chương Quản lý tài sản:** chỉ mở form, chưa lưu tài sản, thiết bị, hành trình, chưa tạo token, chưa có thiết bị thật gửi dữ liệu. Chưa rõ dữ liệu hành trình hiện ở đâu trên lô.
- **Chương Hợp tác xã:** cả chương viết theo màn hình vì tài khoản ví dụ chưa có nông hộ. Chưa thử tạo tài khoản nông hộ, tải CSV (bước Xem trước, Hoàn tất), khai thửa, phát quy trình, ghi uỷ quyền, ghi thay. Chưa xem được thẻ việc trên điện thoại nông hộ. Việc thửa có mặc định không sinh "Thửa 1" lấy từ chữ ở Cài đặt, chưa thử. Việc đổi lịch sau **Sao chép để chỉnh** chưa thử.
- **Ghi chặng và cây phân phối (mục 8.5):** bị chặn bởi lỗi 4 ở trên, tab cây chỉ thấy "Lô này chưa có chặng". Form **Ghi chuyến vận chuyển** chỉ mở, chưa lưu.
- **Liên kết và giao nhận (mục 8.6):** chỉ mở form, chưa gửi yêu cầu vì cần doanh nghiệp thứ hai. Việc bên nhận xác nhận rồi nhập kho viết theo chữ trên màn hình.
- **Thu hồi (mục 8.7):** chỉ mở form, không tạo lệnh. Chưa rõ sau khi tạo lệnh, hệ thống báo cho đầu mối thế nào.

## Cổng quản trị (`https://admin.nacencheck.com/admin`, kiểm tra ngày 31/10/2026)

### Lỗi, điểm mâu thuẫn trên màn hình

1. **Bộ luật ở trạng thái Nháp không có nút đi tiếp.** Trang chi tiết gói nháp (ví dụ `PLAN_QUOTA_BASELINE`) chỉ có **So sánh**, **Các phiên bản**, **Chạy smoke test**. Tài liệu `dev-docs` ghi bấm **Ký số** ở trang chi tiết, nhưng không thấy nút **Gửi duyệt**, **Ký số**, **Xuất bản**. Khối **Danh sách quy tắc** của gói này cũng trống.
2. **Hiệu năng chạy API thật trên hệ thống thật.** `/admin/performance` có **Run All** và nút chạy từng bài (tạo 50 lô, ghi 200 sự kiện, 100.000 dòng vào TimescaleDB), không có nhãn môi trường, và chưa bấm nên chưa rõ có hỏi xác nhận không. Nên chặn trên môi trường thật. Trang còn ghi `Tenant: 550e8400...` và phần lớn chữ tiếng Anh.
3. **Nút Grafana ghi `uat-monitor`** trên cổng quản trị đang dùng, người đọc không rõ đây là UAT hay môi trường thật.
4. **Mọi gói ngành đều "Chờ verify" trong khi đầu trang ghi "10/10 gói có chữ ký".** Cột **Đáp ứng GS1** toàn dấu gạch đỏ. Chi tiết gói Nông nghiệp báo đỏ "Bộ ngành thiếu khối gs1_conformance — vi phạm ADR-058 §2.11". Công đoạn đầu tiên `APPLY_PESTICIDE` có **Tên VI** trống.
5. **Danh mục BVTV ghi "0 sản phẩm" nhưng bảng có 6 thuốc.** Dòng **Đồng bộ MARD** ghi chưa từng đồng bộ, không thấy nút đồng bộ.
6. **Nền tảng có 3 tổ chức nhưng Doanh thu ghi "Tổ chức đang hoạt động: 0", "0 trả phí / 0 miễn phí".** Trong khi Tổng quan ghi 3 doanh nghiệp hoạt động, và Bảng giá ghi gói Community có 3 doanh nghiệp.
7. **Thanh toán báo sai về tài khoản nhận.** Bảng có 1 tài khoản "mặc định, đang dùng", nhưng khối đối soát ghi "Mọi tài khoản — chưa có tài khoản nhận nào đang bật".
8. **Cấu hình tích hợp lệch số:** thẻ ghi 32 nhà cung cấp, bảng ghi "1-10 / 34 kết quả".
9. **Đồng bộ NBC:** cả 4 dòng lịch sử ở trạng thái `DLQ`, 0 điểm kết nối, không có thời lượng, thời điểm. Đầu trang ghi "Đã tích hợp" cho mọi adapter dễ khiến người đọc tưởng đang chạy. Tài liệu ghi có thể thử gửi lại, nhưng màn hình không thấy nút.
10. **Bản dùng thử lệch tài liệu:** trang ghi "Tenant mới sẽ tự động tạo trial 30 ngày khi signup", nhưng cả 3 tổ chức đều ở gói Community và danh sách trial trống. Form cấp tay lại mặc định 14 ngày.
11. **Tính năng:** nút **Cờ mới** bị khoá, danh sách trống, không có giải thích.
12. **Form Thêm tên miền không có nhãn ô**, chỉ có chữ mờ, gõ vào là mất gợi ý.
13. **Trường Tên pháp lý của Hạt Vàng Việt hiện "admin"** ở trang chi tiết tổ chức, dù hồ sơ doanh nghiệp đã khai tên công ty.
14. **Lộ từ ngữ kỹ thuật cho người dùng:** "Đối tác được gieo ở mig 116", "Không có invoice chờ reconcile", "Chưa có tenant trial nào active", "Mở dialog rollback", "Redis hot-reload", "cron", chú thích ADR. Trang `/admin/nbc-sync/monitor`, `/admin/rules/sandbox` gần như toàn tiếng Anh. Ngành `PROCESSED_FOOD` chưa có tên tiếng Việt ở danh sách tổ chức.
15. **Còn tên cũ TracePro:** "TracePro Platform" ở Nhà phát hành, "TracePro rơi vào nhóm nào" ở Thuế suất.
16. **Tên không thống nhất:** menu **Tổ chức** mở trang "Quản lý đơn vị", menu **Quy trình & gói ngành** mở trang "Ngành & công đoạn chuẩn", menu **Bảng điều khiển luật** mở trang "Bộ luật tuân thủ", tab **Sổ ghi vết** mở trang "Nhật ký kiểm toán". Tài liệu gọi "Đánh giá tuân thủ", màn hình gọi "Thẩm định tuân thủ", và màn này không có trên menu.
17. **Tài liệu `dev-docs` lạc hậu so với màn hình:** ghi vào **Tenants** rồi **Quy trình**, **Biểu mẫu**, trong khi hiện là nút **Cấu hình Quy trình & Form** ở trang chi tiết tổ chức. Mục menu cũng đã đổi tên.

### Phần bài chưa kiểm chứng được

Cổng quản trị không có lớp chặn ghi như script Playwright, nên chỉ mở màn hình và form, không lưu gì:

- **Tổ chức (chương 16):** chưa tạo tổ chức, chưa bấm **Đăng nhập hộ**, **Tạm ngưng**, **Bắt đầu xoá**, **Đặt lại khoá**, **Buộc đăng xuất**, **Bật chặn cứng**. Chưa rõ chọn mức ở **Cổng vai theo công đoạn** có lưu ngay hay không. **Đặt lại**, **Khoá**, **Gửi nhắc** viết theo tên nút và tài liệu. Công dụng **Đăng nhập hộ** viết theo tên nút.
- **Ngành (chương 17):** chưa nạp ngành, chưa bấm **Xác minh**, **Nạp lại**, **Ký lại**, **Nhân bản**. Công dụng **Xác minh**, **Nạp lại** viết theo tên nút. Form **Nạp ngành mới** chỉ xem đến khối văn bản pháp lý. Loại mã sự kiện khác ngoài "Chọn mã đã đăng ký" lấy từ tài liệu, chưa mở. Trình dựng biểu mẫu đã thử thêm một ô trên màn hình, xác nhận chưa có yêu cầu ghi, rồi bỏ. Chưa bấm **Thêm trường**, **Import từ MARD CSV**, **Cấm**.
- **Bộ luật (chương 18):** chưa soạn, duyệt, ký, xuất bản, chưa chạy Sandbox, smoke test, rollback. Vòng đời viết theo tài liệu `dev-docs`. Form **Soạn bộ luật** chỉ xem đến Bước 1B, chưa rõ còn bước nào phía sau. Chưa bấm **Tạo bản nháp** ở Thẩm định, quy trình đánh giá lấy từ tài liệu.
- **Giá, thu tiền (chương 19):** chưa sửa gì. Tab **Mã phát cho khách**, **Giá riêng theo DN** chỉ đọc chữ trên màn hình. Đối soát, Liên hệ chưa có dữ liệu nên chưa thấy nút thao tác trong bảng. Ăn chia, Chiến dịch tài trợ cũng trống.
- **Tích hợp (chương 20):** chưa tạo tên miền, chưa thấy bước xác minh DNS thật. Chưa bấm **Lịch sử**. Ô màu trong form tên miền đoán theo chữ mờ `var(--nc-primary)`.
- **Giám sát, nội dung (chương 21):** chưa mở Grafana, chưa rõ cần tài khoản gì. Chưa bấm **Run All**. Chưa mở chi tiết **Dữ liệu** của nhật ký. Chưa xuất bản bài, nên bước gửi duyệt và **Thu hồi consent** viết theo chữ trên màn hình.
- **Tìm kiếm nhanh** trên thanh đầu trang chưa thử, nên bài không hướng dẫn.
