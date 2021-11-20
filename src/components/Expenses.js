import "./Expenses.css";
import Card from './Card.js';
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} amount={expense.amount} date={expense.date} title={expense.title}></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
