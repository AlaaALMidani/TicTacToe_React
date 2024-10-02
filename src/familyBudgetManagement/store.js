import { configureStore, createSlice } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    income: [],
    expenses: [],
  },
  reducers: {
    addIncome: (state, action) => {
      state.income.push({ id: Date.now(), amount: action.payload, type: 'income' });
    },
    addExpense: (state, action) => {
      state.expenses.push({ id: Date.now(), amount: action.payload, type: 'expense' });
    },
    resetBudget: (state) => {
      state.income = [];
      state.expenses = [];
    },
  },
});

export const { addIncome, addExpense, resetBudget } = budgetSlice.actions;

export default configureStore({
  reducer: {
    budget: budgetSlice.reducer,
  },
}); 