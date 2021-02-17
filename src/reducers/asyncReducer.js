import { FETCH_SERVICE_SUCCESS, REQUEST_SERVICE } from 'actions/serviceActionsConstants';

export default function isFetching(state = false, { type, payload }) {
  switch (type) {
    case REQUEST_SERVICE:
      return true;
    case FETCH_SERVICE_SUCCESS:
      return false;
    default:
      return state;
  }
}
