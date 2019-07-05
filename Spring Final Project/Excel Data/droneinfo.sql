-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2016 at 10:35 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `prodigydatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `droneinfo`
--

CREATE TABLE IF NOT EXISTS `droneinfo` (
  `Name` varchar(90) NOT NULL,
  `Cost` decimal(10,0) NOT NULL,
  `Speed` int(11) NOT NULL,
  `Weight` int(11) NOT NULL,
  `Classification` varchar(90) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `droneinfo`
--

INSERT INTO `droneinfo` (`Name`, `Cost`, `Speed`, `Weight`, `Classification`) VALUES
('Phantom', '1400', 45, 1380, 'Civilian'),
('Inspire', '3100', 49, 2935, 'Civilian'),
('Matrice 600', '3100', 40, 15110, 'Civilian'),
('Matrice 100', '3300', 49, 3600, 'Civilian'),
('MQ-9 Reaper', '13000000', 300, 3200000, 'Military'),
('MQ-1 Predator', '4003000', 135, 1020000, 'Military');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
