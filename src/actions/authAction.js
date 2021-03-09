import { registerFirebase } from '../firestore/firebaseService';
import firebase from '../config/firebase';
import { APP_LOADED, SIGN_IN_USER, SIGN_OUT_USER } from './authConstants';
import { subscribeToMessage } from './collaborationAction';

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
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          firebase
            .firestore()
            .collection('user')
            .doc(user.uid)
            .onSnapshot((snapshot) => {
              if (!snapshot.exists) return;
              dispatch(signInUser(snapshot.data()));
              dispatch({ type: APP_LOADED });
            });
          dispatch(subscribeToMessage(user.uid));
        } else {
          dispatch(signOutUser());
          dispatch({ type: APP_LOADED });
        }
      },
      (error) => console.log(error)
    );
  };
}
