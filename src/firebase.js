import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDbO5oXlTofnhQ4lbgMJIatreo0tRMYLCA",
    authDomain: "theshoppies-7b17c.firebaseapp.com",
    projectId: "theshoppies-7b17c",
    storageBucket: "theshoppies-7b17c.appspot.com",
    messagingSenderId: "318050505775",
    appId: "1:318050505775:web:ec38fea5fff46391f4a2da",
    measurementId: "G-GPG3TG9MDB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db