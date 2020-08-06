CREATE DATABASE  IF NOT EXISTS `pkcopywriting` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pkcopywriting`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: pkcopywriting
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `idkat` int(11) NOT NULL AUTO_INCREMENT,
  `namakategori` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idkat`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'branding'),(2,'marketing');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catproduct`
--

DROP TABLE IF EXISTS `catproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catproduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproduct` int(11) DEFAULT NULL,
  `idcategory` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catproduct`
--

LOCK TABLES `catproduct` WRITE;
/*!40000 ALTER TABLE `catproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `catproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `galeri`
--

DROP TABLE IF EXISTS `galeri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `galeri` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `foto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galeri`
--

LOCK TABLES `galeri` WRITE;
/*!40000 ALTER TABLE `galeri` DISABLE KEYS */;
/*!40000 ALTER TABLE `galeri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paketbelajar`
--

DROP TABLE IF EXISTS `paketbelajar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paketbelajar` (
  `idpak` int(11) NOT NULL AUTO_INCREMENT,
  `namapaket` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idpak`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paketbelajar`
--

LOCK TABLES `paketbelajar` WRITE;
/*!40000 ALTER TABLE `paketbelajar` DISABLE KEYS */;
INSERT INTO `paketbelajar` VALUES (1,'gratis'),(2,'standar'),(3,'premium');
/*!40000 ALTER TABLE `paketbelajar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `judul` varchar(45) DEFAULT NULL,
  `idkategori` varchar(45) DEFAULT NULL,
  `deskripsi` varchar(500) DEFAULT NULL,
  `cover` varchar(45) DEFAULT NULL,
  `bab` varchar(45) DEFAULT NULL,
  `materi` varchar(45) DEFAULT NULL,
  `materi1` varchar(45) DEFAULT NULL,
  `materi2` varchar(45) DEFAULT NULL,
  `materi3` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (31,'Sosial Media Management','2','gatau','/product/images/KELAS1590923787983.png','Tips Jitu','https://www.youtube.com/embed/bo_efYhYU2A',NULL,NULL,NULL),(39,'Digital Marketing Hacks','2','heyoo','/product/images/KELAS1585562309683.png','Materi #8','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(42,'Branding For Business','1','wayulu','/product/images/KELAS1584979417387.png','apaya','https://youtu.be/g-6K9cmrJ2M',NULL,NULL,NULL),(46,'Affiliate Marketing','2','Affiliate Marketing with SEO and Copywriting','/product/images/KELAS1584979989860.png','Advance SEO','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(48,'Build an Authentic Brand','1','The Business Branding Strategy That Empowers Your Brand To Connect With Personality On A Human Level','/product/images/KELAS1585364787359.png','Brand','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(50,'Learn How to Stand Out','1','Branding & Marketing Insights: Learn Top Brand Design Strategies To Build Physical Product Brand & Grow Your Business.','/product/images/KELAS1585561761331.jpg','Brand Strategy','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(51,'Create Content That Sells','2','Branding & Marketing Insights: Learn Top Brand Design Strategies To Build Physical Product Brand & Grow Your Business.','/product/images/KELAS1585365898709.png','Marketing Essential','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(52,'Write to Sell Like a Pro','1','Branding & Marketing Insights: Learn Top Brand Design Strategies To Build Physical Product Brand & Grow Your Business.','/product/images/KELAS1585366027847.png','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(53,'Personal Branding Path','1','Branding & Marketing Insights: Learn Top Brand Design Strategies To Build Physical Product Brand & Grow Your Business.','/product/images/KELAS1585368740360.png','Case Study','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(54,'How to Improve Your Image','1','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585497350859.jpg','Introduction','https://www.youtube.com/embed/CbU0FPlYzU8',NULL,NULL,NULL),(55,'Copywriting Write Papers','2','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585542476150.jpg','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(56,'Powerful Website Copywriting','2','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585542548781.png','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(58,'Copywriting Freelance','2','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585542675553.jpg','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(59,'Best Ad Campaign','2','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585543255736.jpg','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(60,'Pro Secrets To Success','2','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585543302150.gif','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(61,'E-commerce Branding','1','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585543566188.jpg','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(62,'Visualisasi Data','1','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585543612082.jpg','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(63,'Strategi Startup Sukses','2','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585543688899.png','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(64,'Develop a Success Brand','1','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585543775445.jpg','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(65,'Retail and Merchandising','2','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585543825480.png','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(66,'Marketing Master Class','2','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585543876745.jpg','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(67,'Powerful Brand Design','1','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585543945264.jpg','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(68,'Unique Brand Identity','1','Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.','/product/images/KELAS1585544007901.jpg','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL),(70,'Web and Mobile','1','jc11','/product/images/KELAS1585560556907.png','Introduction','https://www.youtube.com/embed/gVVhHjyC04k',NULL,NULL,NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rolename` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaksi`
--

DROP TABLE IF EXISTS `transaksi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaksi` (
  `idtransaksi` int(11) NOT NULL AUTO_INCREMENT,
  `tglmulai` varchar(45) DEFAULT NULL,
  `tglberakhir` varchar(45) DEFAULT NULL,
  `idpaket` varchar(45) DEFAULT NULL,
  `bukti` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `iduser` int(15) DEFAULT NULL,
  PRIMARY KEY (`idtransaksi`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaksi`
--

LOCK TABLES `transaksi` WRITE;
/*!40000 ALTER TABLE `transaksi` DISABLE KEYS */;
INSERT INTO `transaksi` VALUES (13,'March 29, 2020','April 29, 2020','2','/transaksi/images/BUKTI1585479554922.jpg','approved',66),(14,'March 29, 2020','April 29, 2020','2','/transaksi/images/BUKTI1585486638871.png','approved',69),(15,'March 29, 2020','April 29, 2020','3','/transaksi/images/BUKTI1585491351046.jpg','approved',71),(16,'March 29, 2020','April 29, 2020','2','/transaksi/images/BUKTI1585492545533.jpg','approved',70),(17,'March 30, 2020','April 30, 2020','3','/transaksi/images/BUKTI1585540163397.jpg','approved',67),(18,'March 30, 2020','April 30, 2020','3','/transaksi/images/BUKTI1585551787811.jpg','approved',72),(19,'March 30, 2020','April 30, 2020','2','/transaksi/images/BUKTI1585552648977.jpg','approved',73),(20,'March 30, 2020','April 30, 2020','3','/transaksi/images/BUKTI1585554935248.jpg','approved',74),(21,'March 30, 2020','April 30, 2020','2','/transaksi/images/BUKTI1585560172998.jpg','approved',75),(22,'March 30, 2020','April 30, 2020','2','/transaksi/images/BUKTI1585560816044.jpg','approved',75),(23,'April 4, 2020','May 4, 2020','3','/transaksi/images/BUKTI1585993534395.jpg','approved',76),(24,'2020-04-19T14:08:45.904Z',NULL,'3','/transaksi/images/BUKTI1587305325951.jpg','declined',77),(25,'June 23, 2020','July 23, 2020','2','/transaksi/images/BUKTI1592903854048.png','approved',78);
/*!40000 ALTER TABLE `transaksi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `roleid` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `idpaketbljr` int(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (38,'admin','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','1','unverified',NULL),(66,'rere','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','verified',2),(67,'aya','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','verified',2),(68,'midala','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','unverified',1),(69,'joya','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','verified',2),(70,'huera','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','verified',2),(71,'huenya','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','unverified',2),(72,'almayra','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','unverified',2),(73,'zamy','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','unverified',1),(74,'kartika','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','unverified',2),(75,'theo','thedevmango@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','verified',2),(76,'ean','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','verified',2),(77,'ais','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','unverified',1),(78,'ayaaa','almayra123@gmail.com','c8dff171bd5efdf11c794ec1d5892722e47058900dec05a4a6d61d0729d1e6ae','2','unverified',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-06 12:01:28
