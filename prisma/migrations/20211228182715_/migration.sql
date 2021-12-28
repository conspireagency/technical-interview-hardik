/*
  Warnings:

  - You are about to drop the column `Notes` on the `Car` table. All the data in the column will be lost.
  - Added the required column `notes` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sizecode` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Car` DROP COLUMN `Notes`,
    ADD COLUMN `notes` VARCHAR(225) NOT NULL,
    ADD COLUMN `sizecode` VARCHAR(225) NOT NULL;
