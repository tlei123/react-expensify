import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header.js';

test('Should render header correctly', () => {
  const wrapper = shallow(<Header auth={{uid: 'abc123!', displayName: 'Joe Blow'}} startLogout={() => {}} />);

  expect(wrapper).toMatchSnapshot();
});

test('Should fire startLogout properly', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header auth={{uid: 'abc123!', displayName: 'Joe Blow'}} startLogout={startLogout} />);

  wrapper.find('.header-auth-btn.logout').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
