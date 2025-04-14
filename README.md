# 📌 ChatGPT Conversation TOC Bookmark

Bookmark này giúp bạn tạo **mục lục (TOC)** cho hội thoại ChatGPT, dễ dàng điều hướng giữa các lượt hỏi/đáp và tiêu đề trong câu trả lời của AI.

---

## 🔖 Bookmark

### Cách sử dụng:
1. Mở trình duyệt của bạn (Chrome, Edge, Brave,...)
2. Tạo một bookmark mới
3. Đặt tên: `ChatGPT TOC`
4. Dán đoạn mã JavaScript vào phần URL (xem trong tập tin riêng hoặc tài liệu đi kèm)

---

## 🧠 Giải thích chức năng

| Thành phần      | Giải thích |
|----------------|------------|
| `toc-panel`    | Bảng TOC hiển thị bên phải màn hình |
| `toc-handle`   | Nút nhỏ dọc bên phải để mở/đóng TOC |
| `Turn (You)`   | Mỗi đoạn bạn gửi câu hỏi đến AI |
| `Turn (AI)`    | Mỗi đoạn ChatGPT trả lời bạn |
| `↳ Tiêu đề`     | Header (h3) bên trong câu trả lời của ChatGPT, hiển thị như mục lục phụ |
| `MutationObserver` | Theo dõi sự thay đổi hội thoại để cập nhật TOC động |
| `scrollIntoView()` | Cuộn tới đoạn hội thoại tương ứng khi click vào TOC |

---

## 📬 Liên hệ

Nếu bạn muốn đóng góp, báo lỗi, hoặc cần trợ giúp:

📧 **linh.huynh.dev.99.@gmail.com**
