import { CHANGE_OFFER_STATUS, FETCH_OFFERS_SUCCESS } from 'actions/offerConstants';
import { combineReducers } from 'redux';

function createOfferList(defaultOfferType) {
  return (state = [], { type, payload, offerType, status }) => {
    if (defaultOfferType !== offerType) return state;

    switch (type) {
      case FETCH_OFFERS_SUCCESS:
        return payload;
      case CHANGE_OFFER_STATUS:
        const nextState = [...state];
        const offerIndex = nextState.findIndex((o) => o.id === payload);
        nextState[offerIndex].status = status;
        return nextState;
      default:
        return state;
    }
  };
}

export const offers = combineReducers({
  sent: createOfferList('sent'),
  received: createOfferList('received'),
});
