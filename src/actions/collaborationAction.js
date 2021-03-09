import {
  createCollaborationFirebase,
  createMessageFirebase,
  markOfferAsInCollaboration,
  subscribeToMessageFirebase,
  markMessageAsReadFirebase,
  fetchCollaborationsFirebase,
} from '../firestore/firestoreService';
import { FETCH_USER_MESSAGE_SUCCESS } from './collaborationConstants';
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
