import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";

function Expenses({ expenses }) {
  const renderExpenses = expenses.map(({ id, title, amount, date }) => (
    <ExpenseItem key={id} title={title} amount={amount} date={date} />
  ));
  return <Card className="expenses">{renderExpenses}</Card>;
}

export default Expenses;
