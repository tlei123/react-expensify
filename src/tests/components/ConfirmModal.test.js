import React from 'react';
import { shallow } from 'enzyme';
import ConfirmModal from '../../components/ConfirmModal';

describe('ConfirmModel component', () => {
  const handleOkStub = jest.fn();
  const handleCancelStub = jest.fn();
  const requiredProps = {
    show: true,
    content: 'Are you sure you want to do this?',
  };
  const optionalProps = {
    title: 'test',
    btnLabelCancel: 'no',
    btnLabelOk: 'yes',
  };

  const wrapper = shallow(<ConfirmModal
    handleOk={ handleOkStub }
    handleCancel={ handleCancelStub }
  />);
  wrapper.setProps(requiredProps);

  it('Should render properly with default prop values', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render properly with optional prop values', () => {
    wrapper.setProps(optionalProps);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should call cancel method on cancel-button click', () => {
    handleOkStub.mockClear();
    handleCancelStub.mockClear();
    wrapper.find('Button.modal-cancel').simulate('click');

    expect(handleOkStub).not.toHaveBeenCalled();
    expect(handleCancelStub).toHaveBeenCalled();
  });

  it('Should call ok method on ok-button click', () => {
    handleOkStub.mockClear();
    handleCancelStub.mockClear();
    wrapper.find('Button.modal-ok').simulate('click');

    expect(handleCancelStub).not.toHaveBeenCalled();
    expect(handleOkStub).toHaveBeenCalled();
  });
});

