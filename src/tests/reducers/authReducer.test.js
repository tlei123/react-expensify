import authReducer from '../../reducers/authReducer';

describe('authReducer', () => {
  it('Should set login state properly', () => {
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

  it('Should set logout state properly', () => {
    const state = authReducer({ uid: 'abc123!' }, { type: 'LOGOUT' });

    expect(state).toEqual({});
  });
});
