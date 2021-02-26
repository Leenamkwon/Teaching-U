import {
  ERROR_SERVICE,
  FETCH_SERVICE_SUCCESS,
  REQUEST_SERVICE,
  END_SERVICE,
} from 'actions/serviceActionsConstants';

export default function isFetching(state = { loading: false, error: null }, { type, payload }) {
  switch (type) {
    case REQUEST_SERVICE:
      return { ...state, loading: true };
    case FETCH_SERVICE_SUCCESS:
      return { ...state, loading: false };
    case END_SERVICE:
      return { ...state, loading: false };
    case ERROR_SERVICE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
