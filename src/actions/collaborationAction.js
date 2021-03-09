import {
  createCollaborationFirebase,
  createMessageFirebase,
  markOfferAsInCollaboration,
  subscribeToMessageFirebase,
  markMessageAsReadFirebase,
  fetchCollaborationsFirebase,
  subToCollaborationFirebase,
} from '../firestore/firestoreService';
import { FETCH_USER_MESSAGE_SUCCESS, SET_COLLABORATION, SET_COLLABORATION_JOINED_PEOPLE } from './collaborationConstants';
import { COLLABORATION_CREATED_FROM_OFFER } from './offerConstants';

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

export const subToCollaboration = (collabId) => (dispatch) =>
  subToCollaborationFirebase(collabId, async (collaboration) => {
    let joinedPeople = [];

    if (collaboration.joined) {
      joinedPeople = await Promise.all(
        collaboration.joined.map(async (userRef) => {
          const userSnapshot = await userRef.get();
          return { id: userSnapshot.id, ...userSnapshot.data() };
        })
      );
    }
    dispatch({ type: SET_COLLABORATION, payload: collaboration });
    dispatch({ type: SET_COLLABORATION_JOINED_PEOPLE, payload: joinedPeople });
  });
