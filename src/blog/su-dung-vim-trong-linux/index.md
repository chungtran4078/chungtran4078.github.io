---
title: Sử dụng VIM editor trong linux
date: 2019-03-16
category: Linux
tags:
- linux
---
Cú pháp mở file sử dụng VIM:
```bash
vi /var/www/html/index.php
```

## Thao tác với file
### Thêm nội dung
Sau khi mở file, mặc định VIM chỉ cho phép xem nội dung, để có thể sửa nội dung ta nhấn phím `I` để chuyển sang chế độ __INSERT__.

Di chuyển con trỏ bằng phím điều hướng đến vị trí mong muốn và thêm nội dung cho file.

*Lưu ý : Trong chế độ này không thể dùng các command (xóa, copy/paste, tìm kiếm...). Gõ `ESC` để chuyển sang chế độ COMMAND*
### Xóa dòng

Di chuyển con trỏ đến vị trí bất kỳ của dòng đó và gõ `dd`

### Copy/Paste

- Copy: Di chuyển con trỏ đến vị trí bất kỳ của dòng muốn copy và gõ `yy`

- Paste: gõ `p`

### Tìm kiếm

Gõ `/` hoặc `?` sau đó nhập từ khóa và Enter.

__VD:__ `/Kha Banh`

Đi đến kết quả tiếp theo gõ `n`

### Đi đến 1 dòng hoặc cột nào đó

- Đi đến dòng: Gõ số dòng muốn nhảy đến + `G`
- Đi đến cột:  Gõ số dòng muốn nhảy đến + `|`

__VD:__

- Đi đến dòng 35: `35G`

- Đi đến cột 28: `28|`

## Đóng file
Nếu đang ở chế độ __INSERT__ nhấn `ESC` để trở về chế độ __COMMAND__ sau đó gõ

- `:q!` để thoát và không lưu.

- `:wq` để thoát và lưu.