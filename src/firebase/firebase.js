import firebase from 'firebase/app';
import 'firebase/firestore';

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

const db = firebase.initializeApp(firebaseConfig).firestore();

const { Timestamp } = firebase.firestore;
export { Timestamp };

export default db;
