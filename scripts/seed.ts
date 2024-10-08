const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computadoras y accesorios" },
        { name: "Electrodomésticos" },
        { name: "Herramientas" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the datbase categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
