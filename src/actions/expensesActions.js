// Expenses actions
import uuid from 'uuid';

export const addExpense = ({
  createdAt = 0,
  amount = 0,
  description = '',
  note = '' } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    amount,
    createdAt,
    description,
    note,
  }
});

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
