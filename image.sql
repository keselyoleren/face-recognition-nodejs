-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 20 Nov 2018 pada 19.19
-- Versi Server: 5.7.24-0ubuntu0.16.04.1
-- PHP Version: 7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `neuravision`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `dataset_id` int(123) NOT NULL,
  `file_path` varchar(123) NOT NULL,
  `file_name` varchar(123) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `image`
--

INSERT INTO `image` (`id`, `dataset_id`, `file_path`, `file_name`) VALUES
(175, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/34.jpg', '34.jpg'),
(176, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/33.jpg', '33.jpg'),
(177, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/49.jpg', '49.jpg'),
(178, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/50.jpg', '50.jpg'),
(179, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/37.jpg', '37.jpg'),
(180, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/36.jpg', '36.jpg'),
(181, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/35.jpg', '35.jpg'),
(182, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/34.jpg', '34.jpg'),
(183, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/32.jpg', '32.jpg'),
(184, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/33.jpg', '33.jpg'),
(185, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/41.jpg', '41.jpg'),
(186, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/40.jpg', '40.jpg'),
(187, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/46.jpg', '46.jpg'),
(188, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/45.jpg', '45.jpg'),
(189, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/41.jpg', '41.jpg'),
(190, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/42.jpg', '42.jpg'),
(191, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/40.jpg', '40.jpg'),
(192, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/39.jpg', '39.jpg'),
(193, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/37.jpg', '37.jpg'),
(194, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/38.jpg', '38.jpg'),
(195, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/36.jpg', '36.jpg'),
(196, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/35.jpg', '35.jpg'),
(197, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/35.jpg', '35.jpg'),
(198, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/34.jpg', '34.jpg'),
(199, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/41.jpg', '41.jpg'),
(200, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/40.jpg', '40.jpg'),
(201, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/39.jpg', '39.jpg'),
(202, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/37.jpg', '37.jpg'),
(203, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/36.jpg', '36.jpg'),
(204, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/34.jpg', '34.jpg'),
(205, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/35.jpg', '35.jpg'),
(206, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/32.jpg', '32.jpg'),
(207, 1, '/home/neurabot/keselyoleren/node/neuravision/public/images/33.jpg', '33.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=208;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
