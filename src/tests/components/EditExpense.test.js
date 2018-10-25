import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import testExpenses from '../fixtures/testExpenses';

let testExpense, editExpense, removeExpense, history, wrapper;
beforeEach(() => {
  testExpense = testExpenses[2];
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpense
      expense={testExpense}
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
    />
  );
});

test('Should render EditExpense correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense (onSubmit) correctly', () => {
  const editedExpense = {
    ...testExpense,
    note: '[edited note]'
  };

  wrapper.find('ExpenseForm').prop('onSubmit')(editedExpense);

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(testExpense.id, editedExpense);
});

test('Should handle removeExpense correctly', () => {
  wrapper.find('button.editexpense-remove').simulate('click');

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({id: testExpense.id});
});
