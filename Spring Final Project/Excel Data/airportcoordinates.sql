-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2016 at 02:02 AM
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
-- Table structure for table `airportcoordinates`
--

CREATE TABLE IF NOT EXISTS `airportcoordinates` (
  `Airport` text NOT NULL,
  `Latitude` double NOT NULL,
  `Longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `airportcoordinates`
--

INSERT INTO `airportcoordinates` (`Airport`, `Latitude`, `Longitude`) VALUES
('LaGuardia Airport', 40.7769, -73.874),
('John F. Kennedy International Airport', 40.6413, -73.7781),
('Teterboro Airport', 40.849, -74.063),
('Logan International Airport', 42.3656, -71.0096),
('Ronald Reagan Washington National Airport', 38.8512, -77.0402),
('Potomac Airfield', 38.7486, -76.9558),
('Los Anggeles International Airport', 33.9416, -118.4085),
('LA/Ontario International Airport', 34.056, -117.5981);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
