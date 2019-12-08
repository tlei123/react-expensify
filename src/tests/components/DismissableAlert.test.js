import React from 'react';
import { mount } from 'enzyme';
import { DismissableAlert } from '../../components/DismissableAlert';

describe('DismissableAlert component', () => {
  const dismissMessageStub = jest.fn();
  const timeoutDismissStub = jest.fn();
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
    timeoutDismiss={ timeoutDismissStub }
  />);

  beforeEach(() => {
    wrapper.setProps(propsDefault);
  });

  it('Should render null with default props', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert').length).toEqual(0);
  });

  it('Should render alert with props', () => {
    wrapper.setProps(propsShow);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should call dismissMessage on close-button click', () => {
    wrapper.setProps(propsShow);

    wrapper.find('button.close').simulate('click');

    expect(dismissMessageStub).toHaveBeenCalled();
  });

  it('Should auto-hide alert after 3.5 secs (default duration)', async () => {
    jest.setTimeout(10000);
    jest.useFakeTimers();

    wrapper.setProps(propsShow);
    wrapper.update();

    setTimeout(() => {
      expect(wrapper.find('.dissmissablealert.component')).to.have.lengthOf(0);
    }, 4500);

    jest.setTimeout(5000);
  });
});
