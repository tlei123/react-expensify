const messageDefaultState = {
  show: false,
  bsStyle: 'info',
  content: '',
  autoDismiss: true,
};

export default (state = messageDefaultState, action) => {
  switch (action.type) {
    case 'MSG_EXPENSE_ADDED':
      return {
        ...state,
        show: true,
        bsStyle: 'success',
        content: 'Expense Added',
        autoDismiss: true,
      };
    case 'MSG_EXPENSE_EDITED':
      return {
        ...state,
        show: true,
        bsStyle: 'success',
        content: 'Expense Edited',
        autoDismiss: true,
      };
    case 'MSG_EXPENSE_REMOVED':
      return {
        ...state,
        show: true,
        bsStyle: 'success',
        content: 'Expense Removed',
        autoDismiss: true,
      };
    case 'DISMISS_MSG':
      return messageDefaultState;
    default:
      return state;
  }
};
