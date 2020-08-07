import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzq3aeGcdO5gyL0QqyVEjR3fbmbZCm8AA",
  authDomain: "tinder-app-132d1.firebaseapp.com",
  databaseURL: "https://tinder-app-132d1.firebaseio.com",
  projectId: "tinder-app-132d1",
  storageBucket: "tinder-app-132d1.appspot.com",
  messagingSenderId: "228623023581",
  appId: "1:228623023581:web:778428c2daa0fb5c81ca34",
  measurementId: "G-3RWNX5LX7L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
