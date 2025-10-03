const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

async function getAllExpenses() {
  return await prisma.expense.findMany();
}

async function addExpense(expense) {
  await prisma.expense.create({
    data: expense
  });
  return expense;
}

async function resetExpenses() {
  const initData = fs.readFileSync(EXPENSES_INIT_FILE_PATH, 'utf8');
  fs.writeFileSync(EXPENSES_FILE_PATH, initData);
  return JSON.parse(initData);
}

module.exports = {
  getAllExpenses,
  addExpense,
  resetExpenses,
};
