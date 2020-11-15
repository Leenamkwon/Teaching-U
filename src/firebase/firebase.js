import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

/* SERVICE */

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'teachingu-762f7.firebaseapp.com',
  databaseURL: 'https://teachingu-762f7.firebaseio.com',
  projectId: 'teachingu-762f7',
  storageBucket: 'teachingu-762f7.appspot.com',
  messagingSenderId: '259993310086',
  appId: '1:259993310086:web:43d4abffadb49720ded207',
  measurementId: 'G-Y9VV3K1CZG',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
