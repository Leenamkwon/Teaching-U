import { signInUser, signOutUser } from 'actions/authAction';
import firebase from 'config/firebase';

const db = firebase.firestore();

export async function listenToService() {
  const services = await db.collection('services').get();
  const serviceDataFromFirestore = services.docs.map((item) => ({ id: item.id, ...item.data() }));
  return serviceDataFromFirestore;
}

export async function listenToSelectService(id) {
  const service = await db.collection('services').doc(id).get();
  return { id: service.id, ...service.data() };
}

export async function createServiceFirebase(newService) {
  const uid = firebase.auth().currentUser.uid;
  const docRef = await db.collection('services').add({ ...newService, hostedId: uid });
  return docRef.id;
}

///////////////////
//----------------- AUTH -----------------
//////////////////

export const createUserProfile = (userProfile) => {
  db.collection('user').doc(userProfile.uid).set(userProfile);
};

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

export const getUserProfile = ({ uid, dispatch }) => {
  db.collection('user')
    .doc(uid)
    .onSnapshot((snapshot) => {
      if (!snapshot.exists) return;
      dispatch(snapshot.data());
    });
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
