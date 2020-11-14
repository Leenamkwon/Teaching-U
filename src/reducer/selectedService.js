import { FETCH_SERVICE_SUCCESS } from 'types';

const INITIAL_STATE = {};

const selectedService = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_SERVICE_SUCCESS:
      return { ...payload };
    default:
      return state;
  }
};

export default selectedService;
