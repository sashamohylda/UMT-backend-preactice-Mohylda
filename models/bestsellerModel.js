import prisma from "../helpers/prisma.js";

export async function findAll() {
  const bestsellers = await prisma.bestseller.findMany({
    orderBy: { id: "asc" },
  });
  return bestsellers.map((bestseller) => ({
    ...bestseller,
    id: String(bestseller.id),
  }));
}