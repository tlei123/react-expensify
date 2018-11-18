import React from 'react';
import { shallow } from 'enzyme';
import ConfirmModal from '../../components/ConfirmModal';

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

test('Should render properly with default prop values', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should render properly with optional prop values', () => {
  wrapper.setProps(optionalProps);

  expect(wrapper).toMatchSnapshot();
});

test('Should call cancel method on cancel-button click', () => {
  handleOkStub.mockClear();
  handleCancelStub.mockClear();
  wrapper.find('button.modal-cancel').simulate('click');

  expect(handleOkStub).not.toHaveBeenCalled();
  expect(handleCancelStub).toHaveBeenCalled();
});

test('Should call ok method on ok-button click', () => {
  handleOkStub.mockClear();
  handleCancelStub.mockClear();
  wrapper.find('button.modal-ok').simulate('click');

  expect(handleCancelStub).not.toHaveBeenCalled();
  expect(handleOkStub).toHaveBeenCalled();
});
