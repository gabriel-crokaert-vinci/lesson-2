import { useForm } from 'react-hook-form';
import type { ExpenseInput } from '../types/Expense';

// Type pour les données du formulaire
interface FormData {
  date: string;
  description: string;
  payer: string;
  amount: number;
}

export default function ExpenseAddViaForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Ici vous pouvez convertir FormData vers ExpenseInput si nécessaire
    const expenseInput: ExpenseInput = {
      date: data.date,
      description: data.description,
      payer: data.payer,
      amount: data.amount
    };
    // Envoyer expenseInput à votre API
    console.log(expenseInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Date:
          <input 
            type="date" 
            {...register('date', { required: 'Date is required' })}
            placeholder="Date" 
          />
          {errors.date && <span>{errors.date.message}</span>}
        </label>

        <label>
          Description:
          <input 
            type="text" 
            {...register('description', { required: 'Description is required' })}
            placeholder="Description" 
          />
          {errors.description && <span>{errors.description.message}</span>}
        </label>

        <label>
          Payer:
          <input 
            type="text" 
            {...register('payer', { required: 'Payer is required' })}
            placeholder="Payer" 
          />
          {errors.payer && <span>{errors.payer.message}</span>}
        </label>

        <label>
          Amount:
          <input 
            type="number" 
            step="0.01"
            {...register('amount', { 
              required: 'Amount is required',
              min: { value: 0.01, message: 'Amount must be greater than 0' }
            })}
            placeholder="Enter amount" 
          />
          {errors.amount && <span>{errors.amount.message}</span>}
        </label>

        <button type="submit">Add via form</button>
      </form>
    </div>
  );
}
