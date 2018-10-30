import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import ExpenseList from './ExpenseList';

const ExpenseDashboard = () => (
  <div className="expensedashboard component">
    <h2 className="expensedashboard-title">Expense Dashboard</h2>
    <ExpenseListFilters />
    <ExpensesSummary />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
