/*
  Warnings:

  - You are about to drop the column `location` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "location",
DROP COLUMN "rating";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "category";
