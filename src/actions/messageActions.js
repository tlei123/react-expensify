// TODO: Add expense details to add/remove messages.
export const messageAddExpense = () => {
  return {
    type: 'MSG_EXPENSE_ADDED',
  };
};

export const messageEditExpense = () => {
  return ({
    type: 'MSG_EXPENSE_EDITED',
  });
};

export const messageRemoveExpense = () => {
  return {
    type: 'MSG_EXPENSE_REMOVED',
  };
};

export const dismissMessage = () => {
  return {
    type: 'DISMISS_MSG',
  };
};
