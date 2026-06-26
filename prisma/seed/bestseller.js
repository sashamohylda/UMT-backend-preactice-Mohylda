export const bestsellers = [
  {
    img: "images/top1@1x.png",
    title: "Spring Elegance",
    desc: "A delicate blend of peonies, tulips, and roses — perfect for springtime gifting and bright smiles.",
    text: "Each stem is carefully selected to create a bouquet that radiates freshness, elegance, and the gentle charm of spring.",
    price: 35,
  },
  {
    img: "images/top2@1x.png",
    title: "Berry Chic",
    desc: "A stylish composition of roses, seasonal greenery, and vibrant berries — a bold and elegant floral statement.",
    text: "Each stem is carefully selected to create a bouquet that radiates freshness, elegance, and the gentle charm of spring.",
    price: 40,
  },
  {
    img: "images/top3@1x.png",
    title: "Lavender Dream",
    desc: "A rich bouquet with lavender, lisianthus, and roses — ideal for those who love deep hues and gentle fragrance.",
    text: "Each stem is carefully selected to create a bouquet that radiates freshness, elegance, and the gentle charm of spring.",
    price: 55,
  },
  {
    img: "images/top1@1x.png",
    title: "Peony Bliss",
    desc: "Lush white peonies and soft greenery arranged in a classic style — timeless and romantic.",
    text: "Each stem is carefully selected to create a bouquet that radiates freshness, elegance, and the gentle charm of spring.",
    price: 48,
  },
  {
    img: "images/top2@1x.png",
    title: "Coral Sunset",
    desc: "Vibrant coral roses and warm orange ranunculus — glowing like a summer evening sky.",
    text: "Each stem is carefully selected to create a bouquet that radiates freshness, elegance, and the gentle charm of spring.",
    price: 42,
  },
  {
    img: "images/top3@1x.png",
    title: "Violet Mist",
    desc: "Soft purple lisianthus and lavender roses with silver foliage — mysterious and elegant.",
    text: "Each stem is carefully selected to create a bouquet that radiates freshness, elegance, and the gentle charm of spring.",
    price: 38,
  },
];

export async function seedBestsellers(prisma) {
  await prisma.bestseller.createMany({ data: bestsellers });
  return bestsellers.length;
}