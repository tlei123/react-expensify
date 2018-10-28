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
    case 'SET_EXPENSES':
      return action.expenses;
    default:
      return state;
  }
};

export default expensesReducer;
