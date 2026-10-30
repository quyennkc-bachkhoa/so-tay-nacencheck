---
title: NacenCheck là gì?
order: 0
group: Mở đầu
---

# NacenCheck là gì?

## Bắt đầu từ một câu hỏi của người mua

Hãy hình dung một khách hàng cầm gói bánh gạo trên kệ siêu thị và tự hỏi: gạo này trồng ở đâu, mật ong lấy từ đâu, bánh làm ở nhà máy nào, ngày nào, đã qua những khâu kiểm tra gì? Một nhà nhập khẩu ở châu Âu cũng hỏi những câu tương tự, chỉ khác là họ đòi bằng chứng bằng giấy tờ.

Trước đây, doanh nghiệp trả lời bằng sổ sách rời rạc: phiếu nhập kho ở phòng kế toán, nhật ký sản xuất ở xưởng, hóa đơn bán hàng ở phòng kinh doanh. Thông tin có, nhưng không nối được với nhau. Khi cần truy ngược một lô hàng lỗi, việc lục lại giấy tờ mất nhiều ngày.

**Truy xuất nguồn gốc** là giải pháp cho đúng vấn đề đó: ghi lại hành trình của từng mẻ hàng thành một chuỗi liên tục, từ nguyên liệu đầu vào đến tay người mua, để ai cũng có thể kiểm tra lại khi cần.

## NacenCheck làm gì?

**NacenCheck** là nền tảng công nghệ chuyên về truy xuất nguồn gốc hàng hóa và hỗ trợ tuân thủ quy định cho doanh nghiệp Việt Nam. Doanh nghiệp dùng trang quản trị tại `https://trace.nacencheck.com/dashboard` để khai báo và ghi nhận; người mua dùng điện thoại quét mã QR trên bao bì để xem lại.

Nền tảng có ba nhóm việc chính:

| Nhóm | NacenCheck giúp gì | Bạn sẽ thấy ở đâu trong sổ tay |
|---|---|---|
| **Ghi nhận hành trình** | Lưu toàn bộ quá trình từ vùng trồng, nhập nguyên liệu, sản xuất, đóng gói đến bán hàng. Mỗi bước là một bản ghi có người ghi, thời điểm và chứng từ kèm theo. | Chương 4 đến 11 |
| **Tuân thủ quy định** | Hỗ trợ khai báo vòng đời sản phẩm theo chuẩn quốc tế GS1, tạo mã QR, nhãn điện tử, kiểm tra sớm thông tin nhãn theo Nghị định 37/2026/NĐ-CP và kết nối cổng truy xuất quốc gia. | Chương 10 và 12 |
| **Hỗ trợ xuất khẩu** | Hồ sơ lô đầy đủ chứng cứ, nhãn điện tử (eLabel), tem chống giả, hồ sơ chứng nhận xuất xứ (C/O) cho các thị trường. | Chương 9, 10 và 12 |

> **Lưu ý về căn cứ pháp lý.** Sổ tay nhắc đến Nghị định 37/2026/NĐ-CP theo cách NacenCheck tham chiếu trong ứng dụng và tài liệu chính thức. Khi cần áp dụng cho hồ sơ thật, doanh nghiệp nên đối chiếu nội dung với văn bản gốc.

## Vì sao phải làm theo đúng thứ tự?

NacenCheck không phải một tập hợp màn hình độc lập. Mỗi thứ bạn khai báo ở bước trước sẽ trở thành lựa chọn có sẵn ở bước sau. Ví dụ: muốn tạo lô hàng thì phải có sản phẩm; muốn sản phẩm dùng được thì phải có quy trình đã xuất bản; muốn khai công thức sản phẩm thì phải có danh mục vật tư.

Nếu làm sai thứ tự, bạn sẽ gặp tình trạng "mở form ra nhưng ô chọn trống trơn". Đó không phải lỗi, mà là hệ thống đang báo rằng bạn chưa chuẩn bị dữ liệu cho bước đó.

## Luồng chính của sổ tay

Sổ tay đi theo một con đường duy nhất: **từ lúc mới có tài khoản đến khi khách hàng quét được mã QR trên gói hàng đầu tiên**. Các tính năng khác (kho, hóa đơn, thu hồi, chống giả nâng cao…) được giới thiệu ở chương bổ sung, sau khi bạn đã nắm luồng chính.

```
1. Thiết lập doanh nghiệp         (hồ sơ doanh nghiệp, trang giới thiệu, nhân viên)
        ↓
2. Thiết lập cơ sở và vùng        (cơ sở → vùng nguyên liệu → đơn vị sản xuất → phân công)
        ↓
3. Khai danh mục vật tư           (nguyên liệu, bao bì)
        ↓
4. Khai sản phẩm                  (sản phẩm → định mức → quy trình → xuất bản)
        ↓
5. Chuẩn bị nguồn nguyên liệu     (mua vào, hoặc ghi vụ → nhật ký → thu hoạch)
        ↓
6. Tạo lô hàng                    (hệ thống sinh mã lô và mã QR)
        ↓
7. Ghi công đoạn sản xuất         (từng bước theo quy trình)
        ↓
8. In tem QR, dán lên bao bì
        ↓
9. Bán / phân phối                (ghi nhận hàng đi đến đâu)
        ↓
10. Khách hàng quét QR            (xem toàn bộ hành trình)
```

## Ví dụ xuyên suốt sổ tay

Để dễ hình dung, các chương dùng chung một ví dụ thật trên hệ thống:

- **Doanh nghiệp:** một công ty sản xuất cơm cháy, bánh gạo, có nhà máy "Nhà máy cơm cháy Hạt Vàng Việt".
- **Sản phẩm:** Bánh gạo nướng mật ong Hạt Vàng Việt 180g, đóng gói.
- **Công thức:** 5 nguyên liệu – gạo tám thơm, mật ong, đường mía, dầu ăn tinh luyện, muối tinh.
- **Lô hàng:** một mẻ 10 gói sản xuất ngày 27/10/2026, sau đó bán 2 gói cho một đại lý.

## Điều cần nhớ

NacenCheck biến hành trình của mỗi mẻ hàng thành một chuỗi bản ghi nối liền nhau, và gói gọn chuỗi đó trong một mã QR. Toàn bộ thao tác trên web xoay quanh một đối tượng trung tâm là **lô hàng**. Hiểu được lô hàng là gì và cần những gì để tạo ra nó, bạn sẽ hiểu được cách dùng cả hệ thống.
