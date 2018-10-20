import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import ExpenseList from './ExpenseList';

const ExpenseDashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <ExpenseListFilters />
    <ExpensesSummary />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
