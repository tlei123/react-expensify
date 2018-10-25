import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expensesActions';
import testExpenses from '../fixtures/testExpenses';
import db from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('Should set up add-expense action-object with provided values', () => {
  const actionObj = addExpense(testExpenses[2]);

  expect(actionObj).toEqual({
    type: 'ADD_EXPENSE',
    expense: testExpenses[2]
  });
});

test('Should add expense to database and store', (done) => {
  const store = createMockStore({}),
    expenseData = {
      description: 'Mouse',
      amount: 1299,
      createdAt: 1000,
      note: 'test add-expense'
    };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('Should add expense with defaults to database and store', (done) => {
  const store = createMockStore({}),
    expenseDefaults = {
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    };

  store.dispatch(startAddExpense(expenseDefaults)).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });

    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });
});

test('Should set up edit-expense action-object', () => {
  const id = '123abc',
    updates = {
      note: '[updated note]'
    },
    actionObj = editExpense(id, updates);

  expect(actionObj).toEqual({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
  });
});

test('Should set up remove-expense action-object', () => {
  const action = removeExpense({ id: '123abc' });

  // Use toEqual to compare objects/arrays
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});
