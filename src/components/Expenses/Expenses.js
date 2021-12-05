import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("all");

  const changeFilterHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => filteredYear === "all" || expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filteredYear} onChangeFilter={changeFilterHandler} />
        {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} amount={expense.amount} date={expense.date} title={expense.title} />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
