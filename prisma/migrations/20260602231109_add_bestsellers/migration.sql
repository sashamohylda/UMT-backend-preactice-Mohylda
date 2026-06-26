-- CreateTable
CREATE TABLE "Bestseller" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Bestseller_pkey" PRIMARY KEY ("id")
);
