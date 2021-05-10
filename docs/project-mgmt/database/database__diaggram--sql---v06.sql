CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `password` varchar(255),
  `created_at` timestamp,
  `birthday` date,
  `email` varchar(255),
  `address` varchar(255),
  `phone_number` int,
  `region` int,
  `order_id` int,
  `is_admin` boolean,
  `discount_code` int
);

CREATE TABLE `regions` (
  `id` int PRIMARY KEY,
  `country_name` varchar(255),
  `province_name` varchar(255),
  `continent_name` varchar(255)
);

CREATE TABLE `ordered_items` (
  `order_id` int,
  `product_id` int,
  `quantity` int DEFAULT 1,
  `total price` decimal
);

CREATE TABLE `orders` (
  `id` int PRIMARY KEY,
  `user_id` int UNIQUE NOT NULL,
  `status` varchar(255),
  `created_at` timestamp COMMENT 'When order created',
  `total` decimal,
  `notes` varchar(255)
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY,
  `name` varchar(255),
  `tag_id` int,
  `price` decimal,
  `size` decimal,
  `weight` decimal,
  `status` ENUM ('out_of_stock', 'in_stock', 'running_low'),
  `created_at` datetime DEFAULT (now()),
  `quantity_in_stock` int,
  `rating` int,
  `comment_id` int,
  `image` int
);

CREATE TABLE `blogposts` (
  `id` int PRIMARY KEY,
  `title` varchar(255),
  `text_content` varchar(255),
  `is_admin` boolean,
  `comment_id` int,
  `image` int
);

CREATE TABLE `blog_comments` (
  `id` int PRIMARY KEY,
  `user_id` int,
  `blogpost_id` int,
  `created_at` timestamp,
  `text_content` varchar(255)
);

CREATE TABLE `product_comments` (
  `id` int PRIMARY KEY,
  `user_id` int,
  `product_id` int,
  `created_at` timestamp,
  `text_content` varchar(255)
);

CREATE TABLE `user_request` (
  `id` int PRIMARY KEY,
  `user_id` int,
  `created_at` timestamp,
  `tag_id` int,
  `text_content` varchar(255)
);

CREATE TABLE `tags` (
  `id` int PRIMARY KEY,
  `name` varchar(255),
  `description` varchar(255)
);

CREATE TABLE `discounts` (
  `id` int PRIMARY KEY,
  `type` varchar(255),
  `user_id` int,
  `start_date` timestamp,
  `end_date` timestamp
);

ALTER TABLE `users` ADD FOREIGN KEY (`region`) REFERENCES `regions` (`id`);

ALTER TABLE `ordered_items` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `ordered_items` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`id`) REFERENCES `users` (`order_id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `blog_comments` (`user_id`);

ALTER TABLE `blogposts` ADD FOREIGN KEY (`id`) REFERENCES `blog_comments` (`blogpost_id`);

ALTER TABLE `blog_comments` ADD FOREIGN KEY (`id`) REFERENCES `blogposts` (`comment_id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `product_comments` (`user_id`);

ALTER TABLE `products` ADD FOREIGN KEY (`id`) REFERENCES `product_comments` (`product_id`);

ALTER TABLE `product_comments` ADD FOREIGN KEY (`id`) REFERENCES `products` (`comment_id`);

ALTER TABLE `blogposts` ADD FOREIGN KEY (`is_admin`) REFERENCES `users` (`is_admin`);

ALTER TABLE `user_request` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `tags` ADD FOREIGN KEY (`id`) REFERENCES `products` (`tag_id`);

ALTER TABLE `tags` ADD FOREIGN KEY (`id`) REFERENCES `user_request` (`tag_id`);

ALTER TABLE `discounts` ADD FOREIGN KEY (`id`) REFERENCES `users` (`discount_code`);

ALTER TABLE `discounts` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `orders` (`user_id`);
