import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { seedFeedbacks } from "./feedback.js";
import { seedBouquets } from "./bouquet.js";
import { seedBestsellers } from "./bestseller.js";
import { seedOrders } from "./order.js";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.order.deleteMany();
  await prisma.feedback.deleteMany();
  await prisma.bouquet.deleteMany();
  await prisma.bestseller.deleteMany();

  const bouquetCount = await seedBouquets(prisma);
  const bestsellersCount = await seedBestsellers(prisma);
  const feedbackCount = await seedFeedbacks(prisma);
  const orderCount = await seedOrders(prisma);

  console.log(`Seeded ${bouquetCount} bouquets, ${bestsellersCount} bestsellers, ${feedbackCount} feedbacks, and ${orderCount} orders`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });