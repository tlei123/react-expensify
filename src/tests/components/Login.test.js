import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';

describe('Login component', () => {
  it('Should render Login correctly', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should fire startLoginGoogle properly', () => {
    const startLoginGoogle = jest.fn();
    const wrapper = shallow(<Login startLoginGoogle={startLoginGoogle} />);

    wrapper.find('.login-btn.google').simulate('click');
    expect(startLoginGoogle).toHaveBeenCalled();
  });

  it('Should fire startLoginFacebook properly', () => {
    const startLoginFacebook = jest.fn();
    const wrapper = shallow(<Login startLoginFacebook={startLoginFacebook} />);

    wrapper.find('.login-btn.facebook').simulate('click');
    expect(startLoginFacebook).toHaveBeenCalled();
  });

  it('Should fire startLoginTwitter properly', () => {
    const startLoginTwitter = jest.fn();
    const wrapper = shallow(<Login startLoginTwitter={startLoginTwitter} />);

    wrapper.find('.login-btn.twitter').simulate('click');
    expect(startLoginTwitter).toHaveBeenCalled();
  });

  it('Should fire startLoginGithub properly', () => {
    const startLoginGithub = jest.fn();
    const wrapper = shallow(<Login startLoginGithub={startLoginGithub} />);

    wrapper.find('.login-btn.github').simulate('click');
    expect(startLoginGithub).toHaveBeenCalled();
  });
});
