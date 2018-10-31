// Expenses actions
import db, { arrayFromSnapshot } from '../firebase/firebase';

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.ref(`users/${uid}/expenses`).once('value').
      then((snapshot) => {
        dispatch(setExpenses(arrayFromSnapshot(snapshot)));
      }).
      catch((err) => {
        console.error('Could not fetch expenses data:', err);
      });
  };
};

export const setExpenses = ((expenses) => ({
  type: 'SET_EXPENSES',
  expenses
}));

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      createdAt = 0,
      amount = 0,
      description = '',
      note = ''
    } = expenseData;
    const newExpense = { createdAt, amount, description, note };

    return db.ref(`users/${uid}/expenses`).push(newExpense).
      then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...newExpense
        }));
      }).
      catch((err) => {
        console.error('Could not add expense to database:', err);
      });
  };
};

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.ref(`users/${uid}/expenses/${id}`).set(updates).
      then(() => {
        dispatch(editExpense(id, updates));
      }).
      catch((err) => {
        console.error('Could not edit expense in database:', err);
      });
  }
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startRemoveExpense = (({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.ref(`users/${uid}/expenses/${id}`).remove().
      then(() => {
        dispatch(removeExpense({ id }));
      }).
      catch((err) => {
        console.error('Could not remove expense from database:', err);
      });
  };
});

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
