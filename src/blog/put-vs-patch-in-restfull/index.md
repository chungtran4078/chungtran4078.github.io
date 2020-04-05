---
title: PUT vs PATCH ?
date: 2019-01-12
category: API
tags:
- RESTfull
---
> RESTful APIs enable you to develop any kind of web application having all possible CRUD (create, retrieve, update, delete) operations
> <footer>https://<span></span>restfulapi.net</footer>

RESTfull có các phương thức cơ bản sau:

|Method|Semantics|
|-|-|
|GET|Retrieve resources|
|POST|Create a new resource|
|PUT|Update a resource|
|PATCH|Update a resource|
|DELETE|Delete a resource|

*Ngoài ra còn có HEAD, OPTIONS nhưng hầu như không sử dụng nhiều.*

Ở đây ta để ý thấy PUT vs PATCH đều có ý nghĩa là sử dụng để __"Update a resource"__. Vậy PUT và PATCH có gì khác nhau?

## PUT
Theo HTTP RFC, khi sử dụng PUT để update, ta phải gửi 1 bản ghi đầy đủ các field để yêu cầu cập nhật. Nếu chỉ gửi 1 số field nhất định thì những field còn lại sẽ bị xóa (tức bị null)

__VD:__

Mình có record như sau:

*Request: `GET /idol/2`*

*Response:*
```json
{
    "name": "Khá Bảnh",
    "age": 25,
    "skill": "xòe quạt"
}
```


Sau đó mình bổ sung skill *vinahey* cho anh Bảnh.

*Request: `PUT /idol/2`*

*Request payload:*
```js
{
    skill: "xòe quạt, vinahey"
}
```


Bây giờ mình kiểm tra lại xem thông tin a Bảnh đã được cập nhật chưa.

*Request: `GET /idol/2`*

*Response:*
```json
{
    "skill": "xòe quạt, vinahey"
}
```
Dường như có vẻ được cập nhật rồi. Ơ mà khoan có gì đó sai sai, field __name__ và __age__ đâu?

Thì ra đó là cách làm việc của PUT.

## PATCH
Theo HTTP RFC, PATCH giống PUT về ý nghĩa nhưng khác nhau về cách làm việc, nó chỉ thay đổi những field được yêu cầu thay vì thay đổi toàn bộ record.

__Áp dụng lại VD trên:__

Mình có record như sau:

*Request: `GET /idol/2`*

*Response:*
```json
{
    "name": "Khá Bảnh",
    "age": 25,
    "skill": "xòe quạt"
}
```


Sau đó mình bổ sung skill *vinahey* cho anh Bảnh.

*Request: `PATCH /idol/2`*

*Request payload:*
```js
{
    skill: "xòe quạt, vinahey"
}
```


Bây giờ mình kiểm tra lại xem thông tin a Bảnh đã được cập nhật chưa.

*Request: `GET /idol/2`*

*Response:*
```json
{
    "name": "Khá Bảnh",
    "age": 25,
    "skill": "xòe quạt, vinahey"
}
```

Hoàn hảo, PATCH chỉ cập nhật những field được yêu cầu thay vì cập nhật toàn bộ.