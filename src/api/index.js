import firebase from '../firebase/firebase';

const db = firebase.firestore();

export async function servicesFromFirebase() {
  const snapshot = await db.collection('services').get();

  const services = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return services;
}

export async function serviceFromFirebase(id) {
  const snapshot = await db.collection('services').doc(id).get();

  const service = { id: snapshot.id, ...snapshot.data() };
  return service;
}

/* AUTH */

const createUserProfile = (userProfile) => {
  db.collection('profile')
    .doc(userProfile.uid)
    .set({ ...userProfile });
};

export const registerFirebase = async ({
  email,
  password,
  fullName,
  avatar,
}) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const { user } = response;
    const userProfile = {
      uid: user.uid,
      fullName,
      email,
      avatar,
      services: [],
      description: '',
    };
    createUserProfile(userProfile);

    return userProfile;
  } catch (error) {
    const errorMessage = error.message;
    throw errorMessage;
    // return promise.reject(errorMessage)
  }
};
