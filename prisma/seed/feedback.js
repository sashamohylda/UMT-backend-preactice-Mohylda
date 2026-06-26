export const feedbacks = [
  {
    text: "Flora made my anniversary unforgettable with their beautiful arrangement!",
    author: "Emma T.",
  },
  {
    text: "Stunning bouquet delivered on time, looked even better than the photo!",
    author: "Daniel R.",
  },
  {
    text: "My mom cried happy tears when she received this gorgeous birthday bouquet!",
    author: "Sophie M.",
  },
  {
    text: "Exceptional quality flowers that stayed fresh and vibrant for two weeks!",
    author: "Andrew K.",
  },
  {
    text: "Third order from Flora and they never fail to impress with freshness!",
    author: "Catherine B.",
  },
  {
    text: "Wife was speechless receiving the Peony Cloud — absolutely breathtaking!",
    author: "Samuel J.",
  },
  {
    text: "Great expertise and honest advice helped me find the perfect bouquet!",
    author: "Oliver S.",
  },
  {
    text: "Order Flora for every holiday now — quality and price are unbeatable!",
    author: "Grace H.",
  },
  {
    text: "Roses were vibrant and packaging was gorgeous, truly a wonderful gift!",
    author: "Sasha P.",
  },
];

export async function seedFeedbacks(prisma) {
  await prisma.feedback.createMany({ data: feedbacks });
  return feedbacks.length;
}