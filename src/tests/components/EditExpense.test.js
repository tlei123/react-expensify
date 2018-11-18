import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import testExpenses from '../fixtures/testExpenses';

let testExpense, startEditExpense, startRemoveExpense, history, wrapper;
beforeEach(() => {
  testExpense = testExpenses[2];
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpense
      expense={testExpense}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
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

test('Should present confirmation modal on remove button click', () => {
  wrapper.setState({ showConfirmModal: false });
  wrapper.find('button.editexpense-remove').simulate('click');

  expect(wrapper.state('showConfirmModal')).toBeTruthy();
  wrapper.setState({ showConfirmModal: false });
});

test('Should hide confirmation modal on modal-cancel', () => {
  startRemoveExpense.mockClear();
  wrapper.setState({ showConfirmModal: true });
  wrapper.instance().handleRemoveCancel();

  expect.assertions(2);
  expect(wrapper.state('showConfirmModal')).toBeFalsy();
  expect(startRemoveExpense).not.toHaveBeenCalled();
})

test('Should handle confirmed removal properly', () => {
  startRemoveExpense.mockClear();
  wrapper.instance().startRemove();

  expect.assertions(2);
  expect(wrapper.state('showConfirmModal')).toBeFalsy();
  expect(startRemoveExpense).toHaveBeenCalledWith({ id: testExpense.id });
});
