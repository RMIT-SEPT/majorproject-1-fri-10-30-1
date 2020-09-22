CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `startTime` int(11) DEFAULT NULL,
  `endTime` int(11) DEFAULT NULL,

  PRIMARY KEY (`id`)
);

INSERT INTO `employees` VALUES (1,'steve',"steve",'Western Australia','1599475583 ','1599475583 ');