// Main bootstrapping code here -- for entire webapp.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expensesActions';
import { setFilterText, setFilterSortByAmount } from './actions/filtersActions';
import { filterExpenses } from './selectors/expensesSelectors';
import 'normalize.css';
import './scss/app.scss';

const store = configureStore();
console.log('Initial state:', store.getState());

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const filteredExpenses = filterExpenses(state.expenses, state.filters);
  console.log('New state:', store.getState());
  console.log('  Filtered expenses:', filteredExpenses);
});

store.dispatch(
  addExpense({
    amount: 4500,
    description: 'Water bill'
  })
);
store.dispatch(
  addExpense({
    amount: 2000,
    description: 'Gas bill'
  })
);
store.dispatch(
  addExpense({
    amount: 88800,
    description: 'Rent'
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
