/*
SQLyog Ultimate v10.00 Beta1
MySQL - 5.5.27 : Database - pms_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`pms_db` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `pms_db`;

/*Table structure for table `project_details` */

DROP TABLE IF EXISTS `project_details`;

CREATE TABLE `project_details` (
  `record-id` int(25) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  `scrum-master` varchar(25) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `team-members` int(25) NOT NULL,
  PRIMARY KEY (`record-id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `project_details` */

insert  into `project_details`(`record-id`,`name`,`scrum-master`,`description`,`team-members`) values (1,'Project#1-Name','Project#1-Scrum-Master-Na','Project#1-Description',25),(2,'Project#2-Name','Project#2-Scrum-Master-Na','Project#2-Description',5),(3,'Project#3-Name','Project#3-Scrum-Master-Na','Project#3-Description',20);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
