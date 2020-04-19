---
title: 'Docker cho bé - P3: Chạy nhiều container với Docker-compose'
date: 2019-05-19
category: Docker
tags:
- linux
- docker
- development tools
series: docker-cho-be
---
Đến đây chúng ta có thể sử dụng __Dockerfile__ để khởi tạo một server và cài đặt các service cần thiết lên đó rồi.

Tuy nhiên sẽ có những bất cập, đó là chúng ta phải cài tất cả service lên 1 container (kiến trúc 1 khối - monolithic), mà các service này lại phải cài đặt thủ công (`apt-get install xxxyyy` gì gì đó), trong khi chúng ta muốn sử dụng các image service có sẵn trên Docker hub ???

Hoặc 1 dự án thực tế sử dụng các service chạy độc lập (kiến trúc nhiều dịch vụ - microservice) chẳng lẽ chúng ta lại phải viết vài cái __Dockerfile__ nữa sao. Không không, ở đây chúng ta không làm như vậy.

Vậy giải pháp là __Docker compose__ (nghe giống giống cái __php composer__ nhỉ, thực ra có giống đấy, lát mình nói sau).

__Docker compose__ là công cụ cho phép chúng ta run nhiều container 1 lúc, mình có chém qua về nó ở P1.
>Docker compose: thay vì cài đặt tất cả service (mysql, php, redis…) lên 1 container thì chúng ta có thể sử dụng docker-compose để chạy mỗi service trên mỗi container và kết nối các container lại với nhau. Giống như một hệ thống thực tế vậy.

![Docker composer](docker-compose.png)
## Cài đặt
Mình xài Windows cài xong Docker cái thấy nó có sẵn __Docker compose__ luôn, ai xài Linux thì tham khảo hướng dẫn ở đây nha [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

Kiểm tra xem cài đặt thành công chưa
```bash
docker-compose -v
```
## Viết docker-compose.yml
Trước tiên phải xác định các container sẽ sử dụng trong project. Ví dụ dự án mình là dự án php cần có 1 máy chạy source code và 1 máy để chạy mysql. Vậy là mình cần có 2 container.

Như vậy nội dung file __docker-compose.yml__ cho project của mình về cơ bản sẽ như sau:
```bash
version: '3.5'
services:
    php-apache:
        build: .
        ports:
            - 8080:80 #<host>:<container>
        volumes:
            - ./source:/var/www/html #Mapping source code giữa máy thật (host) và container
            - ./apache/log:/var/log/apache2
        links:
            - mysql
        environment:
            DB_HOST: mysql #Là tên của container database nha
            DB_PORT: 3306
            DB_NAME: my-db
            DB_USER: devuser
            DB_PWD: devuser
    mysql:
        image: mysql:5.6
        ports:
            - "3307:3306" #<host>:<container>
        environment:
            MYSQL_ROOT_PASSWORD: root #Mặc định đã có user root rồi nên chỉ cần thiết lập password cho user này.
            MYSQL_DATABASE: my-db #Tạo sẵn db my-db
            MYSQL_USER: devuser #User này sẽ được tạo và grant cho my-db, không để root vì user root mặc định có sẵn rồi.
            MYSQL_PASSWORD: devuser
        volumes: #Vì dữ liệu sẽ mất nếu stop container vì vậy phải backup data vào máy thật
            - ./db/data:/var/lib/mysql 
            - ./db/log:/var/log/mysql
```
Và nội dung của __Dockerfile__ như sau:
```bash
FROM php:7.3-apache
#https://hub.docker.com/_/php
LABEL maintainer="ChungTran<chungtran4078@gmail.com>"
RUN docker-php-ext-install pdo pdo_mysql mysqli
RUN cp "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
RUN apt-get update && apt-get install -y vim
```
#### ** Giải thích chút:
Cấu trúc file __docker-compose.yml__ của mình ở trên như sau:
```bash
version: '3.5'
services:
    php-apache:
        ...
    mysql:
        ...
```
- Mỗi container là một _service_, ở đây mình có 2 service có tên _php-apache_ và _mysql_ (tên này do mình tự đặt nha)

```bash
php-apache:
        build: .
```
Chỗ này là lý do có file __Dockerfile__ ở trên. Do mình muốn cài đặt thêm một số thành phần nên mình sẽ chạy service này với image build từ __Dockerfile__. 

Hiện tại file __Dockerfile__ đang ở cùng cấp với file __docker-compose.yml__ nên mình để `build: .` nha, nếu __Dockerfile__ nằm thư mục khác, VD _docker_ thì:
```bash
build:
    context: ./docker
```

***Lưu ý: __docker-compose.yml__ có version nha các bạn, ở VD trên mình đang dùng `version 3.5`, các version có thể khác nhau về một số cú pháp, chi tiết tại đây: https://docs.docker.com/compose/compose-file/compose-versioning/*

Ok xong xuôi, thực hiện `docker-composer up`, ta sẽ thấy các container lần lượt được start.

Bây giờ nếu nhấn Ctrl + C thì các container sẽ stop, trường hợp này sử dụng `docker-composer up -d` để chạy với chế độ nền.

##Testing
Vào thư mục *source*, tạo file *index.php*:
```php
<?php
$dbhost = $_ENV['DB_HOST'];;
$username = $_ENV['DB_USER'];
$password = $_ENV['DB_PWD'];
$dbname = $_ENV['DB_NAME'];
$port = $_ENV['DB_PORT'];

// Create connection
$conn = mysqli_connect($dbhost, $username, $password, $dbname, $port);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
```
Sau đó truy cập `localhost:8080` để xem kết quả.

Một số trường hợp có thể sẽ xảy ra lỗi `Call to undefined function mysqli_connect()` hoặc `Connection refused` hoặc `No such file or directory` thì kiểm tra lại file __php.ini__ trong `/usr/local/etc/php` nhé.
- Enable mysqli extension (extension=mysqli)
- Kiểm tra giá trị của `variables_order`, sửa lại thành "EGPCS". Đây là chuỗi ký tự đại diện cho các biến môi trường (http://php.net/variables-order)

### Thế Docker Compose thì liên quan gì PHP Composer?
CHẢ LIÊN QUAN.

Nhưng mục đích thì có phần giống nhau.
- php composer: cứ nhập tên package vào file `composer.json`, composer sẽ làm việc còn lại.
- docker compose:  cứ nhập tên service và image đi kèm vào file `docker-compose.yml`, docker compose sẽ làm việc còn lại.