import messageReducer from '../../reducers/messageReducer';

const defaultState = {
  show: false,
  variant: 'info',
  content: '',
  autoDismiss: true,
};

test('Should set up default state properly on init', () => {
  const newState = messageReducer(undefined, { type: '@@INIT' });

  expect(newState).toEqual(defaultState);
});

test('Should set state properly upon messageAddExpense action', () => {
  const expectedState = {
    show: true,
    variant: 'success',
    content: 'Expense Added',
    autoDismiss: true,
  };
  const newState = messageReducer(undefined, { type: 'MSG_EXPENSE_ADDED' });

  expect(newState).toEqual(expectedState);
});

test('Should set state properly upon messageEditExpense action', () => {
  const expectedState = {
    show: true,
    variant: 'success',
    content: 'Expense Edited',
    autoDismiss: true,
  };
  const newState = messageReducer(undefined, { type: 'MSG_EXPENSE_EDITED' });

  expect(newState).toEqual(expectedState);
});

test('Should set state properly upon messageRemoveExpense action', () => {
  const expectedState = {
    show: true,
    variant: 'success',
    content: 'Expense Removed',
    autoDismiss: true,
};
  const newState = messageReducer(undefined, { type: 'MSG_EXPENSE_REMOVED' });

  expect(newState).toEqual(expectedState);
});

test('Should set default state properly upon dismissMessage action', () => {
  const newState = messageReducer(undefined, { type: 'DISMISS_MSG' });

  expect(newState).toEqual(defaultState);
});
