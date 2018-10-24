import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header.js';

test('Should render header correctly', () => {
  const wrapper = shallow(<Header />);

  expect(toJSON(wrapper)).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe('Expensify');
});
