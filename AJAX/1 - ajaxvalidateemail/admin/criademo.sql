-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2010 at 08:22 PM
-- Server version: 5.1.32
-- PHP Version: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `criademo`
--

-- --------------------------------------------------------

--
-- Table structure for table `adresboek`
--

CREATE TABLE IF NOT EXISTS `adresboek` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `phonenumber` varchar(11) NOT NULL,
  `photourl` varchar(255) DEFAULT NULL,
  `emailaddress` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `adresboek`
--

INSERT INTO `adresboek` (`id`, `name`, `phonenumber`, `photourl`, `emailaddress`) VALUES
(1, 'Rody Middelkoop', '06-23883276', 'http://media03.linkedin.com/mpr/mpr/shrink_80_80/p/1/000/001/0a8/33014fa.jpg', 'rody.middelkoop@han.nl'),
(2, 'Sander Leer', '06-12345678', 'http://media.linkedin.com/mpr/mpr/shrink_80_80/p/2/000/013/285/0c79107.jpg', 'sander.leer@han.nl');
