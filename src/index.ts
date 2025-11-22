import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.get("/", async (_, res) => {
  const user = await prisma.user.findUnique({ where: { id: 2 } });
  res.json(user);
});
app.put("/", async (_, res) => {
  const updatedUser = await prisma.user.update({
    where: { id: 2 },
    data: {
      name: "Shawi",
      email: "shawi@example.com",
    },
  });
  res.json(updatedUser);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
