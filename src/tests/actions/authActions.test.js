import React from 'react';
import { login, logout } from '../../actions/authActions';

test('Should login properly', () => {
  const uid = 'abc123!',
    displayName = 'Joe Blow',
    photoURL = 'https://www.example.com/101561916926181/picture',
    userSigninObj = {
      uid,
      providerData: [
        {
          displayName,
          photoURL
        }
      ]
    },
    action = login(userSigninObj);

  expect(action).toEqual({
    type: 'LOGIN',
    uid,
    displayName,
    photoURL
  });
});

test('Should logout properly', () => {
  const action = logout();

  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
