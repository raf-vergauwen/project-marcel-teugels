CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_role` varchar(255),
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `created_at` timestamp,
  `phone_number` int,
  `street_name` varchar(255),
  `house_number` varchar(255),
  `postal_code` int,
  `city_name` varchar(255),
  `order_id` int
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
  `created_at` timestamp,
  `total_price` decimal,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email` varchar(255),
  `phone_number` int,
  `street_name` varchar(255),
  `house_number` varchar(255),
  `postal_code` int,
  `city_name` varchar(255),
  `notes` text,
  `code` varchar(255),
  `shipping_price` decimal,
  `tracking_code` varchar(255),
  `order_confirmation` boolean,
  `payment_confirmation` boolean
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY,
  `status` varchar(255),
  `created_at` timestamp,
  `name` varchar(255),
  `description` text,
  `price` decimal,
  `size` decimal,
  `weight` decimal,
  `quantity_in_stock` int,
  `rating` int,
  `product_comments` int,
  `tags` int,
  `images` int
);

CREATE TABLE `blogposts` (
  `id` int PRIMARY KEY,
  `title` varchar(255),
  `text_content` text,
  `is_admin` boolean,
  `comment_id` int,
  `images` int
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
  `tags` int,
  `text_content` text
);

CREATE TABLE `tags` (
  `id` int PRIMARY KEY,
  `name` varchar(255),
  `description` varchar(255)
);

CREATE TABLE `workshops` (
  `id` int PRIMARY KEY,
  `status` varchar(255),
  `datum` datetime,
  `title` varchar(255),
  `organiser` varchar(255),
  `subject` varchar(255),
  `text_content` text,
  `images` int
);

ALTER TABLE `ordered_items` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `ordered_items` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`id`) REFERENCES `users` (`order_id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `blog_comments` (`user_id`);

ALTER TABLE `blogposts` ADD FOREIGN KEY (`id`) REFERENCES `blog_comments` (`blogpost_id`);

ALTER TABLE `blog_comments` ADD FOREIGN KEY (`id`) REFERENCES `blogposts` (`comment_id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `product_comments` (`user_id`);

ALTER TABLE `products` ADD FOREIGN KEY (`id`) REFERENCES `product_comments` (`product_id`);

ALTER TABLE `product_comments` ADD FOREIGN KEY (`id`) REFERENCES `products` (`product_comments`);

ALTER TABLE `blogposts` ADD FOREIGN KEY (`is_admin`) REFERENCES `users` (`user_role`);

ALTER TABLE `user_request` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `tags` ADD FOREIGN KEY (`id`) REFERENCES `products` (`tags`);

ALTER TABLE `tags` ADD FOREIGN KEY (`id`) REFERENCES `user_request` (`tags`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `orders` (`user_id`);
