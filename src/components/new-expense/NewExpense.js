import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseDataHandler = newExpenseData => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
    props.onAddNewExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;
