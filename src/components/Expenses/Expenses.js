import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "./ExpensesFilter";
import ExepensesChart from './ExpensesChart';

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
        <ExepensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
