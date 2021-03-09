import { createFirebaseRef, offlineStatus, onConnectionChanges, onlineStatus } from 'firestore/connection';

export const checkUserConnection = (uid) => {
  const userStatusDatabaseRef = createFirebaseRef('status', uid);

  onConnectionChanges((isConnected) => {
    if (!isConnected) {
      // 연결 안됨
      userStatusDatabaseRef.set(offlineStatus);
      return;
    } else {
      // 연결됨
      userStatusDatabaseRef
        .onDisconnect()
        .set(offlineStatus)
        .then((_) => userStatusDatabaseRef.set(onlineStatus));
    }
  });
};
