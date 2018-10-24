import { addExpense, editExpense, removeExpense } from '../../actions/expensesActions';

test('Should set up add-expense action-object with default values', () => {
  const defaultExpenseeData = {
      createdAt: 0,
      amount: 0,
      description: '',
      note: ''
    },
    actionObj = addExpense();

  expect(actionObj).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...defaultExpenseeData,
      id: expect.any(String)
    }
  });
});

test('Should set up add-expense action-object with provided values', () => {
  const expenseData = {
      createdAt: 1540324898854,
      amount: 60000,
      description: 'Mortgage payment',
      note: 'For September'
    },
    actionObj = addExpense(expenseData);

  expect(actionObj).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
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
