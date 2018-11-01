import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const startLoginGoogle = () => {
  return () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLoginFacebook = () => {
  return () => {
    firebase.auth().signInWithPopup(facebookAuthProvider);
  };
};

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
}

export const logout = () => ({
  type: 'LOGOUT'
});
