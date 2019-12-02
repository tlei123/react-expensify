import React from 'react';
import { mount } from 'enzyme';
import { DismissableAlert } from '../../components/DismissableAlert';

describe('DismissableAlert component', () => {
  const dismissMessageStub = jest.fn();
  const propsDefault = {
    show: false,
    bsStyle: 'info',
    content: '',
    autoDismiss: true,
  }
  const propsShow = {
    show: true,
    bsStyle: 'info',
    content: '[test content]',
    autoDismiss: true,
  };

  const wrapper = mount(<DismissableAlert
    dismissMessage={ dismissMessageStub }
  />);
    wrapper.setProps(propsDefault);

  it('Should render null with default props', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert').length).toEqual(0);
  });

  it('Should render alert with props', () => {
    wrapper.setProps(propsShow);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call dismissMessage on close-button click', () => {
    wrapper.find('button.close').simulate('click');

    expect(dismissMessageStub).toHaveBeenCalled();
  });

  it('Should auto-hide alert after 3.5 secs (default duration)', () => {
    wrapper.setProps({
      show: true,
      content: '[test content2]',
      autoDismiss: true,
    });

    expect(wrapper.find('.alert').length).toEqual(1);
    setTimeout(() => {
      expect(wrapper.find('.alert').length).toEqual(0);
    }, 4000);
  });
});
