import * as firebase from 'firebase';

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

const arrayFromSnapshot = (snapshot) => {
  const arr = [];
  snapshot.forEach((childSnapshot) => {
    arr.push({
      id: childSnapshot.key,
      ...childSnapshot.val() 
    });
  });

  return arr;
};

export {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
  githubAuthProvider,
  arrayFromSnapshot,
  db as default
};
