import { FETCH_SERVICES } from 'actions/serviceActionsConstants';

const initialState = { services: [] };

export default function serviceReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_SERVICES:
      return { ...state, services: payload };
    default:
      return { ...state };
  }
}
