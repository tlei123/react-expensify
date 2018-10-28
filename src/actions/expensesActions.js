// Expenses actions
import db from '../firebase/firebase';

export const setExpenses = ((expenses) => ({
  type: 'SET_EXPENSES',
  expenses
}));

export const startSetExpenses = () => {
  return (dispatch) => {
    return db.ref('expenses').once('value').
      then((dataSnapshot) => {
        const fetchedExpenses = [];
        let expenseProps;
        dataSnapshot.forEach((childSnapshot) => {
          expenseProps = childSnapshot.val();
          fetchedExpenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        
        dispatch(setExpenses(fetchedExpenses));
      }).
      catch((err) => {
        console.error('Could not fetch expenses data:', err);
      });
  };
};

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
