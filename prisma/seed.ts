import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaNeonHTTP } from "@prisma/adapter-neon";
import { hashPassword } from "../lib/password";

const adapter = new PrismaNeonHTTP(process.env.DATABASE_URL!, {});
const prisma = new PrismaClient({ adapter });

const users = [
  {
    email: "admin@swin.com",
    password: "Admin@1234",
    name: "System Admin",
    role: "ADMIN" as const,
    isFirstLogin: false,
  },
  {
    email: "chamuditha@swin.com",
    password: "Craze09..",
    name: "Tharindu Chamuditha",
    role: "EMPLOYEE" as const,
    isFirstLogin: true,
  },
];

async function main() {
  console.log("Seeding users...");

  for (const user of users) {
    const created = await prisma.user.upsert({
      where: { email: user.email },
      update: {
        name: user.name,
        role: user.role,
        password: hashPassword(user.password),
        isFirstLogin: user.isFirstLogin,
        emailStatus: "SENT",
        emailSentAt: new Date(),
      },
      create: {
        email: user.email,
        password: hashPassword(user.password),
        name: user.name,
        role: user.role,
        isFirstLogin: user.isFirstLogin,
        emailStatus: "SENT",
        emailSentAt: new Date(),
      },
    });

    console.log(`  upserted  ${created.role.padEnd(8)}  ${created.email}`);
  }

  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
