import expensesReducer from '../../reducers/expensesReducer';
import moment from 'moment';
import testExpenses from '../fixtures/testExpenses.js';

describe('expensesReducer', () => {
  it('Should set default state', () => {
    const newState = expensesReducer(undefined, { type: '@@INIT' });

    expect(newState).toEqual([]);
  });

  it('Should set add-expense state with new expense', () => {
    const newExpense = {
        id: '999',
        createdAt: moment('2018-10-28').valueOf(),
        amount: 1999,
        description: 'Dinner',
        note: ''
      },
      newState = expensesReducer(testExpenses, {
        type: 'ADD_EXPENSE',
        expense: newExpense
      });

    expect(newState).toEqual([ ...testExpenses, newExpense ]);
  });

  it('Should set edit-expense state with edited values', () => {
    const testId = testExpenses[0].id,
      testUpdates = {
        amount: 189,
        note: 'On sale.'
      },
      editedExpense = {
        ...testExpenses[0],
        ...testUpdates
      },
      newState = expensesReducer(testExpenses, {
        type: 'EDIT_EXPENSE',
        id: testId,
        updates: testUpdates
      });

    expect(newState[0]).toEqual(editedExpense);
  });

  it('Should return same state for edit-expense with unfound id', () => {
    const testId = 'no.such.id.in.testExpenses.js',
      testUpdates = {
        amount: '0',
        description: ''
      },
      newState = expensesReducer(testExpenses, {
        type: 'EDIT_EXPENSE',
        id: testId,
        updates: testUpdates
      });

    expect(newState).toEqual(testExpenses);
  });

  it('Should return state with identified expense removed', () => {
    const testAction = {
        type: 'REMOVE_EXPENSE',
        id: testExpenses[1].id
      },
      newState = expensesReducer(testExpenses, testAction);

    expect(newState).toEqual([ testExpenses[0], testExpenses[2] ]);
  });

  it('Should return same state for remove-expense with unfound id', () => {
    const testAction = {
        type: 'REMOVE_EXPENSE',
        id: 'no.such.id.in.testExpenses.js'
      },
      newState = expensesReducer(testExpenses, testAction);

    expect(newState).toEqual(testExpenses);
  });

  it('Should return state with newly-set expenses', () => {
    const newState = expensesReducer([], {
      type: 'SET_EXPENSES',
      expenses: testExpenses
    });

    expect(newState).toEqual(testExpenses);
  });
});
