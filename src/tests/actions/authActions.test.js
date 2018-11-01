import React from 'react';
import { login, logout } from '../../actions/authActions';

test('Should login properly', () => {
  const uid = 'abc123!',
    displayName = 'Joe Blow',
    action = login({ uid, displayName });

  expect(action).toEqual({
    type: 'LOGIN',
    uid,
    displayName
  });
});

test('Should logout properly', () => {
  const action = logout();

  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
