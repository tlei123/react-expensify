import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import testExpenses from '../fixtures/testExpenses';
import moment from 'moment';

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={testExpenses[1]} />);

  expect(wrapper).toMatchSnapshot();
});

test('Should render error on invalid submission', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('errorMessage').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('Should set description state on input-change', () => {
  const testDescription = '[updated description]',
    wrapper = shallow(<ExpenseForm />);

  wrapper.find('input[name="description"]').simulate('change', {
    target: {
      value: testDescription
    }
  });
  expect(wrapper.state('description')).toBe(testDescription);
});

test('Should set amount state on valid input-change', () => {
  const testAmount = '12.34',
    wrapper = shallow(<ExpenseForm />);

  wrapper.find('input[name="amount"]').simulate('change', {
    target: {
      value: testAmount
    }
  });
  expect(wrapper.state('amount')).toBe(testAmount);
});

test('Should not set amount state on invalid input-change', () => {
  const testAmount = '12.345',
    wrapper = shallow(<ExpenseForm />);

  wrapper.find('input[name="amount"]').simulate('change', {
    target: {
      value: testAmount
    }
  });
  expect(wrapper.state('amount')).toBe('');
});

test('Should set note state on input-change', () => {
  const testNote = '[updated note]',
    wrapper = shallow(<ExpenseForm />);

  wrapper.find('textarea[name="note"]').simulate('change', {
    target: {
      value: testNote
    }
  });
  expect(wrapper.state('note')).toBe(testNote);
});

test('Should call onSubmit prop on valid submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={testExpenses[0]} onSubmit={onSubmitSpy} />);

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  
  expect(wrapper.state('errorMessage')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    createdAt: testExpenses[0].createdAt,
    description: testExpenses[0].description,
    amount: testExpenses[0].amount,
    note: testExpenses[0].note
  });
});

test('Should set createdAt state on datepicker-change', () => {
  const wrapper = shallow(<ExpenseForm />),
    now = moment();

  wrapper.find('SingleDatePicker').prop('onDateChange')(now);

  expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendarFocused state on datepicker-focus', () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });

  expect(wrapper.state('calendarFocused')).toBe(true);
});
