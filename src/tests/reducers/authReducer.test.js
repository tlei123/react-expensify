import authReducer from '../../reducers/authReducer';

test('Should set login state properly', () => {
  const uid = 'abc123!',
    displayName = 'Joe Blow',
    photoURL = 'https://www.example.com/101561916926181/picture',
    state = authReducer({}, {
      type: 'LOGIN',
      uid,
      displayName,
      photoURL
    });

  expect(state).toEqual({ uid, displayName, photoURL });
});

test('Should set logout state properly', () => {
  const state = authReducer({ uid: 'abc123!' }, { type: 'LOGOUT' });

  expect(state).toEqual({});
});
