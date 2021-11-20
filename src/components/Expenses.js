import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} amount={expense.amount} date={expense.date} title={expense.title}></ExpenseItem>
      ))}
    </div>
  );
}

export default Expenses;
