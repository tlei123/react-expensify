import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import testExpenses from '../fixtures/testExpenses';

let testExpense, startEditExpense, startRemoveExpense, history, wrapper;
beforeEach(() => {
  testExpense = testExpenses[2];
  startEditExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpense
      expense={testExpense}
      startEditExpense={startEditExpense}
      history={history}
    />
  );
});

test('Should render EditExpense correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle startEditExpense (onSubmit) correctly', () => {
  const editedExpense = {
    ...testExpense,
    note: '[edited note]'
  };

  history.push.mockClear();
  startEditExpense.mockClear();
  wrapper.find('ExpenseForm').prop('onSubmit')(editedExpense);

  expect.assertions(2);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(testExpense.id, editedExpense);
});
