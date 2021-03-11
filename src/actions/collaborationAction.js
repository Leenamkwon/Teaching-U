import {
  createCollaborationFirebase,
  createMessageFirebase,
  markOfferAsInCollaboration,
  subscribeToMessageFirebase,
  markMessageAsReadFirebase,
  fetchCollaborationsFirebase,
  subToCollaborationFirebase,
  joinCollaborationFirebase,
  leftCollaborationFirebase,
} from '../firestore/firestoreService';
import { FETCH_USER_MESSAGE_SUCCESS, SET_COLLABORATION, SET_COLLABORATION_JOINED_PEOPLE } from './collaborationConstants';
import { COLLABORATION_CREATED_FROM_OFFER } from './offerConstants';
import { ERROR_SERVICE } from './serviceActionsConstants';

export function collaboration({ collaboration, message }) {
  return async function (dispatch) {
    try {
      const data = await createCollaborationFirebase(collaboration);
      message.cta = `/collaborations/${data.id}`;
      await markOfferAsInCollaboration(collaboration.fromOffer);
      await createMessageFirebase(message);
      dispatch({
        type: COLLABORATION_CREATED_FROM_OFFER,
        payload: collaboration.fromOffer,
        offerType: 'sent',
      });
    } catch (error) {
      throw error;
    }
  };
}

export const subscribeToMessage = (userId) => (dispatch) => {
  return subscribeToMessageFirebase(userId, (message) => {
    dispatch({ type: FETCH_USER_MESSAGE_SUCCESS, payload: message });
  });
};

export const markMessageAsRead = (message) => async () => {
  await markMessageAsReadFirebase(message);
};

export const fetchCollaborations = (userId) => async () => {
  const collaborationDoc = await fetchCollaborationsFirebase(userId);
  return collaborationDoc;
};

export const subToCollaboration = (collabId) => (dispatch) => {
  return subToCollaborationFirebase(collabId, async (collaboration) => {
    let joinedPeople = [];

    if (!collaboration) {
      return dispatch({ type: ERROR_SERVICE, payload: 'not found collaboration' });
    }

    if (collaboration.joined.length > 0) {
      joinedPeople = await Promise.all(
        collaboration.joined.map(async (userRef) => {
          const userSnapshot = await userRef.get();
          return { ...userSnapshot.data() };
        })
      );
    }

    dispatch({ type: SET_COLLABORATION, payload: collaboration });
    dispatch({ type: SET_COLLABORATION_JOINED_PEOPLE, payload: joinedPeople });
  });
};

export const joinCollaboration = (collabId, uid) => {
  return joinCollaborationFirebase(collabId, uid);
};

export const leftCollaboration = (collabId, uid) => (dispatch) => {
  leftCollaborationFirebase(collabId, uid);
  dispatch({ type: 'LEFT_COLLABORATION', payload: uid });
};

export const subscribeUserStatusFirebase = (uid) => {
  return subscribeUserStatusFirebase(uid, (user) => {
    console.log(user);
  });
};
