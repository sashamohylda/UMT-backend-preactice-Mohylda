export const orders = [
  {
    name: "Emma Thompson",
    phone: "+14155551234",
    address: "123 Rose Lane, San Francisco, CA",
    comment: "Interested in the Peony Cloud bouquet, please call to confirm delivery time.",
    bouquetIndex: 0,
  },
  {
    name: "Daniel Rivera",
    phone: "+14085559876",
    address: "456 Blossom Ave, Apt 8, Los Angeles, CA",
    comment: "Ordering Spring Elegance. Preferred delivery on weekends.",
    bouquetIndex: 1,
  },
  {
    name: "Sophie Martin",
    phone: "+13055554321",
    address: "789 Petal Street, Miami, FL",
    comment: "Need advice on choosing a bouquet for a wedding anniversary.",
    bouquetIndex: null,
  },
];

export async function seedOrders(prisma) {
  if (orders.length === 0) {
    return 0;
  }
  const bouquets = await prisma.bouquet.findMany({
    orderBy: { id: "asc" },
    select: { id: true },
  });
  const data = orders.map(({ bouquetIndex, ...order }) => ({
    ...order,
    bouquetId: bouquetIndex == null ? null : (bouquets[bouquetIndex]?.id ?? null),
  }));
  await prisma.order.createMany({ data });
  return data.length;
}