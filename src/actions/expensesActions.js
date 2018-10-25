// Expenses actions
import db from '../firebase/firebase';

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      createdAt = 0,
      amount = 0,
      description = '',
      note = ''
    } = expenseData;
    const newExpense = { createdAt, amount, description, note };

    return db.ref('expenses').push(newExpense).
      then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...newExpense
        }));
      });
  };
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
