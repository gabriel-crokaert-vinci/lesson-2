import type { Identifiable } from './Core';

// Ce que vous envoyez à l'API (sans id)
export interface ExpenseInput {
  date: string;
  description: string;
  payer: string;
  amount: number;
}

// Ce que vous recevez de l'API (avec id)
export interface Expense extends Identifiable {
  date: string;
  description: string;
  payer: string;
  amount: number;
}
