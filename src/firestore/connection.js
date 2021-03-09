import firebase from 'config/firebase';

export const createFirebaseRef = (collection, id) => firebase.database().ref(`/${collection}/${id}`);

export const onConnectionChanges = (callback) => {
  firebase
    .database()
    .ref('.info/connected')
    .on('value', (snapshot) => {
      callback(snapshot.val());
    });
};

export const offlineStatus = {
  state: 'offline',
  last_changed: firebase.database.ServerValue.TIMESTAMP,
};

export const onlineStatus = {
  state: 'online',
  last_changed: firebase.database.ServerValue.TIMESTAMP,
};
