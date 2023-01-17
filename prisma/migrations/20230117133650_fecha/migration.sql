/*
  Warnings:

  - You are about to alter the column `fecha` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `orden` MODIFY `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
