import { registerFirebase, getUserProfile } from '../firestore/firestoreService';
import { SIGN_IN_USER, SIGN_OUT_USER } from './authConstants';
import firebase from '../config/firebase';

// NOT ACTIONS
export function register(payload) {
  return registerFirebase(payload);
}

export function signInUser(auth) {
  return {
    type: SIGN_IN_USER,
    payload: auth,
  };
}

export function signOutUser() {
  return { type: SIGN_OUT_USER };
}

export function verifyAuth() {
  return function (dispatch) {
    return firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          getUserProfile({ uid: user.uid, dispatch: (data) => dispatch(signInUser(data)) });
        } else {
          dispatch(signOutUser());
        }
      },
      (error) => console.log(error)
    );
  };
}
