import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../components/Loader';

test('Should render Loader properly', () => {
  const wrapper = shallow(<Loader />);

  expect(wrapper).toMatchSnapshot();
});
