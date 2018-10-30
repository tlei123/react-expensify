// Main bootstrapping code here -- for entire webapp.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { filterExpenses } from './selectors/expensesSelectors';
import { startSetExpenses } from './actions/expensesActions';
import 'normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './scss/app.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();
console.log('Initial state:', store.getState());

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const filteredExpenses = filterExpenses(state.expenses, state.filters);
  console.log('New state:', store.getState());
  console.log('  Filtered expenses:', filteredExpenses);
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let appHasRendered = false;
const renderApp = () => {
  if (!appHasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    appHasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
    console.log('User logged in.');
  } else {
    renderApp();
    history.push('/');
    console.log('User logged out.');
  }
});

