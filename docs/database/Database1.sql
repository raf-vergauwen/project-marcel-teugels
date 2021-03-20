CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `created_at` timestamp,
  `email` varchar(255),
  `adress` varchar(255),
  `region` int,
  `order_id` int
);

CREATE TABLE `regions` (
  `code` int PRIMARY KEY,
  `country_name` varchar(255),
  `province_name` varchar(255),
  `continent_name` varchar(255)
);

CREATE TABLE `order_items` (
  `order_id` int,
  `product_id` int,
  `quantity` int DEFAULT 1
);

CREATE TABLE `orders` (
  `id` int PRIMARY KEY,
  `user_id` int UNIQUE NOT NULL,
  `status` varchar(255),
  `created_at` varchar(255) COMMENT 'When order created',
  `total` int
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY,
  `name` varchar(255),
  `price` int,
  `status` ENUM ('out_of_stock', 'in_stock', 'running_low'),
  `created_at` datetime DEFAULT (now())
);

ALTER TABLE `users` ADD FOREIGN KEY (`region`) REFERENCES `regions` (`code`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`id`) REFERENCES `users` (`id`);
