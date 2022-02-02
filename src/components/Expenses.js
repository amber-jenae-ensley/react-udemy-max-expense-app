import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses }) {
  const renderExpenses = expenses.map(({ id, title, amount, date }) => (
    <ExpenseItem key={id} title={title} amount={amount} date={date} />
  ));
  return <div className="expenses">{renderExpenses}</div>;
}

export default Expenses;
