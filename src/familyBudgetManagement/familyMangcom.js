import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addIncome, addExpense, resetBudget } from './store.js';


export const FamilyBudgetManagement = ()=>{

    const [amount, setAmount] = useState('');
  const [type, setType] = useState('income'); // Default to income
  const dispatch = useDispatch();
  const { income, expenses } = useSelector((state) => state.budget);

  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const remaining = totalIncome - totalExpenses;

  const addTransaction = () => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount)) {
      if (type === 'income') {
        dispatch(addIncome(numAmount));
      } else {
        dispatch(addExpense(numAmount));
      }
      setAmount('');
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div className="container">
      <h1>Family Budget Manager</h1>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button onClick={addTransaction}>Add</button>
      </div>

      <h2>Transactions</h2>
      <ul>
        {income.map((item) => (
          <li key={item.id}>+{item.amount} (Income)</li>
        ))}
        {expenses.map((item) => (
          <li key={item.id}>-{item.amount} (Expense)</li>
        ))}
      </ul>

      <h2>Budget Summary</h2>
      <p>Total Income: {totalIncome}</p>
      <p>Total Expenses: {totalExpenses}</p>
      <p>Remaining: {remaining}</p>
      <button onClick={() => dispatch(resetBudget())}>Reset Budget</button>
    </div>
  );
}
