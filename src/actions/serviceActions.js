import {
  CLEAR_SERVICE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_SUCCESS,
  REQUEST_SERVICE,
} from './serviceActionsConstants';
import { listenToService, listenToSelectService } from 'firestore/firestoreService';

export const fetchServices = () => {
  return async function (dispatch) {
    try {
      const services = await listenToService();
      dispatch({
        type: FETCH_SERVICES_SUCCESS,
        payload: services,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function fetchSelectedService(id) {
  return async function (dispatch, getState) {
    const { service } = getState();
    if (service.selectedService?.id === id) return;
    dispatch(requestService());
    try {
      const selectedService = await listenToSelectService(id);
      dispatch({
        type: FETCH_SERVICE_SUCCESS,
        payload: selectedService,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function requestService() {
  return { type: REQUEST_SERVICE };
}

export function resetPreviousService() {
  return { type: CLEAR_SERVICE };
}
