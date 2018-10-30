import React from 'react';
import { login, logout } from '../../actions/authActions';

test('Should login properly', () => {
  const uid = 'abc123!',
    action = login(uid);

  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('Should logout properly', () => {
  const action = logout();

  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
