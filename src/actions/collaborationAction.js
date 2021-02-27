import {
  createCollaborationFirebase,
  createMessageFirebase,
  markOfferAsInCollaboration,
} from '../firestore/firestoreService';
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
