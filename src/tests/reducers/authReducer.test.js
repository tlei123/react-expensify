import authReducer from '../../reducers/authReducer';

test('Should set login state properly', () => {
  const uid = 'abc123!',
    displayName = 'Joe Blow',
    state = authReducer({}, {
      type: 'LOGIN',
      uid,
      displayName
    });

  expect(state).toEqual({ uid, displayName });
});

test('Should set logout state properly', () => {
  const state = authReducer({ uid: 'abc123!' }, { type: 'LOGOUT' });

  expect(state).toEqual({});
});
