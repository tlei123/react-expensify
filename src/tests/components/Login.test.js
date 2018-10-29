import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';

test('Should render Login correctly', () => {
  const wrapper = shallow(<Login />);

  expect(wrapper).toMatchSnapshot();
});

test('Should fire startLogin properly', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<Login startLogin={startLogin} />);

  wrapper.find('.login-btn').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
