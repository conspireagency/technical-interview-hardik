-- CreateTable
CREATE TABLE `Car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `year` VARCHAR(50) NOT NULL,
    `make` VARCHAR(225) NOT NULL,
    `model` VARCHAR(225) NOT NULL,
    `submodel` VARCHAR(225) NOT NULL,
    `Notes` VARCHAR(225) NOT NULL,
    `pL` VARCHAR(225) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
