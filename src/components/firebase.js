import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({

    apiKey: "AIzaSyBrCdyFqWbRqEw8dHhpSbz36wAd2_x7aak",
    authDomain: "todo-list-e1237.firebaseapp.com",
    projectId: "todo-list-e1237",
    storageBucket: "todo-list-e1237.appspot.com",
    messagingSenderId: "474890548236",
    appId: "1:474890548236:web:a0f73f1b27feabf1542a29",
    measurementId: "G-7QS9Y4S90V"
  });

  const db=firebaseApp.firestore();
  
  export default db;
  