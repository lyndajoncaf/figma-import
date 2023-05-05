import React from 'react';

function ExpenseCalculator() {
  const rent = 1000;
  const supplies = 200;
  const utilities = 300;
  const cleaning = 70;

  const totalExpenses = rent + supplies + utilities + cleaning;

  return (
    <div>
      <h2>Expense Calculator</h2>
      <div className="result">
        <h3>Total Expenses: ${totalExpenses}</h3>
        <button>Calculate</button>
      </div>
    </div>
  );
}


export default ExpenseCalculator;
