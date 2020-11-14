import { FETCH_SERVICE_SUCCESS, REQUEST_SERVICES } from 'types';

const INITIAL_STATE = false;

const isFetching = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case REQUEST_SERVICES:
      return true;
    case FETCH_SERVICE_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isFetching;
