const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

exports.onUserStatusChanged = functions.database.ref('/status/{uid}').onUpdate(async (snapshot, context) => {
  const eventStatus = snapshot.after.val();

  const userStatusFirestoreRef = db.doc(`/user/${context.params.uid}`);

  const statusSnapshot = await snapshot.after.ref.once('value');
  const status = statusSnapshot.val();

  if (status.last_changed > eventStatus.last_changed) {
    return null;
  }

  eventStatus.last_changed = new Date(eventStatus.last_changed);
  return userStatusFirestoreRef.update(eventStatus);
});
