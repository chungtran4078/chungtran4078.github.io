---
title: chmod vs chown
date: 2019-03-17
category: Linux
tags:
- linux
---
Lệnh __chmod__ *(change mode)* và __chown__ *(change owner)* được sử dụng để kiểm soát truy cập vào các tệp trong Linux.

__chmod__ cho phép thay đổi quyền *(read, write, execute)* của các tệp và thư mục. __chown__ cho phép thay đổi chủ sở hữu *(user, group)* của một tệp hoặc thư mục nhất định.

## chmod
Lệnh __chmod__ có một vài cách sử dụng khác nhau với các quyền được đặt theo số hoặc bằng chữ cái.

Có thể bạn đã từng gặp cú pháp dạng như thế này:
```php
<?php
chmod("/somedir/somefile.txt", 764);
chmod("/somedir/somefile2.txt", "u+rwx,go+rx");
?>
```
Đây là đoạn mã phân quyền sử dụng php, hãy để ý các ký tự `764` và `u+rwx,go+rx`, chúng ta sẽ tìm hiểu ý nghĩa của chúng.

### Sử dụng số
Khi sử dụng số ví dụ `764` thì vị trí đầu tiên (số 7) là quyền của người dùng, vị trí thứ 2 (số 6) là quyền của nhóm, vị trí thứ 3 (số 4) là quyền của người dùng khác.

Quyền được tạo ra sẽ được tính bằng tổng của các con số được quy ước như sau:

|Number|Permission|
|-|-|
|4|Read|
|2|Write|
|1|Execute|

Như vậy với `764` ta có:
- Người dùng: 7 = 4 + 2 + 1 = read + write + execute
- Nhóm: 6 = 4 + 2 = read + write
- Người dùng khác: 4 = read

__Cú pháp:__
```bash
chmod 764 /somedir/somefile.txt
```
### Sử dụng chữ cái
Sử dụng lệnh __chmod__ với các quyền được đặt bằng chữ cái có vẻ tường minh dễ nhớ hơn =)).

__Quy ước:__
- u = người dùng
- g = nhóm
- o = người khác
- a = tất cả
- Và các quyền cơ bản được cung cấp bao gồm read (r), write (w) và execute (x).

__Cú pháp:__

Thay vì sử dụng `764`, ta có thể sử dụng `u+rwx,g+rw,o+r` cũng đều có ý nghĩa giống nhau.
```bash
chmod u+rwx,g+rw,o+r /somedir/somefile.txt
```
Nếu muốn tất cả người dùng đều có thể *read + write + execute*. Ta có thể thực hiện như sau:
```bash
chmod a+rwx /somedir/somefile.txt
```
Hoặc:
```bash
chmod +rwx /somedir/somefile.txt
```
Nếu muốn phân quyền bao gồm luôn cho các thư mục con, ta bổ sung option `-R` *(recursive)*
```bash
chmod -R u+rwx,g+rw,o+r /somedir
```

## chown
Cú pháp của lệnh __chown__ rất đơn giản.
VD:
```bash
chown -R chungtran:admin /somedir
```
Lệnh này có ý nghĩa như sau:

>Hey babe, cho người dùng __chungtran__ từ nhóm __admin__ làm chủ sở hữu của thư mục __/somedir__ và các thư mục con của nó giúp tôi nha.