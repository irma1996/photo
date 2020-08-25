-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 25 aug 2020 kl 16:31
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
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `albums`
--

INSERT INTO `albums` (`id`, `title`, `user_id`) VALUES
(23, 'oiu', 27),
(24, 'irm222', 28),
(25, 'album1', 29);

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
(4, 3),
(4, 3),
(4, 3),
(4, 3),
(4, 3),
(2, 3),
(2, 3),
(3, 3),
(1, 3),
(2, 3),
(1, 3),
(2, 3),
(3, 3),
(1, 3),
(4, 3),
(4, 3),
(4, 2),
(4, 3),
(4, 2),
(4, 2),
(3, 2),
(3, 2),
(5, 2),
(4, 2),
(4, 2),
(1, 2),
(4, 2),
(4, 2),
(8, 2),
(4, 2),
(4, 2),
(4, 2),
(4, 2),
(2, 2),
(1, 2),
(4, 2),
(4, 2),
(3, 2),
(4, 2),
(3, 2),
(3, 2),
(3, 2),
(4, 2),
(4, 2),
(4, 2),
(4, 2),
(4, 4),
(4, 2),
(4, 2),
(4, 4),
(4, 4),
(4, 3),
(4, 2),
(4, 3),
(4, 2),
(4, 4),
(4, 3),
(4, 2),
(4, 1),
(4, 1),
(4, 3),
(23, 38);

-- --------------------------------------------------------

--
-- Tabellstruktur `photos`
--

CREATE TABLE IF NOT EXISTS `photos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `photos`
--

INSERT INTO `photos` (`id`, `title`, `url`, `comment`, `user_id`) VALUES
(37, 'peld111', 'gyed', 'NSD', 28),
(38, 'peld24214124', 'gyed', 'NSD', 27),
(39, 'irma''s photo', 'no url', 'No comment', 28),
(40, 'Johan''s photo', 'No url', 'no comment', 29),
(41, 'Linda''s photo', 'no URL', 'No comment', 27);

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`) VALUES
(1, 'anna.svensson@hotmail.com', 'kallt', 'sommar', 'emma'),
(2, 'irma.mumic@hotmail.com', 'kallt', 'sommar', 'emma'),
(3, 'lisa.andersson@hotmail.com', 'fdsx', 'ndfr', 'kodj'),
(4, 'liss', 'fdsx', 'ndfr', 'kodj'),
(5, 'irma', '76af47488ac4ecce7c29005f15cf7d0e', 'irm', 'mum'),
(6, 'ken.svensson@hotmail.com', '$2b$10$ayLl6O3q4iLdDyC90B/L.ulaJPUzhD0BT4sljNzbPDpxeZs8WgH0e', 'ken', 'len '),
(7, 'lina.svensson@hotmail.com', '$2b$10$UOL.qsx.ro.vCiTaawgbw.5KZuJwbk3LjI4xXu/h3QYfC9zF/NmE6', 'pen', 'ten '),
(8, 'nina.svensson@hotmail.com', '$2b$10$hvpWUXuSzs3nYb1l8RXTGeFoxHQ3yZnp1HPfX8cmukWO5WOFE27/m', 'hej', 'hejdå '),
(9, 'gunnar.svensson@hotmail.com', '$2b$10$hOTi74LXXhFae0iNK2KF3.g/fnvJR4UzeVQlomwKXRzGKV1R9UKEO', 'hej', 'hejdå '),
(10, 'gunnarr.svensson@hotmail.com', '$2b$10$mONMyS2IazHJO5MM2oYYheLEDZw0amanN.lit1/Ahnxhf7UkigxC6', 'hej', 'hejdå '),
(11, 'selma.svensson@hotmail.com', '$2b$10$sNiadCNYHKfiL7AS.DzmZOWW9gV0Vn3PqDwDLmhP4miGgf1jEbDZG', 'sel', 'ten '),
(12, 'klaudia.svensson@hotmail.com', '$2b$10$wlqVhwoAyv1VNa1yLWQDLO81YWEkdSUV.ceuLaJNKvgJwjKfetOKS', 'gadde', 'kusse '),
(13, 'belma.mumic@hotmail.com', '$2b$10$fquofghnaEJaSEsA63wxF.1GPYwi26EekMAxjfymomaEBT5LWGJZm', 'blem', 'susic'),
(14, 'hej.mumic@hotmail.com', '$2b$10$aIK3hnC1yPgm5OUi1yiouuAGUrLfiVDDzvnUPjZk4j05KWPp6yWoO', 'hej', 'hej'),
(15, 'sol.gräs@hotmail.com', '$2b$10$f5.ikzD.t3CzBJqrZqPAteB2KyH2zAlW6vlpRHOnDwMr6eMZQYALa', 'kryp', 'gräs'),
(16, 'armin.svensson@hotmail.com', '$2b$10$EaGj3cxYpUPKeKveSQTpnuXIKCDeqrzuNF1Un1sYh11ydgGhSFe6e', 'armin', 'mumic '),
(17, 'gustav.lina@hotmail.com', '$2b$10$TmMDJFH337zSTkkkswBAtu5o6NPKsJVmIVvYkIEbmV45BiLJ6A7Tq', 'lina', 'sven '),
(18, 'alva.ten@hotmail.com', '$2b$10$e3JXGFiSm53HPFU4j7276.ZtV35zddJn.tXeNZZhTOI4TFlzq1mkG', 'alva', 'kend '),
(19, 'milop.ten@hotmail.com', '$2b$10$X7jcHPT8P7CxJQrP93HBb.JQuUPegwAel3YpExpAkRsYPfGKf2oz6', 'nirk', 'pre '),
(20, 'uyöp.ten@hotmail.com', '$2b$10$m2HraV05VcB6c50e6OTbsuHn10pey2fFPPq9bWugc7ItnJOlNpTJi', 'mnb', 'kre '),
(21, 'ztjk.ten@hotmail.com', '$2b$10$sRCVSJs9AgV2hBtGPTd3JuZH4cKCJ1lrfSYGgMKmRz2VXNpk.9lg6', 'dib', 'jkn '),
(22, 'msd.ten@hotmail.com', '$2b$10$XGPG5nrDigUvEEZi39bmQ.8a29m3EGmoaa9zkb/n9oMmoWOnRGdDO', 'ndk', 'heo '),
(23, 'mumic.ten@hotmail.com', '$2b$10$wGUkPpqo6AxEyE6oI4.bneEHE0eMIWWqwrhaxqGCbEckjHRDuiiki', 'mumi', 'mui '),
(24, 'lila.ten@hotmail.com', '$2b$10$2KJrF1nBZYSR0HkmLTsQBuc5cRmK2wFAlZ8EqIWweTaRM.v9q.iba', 'linda', 'lin '),
(25, 'irmaaa.mumic@hotmail.com', '$2b$10$QuVNZlRT3bUwqrb3eNHcqOXD.WRIlRn5uT3tm/ouD6lWDwZ1mk3y2', 'irmic', 'mumic '),
(26, 'irx.mux@hotmail.com', '$2b$10$t/zptmaTEvy/luS9mDZkW.y6YooVxusLGJA1rydIrbKkQC5Wl26.G', 'iic', 'mic '),
(27, 'linda', '$2b$10$JxwKRHmsM2Z4WKABn11f6.M5Y7frsVQJoN/tSxJQKWet5JHV0zY8.', 'dd', 'dd '),
(28, 'irma2', '$2b$10$8nvMxBvqm8qGSCyisPqvsuHsNR2xv7G8Yae/8Ta8BU1XLZZ5.Gz5W', 'irma', 'irma'),
(29, 'jn@badcameraphotography.com', '$2b$10$QFN3.27yO1ilGuS7s0fMCuB6B4lTdztOxqcGb57koBaeRnF.VeRHm', 'Johan', 'Nordström');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT för tabell `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=30;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
