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

export { firebase, arrayFromSnapshot, db as default };

// db.ref('expenses').on('child_added', (snapshot) => {
//   console.info('Expense added', snapshot.key, snapshot.val());
// });

// db.ref('expenses').on('child_changed', (snapshot) => {
//   console.info('Expense changed', snapshot.key, snapshot.val());
// });

// db.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('Expense removed', snapshot.key, snapshot.val());
// });

// setTimeout(() => {
//   db.ref('expenses').push({
//     createdAt: 173847382,
//     amount: 12.38,
//     description: 'Tuner',
//     note: ''
//   });
// }, 3500);

// db.ref('expenses').
//   once('value').
//   then((snapshot) => {
//     const expenses = arrayFromSnapshot(snapshot);
//     console.log(expenses);
//   });

// const onExpensesDbChange = db.ref('expenses').on('value', (snapshot) => {
//   console.info('Expenses db changed:', arrayFromSnapshot(snapshot));
// });

// db.ref('expenses').push({
//   createdAt: 1738938478,
//   description: 'Latte',
//   amount: 499,
//   note: ''
// });

// db.ref('expenses').push({
//   createdAt: 1742938478,
//   description: 'Lunch',
//   amount: 897,
//   note: ''
// });

// db.ref('expenses').push({
//   createdAt: 1756238478,
//   description: 'Dinner',
//   amount: 12.48,
//   note: ''
// });

// db.ref('notes/-LPTUmif92R1sUKfht5V').remove();

// db.ref('notes').push({
//   title: 'Bass Strings',
//   body: 'For 4-string bass: E, A, D, G'
// });

// const fbNotes = {
//   notes: {
//     'id': {
//       title: 'Note Title',
//       body: 'This is my note'
//     }
//   },
//   'id2': {
//     title: 'Note Title',
//     body: 'This is my note'
//   }
// };

// const notes = [
//   {
//     id: 1,
//     title: 'Note Title',
//     body: 'This is my note'
//   },
//   {
//     id: 2,
//     title: 'Note Title2',
//     body: 'This is my note2'
//   },
//   {
//     id: 3,
//     title: 'Note Title3',
//     body: 'This is my note3'
//   }
// ];

// db.ref('notes').set(notes);

// const onDbChange = db.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.info(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (err) => {
//   console.warn('Data ERROR:', err);
// });

// subscribe to db changes
// const onValueChange = db.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (err) => {
//   console.warn('ERROR:', err);
// });

// setTimeout(() => {
//   db.ref('age').set(31);
// }, 3500);

// unsubscribe
// setTimeout(() => {
//   db.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   db.ref('age').set(32);
// }, 10500);

// db.ref('location/city').once('value').
//   then((snapshot) => {
//     console.log('Data fetched:', snapshot.val());
//   }).
//   catch((err) => {
//     console.warn('No data fetched:', err);
//   });

// db.ref().set({
//   name: 'Tzechiu Lei',
//   age: 56,
//   job: {
//     title: 'Bouncer',
//     company: 'Disneyland'
//   },
//   location: {
//     city: 'Bisbee',
//     state: 'AZ',
//     country: 'US'
//   },
//   stressLevel: 6,
// }).then(() => {
//   console.log('Data were saved.');
// }).catch((error) => {
//   console.warn('Firebase data set failed.');
// });

// db.ref().update({
//   // Use 'rootnode/childnode' notation for non-rootnode changes.
//   'job/company': 'Amazon',
//   'location/city': 'Seattla',
//   'location/state': 'WA',
//   stressLevel: 9
// });

// db.ref().remove(() => {
//   console.log('married was removed.');
// }).catch((error) => {
//   console.warn('married was NOT removed.', error);
// });
