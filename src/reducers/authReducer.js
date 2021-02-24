import { APP_LOADED, SIGN_IN_USER, SIGN_OUT_USER } from 'actions/authConstants';
import { FETCH_USER_SERVICES } from 'actions/userConstants';

const initialState = {
  currentUser: null,
  authenticated: false,
  initialLoad: false,
  myServices: [],
};

export function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN_USER:
      return { ...state, currentUser: payload, authenticated: true };
    case SIGN_OUT_USER:
      return { ...state, currentUser: null, authenticated: false, myServices: [] };
    case APP_LOADED:
      return { ...state, initialLoad: true };
    case FETCH_USER_SERVICES:
      return { ...state, myServices: payload };
    default:
      return state;
  }
}
