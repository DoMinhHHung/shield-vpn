# Top VPN Services 2026

## Tài liệu thiết kế

**Ứng viên:** Đỗ Minh Hùng

**Vị trí ứng tuyển:** Thực tập sinh Fullstack

**Đơn vị tuyển dụng:** Công ty TNHH Truyền thông và Quảng cáo H2T

**Đường dẫn tham khảo**: https://shield-vpn-three.vercel.app/

---

# Mục lục

- [1. Tổng quan dự án](#1-tổng-quan-dự-án)
- [2. Đối tượng người dùng](#2-đối-tượng-người-dùng)
- [3. Research](#3-research)
- [4. Thiết kế hệ thống](#4-design-system)
- [5. Cấu trúc Homepage](#5-cấu-trúc-homepage)
- [6. Dev Thinking](#6-dev-thinking)
- [7. Giải thích quyết định thiết kế](#7-giải-thích-quyết-định-thiết-kế)
- [8. Phát triển](#8-nếu-có-thêm-thời-gian)
- [9. Kết luận](#9-kết-luận)

---

# 1. Tổng quan dự án

## Mục tiêu

Đề bài yêu cầu thiết kế trang chủ cho website **Top VPN Services 2026** hướng đến thị trường toàn cầu.

Sau khi nghiên cứu yêu cầu, em lựa chọn xây dựng website theo hướng **trang review và so sánh VPN**, thay vì một landing page giới thiệu hoặc bán một nhà cung cấp VPN cụ thể.

Mục tiêu của website là:

- Giúp người dùng so sánh nhiều dịch vụ VPN một cách nhanh chóng.
- Tạo cảm giác tin cậy ngay từ những giây đầu tiên.
- Dẫn dắt người dùng đến quyết định thông qua thông tin khách quan.
- Thiết kế có thể triển khai thực tế bằng HTML/CSS hoặc các framework Frontend.

---

# 2. Đối tượng người dùng

Website hướng đến người dùng trên thị trường quốc tế có nhu cầu tìm kiếm và so sánh các dịch vụ VPN.

Đối tượng chính bao gồm:

- Người quan tâm đến quyền riêng tư trên Internet.
- Người thường xuyên sử dụng Wi-Fi công cộng.
- Người muốn xem nội dung bị giới hạn theo khu vực.
- Người làm việc từ xa.
- Người muốn so sánh nhiều VPN trước khi mua.

Vì vậy, giao diện cần ưu tiên:

- Dễ đọc.
- Rõ ràng.
- Tạo cảm giác chuyên nghiệp.
- Tăng độ tin cậy.

---

# 3. Research

Trước khi bắt đầu thiết kế, em nghiên cứu giao diện của các website VPN lớn:

- NordVPN
- Proton VPN
- Surfshark
- Private Internet Access

Mục tiêu của quá trình research không phải là sao chép giao diện mà là tìm hiểu các quy luật thiết kế đang được sử dụng phổ biến trong ngành VPN.

---

## NordVPN

### Điểm mạnh

- Hero đơn giản, dễ hiểu.
- CTA xuất hiện ngay khi mở trang.
- Khoảng trắng nhiều giúp tăng khả năng đọc.
- Hình minh họa hiện đại và chuyên nghiệp.

### Điều em học được

- CTA nên xuất hiện ngay trong Hero.
- Người dùng cần hiểu website làm gì chỉ sau vài giây.
- Những yếu tố tạo sự tin tưởng nên xuất hiện ở phần đầu trang.

---

## Proton VPN

### Điểm mạnh

- Có bảng so sánh trực quan.
- Minh bạch trong cách đánh giá.
- Typography rõ ràng.
- Có phần giải thích cách kiểm thử VPN.

### Điều em học được

- Website review nên có tiêu chí đánh giá rõ ràng.
- Bảng so sánh giúp người dùng ra quyết định nhanh hơn.
- Việc công khai phương pháp đánh giá giúp tăng độ tin cậy.

---

## Surfshark

### Điểm mạnh

- Card đồng nhất.
- Layout hiện đại.
- Visual hierarchy rõ ràng.
- Nội dung ngắn gọn.

### Điều em học được

- Component nên có tính tái sử dụng.
- Sử dụng khoảng trắng để tạo hierarchy.
- Không nên đưa quá nhiều nội dung vào một section.

---

## Những điểm áp dụng vào thiết kế

Sau quá trình nghiên cứu, em áp dụng các ý tưởng sau:

- Hero đơn giản với một CTA chính.
- Đưa các yếu tố tạo niềm tin lên gần đầu trang.
- Bảng so sánh VPN giúp người dùng đánh giá nhanh.
- Thêm mục **How We Test** để giải thích cách đánh giá.
- Sử dụng cùng một style cho toàn bộ card nhằm đảm bảo tính nhất quán.

Website được xây dựng theo hướng của một **trang review công nghệ**, không phải landing page bán VPN.

---

# 4. Thiết kế hệ thống

## Màu sắc

| Màu | Giá trị | Mục đích |
|------|----------|----------|
| Primary | #2563EB | CTA, liên kết, trạng thái chính |
| Accent | #22C55E | Biểu thị trạng thái tích cực |
| Background | #FFFFFF | Nền chính |
| Surface | #F8FAFC | Card và section |
| Text | #0F172A | Nội dung chính |
| Border | #E2E8F0 | Đường viền |

### Lý do lựa chọn

Em chọn màu xanh dương làm màu chủ đạo vì đây là màu thường gắn với sự tin cậy, an toàn và chuyên nghiệp.

Màu xanh lá chỉ được sử dụng để biểu thị các trạng thái tích cực như bảo mật, đã xác minh hoặc hoàn thành nhằm tránh cạnh tranh với CTA.

---

## Typography

Font sử dụng là **Inter**.

Lý do lựa chọn:

- Dễ đọc trên nhiều kích thước màn hình.
- Hiển thị tốt cả chữ và số.
- Phù hợp với phong cách hiện đại của các sản phẩm SaaS.

Thang chữ:

- H1: 56px
- H2: 40px
- H3: 28px
- Body: 16px
- Caption: 14px

---

## Spacing

Website sử dụng hệ thống khoảng cách theo bội số của 8.

```
8
16
24
32
48
64
96
120
```

Việc sử dụng cùng một hệ thống spacing giúp giao diện đồng nhất và dễ mở rộng.

---

## Component

Các component chính bao gồm:

- Button
- Navigation
- VPN Card
- Comparison Table
- Category Card
- FAQ Accordion

Tất cả đều được thiết kế theo cùng một ngôn ngữ giao diện nhằm đảm bảo tính nhất quán.

---

# 5. Cấu trúc Homepage

Website được chia thành các section theo trình tự sau:

```
Header

↓

Hero

↓

Trusted Statistics

↓

Top VPN Rankings

↓

Comparison Table

↓

How We Test

↓

VPN Categories

↓

FAQ

↓

Footer
```

## Giải thích

### Hero

Giới thiệu mục tiêu website và đưa CTA ngay trên màn hình đầu tiên.

### Trusted Statistics

Hiển thị các số liệu giúp tăng độ tin cậy.

### Top VPN Rankings

Giới thiệu các VPN được đánh giá cao nhất.

### Comparison Table

Giúp người dùng so sánh nhiều VPN trong cùng một bảng.

### How We Test

Giải thích cách đánh giá nhằm tăng tính minh bạch.

### VPN Categories

Gợi ý VPN theo từng nhu cầu sử dụng.

### FAQ

Giải đáp những câu hỏi phổ biến.

---

# 6. Dev Thinking

Nếu triển khai bằng React hoặc Vue, website có thể chia thành các component sau:

- Header
- Hero
- Statistics
- RankingCard
- ComparisonTable
- TestingProcess
- CategoryCard
- FAQ
- Footer

Việc chia component giúp dễ bảo trì và tái sử dụng trong quá trình phát triển.

---

## Responsive

### Desktop

- Hero chia hai cột.
- Ranking hiển thị ba card.
- Comparison Table hiển thị đầy đủ.

### Tablet

- Hero chuyển thành một cột.
- Ranking còn hai cột.
- Bảng so sánh có thể cuộn ngang.

### Mobile

- Menu chuyển thành hamburger.
- Các card hiển thị theo một cột.
- Bảng so sánh hỗ trợ cuộn ngang.

---

## Phần khó triển khai

Phần khó nhất là hệ thống **Table of Contents** và **Scroll Spy**.

Website có nhiều section nên cần xác định chính xác người dùng đang đọc phần nào để cập nhật trạng thái của menu.

Giải pháp phù hợp là sử dụng **IntersectionObserver**, giúp giảm số lần xử lý khi cuộn và cải thiện hiệu năng so với việc theo dõi sự kiện `scroll` liên tục.

---

# 7. Giải thích quyết định thiết kế

## Vì sao chọn màu xanh?

Màu xanh tạo cảm giác an toàn, đáng tin cậy và thường được sử dụng trong các sản phẩm liên quan đến bảo mật.

---

## Vì sao chọn Inter?

Inter có khả năng hiển thị tốt trên nhiều thiết bị, dễ đọc và phù hợp với giao diện hiện đại.

---

## Vì sao có bảng so sánh?

Đây là chức năng quan trọng nhất của một website review.

Người dùng có thể đánh giá nhiều VPN trong cùng một màn hình thay vì phải mở nhiều trang khác nhau.

---

## Vì sao có mục "How We Test"?

Điểm số chỉ có ý nghĩa khi người dùng biết cách chúng được tạo ra.

Phần này giúp website trở nên minh bạch và đáng tin cậy hơn.

---

# 8. Nếu có thêm thời gian

Nếu tiếp tục phát triển dự án, em sẽ bổ sung:

- Dark Mode.
- Hệ thống lọc VPN theo nhu cầu.
- Dữ liệu cập nhật tự động từ API.
- Kiểm tra Accessibility bằng Lighthouse và axe.
- Tối ưu SEO.
- Animation và Micro Interaction.
- CMS để quản lý nội dung review.

---

# 9. Kết luận

Qua bài test này, em mong muốn thể hiện không chỉ khả năng thiết kế giao diện mà còn là tư duy phân tích, nghiên cứu và khả năng xây dựng một sản phẩm có thể triển khai trong thực tế.

Các quyết định về bố cục, màu sắc, typography và cấu trúc component đều được đưa ra dựa trên quá trình nghiên cứu các website VPN lớn kết hợp với mục tiêu tạo ra một website review trực quan, dễ sử dụng và đáng tin cậy.