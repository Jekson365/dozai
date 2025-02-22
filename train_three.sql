-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 28, 2025 at 01:09 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `train`
--

-- --------------------------------------------------------

--
-- Table structure for table `attributes`
--

CREATE TABLE `attributes` (
  `id` int(11) NOT NULL,
  `id_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attributes`
--

INSERT INTO `attributes` (`id`, `id_name`, `name`, `type`, `product_id`) VALUES
(4, 'Size', 'Size', 'text', 1),
(5, 'Size', 'Size', 'text', 3),
(6, 'Color', 'Color', 'swatch', 4),
(7, 'Color', 'Color', 'swatch', 5),
(8, 'Capacity', 'Capacity', 'text', 6),
(9, 'Capacity', 'Capacity', 'text', 7),
(10, 'Capacity', 'Capacity', 'text', 4),
(11, 'Capacity', 'Capacity', 'text', 5),
(12, 'With USB 3 ports', 'With USB 3 ports', 'text', 6),
(13, 'Touch ID in keyboard', 'Touch ID in keyboard', 'Touch ID in keyboard', 6),
(14, 'Color', 'Color', 'swatch', 7);

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `attributes` text DEFAULT NULL,
  `amount` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`id`, `product_id`, `attributes`, `amount`) VALUES
(31, 4, '[{\"__typename\":\"attribute\",\"name\":\"Color\",\"id_name\":\"Color\",\"type\":\"swatch\",\"items\":[{\"__typename\":\"Item\",\"id\":18,\"value\":\"#44FF03\",\"display_value\":\"Green\",\"id_name\":\"Green\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":19,\"value\":\"#03FFF7\",\"display_value\":\"Cyan\",\"id_name\":\"Cyan\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":20,\"value\":\"#030BFF\",\"display_value\":\"Blue\",\"id_name\":\"Blue\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":21,\"value\":\"#000000\",\"display_value\":\"Black\",\"id_name\":\"Black\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":22,\"value\":\"#FFFFFF\",\"display_value\":\"White\",\"id_name\":\"White\",\"isSelected\":false}]}]', 3),
(32, 6, '[{\"__typename\":\"attribute\",\"name\":\"Capacity\",\"id_name\":\"Capacity\",\"type\":\"text\",\"items\":[{\"__typename\":\"Item\",\"id\":28,\"value\":\"256GB\",\"display_value\":\"256GB\",\"id_name\":\"256GB\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":29,\"value\":\"512GB\",\"display_value\":\"512GB\",\"id_name\":\"512GB\",\"isSelected\":false}]}]', 3),
(33, 7, '[{\"__typename\":\"attribute\",\"name\":\"Capacity\",\"id_name\":\"Capacity\",\"type\":\"text\",\"items\":[{\"__typename\":\"Item\",\"id\":30,\"value\":\"256GB\",\"display_value\":\"256GB\",\"id_name\":\"256GB\",\"isSelected\":true},{\"__typename\":\"Item\",\"id\":31,\"value\":\"512GB\",\"display_value\":\"512GB\",\"id_name\":\"512GB\",\"isSelected\":false}]}]', 3),
(34, 7, '[{\"__typename\":\"attribute\",\"name\":\"Capacity\",\"id_name\":\"Capacity\",\"type\":\"text\",\"items\":[{\"__typename\":\"Item\",\"id\":30,\"value\":\"256GB\",\"display_value\":\"256GB\",\"id_name\":\"256GB\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":31,\"value\":\"512GB\",\"display_value\":\"512GB\",\"id_name\":\"512GB\",\"isSelected\":true}]}]', 1),
(35, 1, '[{\"__typename\":\"attribute\",\"name\":\"Size\",\"id_name\":\"Size\",\"type\":\"text\",\"items\":[{\"__typename\":\"Item\",\"id\":10,\"value\":\"S\",\"display_value\":\"Small\",\"id_name\":\"Small\",\"isSelected\":true},{\"__typename\":\"Item\",\"id\":11,\"value\":\"M\",\"display_value\":\"Medium\",\"id_name\":\"Medium\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":12,\"value\":\"L\",\"display_value\":\"Large\",\"id_name\":\"Large\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":13,\"value\":\"XL\",\"display_value\":\"Extra Large\",\"id_name\":\"Extra Large\",\"isSelected\":false}]}]', 1),
(36, 1, '[{\"__typename\":\"attribute\",\"name\":\"Size\",\"id_name\":\"Size\",\"type\":\"text\",\"items\":[{\"__typename\":\"Item\",\"id\":10,\"value\":\"S\",\"display_value\":\"Small\",\"id_name\":\"Small\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":11,\"value\":\"M\",\"display_value\":\"Medium\",\"id_name\":\"Medium\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":12,\"value\":\"L\",\"display_value\":\"Large\",\"id_name\":\"Large\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":13,\"value\":\"XL\",\"display_value\":\"Extra Large\",\"id_name\":\"Extra Large\",\"isSelected\":true}]}]', 1),
(37, 3, '[{\"__typename\":\"attribute\",\"name\":\"Size\",\"id_name\":\"Size\",\"type\":\"text\",\"items\":[{\"__typename\":\"Item\",\"id\":14,\"value\":\"S\",\"display_value\":\"Small\",\"id_name\":\"Small\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":15,\"value\":\"M\",\"display_value\":\"Medium\",\"id_name\":\"Medium\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":16,\"value\":\"L\",\"display_value\":\"Large\",\"id_name\":\"Large\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":17,\"value\":\"XL\",\"display_value\":\"Extra Large\",\"id_name\":\"Extra Large\",\"isSelected\":false}]}]', 4),
(38, 6, '[{\"__typename\":\"attribute\",\"name\":\"Capacity\",\"id_name\":\"Capacity\",\"type\":\"text\",\"items\":[{\"__typename\":\"Item\",\"id\":28,\"value\":\"256GB\",\"display_value\":\"256GB\",\"id_name\":\"256GB\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":29,\"value\":\"512GB\",\"display_value\":\"512GB\",\"id_name\":\"512GB\",\"isSelected\":false}]}]', 1),
(39, 4, '[{\"__typename\":\"attribute\",\"name\":\"Color\",\"id_name\":\"Color\",\"type\":\"swatch\",\"items\":[{\"__typename\":\"Item\",\"id\":18,\"value\":\"#44FF03\",\"display_value\":\"Green\",\"id_name\":\"Green\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":19,\"value\":\"#03FFF7\",\"display_value\":\"Cyan\",\"id_name\":\"Cyan\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":20,\"value\":\"#030BFF\",\"display_value\":\"Blue\",\"id_name\":\"Blue\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":21,\"value\":\"#000000\",\"display_value\":\"Black\",\"id_name\":\"Black\",\"isSelected\":false},{\"__typename\":\"Item\",\"id\":22,\"value\":\"#FFFFFF\",\"display_value\":\"White\",\"id_name\":\"White\",\"isSelected\":false}]}]', 3),
(40, 9, '[]', 1),
(41, 7, '[{\"__typename\":\"attribute\",\"name\":\"Capacity\",\"id_name\":\"Capacity\",\"type\":\"text\",\"items\":[{\"__typename\":\"Item\",\"id\":30,\"value\":\"256GB\",\"display_value\":\"256GB\",\"id_name\":\"256GB\",\"isSelected\":true},{\"__typename\":\"Item\",\"id\":31,\"value\":\"512GB\",\"display_value\":\"512GB\",\"id_name\":\"512GB\",\"isSelected\":false}]}]', 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'all'),
(2, 'tech'),
(3, 'clothes');

-- --------------------------------------------------------

--
-- Table structure for table `currencies`
--

CREATE TABLE `currencies` (
  `id` int(11) NOT NULL,
  `label` varchar(100) DEFAULT NULL,
  `symbol` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `currencies`
--

INSERT INTO `currencies` (`id`, `label`, `symbol`) VALUES
(1, 'USD', '$');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `path` varchar(255) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`path`, `product_id`, `id`) VALUES
('https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087', 1, 1),
('https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087', 1, 2),
('https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087', 1, 5),
('https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087', 1, 6),
('https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087', 1, 7),
('https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087', 1, 8),
('https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087', 1, 9),
('https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg', 3, 10),
('https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg', 3, 11),
('https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg', 3, 12),
('https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg', 3, 13),
('https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg', 3, 14),
('https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png', 3, 15),
('https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png', 3, 16),
('https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg', 4, 17),
('https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg', 4, 18),
('https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg', 4, 19),
('https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg', 4, 20),
('https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg', 4, 21),
('https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg', 5, 22),
('https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg', 5, 23),
('https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg', 5, 24),
('https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg', 5, 25),
('https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg', 5, 26),
('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000', 6, 27),
('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000', 7, 28),
('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000', 8, 29),
('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000', 9, 30),
('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000', 9, 31);

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `id_name` varchar(255) DEFAULT NULL,
  `display_value` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `attribute_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `id_name`, `display_value`, `value`, `attribute_id`) VALUES
(10, '40', '40', '40', 4),
(11, '41', '41', '41', 4),
(12, '42', '42', '42', 4),
(13, '43', '43', '43', 4),
(14, 'Small', 'Small', 'S', 5),
(15, 'Medium', 'Medium', 'M', 5),
(16, 'Large', 'Large', 'L', 5),
(17, 'Extra Large', 'Extra Large', 'XL', 5),
(18, 'Green', 'Green', '#44FF03', 6),
(19, 'Cyan', 'Cyan', '#03FFF7', 6),
(20, 'Blue', 'Blue', '#030BFF', 6),
(21, 'Black', 'Black', '#000000', 6),
(22, 'White', 'White', '#FFFFFF', 6),
(23, 'Green', 'Green', '#44FF03', 7),
(24, 'Cyan', 'Cyan', '#03FFF7', 7),
(25, 'Blue', 'Blue', '#030BFF', 7),
(26, 'Black', 'Black', '#000000', 7),
(27, 'White', 'White', '#FFFFFF', 7),
(28, '256G', '256G', '256G', 8),
(29, '512G', '512G', '512G', 8),
(30, '256G', '256G', '256G', 9),
(31, '512G', '512G', '512G', 9),
(32, '512G', '512G', '512G', 10),
(33, '1T', '1T', '1T', 10),
(34, '512G', '512G', '512G', 11),
(35, '1T', '1T', '1T', 11),
(36, 'Yes', 'Yes', 'Yes', 12),
(37, 'No', 'No', 'No', 12),
(38, 'Yes', 'Yes', 'Yes', 13),
(39, 'No', 'No', 'No', 13),
(40, 'Green', 'Green', '#44FF03', 14),
(41, 'Cyan', 'Cyan', '#03FFF7', 14),
(42, 'Blue', 'Blue', '#030BFF', 14),
(43, 'Black', 'Black', '#000000', 14),
(44, 'White', 'White', '#FFFFFF', 14);

-- --------------------------------------------------------

--
-- Table structure for table `prices`
--

CREATE TABLE `prices` (
  `id` int(255) NOT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `currency_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prices`
--

INSERT INTO `prices` (`id`, `amount`, `currency_id`) VALUES
(1, 144.69, 1),
(3, 844.02, 1),
(4, 55.00, 1),
(5, 333.99, 1),
(6, 1688.03, 1),
(7, 1000.76, 1),
(8, 300.23, 1),
(9, 120.57, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `price_id` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `inStock` tinyint(1) NOT NULL,
  `id_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category_id`, `price_id`, `brand`, `description`, `inStock`, `id_name`) VALUES
(1, 'Nike Air Huarache Le', 3, 1, 'Nike x Stuss', '<p>Great sneakers for everyday use!</p>\"', 1, 'huarache-x-stussy-le'),
(3, 'Jacket', 3, 3, 'Canada Goose', '<p>Awesome winter jacket</p>', 1, 'jacket-canada-goosee'),
(4, 'PlayStation 5', 2, 3, 'Sony', '<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>', 1, 'ps-5'),
(5, 'Xbox Series S 512GB', 2, 5, 'Microsoft', '<div><ul><li><span>Hardware-beschleunigtes Raytracing macht dein Spiel noch realistischer</span></li><li><span>Spiele Games mit bis zu 120 Bilder pro Sekunde</span></li><li><span>Minimiere Ladezeiten mit einer speziell entwickelten 512GB NVMe SSD und wechsle mit Quick Resume nahtlos zwischen mehreren Spielen.</span></li><li><span>Xbox Smart Delivery stellt sicher, dass du die beste Version deines Spiels spielst, egal, auf welcher Konsole du spielst</span></li><li><span>Spiele deine Xbox One-Spiele auf deiner Xbox Series S weiter. Deine Fortschritte, Erfolge und Freundesliste werden automatisch auf das neue System übertragen.</span></li><li><span>Erwecke deine Spiele und Filme mit innovativem 3D Raumklang zum Leben</span></li><li><span>Der brandneue Xbox Wireless Controller zeichnet sich durch höchste Präzision, eine neue Share-Taste und verbesserte Ergonomie aus</span></li><li><span>Ultra-niedrige Latenz verbessert die Reaktionszeit von Controller zum Fernseher</span></li><li><span>Verwende dein Xbox One-Gaming-Zubehör -einschließlich Controller, Headsets und mehr</span></li><li><span>Erweitere deinen Speicher mit der Seagate 1 TB-Erweiterungskarte für Xbox Series X (separat erhältlich) und streame 4K-Videos von Disney+, Netflix, Amazon, Microsoft Movies &amp; TV und mehr</span></li></ul></div>', 0, 'xbox-series-s'),
(6, 'iMac 2021', 2, 6, 'Apple', 'The new iMac!', 1, 'apple-imac-2021'),
(7, 'iphone-12-pro', 2, 7, 'Apple', 'This is iPhone 12. Nothing else to say.', 1, 'apple-iphone-12-pro'),
(8, 'AirPods Pro', 2, 8, 'Apple', '\\n<h3>Magic like you’ve never heard</h3>\\n<p>AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings, and a customizable fit for all-day comfort. Just like AirPods, AirPods Pro connect magically to your iPhone or Apple Watch. And they’re ready to use right out of the case.\\n\\n<h3>Active Noise Cancellation</h3>\\n<p>Incredibly light noise-cancelling headphones, AirPods Pro block out your environment so you can focus on what you’re listening to. AirPods Pro use two microphones, an outward-facing microphone and an inward-facing microphone, to create superior noise cancellation. By continuously adapting to the geometry of your ear and the fit of the ear tips, Active Noise Cancellation silences the world to keep you fully tuned in to your music, podcasts, and calls.\\n\\n<h3>Transparency mode</h3>\\n<p>Switch to Transparency mode and AirPods Pro let the outside sound in, allowing you to hear and connect to your surroundings. Outward- and inward-facing microphones enable AirPods Pro to undo the sound-isolating effect of the silicone tips so things sound and feel natural, like when you’re talking to people around you.</p>\\n\\n<h3>All-new design</h3>\\n<p>AirPods Pro offer a more customizable fit with three sizes of flexible silicone tips to choose from. With an internal taper, they conform to the shape of your ear, securing your AirPods Pro in place and creating an exceptional seal for superior noise cancellation.</p>\\n\\n<h3>Amazing audio quality</h3>\\n<p>A custom-built high-excursion, low-distortion driver delivers powerful bass. A superefficient high dynamic range amplifier produces pure, incredibly clear sound while also extending battery life. And Adaptive EQ automatically tunes music to suit the shape of your ear for a rich, consistent listening experience.</p>\\n\\n<h3>Even more magical</h3>\\n<p>The Apple-designed H1 chip delivers incredibly low audio latency. A force sensor on the stem makes it easy to control music and calls and switch between Active Noise Cancellation and Transparency mode. Announce Messages with Siri gives you the option to have Siri read your messages through your AirPods. And with Audio Sharing, you and a friend can share the same audio stream on two sets of AirPods — so you can play a game, watch a movie, or listen to a song together.</p>\\n', 0, 'apple-airpods-pro'),
(9, 'AirTag', 2, 9, 'Apple', '\\n<h1>Lose your knack for losing things.</h1>\\n<p>AirTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack. And just like that, they’re on your radar in the Find My app. AirTag has your back.</p>\\n', 1, 'apple-airtag');

-- --------------------------------------------------------

--
-- Table structure for table `product_prices`
--

CREATE TABLE `product_prices` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `price_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_prices`
--

INSERT INTO `product_prices` (`id`, `product_id`, `price_id`) VALUES
(1, 1, 1),
(2, 3, 3),
(4, 5, 5),
(5, 6, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attribute_id` (`attribute_id`);

--
-- Indexes for table `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `currency_id` (`currency_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_products_category` (`category_id`),
  ADD KEY `price_id` (`price_id`);

--
-- Indexes for table `product_prices`
--
ALTER TABLE `product_prices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `price_id` (`price_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attributes`
--
ALTER TABLE `attributes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `currencies`
--
ALTER TABLE `currencies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `prices`
--
ALTER TABLE `prices`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `product_prices`
--
ALTER TABLE `product_prices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attributes`
--
ALTER TABLE `attributes`
  ADD CONSTRAINT `attributes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `gallery`
--
ALTER TABLE `gallery`
  ADD CONSTRAINT `gallery_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`attribute_id`) REFERENCES `attributes` (`id`);

--
-- Constraints for table `prices`
--
ALTER TABLE `prices`
  ADD CONSTRAINT `prices_ibfk_1` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_products_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product_prices`
--
ALTER TABLE `product_prices`
  ADD CONSTRAINT `product_prices_ibfk_1` FOREIGN KEY (`price_id`) REFERENCES `prices` (`id`),
  ADD CONSTRAINT `product_prices_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
