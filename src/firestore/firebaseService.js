import firebase from 'config/firebase';
import { createFirebaseRef } from './connection';
import { createUserProfile } from './firestoreService';

export const registerFirebase = async ({ email, password, fullName, avatar }) => {
  try {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const { user } = result;
    const registeredUser = { uid: user.uid, fullName, email, avatar, services: [], description: '' };
    createUserProfile(registeredUser);
  } catch (error) {
    throw error;
  }
};

export const loginFirebase = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signoutFirebase = async () => {
  const user = firebase.auth().currentUser;
  await createFirebaseRef('status', user.uid).set({
    state: 'offline',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
  });
  await firebase.auth().signOut();
};
