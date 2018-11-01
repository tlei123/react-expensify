import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';

test('Should render Login correctly', () => {
  const wrapper = shallow(<Login />);

  expect(wrapper).toMatchSnapshot();
});

test('Should fire startLoginGoogle properly', () => {
  const startLoginGoogle = jest.fn();
  const wrapper = shallow(<Login startLoginGoogle={startLoginGoogle} />);

  wrapper.find('.login-btn.google').simulate('click');
  expect(startLoginGoogle).toHaveBeenCalled();
});

test('Should fire startLoginFacebook properly', () => {
  const startLoginFacebook = jest.fn();
  const wrapper = shallow(<Login startLoginFacebook={startLoginFacebook} />);

  wrapper.find('.login-btn.facebook').simulate('click');
  expect(startLoginFacebook).toHaveBeenCalled();
});
