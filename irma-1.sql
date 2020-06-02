-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 02 jun 2020 kl 18:20
-- Serverversion: 5.6.37
-- PHP-version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `irma`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `albums`
--

CREATE TABLE IF NOT EXISTS `albums` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `photo_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `albums`
--

INSERT INTO `albums` (`id`, `title`, `photo_id`, `user_id`) VALUES
(1, 'abba', 1, 4),
(2, 'Lady Gaga', 2, 3),
(3, 'michael jackson', 3, 2),
(4, 'rasta', 4, 1),
(5, 'iii', 10, 2),
(6, 'irma', 11, 2),
(7, 'irma', 13, 2),
(8, 'irm', 13, 2);

-- --------------------------------------------------------

--
-- Tabellstruktur `albums_photos`
--

CREATE TABLE IF NOT EXISTS `albums_photos` (
  `album_id` int(11) NOT NULL,
  `photo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `albums_photos`
--

INSERT INTO `albums_photos` (`album_id`, `photo_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(5, 2),
(2, 2),
(2, 3),
(2, 3),
(3, 3),
(4, 3),
(4, 3),
(4, 3),
(4, 3);

-- --------------------------------------------------------

--
-- Tabellstruktur `albums_users`
--

CREATE TABLE IF NOT EXISTS `albums_users` (
  `album_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `albums_users`
--

INSERT INTO `albums_users` (`album_id`, `user_id`) VALUES
(2, 11),
(1, 13),
(4, 13),
(2, 14),
(3, 14),
(4, 14);

-- --------------------------------------------------------

--
-- Tabellstruktur `photos`
--

CREATE TABLE IF NOT EXISTS `photos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `album_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `photos`
--

INSERT INTO `photos` (`id`, `title`, `url`, `comment`, `album_id`, `user_id`) VALUES
(1, 'sommar', 'väder.nu', 'varmt', 1, 1),
(2, 'vinter', 'vinter.se', 'kallt', 1, 2),
(3, 'vår', 'vår.se', 'kyligt ', 2, 3),
(4, 'höst', 'höst.se', 'mysigt', 1, 3),
(5, 'asdasdr', 'asdasd', 'kallt', 10, 2),
(6, 'wasdr', 'aqqasd', 'kssllt', 10, 2),
(7, 'iii', 'iii', 'hhh', 10, 2),
(8, 'hej', 'hejdå', 'koda', 12, 2),
(9, 'hej', 'och', 'ät', 13, 2),
(10, 'hej', 'och', 'ät', 13, 2),
(11, 'kas', 'och', 'ät', 13, 2),
(12, 'kas', 'och', 'ät', 13, 2),
(13, 'kas', 'ocE', 'Öt', 13, 2);

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`, `username`) VALUES
(1, 'anna.svensson@hotmail.com', '1db28221f66be290cb28d82ebe4a072a', 'hej', 'sommar ', 'sven'),
(2, 'irma.mumic@hotmail.com', 'apa', 'irma', 'mumic', 'magnus'),
(3, 'lisa.andersson@hotmail.com', 'sommar', 'sommar', 'andersson', 'mats'),
(4, 'liss', 'sallad', 'sallad', 'sallad ', 'svensson'),
(5, 'irma', '76af47488ac4ecce7c29005f15cf7d0e', 'irm', 'mum', 'hello'),
(6, 'ken.svensson@hotmail.com', '$2b$10$ayLl6O3q4iLdDyC90B/L.ulaJPUzhD0BT4sljNzbPDpxeZs8WgH0e', 'ken', 'len ', 'ken'),
(7, 'lina.svensson@hotmail.com', '$2b$10$UOL.qsx.ro.vCiTaawgbw.5KZuJwbk3LjI4xXu/h3QYfC9zF/NmE6', 'pen', 'ten ', 'len'),
(8, 'nina.svensson@hotmail.com', '$2b$10$hvpWUXuSzs3nYb1l8RXTGeFoxHQ3yZnp1HPfX8cmukWO5WOFE27/m', 'hej', 'hejdå ', 'nina'),
(9, 'gunnar.svensson@hotmail.com', '$2b$10$hOTi74LXXhFae0iNK2KF3.g/fnvJR4UzeVQlomwKXRzGKV1R9UKEO', 'hej', 'hejdå ', 'gunnar'),
(10, 'gunnarr.svensson@hotmail.com', '$2b$10$mONMyS2IazHJO5MM2oYYheLEDZw0amanN.lit1/Ahnxhf7UkigxC6', 'hej', 'hejdå ', 'gunnarr'),
(11, 'selma.svensson@hotmail.com', '$2b$10$sNiadCNYHKfiL7AS.DzmZOWW9gV0Vn3PqDwDLmhP4miGgf1jEbDZG', 'sel', 'ten ', 'selma'),
(12, 'klaudia.svensson@hotmail.com', '$2b$10$wlqVhwoAyv1VNa1yLWQDLO81YWEkdSUV.ceuLaJNKvgJwjKfetOKS', 'gadde', 'kusse ', 'ol'),
(13, 'belma.mumic@hotmail.com', '$2b$10$fquofghnaEJaSEsA63wxF.1GPYwi26EekMAxjfymomaEBT5LWGJZm', 'blem', 'susic', 'belma'),
(14, 'hej.mumic@hotmail.com', '$2b$10$aIK3hnC1yPgm5OUi1yiouuAGUrLfiVDDzvnUPjZk4j05KWPp6yWoO', 'hej', 'hej', 'hej'),
(15, 'sol.gräs@hotmail.com', '$2b$10$f5.ikzD.t3CzBJqrZqPAteB2KyH2zAlW6vlpRHOnDwMr6eMZQYALa', 'kryp', 'gräs', 'blomma'),
(16, 'armin.svensson@hotmail.com', '$2b$10$EaGj3cxYpUPKeKveSQTpnuXIKCDeqrzuNF1Un1sYh11ydgGhSFe6e', 'armin', 'mumic ', 'armin');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT för tabell `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
