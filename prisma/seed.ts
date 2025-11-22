import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "Shaun", email: "shaun@example.com" },
      { name: "Carl", email: "carl@example.com" },
    ],
  });
}

seed().then(() => prisma.$disconnect());
