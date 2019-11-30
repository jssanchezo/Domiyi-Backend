DROP DATABASE IF EXISTS `bqgr2cirsykagvh6xt6c` ;

CREATE DATABASE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`;
USE `bqgr2cirsykagvh6xt6c` ;

-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`companyStatus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`companyStatus` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`companyStatus` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`company`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`company` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`company` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idStatus` INT NOT NULL,
  `idAdmin` INT NOT NULL,
  `name` VARCHAR(80) NOT NULL,
  `image` VARCHAR(350) NOT NULL,
  `deliveryCost` DOUBLE NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_company_companyStatus1`
    FOREIGN KEY (`idStatus`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`companyStatus` (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`paymentMethod`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`paymentMethod` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`paymentMethod` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `paymentMethod` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`transactionStatus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`transactionStatus` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`transactionStatus` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`transaction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`transaction` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`transaction` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idStatus` INT NOT NULL,
  `paymentMethod` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_transaction_paymentMethod1`
    FOREIGN KEY (`paymentMethod`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`paymentMethod` (`id`),
  CONSTRAINT `fk_transaction_transactionStatus1`
    FOREIGN KEY (`idStatus`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`transactionStatus` (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`orderStatus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`orderStatus` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`orderStatus` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`user` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(15) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(15) NOT NULL,
  `phone` VARCHAR(15) NOT NULL,
  `address` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));


CREATE UNIQUE INDEX `username_UNIQUE` ON `bqgr2cirsykagvh6xt6c`.`user` (`username`);

CREATE UNIQUE INDEX `email_UNIQUE` ON `bqgr2cirsykagvh6xt6c`.`user` (`email`);

-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`orders`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`order` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`order` (

  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idStatus` INT NOT NULL,
  `idCompany` BIGINT(20) NOT NULL,
  `idUser` INT NOT NULL,
  `idTransaction` BIGINT(20) ,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `address` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_company`
    FOREIGN KEY (`idCompany`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`company` (`id`),
  CONSTRAINT `fk_transaction`
    FOREIGN KEY (`idTransaction`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`transaction` (`id`),
  CONSTRAINT `fk_orders_orderStatus1`
    FOREIGN KEY (`idStatus`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`orderStatus` (`id`),
  CONSTRAINT `fk_orders_user1`
    FOREIGN KEY (`idUser`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`user` (`id`));



CREATE UNIQUE INDEX `idTransaction_UNIQUE` ON `bqgr2cirsykagvh6xt6c`.`order` (`idTransaction`);


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`productStatus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`productStatus` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`productStatus` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`productCategory`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`productCategory` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`productCategory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(20) NOT NULL,
  `linkimg` VARCHAR(350),
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`product` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`product` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idCompany` BIGINT(20) NOT NULL,
  `idStatus` BIGINT(20) NOT NULL,
  `idCategory` INT NOT NULL,
  `name` VARCHAR(40) NOT NULL,
  `description` VARCHAR(200) NULL DEFAULT NULL,
  `price` DOUBLE NOT NULL,
  `image` VARCHAR(350) NOT NULL,
  `updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_companies`
    FOREIGN KEY (`idCompany`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`company` (`id`),
  CONSTRAINT `fk_pro_status`
    FOREIGN KEY (`idStatus`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`productStatus` (`id`),
  CONSTRAINT `fk_product_productCategory1`
    FOREIGN KEY (`idCategory`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`productCategory` (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`store`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`store` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`store` (
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
    REFERENCES `bqgr2cirsykagvh6xt6c`.`company` (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`typeOffer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`typeOffer` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`typeOffer` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`offer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`offer` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`offer` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `value` DOUBLE NOT NULL,
  `idType` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_offer_typeOffer1`
    FOREIGN KEY (`idType`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`typeOffer` (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`ProductOfferStatus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`ProductOfferStatus` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`ProductOfferStatus` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`productOffer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`productOffer` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`productOffer` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idProduct` BIGINT(20) NOT NULL,
  `idOffer` BIGINT(20) NOT NULL,
  `idStatus` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`, `idProduct`, `idOffer`),
  CONSTRAINT `fk_offer_has_product_offer1`
    FOREIGN KEY (`idOffer`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`offer` (`id`),
  CONSTRAINT `fk_offer_has_product_product1`
    FOREIGN KEY (`idProduct`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`product` (`id`),
  CONSTRAINT `fk_productOffer_ProductOfferStatus1`
    FOREIGN KEY (`idStatus`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`ProductOfferStatus` (`id`));



ALTER TABLE `bqgr2cirsykagvh6xt6c`.`productOffer` ADD UNIQUE `unique_index`(`idProduct`, `idOffer`);





-- -----------------------------------------------------
-- Table `bqgr2cirsykagvh6xt6c`.`detail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bqgr2cirsykagvh6xt6c`.`detail` ;

CREATE TABLE IF NOT EXISTS `bqgr2cirsykagvh6xt6c`.`detail` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `idOrder` BIGINT(20) NOT NULL,
  `idProductOffer` BIGINT(20) NOT NULL,
  `quantity` INT NOT NULL,
  `observation` VARCHAR(200) NULL,
  `unitPrice` DOUBLE NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_detail_orders1`
    FOREIGN KEY (`idOrder`)

    REFERENCES `bqgr2cirsykagvh6xt6c`.`order` (`id`),
  CONSTRAINT `fk_detail_productOffer1`
    FOREIGN KEY (`idProductOffer`)
    REFERENCES `bqgr2cirsykagvh6xt6c`.`productOffer` (`id`));


-- -----------------------------------------------------
-- Queries
-- -----------------------------------------------------

INSERT INTO `bqgr2cirsykagvh6xt6c`.`productCategory` (`id`, `category`, `linkimg`) VALUES (NULL, 'ALIMENTOS',NULL), (NULL, 'LICORES',NULL);
INSERT INTO `bqgr2cirsykagvh6xt6c`.`companyStatus` (`id`, `status`) VALUES (NULL, 'DISPONIBLE'), (NULL, 'CERRADA');
INSERT INTO `bqgr2cirsykagvh6xt6c`.`orderStatus` (`id`, `status`) VALUES (NULL, 'EN PROGRESO'), (NULL, 'CANCELADA');
INSERT INTO `bqgr2cirsykagvh6xt6c`.`transactionStatus` (`id`, `status`) VALUES (NULL, 'EXITOSA'), (NULL, 'CANCELADA');
INSERT INTO `bqgr2cirsykagvh6xt6c`.`typeOffer` (`id`, `type`) VALUES (NULL, 'DESCUENTO');
INSERT INTO `bqgr2cirsykagvh6xt6c`.`productStatus` (`id`, `status`) VALUES (NULL, 'DISPONIBLE'), (NULL, 'AGOTADO');
INSERT INTO `bqgr2cirsykagvh6xt6c`.`ProductOfferStatus` (`id`, `status`) VALUES (NULL, 'VIGENTE');
INSERT INTO `bqgr2cirsykagvh6xt6c`.`offer` (`id`, `value`, `idType`) VALUES (NULL, '0', '1');
INSERT INTO `bqgr2cirsykagvh6xt6c`.`user` (`id`, `name`, `username`, `email`, `password`, `phone`, `address`) VALUES (NULL, 'Andres Sanchez', 'afsanchezsa', 'afsanchezsa@unal.edu.co', '1234', '3005557777', 'cra 15 a 45 b 67');
INSERT INTO `bqgr2cirsykagvh6xt6c`.`company` (`id`, `idStatus`, `idAdmin`, `name`, `image`, `deliveryCost`) VALUES (NULL, '1', '1', 'Domiyi', 'https://desayunostony.com/images/servicio-a-domicilio-01.jpg', '2000');
INSERT INTO `bqgr2cirsykagvh6xt6c`.`order` (`id`, `idStatus`, `idCompany`, `idUser`, `idTransaction`, `date`, `address`) VALUES (NULL, '1', '1', '1', NULL, current_timestamp(), 'cra 15 a 45 b 67');
CREATE or replace VIEW productAndDetails AS SELECT
d.id,
pro.id as pro_id,
pro.name,
pro.description,
pro.price,
pro.image,
pro.updated,
p.idOffer,
d.quantity,
d.observation,
d.unitPrice,
d.idOrder

FROM `bqgr2cirsykagvh6xt6c`.`productOffer` p INNER JOIN `bqgr2cirsykagvh6xt6c`.`detail` d on p.id = d.idProductOffer inner join `bqgr2cirsykagvh6xt6c`.`product` pro on pro.id = p.idProduct
;



CREATE or replace VIEW companyByCategory AS SELECT
pro.id,
pro.idCompany,
pro.idCategory,
com.name,
com.image
FROM `bqgr2cirsykagvh6xt6c`.`product` pro
INNER JOIN `bqgr2cirsykagvh6xt6c`.`company` com ON pro.idCompany = com.id;


CREATE or replace VIEW ordersByCompany AS SELECT
c.id as idCompany,
c.idAdmin,
d.idOrder,
prod.name,
d.quantity,
d.observation,
d.unitPrice,
o.address,
o.date,
oS.status
FROM `bqgr2cirsykagvh6xt6c`.`order` o INNER JOIN `bqgr2cirsykagvh6xt6c`.`company` c on o.idCompany = c.id inner join
`bqgr2cirsykagvh6xt6c`.`detail` d on o.id = d.idOrder inner join
`bqgr2cirsykagvh6xt6c`.`productOffer` pro on d.idProductOffer = pro.id inner join
`bqgr2cirsykagvh6xt6c`.`product` prod on pro.idProduct = prod.id inner join
`bqgr2cirsykagvh6xt6c`.`orderStatus` oS on o.idStatus = oS.id order by o.date
;

INSERT INTO `company` (`id`, `idStatus`, `idAdmin`, `name`, `image`, `deliveryCost`) 
VALUES ('1', '1', '1', 'Subway', 'https://www.itsnicethat.com/system/files/082016/57a8aeb97fa44c98d1002108/images_slice_large/Subway_new-icon_itsnicethat.jpg?1470672577', '3000');

INSERT INTO `company` (`id`, `idStatus`, `idAdmin`, `name`, `image`, `deliveryCost`) 
VALUES ('2', '1', '1', 'Andres', 'http://www.andrescarnederes.com/images/como-llegar/logo_andres_chia.png', '3000');

INSERT INTO `company` (`id`, `idStatus`, `idAdmin`, `name`, `image`, `deliveryCost`) 
VALUES ('3', '1', '1', 'La vecina', 'https://st2.depositphotos.com/8301258/11963/v/950/depositphotos_119634124-stock-illustration-restaurant-logo-cutlery-design.jpg', '3000');

INSERT INTO `product` (`id`, `idCompany`, `idStatus`, `idCategory`, `name`, `description`, `price`, `image`, `updated`)
 VALUES ('1', '1', '1', '1', 'emparedado', 'muy rico', '1000', 'https://n9.cl/obvl', current_timestamp());
 
 INSERT INTO `product` (`id`, `idCompany`, `idStatus`, `idCategory`, `name`, `description`, `price`, `image`, `updated`)
 VALUES ('2', '2', '1', '1', 'emparedado', 'muy rico', '1000', 'https://n9.cl/obvl', current_timestamp());
 
 INSERT INTO `product` (`id`, `idCompany`, `idStatus`, `idCategory`, `name`, `description`, `price`, `image`, `updated`)
 VALUES ('3', '3', '1', '2', 'Cerveza', 'fria', '2000', 'https://static3.abc.es/media/ciencia/2018/10/15/AdobeStock_141298273-kIIB--620x349@abc.jpg', current_timestamp());
 
 INSERT INTO `product` (`id`, `idCompany`, `idStatus`, `idCategory`, `name`, `description`, `price`, `image`, `updated`)
 VALUES ('4', '2', '1', '1', 'PerroCaliente', 'muy largo', '5000', 'https://st2.depositphotos.com/1692343/10707/i/950/depositphotos_107078752-stock-photo-homemade-seattle-style-hot-dog.jpg', current_timestamp());
 
 INSERT INTO `product` (`id`, `idCompany`, `idStatus`, `idCategory`, `name`, `description`, `price`, `image`, `updated`)
 VALUES ('5', '1', '1', '2', 'Vino', 'muy anejo', '4000', 'https://mejorconsalud.com/wp-content/uploads/2015/01/vino.jpeg', current_timestamp());

INSERT INTO `product` (`id`, `idCompany`, `idStatus`, `idCategory`, `name`, `description`, `price`, `image`, `updated`)
 VALUES ('6', '3', '1', '1', 'Empanada', 'muy grande', '10000', 'https://hips.hearstapps.com/hmg-prod/images/delish-190807-empanadas-0105-landscape-pf-1566245422.jpg', current_timestamp());
  