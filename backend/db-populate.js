const { PrismaClient } = require('./generated/prisma');

const DATA = require('./data/expenses.json');
const prisma = new PrismaClient();

async function main() {
    // Transformer les données pour convertir les dates string en objets Date
    const transformedData = DATA.map(item => ({
        ...item,
        date: new Date(item.date)
    }));

    await prisma.expense.createMany({
        data: transformedData
    });

  const allExpenses = await prisma.expense.findMany();
  console.log(allExpenses);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
