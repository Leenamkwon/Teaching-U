import firebase from 'config/firebase';

const db = firebase.firestore();

export const sendMessage = (message, collabId) => {
  return db.collection('collaborations').doc(collabId).collection('message').doc(`${message.timestamp}`).set(message);
};

export const subscribeMessage = (collabId, done) =>
  db
    .collection('collaborations')
    .doc(collabId)
    .collection('message')
    .onSnapshot((snapshot) => done(snapshot.docChanges()));
