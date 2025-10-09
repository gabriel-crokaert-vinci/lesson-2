const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('../generated/prisma/client'); 
const e = require('express');

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
  await prisma.expense.deleteMany();
  return [];
}

module.exports = {
  getAllExpenses,
  addExpense,
  resetExpenses,
};
