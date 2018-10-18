import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';

const ExpenseDashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
