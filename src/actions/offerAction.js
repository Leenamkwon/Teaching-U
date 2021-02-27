import {
  changeOfferStatusFirebase,
  createOfferFirebase,
  fetchSentOffersFirebase,
} from '../firestore/firestoreService';
import { CHANGE_OFFER_STATUS, FETCH_OFFERS_SUCCESS } from './offerConstants';
import { endService, errorService, requestService } from './serviceActions';

export function createOffer(offer) {
  return createOfferFirebase(offer);
}

async function extractDataFromOffer(offer, userType) {
  userType === 'fromUser' ? (userType = 'toUser') : (userType = 'fromUser');
  const service = await offer.service.get();
  const user = await offer[userType].get();

  offer.service = service.data();
  offer.service.id = service.id;
  offer[userType] = user.data();

  return offer;
}

export const fetchSentOffers = (query, offerType) => async (dispatch) => {
  dispatch(requestService());
  try {
    const sentOffers = await fetchSentOffersFirebase(query);
    const mappedOffers = await Promise.all(sentOffers.map((offer) => extractDataFromOffer(offer, query)));
    dispatch({ type: FETCH_OFFERS_SUCCESS, payload: mappedOffers, offerType });
    dispatch(endService());
  } catch (error) {
    dispatch(errorService(error.message));
  }
};

export const changeOfferStatus = (offer, status) => async (dispatch) => {
  dispatch(requestService());
  try {
    await changeOfferStatusFirebase(offer, status);
    dispatch({ type: CHANGE_OFFER_STATUS, payload: offer.id, status, offerType: 'received' });
    dispatch(endService());
  } catch (error) {
    dispatch(errorService(error.message));
  }
};
