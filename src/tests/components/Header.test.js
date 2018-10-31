import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header.js';

test('Should render header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);

  expect(wrapper).toMatchSnapshot();
});

test('Should fire startLogout properly', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);

  wrapper.find('.header-auth-btn.exit').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
