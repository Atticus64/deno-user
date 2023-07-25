import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";
import { load } from "https://deno.land/std@0.195.0/dotenv/mod.ts";

const envVars = await load();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const users: Prisma.UserCreateInput[] = [
  {
    name: "Sci",
  },
  {
    name: "Rick",
  },
  {
    name: "DrQuick",
  },
];

/**
 * Seed the database.
 */

for (const u of users) {
  const usr = await prisma.user.create({
    data: u,
  });
  console.log(`Created user with id: ${usr.id}`);
}
console.log(`Seeding finished.`);

await prisma.$disconnect();
