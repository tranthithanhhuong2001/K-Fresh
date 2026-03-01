# HƯỚNG DẪN TÍCH HỢP HỆ THỐNG THÔNG BÁO

## Đã tạo 2 file:
- `notification.css` - Style cho thông báo
- `notification.js` - Logic thông báo + Override alert()

## CÁCH SỬ DỤNG:

### Bước 1: Thêm vào TẤT CẢ các file HTML
Thêm 2 dòng này vào TRƯỚC thẻ `</body>` hoặc trong `<head>`:

```html
<link rel="stylesheet" href="notification.css">
<script src="notification.js"></script>
```

### Bước 2: KHÔNG CẦN THAY ĐỔI CODE
- Tất cả `alert()` hiện tại sẽ TỰ ĐỘNG dùng giao diện mới
- Tất cả `alert()` trong tương lai cũng vậy
- KHÔNG cần sửa code JavaScript

## CÁC FILE CẦN THÊM:

### Trang khách hàng:
- [ ] mijumeat.html
- [ ] index.html  
- [ ] product-detail.html
- [ ] cart.html
- [ ] checkout.html
- [ ] order-success.html
- [ ] order-lookup.html
- [ ] login.html
- [ ] account.html

### Trang admin:
- [ ] admin-login.html
- [ ] admin-dashboard.html

## VÍ DỤ THÊM VÀO FILE:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Trang của bạn</title>
    <!-- Các link CSS khác -->
    <link rel="stylesheet" href="notification.css">
</head>
<body>
    <!-- Nội dung trang -->
    
    <!-- Các script khác -->
    <script src="notification.js"></script>
</body>
</html>
```

## KẾT QUẢ:
- Mọi `alert('Thông báo')` sẽ hiện popup đẹp với:
  - Khung nền trắng viền đỏ
  - Header đỏ với nút X đen
  - Icon tick xanh
  - Nút OK đen
- Áp dụng cho TẤT CẢ thông báo (hiện tại + tương lai)
