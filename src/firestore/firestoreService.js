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
