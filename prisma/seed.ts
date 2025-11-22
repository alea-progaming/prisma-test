import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding users...");
  await prisma.user.createMany({
    data: [
      { name: "Mikki", email: "mikki@example.com" },
      { name: "Shaui", email: "shaui@example.com" },
    ],
  });
}

main()
  .then(async () => {
    console.log("Seeding");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
