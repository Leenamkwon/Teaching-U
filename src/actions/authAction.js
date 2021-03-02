import { registerFirebase } from '../firestore/firebaseService';
import { getUserProfile } from '../firestore/firestoreService';
import { APP_LOADED, SIGN_IN_USER, SIGN_OUT_USER } from './authConstants';
import firebase from '../config/firebase';
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
  let subscribeMessage;
  return function (dispatch) {
    return firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          getUserProfile({ uid: user.uid, dispatch: (action) => dispatch(action) });
          subscribeMessage = dispatch(subscribeToMessage(user.uid));
        } else {
          subscribeMessage();
          dispatch(signOutUser());
          dispatch({ type: APP_LOADED });
        }
      },
      (error) => console.log(error)
    );
  };
}
