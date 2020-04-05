---
title: Tạo dữ liệu mẫu với Yii 2 Faker
date: 2018-01-04
category: Yii2
tags: 
- Yii2 Extension
---
Trong [Yii2 core extension](https://www.yiiframework.com/doc/guide/2.0/en/structure-extensions#core-extensions) có hỗ trợ sẵn phần mở rộng `Yii 2 Faker` hỗ trợ cho việc tạo dữ liệu mẫu dựa trên cấu trúc do ta định nghĩa sẵn.

## Cài đặt
```bash
composer require yiisoft/yii2-faker
```

<!--more-->

Hoặc thêm dòng sau vào `composer.json`:
```json
"yiisoft/yii2-faker": "~2.0.0"
```
## Cách dùng
Ở đây mình thực hiện trên **Yii 2 Advanced**, **Yii 2 Basic** cũng tương tự nhé.

- Mở file `console/config/main.php` và config cho `controllerMap` như sau:

```php
return [
    'controllerMap' => [
        'fixture' => [
            'class' => 'yii\faker\FixtureController',
            'templatePath' => '@common/tests/templates/fixtures', // thư mục chứa template để định nghĩa cấu trúc dữ liệu
            'fixtureDataPath' => '@common/tests/fixtures/data', // file data sẽ được xuất ra ở đây
        ],
    ],
];
```

- Tạo file template:

VD mình tạo template dữ liệu cho bảng **User** như sau:
```php
// tạo file user.php nằm trong thư mục @common/tests/templates/fixtures
/**
 * @var $faker \Faker\Generator
 * @var $index integer
 */
return [
    'name' => $faker->firstName,
    'phone' => $faker->phoneNumber,
    'city' => $faker->city,
    'password' => Yii::$app->getSecurity()->generatePasswordHash('password_' . $index),
    'auth_key' => Yii::$app->getSecurity()->generateRandomString(),
    'intro' => $faker->sentence(7, true),  // generate a sentence with 7 words
];
```

- Thực hiện chạy command sau để xuất ra data mẫu:

```bash
// câu lệnh này sẽ xuất ra mặc định 2 record
php yii fixture/generate user

// câu lệnh này sẽ xuất ra 5 record với ngôn ngữ Tiếng Việt
php yii fixture/generate user --count=5 --language="vi_VN"
```
Kiểm tra thư mục `common/tests/fixtures/data` sẽ thấy file `user.php` được tạo cùng với mảng chứa data bên trong.
## Custom dữ liệu
Trong nhiều trường hợp có thể các hàm viết sẵn của Faker có thể đáp ứng nhu cầu của chúng ta, tuy nhiên khi cần những dữ liệu đặc biệt thì phải làm thế nào?.

VD mình cần xuất ra dữ liệu mẫu của số điện thoại phải có mã quốc gia +84 ở phía trước, lúc này chúng ta phải viết hàm riêng cho nó.

 - Tạo class `Custom.php` trong thư mục `common/tests/unit/faker/providers/`
 
 ```php
class Custom extends \Faker\Provider\Base
{
    public function phoneVN()
    {
        return '+84' . rand(1610000000,1699999999); //mình viết đơn giản thôi nhé
    }
}
```

- Thêm config `providers` như sau:

```php
return [
    'controllerMap' => [
        'fixture' => [
            'class' => 'yii\faker\FixtureController',
            'templatePath' => '@common/tests/templates/fixtures', // thư mục chứa template để định nghĩa cấu trúc dữ liệu
            'fixtureDataPath' => '@common/tests/fixtures/data', // file data sẽ được xuất ra ở đây
            'providers' => [
                'common\tests\unit\faker\providers\Custom',
            ],
        ],
    ],
];
```

- Chạy lại command `php yii fixture/generate user` để xuất ra data.