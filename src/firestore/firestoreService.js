import firebase from 'config/firebase';
import { signInUser } from 'actions/authAction';

const db = firebase.firestore();

export const createRef = (collection, docId) => db.doc(`${collection}/${docId}`);

/* 

  SERVICE

*/
export async function listenToService() {
  const services = await db.collection('services').get();
  const serviceDataFromFirestore = services.docs.map((item) => ({ id: item.id, ...item.data() }));
  return serviceDataFromFirestore;
}

export async function listenToSelectService(id) {
  const service = await db.collection('services').doc(id).get();
  return { id: service.id, ...service.data() };
}

export async function listenToUserService() {
  const uid = firebase.auth().currentUser.uid;
  try {
    const snapshot = await db.collection('services').where('hostedId', '==', uid).get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
}

export async function createServiceFirebase(newService) {
  const user = firebase.auth().currentUser;
  const docRef = await db.collection('services').add({
    ...newService,
    hostedId: user.uid,
    hostedDisplayName: user.displayName,
    hostedPhotoURL: user.photoURL,
  });
  return docRef.id;
}

export const createUserProfile = (userProfile) => {
  db.collection('user').doc(userProfile.uid).set(userProfile);
};

export const getUserProfile = ({ uid, dispatch }) => {
  db.collection('user')
    .doc(uid)
    .onSnapshot((snapshot) => {
      if (!snapshot.exists) return;
      dispatch(signInUser(snapshot.data()));
      dispatch({ type: 'APP_LOADED' });
    });
};

/* 

OFFER

*/
export const createOfferFirebase = (offer) => db.collection('offers').add(offer);

export const fetchSentOffersFirebase = async (query) => {
  const user = firebase.auth().currentUser;
  const userRef = createRef('user', user.uid);
  const snapshot = await db.collection('offers').where(query, '==', userRef).get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const changeOfferStatusFirebase = (offer, status) => {
  return db.collection('offers').doc(offer.id).update({ status });
};
