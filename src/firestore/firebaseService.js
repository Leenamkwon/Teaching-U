import firebase from 'config/firebase';
import { signInUser, signOutUser } from 'actions/authAction';
import { createUserProfile, getUserProfile } from './firestoreService';

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
  await firebase.auth().signOut();
};

export const onAuthStateChange = (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      getUserProfile({ uid: user.uid, dispatch: (data) => dispatch(signInUser(data)) });
    } else {
      console.log(user);
      dispatch(signOutUser());
    }
  });
};
