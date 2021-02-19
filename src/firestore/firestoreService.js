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

//----------------- AUTH -----------------

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
