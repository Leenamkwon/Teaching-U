import {
  END_SERVICE,
  ERROR_SERVICE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_SUCCESS,
  REQUEST_SERVICE,
} from './serviceActionsConstants';
import {
  listenToService,
  listenToSelectService,
  createServiceFirebase,
  listenToUserService,
} from 'firestore/firestoreService';

export function requestService() {
  return { type: REQUEST_SERVICE };
}

export function errorService(error) {
  return { type: ERROR_SERVICE, payload: error };
}

export function endService() {
  return { type: END_SERVICE };
}

export function fetchServices() {
  return async function (dispatch, getState) {
    const { service: serviceReducer } = getState();
    try {
      const services = await listenToService();
      if (services.length === serviceReducer.services.length) return;
      dispatch({
        type: FETCH_SERVICES_SUCCESS,
        payload: services,
      });
    } catch (error) {
      dispatch(errorService(error));
      console.log(error);
    }
  };
}

export function fetchUserServices(params) {
  return async function (dispatch) {
    try {
      const data = await listenToUserService();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchSelectedService(id) {
  return async function (dispatch, getState) {
    const { service } = getState();
    if (service.selectedService?.id === id) return dispatch({ type: END_SERVICE });
    dispatch(requestService());
    try {
      const selectedService = await listenToSelectService(id);
      dispatch({
        type: FETCH_SERVICE_SUCCESS,
        payload: selectedService,
      });
    } catch (error) {
      dispatch(errorService(error));
      console.log(error);
    }
  };
}

// NOT ACTION CREATEOR
export function createService(newService) {
  newService.price = parseInt(newService.price, 10);
  return createServiceFirebase(newService);
}
