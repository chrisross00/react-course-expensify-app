import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed event
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed event
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added event
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref()

// // database.ref('expenses')
// //   .on('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });



// // database.ref('expenses').push({
// //   description: 'descr1',
// //   note: 'note1',
// //   amount: 1,
// //   createdAt: 0
// // })

// // database.ref('notes').set(notes);



// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // })



// // database.ref().update({
// //   name: 'David',
// //   'job/title': 'Software Developer',
// //   'job/company': 'VisitPay'
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetching', e);
// // });

// // setTimeout(() => {
// //   database.ref('age').set(28);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off('value', onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(29);
// // }, 10500);


// // database.ref('location')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({
// //   name: 'Chris Ross',
// //   age: 28,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Product Manager',
// //     company: 'VisitPay'
// //   },
// //   location: {
// //     city: 'Boise',
// //     country: 'USA'
// //   }
// // }).then(() => {
// //   console.log('Person data saved successfully');
// // }).catch((e) => {
// //   console.log('This failed', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // }).then(() => {
// //   console.log('Updated job info');
// // }).catch((e) => {
// //   console.log('Failed to update job info', e);
// // });


// // database.ref('age').set(300);
// // database.ref('location/city').set('Boston');

// // // Promises with Firebase
// // //
// // database.ref('attributes').set({
// //   height: 69,
// //   weight: 1500
// // }).then(() => {
// //   console.log('Attribute data saved successfully');
// // }).catch((e) => {
// //   console.log('Attribute add error: ', e);
// // });

// // // Removing Data with Firebase
// //
// // database.ref('isSingle')
// //   .remove().then(() => {
// //     console.log('Data removed successfully');
// //   }).catch((e) => {
// //     console.log('Data removal error', e);
// //   });

// // database.ref('isSingle').set(null);
