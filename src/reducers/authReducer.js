import { SIGN_IN_USER, SIGN_OUT_USER } from 'actions/authConstants';

const initialState = {
  currentUser: null,
  authenticated: false,
  initialLoad: false,
};

export function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN_USER:
      return { ...state, currentUser: payload, authenticated: true };
    case SIGN_OUT_USER:
      return { ...state, currentUser: null, authenticated: false };
    case 'APP_LOADED':
      return { ...state, initialLoad: true };
    default:
      return state;
  }
}
