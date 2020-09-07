
DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookingName` varchar(100) DEFAULT NULL,
  `workerName` varchar(40) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `startTime` int(11) DEFAULT NULL,
  `endTime` int(11) DEFAULT NULL,
  `booked` boolean DEFAULT false,
  PRIMARY KEY (`id`)
);

INSERT INTO `booking` VALUES (1,'Scuba Test','Jono','Geelong','2020-08-25','1599475583 ','1599475583 ',false);