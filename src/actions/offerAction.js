import { createOfferFirebase, fetchSentOffersFirebase } from '../firestore/firestoreService';
import { FETCH_OFFERS_SUCCESS } from './offerConstants';
import { endService, errorService, requestService } from './serviceActions';

export function createOffer(offer) {
  return createOfferFirebase(offer);
}

async function extractDataFromOffer(offer, userType) {
  const service = await offer.service.get();
  const user = await offer[userType].get();

  offer.service = service.data();
  offer[userType] = user.data();

  return offer;
}

export const fetchSentOffers = (query, offerType) => async (dispatch) => {
  dispatch(requestService());
  try {
    const sentOffers = await fetchSentOffersFirebase(query);
    const mappedOffers = await Promise.all(
      sentOffers.map((offer) => extractDataFromOffer(offer, 'fromUser'))
    );
    dispatch({ type: FETCH_OFFERS_SUCCESS, payload: mappedOffers, offerType });
    dispatch(endService());
  } catch (error) {
    dispatch(errorService());
  }
};
