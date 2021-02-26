import { combineReducers } from 'redux';

function createOfferList(defaultOfferType) {
  return (state = [], { type, payload, offerType }) => {
    if (defaultOfferType !== offerType) return state;

    switch (type) {
      case 'FETCH_OFFERS_SUCCESS':
        return payload;
      default:
        return state;
    }
  };
}

export const offers = combineReducers({
  sent: createOfferList('sent'),
  received: createOfferList('received'),
});
