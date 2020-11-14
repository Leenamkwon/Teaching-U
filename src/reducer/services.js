import { FETCH_SERVICES_SUCCESS } from 'types';

const INITIAL_STATE = [];

const services = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_SERVICES_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default services;
