import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Expenses actions
const addExpense = ({
    createdAt = 0,
    amount = 0,
    description = '',
    note = '' } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      amount,
      createdAt,
      description,
      note,
    }
});
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'EDIT_EXPENSE':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.updates
          }
        } else {
          return item;
        }
      });
    case 'REMOVE_EXPENSE':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

// Filters actions.
const setFilterText = (text = '') => ({
  type: 'SET_FILTER_TEXT',
  text
});
const setFilterSortByAmount = () => ({
  type: 'SET_FILTER_SORTBY',
  sortBy: 'amount',
});
const setFilterSortByDate = () => ({
  type: 'SET_FILTER_SORTBY',
  sortBy: 'date',
});
const setFilterStartDate = (date = undefined) => ({
  type: 'SET_FILTER_STARTDATE',
  date
});
const setFilterEndDate = (date = undefined) => ({
  type: 'SET_FILTER_ENDDDATE',
  date
});

// Filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_FILTER_TEXT':
      return { ...state, text: action.text };
    case 'SET_FILTER_SORTBY':
      return { ...state, sortBy: action.sortBy };
    case 'SET_FILTER_STARTDATE':
      return { ...state, startDate: action.date };
    case 'SET_FILTER_ENDDDATE':
      return { ...state, endDate: action.date };
    default:
      return state;
  }
};

const filterExpenses = (expenses, {text, startDate, endDate, sortBy }) => {
  return expenses.filter(item => {
    const startDateMatch = typeof startDate !== 'number' || item.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || item.createdAt <= endDate;
    const textMatch = item.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return a.createdAt < b.createdAt ? 1 : -1;
      case 'amount':
        return a.amount < b.amount ? 1 : -1;
      default:
        return 0;
    }
  });
};

// Store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);
console.log('Initial state:', store.getState());

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const filteredExpenses = filterExpenses(state.expenses, state.filters);
  console.log('New state:', store.getState());
  console.log('Filtered expenses:', filteredExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ amount: 5, description: 'coffee', createdAt: 2000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 6 }));

store.dispatch(setFilterText('rent'));
store.dispatch(setFilterText('coffee'));
store.dispatch(setFilterText(''));

store.dispatch(setFilterSortByAmount());
store.dispatch(setFilterSortByDate());

// store.dispatch(setFilterStartDate(150));
// store.dispatch(setFilterStartDate(-1000));

const demoState = {
  expenses: [{
    id: 'jdisifoiudl',
    amount: 54500,
    description: 'January rent',
    note: 'This is the final payment for the address.',
    createdAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // 'amount' | 'date'
    startDate: undefined,
    endDate: undefined,
  }
};
