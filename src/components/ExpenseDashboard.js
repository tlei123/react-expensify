import React from 'react';
import { connect } from 'react-redux';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';
import { filterExpenses, selectExpensesTotals } from '../selectors/expensesSelectors';
import numeral from 'numeral';

const ExpenseDashboard = (props) => (
  <div>
    <h2>Dashboard</h2>
    <ExpenseListFilters />
    <p>Showing {props.totals.count} expense(s) {props.filtered ? '(filtered) ' : ''} totalling {numeral(props.totals.amount /100).format('$0,0.00')}</p>
    <ExpenseList />
  </div>
);

const mapStateToProps = (state) => {
  console.log('filters:', state.filters);
  return {
    totals: selectExpensesTotals(filterExpenses(state.expenses, state.filters)),
    filtered: (state.filters.text === '' && typeof state.filters.startDate != undefined && state.filters.endDate != undefined)
  }
};

export default connect(mapStateToProps)(ExpenseDashboard);
