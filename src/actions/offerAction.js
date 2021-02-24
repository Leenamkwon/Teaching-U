import { createOfferFirebase } from '../firestore/firestoreService';

export function createOffer(offer) {
  return createOfferFirebase(offer);
}
