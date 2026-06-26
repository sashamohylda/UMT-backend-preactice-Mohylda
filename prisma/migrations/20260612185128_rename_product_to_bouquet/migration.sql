/*
  Warnings:

  - You are about to drop the column `productId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_productId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "productId",
ADD COLUMN     "bouquetId" INTEGER;

-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "Bouquet" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Bouquet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_bouquetId_fkey" FOREIGN KEY ("bouquetId") REFERENCES "Bouquet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
