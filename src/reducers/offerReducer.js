import { CHANGE_OFFER_STATUS, COLLABORATION_CREATED_FROM_OFFER, FETCH_OFFERS_SUCCESS } from 'actions/offerConstants';
import { combineReducers } from 'redux';

function createOfferList(defaultOfferType) {
  return (state = [], { type, payload, offerType, status }) => {
    if (defaultOfferType !== offerType) return state;

    switch (type) {
      case FETCH_OFFERS_SUCCESS:
        return payload;
      case CHANGE_OFFER_STATUS: {
        const nextState = [...state];
        const offerIndex = nextState.findIndex((o) => o.id === payload);
        nextState[offerIndex].status = status;
        return nextState;
      }
      case COLLABORATION_CREATED_FROM_OFFER:
        const nextState = [...state];
        const offerIndex = nextState.findIndex((o) => o.id === payload);
        nextState[offerIndex].collaborationCreated = true;
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
