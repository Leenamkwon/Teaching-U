import db from '../firebase/firebase';

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
