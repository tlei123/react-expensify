import { firebase, googleAuthProvider, facebookAuthProvider, twitterAuthProvider, githubAuthProvider } from '../firebase/firebase';

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

export const startLoginGithub = () => {
  return () => {
    firebase.auth().signInWithPopup(githubAuthProvider);
  };
};

export const login = (user) => ({
  type: 'LOGIN',
  uid: user.uid,
  displayName: user.providerData[0].displayName,
  photoURL: user.providerData[0].photoURL
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
}

export const logout = () => ({
  type: 'LOGOUT'
});
