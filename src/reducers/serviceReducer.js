import {
  // CLEAR_SERVICE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_SUCCESS,
} from 'actions/serviceActionsConstants';

const initialState = { services: [], selectedService: null };

export default function serviceReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_SERVICES_SUCCESS:
      return { ...state, services: payload };
    case FETCH_SERVICE_SUCCESS:
      return { ...state, selectedService: payload };
    // case CLEAR_SERVICE:
    //   return { ...state, selectedService: null };
    default:
      return { ...state };
  }
}
