DROP DATABASE IF EXISTS `domiyi_dbp` ;

CREATE DATABASE IF NOT EXISTS `domiyi_dbp`;
USE `domiyi_dbp` ;

-- -----------------------------------------------------
-- Table `domiyi_dbp`.`companyStatus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`companyStatus` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`companyStatus` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`company`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`company` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`company` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idStatus` INT NOT NULL,
  `idAdmin` INT NOT NULL,
  `name` VARCHAR(80) NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `deliveryCost` DOUBLE NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_company_table11`
    FOREIGN KEY (`idStatus`)
    REFERENCES `domiyi_dbp`.`companyStatus` (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`paymentMethod`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`paymentMethod` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`paymentMethod` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `paymentMethod` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`transactionStatus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`transactionStatus` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`transactionStatus` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`transaction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`transaction` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`transaction` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idStatus` INT NOT NULL,
  `paymentMethod` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_transaction_paymentMethod1`
    FOREIGN KEY (`paymentMethod`)
    REFERENCES `domiyi_dbp`.`paymentMethod` (`id`),
  CONSTRAINT `fk_transaction_transactionStatus1`
    FOREIGN KEY (`idStatus`)
    REFERENCES `domiyi_dbp`.`transactionStatus` (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`orderStatus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`orderStatus` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`orderStatus` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`user` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(15) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(15) NOT NULL,
  `phone` VARCHAR(15) NOT NULL,
  `address` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));


CREATE UNIQUE INDEX `username_UNIQUE` ON `domiyi_dbp`.`user` (`username`);

CREATE UNIQUE INDEX `email_UNIQUE` ON `domiyi_dbp`.`user` (`email`);

-- -----------------------------------------------------
-- Table `domiyi_dbp`.`orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`orders` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`orders` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idStatus` INT NOT NULL,
  `idCompany` BIGINT(20) NOT NULL,
  `idUser` INT NOT NULL,
  `idTransaction` BIGINT(20) NOT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `address` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_company`
    FOREIGN KEY (`idCompany`)
    REFERENCES `domiyi_dbp`.`company` (`id`),
  CONSTRAINT `fk_transaction`
    FOREIGN KEY (`idTransaction`)
    REFERENCES `domiyi_dbp`.`transaction` (`id`),
  CONSTRAINT `fk_orders_orderStatus1`
    FOREIGN KEY (`idStatus`)
    REFERENCES `domiyi_dbp`.`orderStatus` (`id`),
  CONSTRAINT `fk_orders_user1`
    FOREIGN KEY (`idUser`)
    REFERENCES `domiyi_dbp`.`user` (`id`));


CREATE UNIQUE INDEX `idTransaction_UNIQUE` ON `domiyi_dbp`.`orders` (`idTransaction`);

-- -----------------------------------------------------
-- Table `domiyi_dbp`.`productStatus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`productStatus` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`productStatus` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`productCategory`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`productCategory` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`productCategory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`product` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`product` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idCompany` BIGINT(20) NOT NULL,
  `idStatus` BIGINT(20) NOT NULL,
  `idCategory` INT NOT NULL,
  `name` VARCHAR(40) NOT NULL,
  `description` VARCHAR(200) NULL DEFAULT NULL,
  `price` DOUBLE NOT NULL,
  `image` VARCHAR(120) NOT NULL,
  `updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_companies`
    FOREIGN KEY (`idCompany`)
    REFERENCES `domiyi_dbp`.`company` (`id`),
  CONSTRAINT `fk_pro_status`
    FOREIGN KEY (`idStatus`)
    REFERENCES `domiyi_dbp`.`productStatus` (`id`),
  CONSTRAINT `fk_product_productCategory1`
    FOREIGN KEY (`idCategory`)
    REFERENCES `domiyi_dbp`.`productCategory` (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`store`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`store` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`store` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idCompany` BIGINT(20) NOT NULL,
  `name` VARCHAR(70) NOT NULL,
  `address` VARCHAR(30) NOT NULL,
  `phone` VARCHAR(11) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `openHour` INT NOT NULL,
  `closeHour` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_to_company`
    FOREIGN KEY (`idCompany`)
    REFERENCES `domiyi_dbp`.`company` (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`typeOffer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`typeOffer` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`typeOffer` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`offer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`offer` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`offer` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `value` DOUBLE NOT NULL,
  `idType` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_offer_typeOffer1`
    FOREIGN KEY (`idType`)
    REFERENCES `domiyi_dbp`.`typeOffer` (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`ProductOfferStatus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`ProductOfferStatus` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`ProductOfferStatus` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `domiyi_dbp`.`productOffer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`productOffer` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`productOffer` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idProduct` BIGINT(20) NOT NULL,
  `idOffer` BIGINT(20) NOT NULL,
  `idStatus` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`, `idProduct`, `idOffer`),
  CONSTRAINT `fk_offer_has_product_offer1`
    FOREIGN KEY (`idOffer`)
    REFERENCES `domiyi_dbp`.`offer` (`id`),
  CONSTRAINT `fk_offer_has_product_product1`
    FOREIGN KEY (`idProduct`)
    REFERENCES `domiyi_dbp`.`product` (`id`),
  CONSTRAINT `fk_productOffer_ProductOfferStatus1`
    FOREIGN KEY (`idStatus`)
    REFERENCES `domiyi_dbp`.`ProductOfferStatus` (`id`));


CREATE UNIQUE INDEX `idProduct_UNIQUE` ON `domiyi_dbp`.`productOffer` (`idProduct`);

CREATE UNIQUE INDEX `idOffer_UNIQUE` ON `domiyi_dbp`.`productOffer` (`idOffer`);



-- -----------------------------------------------------
-- Table `domiyi_dbp`.`detail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `domiyi_dbp`.`detail` ;

CREATE TABLE IF NOT EXISTS `domiyi_dbp`.`detail` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idOrder` BIGINT(20) NOT NULL,
  `idProductOffer` BIGINT(20) NOT NULL,
  `quantity` INT NOT NULL,
  `observation` VARCHAR(200) NULL,
  `unitPrice` DOUBLE NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_detail_orders1`
    FOREIGN KEY (`idOrder`)
    REFERENCES `domiyi_dbp`.`orders` (`id`),
  CONSTRAINT `fk_detail_productOffer1`
    FOREIGN KEY (`idProductOffer`)
    REFERENCES `domiyi_dbp`.`productOffer` (`id`));

-------------------------------Queries
INSERT INTO `productcategory` (`id`, `category`) VALUES (NULL, 'ALIMENTOS'), (NULL, 'LICORES');
INSERT INTO `companystatus` (`id`, `status`) VALUES (NULL, 'DISPONIBLE'), (NULL, 'CERRADA');
INSERT INTO `orderstatus` (`id`, `status`) VALUES (NULL, 'EN PROGRESO'), (NULL, 'CANCELADA');
INSERT INTO `transactionstatus` (`id`, `status`) VALUES (NULL, 'EXITOSA'), (NULL, 'CANCELADA');
INSERT INTO `typeoffer` (`id`, `type`) VALUES (NULL, 'DESCUENTO');
INSERT INTO `productstatus` (`id`, `status`) VALUES (NULL, 'DISPONIBLE'), (NULL, 'AGOTADO');