---
title: 'Docker cho bé - P1: Hello Docker!'
date: 2019-04-20
category: Docker
tags:
- linux
- docker
- development tools
series: docker-cho-be
---
>Chào bé L...à nhầm chào các bé, dạo này các em đã dùng Docker chưa tar..tar..tar..tar...

Sau một thời gian mày mò, mân mê thằng Docker thì mình quyết định viết vài bài về cách sử dụng để chia sẻ cùng mọi người. 

Có thể bạn thừa biết, Docker được sử dụng trong nhiều hệ thống lớn, có cấu hình phức tạp. Tuy vậy do kiến thức hạn chế và bám sát trọng tâm là để ai cũng có thể hiểu và sử dụng được nên mình sẽ hướng dẫn Docker ở mức cơ bản.
![Docker cho bé](docker.png)

## Docker ra đời như thế nào?
Như ta đã biết, trước đây 1 máy chủ vật lý chỉ cài được 1 OS và để chạy một hệ thống nhiều service trên nhiều máy chủ ta sẽ phải sử dụng nhiều máy vật lý. Như vậy sẽ tốn kém tiền bạc và lãng phí tài nguyên vì có những service sẽ không tận dụng hết RAM, ổ cứng, CPU của máy chủ đó.

Giống như mua máy có cấu hình khủng chỉ để chơi pikachu hay lướt facebook vậy.

### Công nghệ ảo hóa Vitualization
Sau khi có sự xuất hiện của công nghệ ảo hóa Vitualization thì ta có thể cài nhiều OS trên 1 máy vật lý thông qua VMware, Vitualbox, Vagrant...

Bây giờ đã giải quyết được bài toán __chạy nhiều máy ảo trên một máy chủ vật lý__ tuy nhiên cũng còn những nhược điểm của công nghệ ảo hóa này:

- Khi sử dụng VMware, Vitualbox để chạy máy ảo thì chúng ta phải cung cấp 1 phần ổ ứng, RAM, CPU từ máy thật cho chúng. Mỗi máy ảo là 1 máy độc lập hoàn toàn.

>VD mẹ có 1 nồi cơm, và phải chia cho 3 người con mỗi người 2 bát trong khi 3 người con thì có người không ăn, có người thì chỉ ăn hết 1 bát, lại có người ăn hết 2 bát vẫn chưa no.

Như vậy là tài nguyên được sử dụng không tối ưu.

- Thời gian khởi động và tắt 1 máy ảo cũng diễn ra rất lâu, có thể mất lên tới vài phút để khởi động 1 máy ảo.

### Công nghệ Containerlization
Công nghệ này giống với công nghệ ảo hóa Vitualization là ta có thể tạo nhiều máy con trên 1 máy vật lý, nhưng đã khắc phục được những nhược điểm của công nghệ nói trên:
- Các máy con nay không độc lập hoàn toàn mà đều dùng chung OS KERNEL với máy mẹ và chia sẻ với nhau tài nguyên máy vật lý.

>VD mẹ có 1 nồi cơm và có 3 người con thì ai ăn từng nào thì lấy từng đấy bát cơm, ai không ăn thì thôi để người khác ăn.

Như vậy việc quản lý sử dụng tài nguyên các máy đã tối ưu rồi, dùng bao nhiêu RAM thì lấy bấy nhiêu thôi, chứ đâu như ai kia xin tới 4G RAM xong dùng có 2GB.

- Thời gian khởi động và tắt nay chỉ tính bằng giây thôi =))

À còn 1 điều nữa là 1 __máy ảo__ trên __Vitualization__ nay là 1 __container__ trên __Containerlization__. 

## Một số khái niệm chính
- __Docker image__: tương tự file ghost của Windows vậy. Trong file ghost của Windows có thể chứa sẵn Word, Chrome, Unikey... thì image của Docker cũng có thể chứa sẵn php, mysql, git... 

Có thể tải các image có sẵn do cộng đồng chia sẻ từ [Docker hub](https://hub.docker.com)
- __Docker container__: như mình có đề cập bên trên, container tương tự như máy ảo. Container được khởi tạo từ image. Container có thể là container Windows (dành cho Windows Server) hoặc container Linux (dành Linux Server).
- __Dockerfile__: là 1 file text, chứa các cấu hình của một image. Nếu bạn không muốn sử dụng các image có sẵn từ Docker hub thì bạn cũng có thể build cho riêng mình 1 image bằng Dockerfile. Chi tiết mình sẽ nói ở phần sau.

![Dockerfile](Dockerfile.png)
- __Docker compose__: thay vì cài đặt tất cả service (mysql, php, redis...) lên 1 container thì chúng ta có thể sử dụng __docker-compose__ để chạy mỗi service trên mỗi container và kết nối các container lại với nhau. Giống như một hệ thống thực tế vậy. Chi tiết mình sẽ nói ở phần sau. 

## Cài đặt
Docker hỗ trợ bao gồm Linux, Windows và Mac việc cài đặt đơn giản nên mình không nói ở đây nữa ha.

Có thể download ở đây [Docker install](https://docs.docker.com/install/)

## Một số câu lệnh cơ bản
```bash
# Pull một image từ Docker Hub
docker pull image_name

# Liệt kê các images hiện có
docker images

# Xóa một image
docker rmi image_id/image_name

# Khởi tạo 1 container
# Docker sẽ tự động pull image về và khởi tạo container nếu image đó chưa tồn tại trên máy (image chưa được pull)
docker run image_name

# Khởi tạo và chạy 1 container cùng với các option:
docker run -d -v <forder_in_computer>:<forder_in_container> -p <port_in_computer>:<port_in_container> -it <image_name> bash

# Chạy 1 container
docker start container_name/container_id

# Dừng 1 container
docker stop container_name/container_id

# Truy cập vào container đang chạy
docker exec -it container_name/container_id bash

# Liệt kê các container đang chạy
docker ps

# Liệt kê các container đã tắt
docker ps -a: 

# Xóa 1 container
docker rm -f container_name/container_id 
```

Các câu lệnh này sang phần sau sử dụng mình sẽ nói rõ hơn.

Chắc hôm nào mình cũng sẽ viết một bài dành riêng về các câu lệnh hay ho của Docker để mọi người khi sử dụng đỡ phải mất công kiếm.