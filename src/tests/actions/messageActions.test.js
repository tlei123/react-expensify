import { messageAddExpense, messageEditExpense, messageRemoveExpense, dismissMessage } from '../../actions/messageActions';

test('Should generate messageAddExpense action object properly', () => {
  const expectedObj = { type: 'MSG_EXPENSE_ADDED' };
  const actionObj = messageAddExpense();

  expect(actionObj).toEqual(expectedObj);
});

test('Should generate messageEditExpense action object properly', () => {
  const expectedObj = { type: 'MSG_EXPENSE_EDITED' };
  const actionObj = messageEditExpense();

  expect(actionObj).toEqual(expectedObj);
});

test('Should generate messageRemoveExpense action object properly', () => {
  const expectedObj = { type: 'MSG_EXPENSE_REMOVED' };
  const actionObj = messageRemoveExpense();

  expect(actionObj).toEqual(expectedObj);
});

test('Should generate dismissMessage action object properly', () => {
  const expectedObj = { type: 'DISMISS_MSG' };
  const actionObj = dismissMessage();

  expect(actionObj).toEqual(expectedObj);
});
