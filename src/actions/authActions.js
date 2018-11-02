import { firebase, googleAuthProvider, facebookAuthProvider, twitterAuthProvider } from '../firebase/firebase';

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

export const startLoginTwitter = () => {
  return () => {
    firebase.auth().signInWithPopup(twitterAuthProvider);
  };
};

export const login = (user) => ({
  type: 'LOGIN',
  uid: user.uid,
  displayName: user.displayName,
  photoURL: user.photoURL
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
}

export const logout = () => ({
  type: 'LOGOUT'
});
