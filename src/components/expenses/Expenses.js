import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(0);
  const [filteredExpensesByYear, setFilteredExpensesByYear] = useState([]);

  const filterExpensesByYear = (selectedYear) => {
    const filteredExpenses = props.expenses.filter(({ date }) => {
      return date.getFullYear() === selectedYear;
    });
    setFilteredExpensesByYear(filteredExpenses);
  };

  const renderExpenses = (expenseData) =>
    expenseData.map(({ id, title, amount, date }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date} />
    ));
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterExpensesByYear={filterExpensesByYear}
          onSetFilteredYear={setFilteredYear}
        />
        {filteredYear
          ? renderExpenses(filteredExpensesByYear)
          : renderExpenses(props.expenses)}
      </Card>
    </div>
  );
}

export default Expenses;
