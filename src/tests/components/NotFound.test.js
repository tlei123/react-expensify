import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from '../../components/NotFound';

describe('NotFound component', () => {
	it('Should render NotFound correctly', () => {
	  const wrapper = shallow(<NotFound />);

	  expect(wrapper).toMatchSnapshot();
	});
});
