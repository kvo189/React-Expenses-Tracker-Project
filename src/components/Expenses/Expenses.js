import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");

  const onChangeHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear = {filteredYear} onChangeFilter={onChangeHandler} />
        {props.expenses
          .filter((expense) => filteredYear === "" || expense.date.getFullYear().toString() === filteredYear)
          .map((expense) => (
            <ExpenseItem key={expense.id} amount={expense.amount} date={expense.date} title={expense.title}></ExpenseItem>
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
