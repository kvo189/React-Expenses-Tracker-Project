import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return <div className="new-expense">
    {!isEditing && <button onClick={() => setIsEditing(true)}>Add New Expense</button>}
    {isEditing && <ExpenseForm onCancel={() => setIsEditing(false)} onSaveExpenseData={saveExpenseDataHandler}/>}
    
  </div>
};

export default NewExpense;
