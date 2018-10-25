import { addExpense, editExpense, removeExpense } from '../../actions/expensesActions';
import testExpenses from '../fixtures/testExpenses';

test('Should set up add-expense action-object with provided values', () => {
  const actionObj = addExpense(testExpenses[2]);

  expect(actionObj).toEqual({
    type: 'ADD_EXPENSE',
    expense: testExpenses[2]
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
