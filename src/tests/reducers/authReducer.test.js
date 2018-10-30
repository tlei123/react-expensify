import authReducer from '../../reducers/authReducer';

test('Should set login state properly', () => {
  const uid = 'abc123!',
    state = authReducer({}, {
      type: 'LOGIN',
      uid
    });

  expect(state).toEqual({ uid });
});

test('Should set logout state properly', () => {
  const state = authReducer({ uid: 'abc123!' }, { type: 'LOGOUT' });

  expect(state).toEqual({});
});
