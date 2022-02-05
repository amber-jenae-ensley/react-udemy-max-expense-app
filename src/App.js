import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
].sort((expense1, expense2) => expense2 - expense1);

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addNewExpenseHandler = (newExpense) =>
    setExpenses((prevState) =>
      prevState.concat(newExpense).sort((expense1, expense2) => expense2 - expense1)
    );

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
