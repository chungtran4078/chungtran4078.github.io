---
title: 4 nguyên tắc cơ bản trong lập trình mà LTV nào cũng phải biết
date: 2020-04-23
category: Code
image: image.png
tags:
- clean code
---
Lý do mình viết bài này xuất phát từ câu chuyện của bản thân.
Hồi mới ra trường, khi phỏng vấn ở công ty X, nhờ nắm 4 nguyên tắc này mà mình đã khiến buổi phỏng vấn kết thúc chỉ trong 15 phút, các anh interviewer thì gật gà gật gù vì kiến thức uyên bác của mình.

Vậy là mình vào làm công ty X với mức lương khởi điểm 2 số.
Sang đầu năm thứ 2 tái ký hợp đồng mình được tăng gấp đôi lương.
6 tháng sau mình lại được lên làm Leader và được tăng 30% lương.
3 năm trôi qua và giờ mình cũng đã có 1 năm kinh nghiệm làm Manager rồi đấy.

Tôi sẽ có được 1000$ mỗi tháng vào năm 2016. Tôi xứng đáng đạt được điều đó, vì tôi bất chấp tất cả, bất chấp khó khăn.
- Bạn T, sinh viên năm nhất trường ĐH Hoa Sen chia sẻ.

Vậy bạn muốn được như mình thăng hoa trong sự nghiệp hay như bạn T không cần làm gì vẫn có thu nhập ngàn đô? Hãy nắm 4 nguyên tắc này nhé!

###1. DRY - 
>DRY: Don't Repeat Yourself
Ví dụ bạn có 1 đoạn code thực hiện request tới API của Vietcombank để lấy tỉ giá đô la. Và thế là cứ ở đâu cần lấy tỉ giá đô la bạn lại copy đoạn code đó paste vào. 
Cho đến 1 ngày đẹp trời VCB thông báo thay đổi API sang địa chỉ mới, bạn phải đi tìm những chỗ này để cập nhật cho nó với vẻ mặt nhăn như mắc ỉa và miệng thì liên tục chửi thề VCB.

Có thể thấy nếu bạn viết đoạn code này thành 1 function thì có lẽ bạn sẽ chỉ cần 1 nốt nhạc để cập nhật lại thông tin API.
###2. YAGNI
>YAGNI: You Aren't Gonna Need It
- Tại sao "Tôi không cần nó"?
- Tại vì xóa nó chương trình của bạn vẫn chạy, còn thêm nó vào cũng không làm chương trình của bạn chạy nhanh hơn.

Hãy tập trung vào những tính năng cốt lõi của sản phẩm, tập trung vào requirement của khách hàng. Đừng lãng phí thời gian vào những tính năng mà bạn "tưởng tượng" ra. Nó chỉ làm rút ngắn deadline và tạo thêm bug mà thôi.
###3. KISS
>KISS: Keep It Short & Simple
Nguyên tắc này có ý nghĩa trong thiết kế, và cái tên rất rõ ràng như ý nghĩa của nó: Giữ nó ngắn gọn và đơn giản thôi.
- Đừng gói tất cả trong 1 hệ thống, hãy chia nó ra thành nhiều hệ thống nhỏ.
- Đừng gói tất cả các phần của chương trình trong 1 folder, hãy chia nó thành MVC chẳng hạn.
- Đừng viết function dài 1k line rồi đem đi khoe, hãy chia nó thành nhiều function con.
- Đừng viết interface với số lượng function nhiều như số tập của phim Ấn Độ, hãy chia nó thành nhiều interface.
- ...vân vân mây mây


Vâng, hy vọng sau câu chuyện mình vừa bịa ra sẽ giúp các bạn có niềm tin, động lực hơn trong cuộc sống.

