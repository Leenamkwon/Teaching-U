import {
  END_SERVICE,
  ERROR_SERVICE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_SUCCESS,
  REQUEST_SERVICE,
} from './serviceActionsConstants';
import firebase from '../config/firebase';
import { listenToService, listenToSelectService, createServiceFirebase } from 'firestore/firestoreService';

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

export function fetchSelectedService(id) {
  return async function (dispatch, getState) {
    const { service } = getState();
    if (service.selectedService?.id === id) return;
    dispatch(requestService());
    try {
      const selectedService = await listenToSelectService(id);
      const selectedServiceUser = await firebase
        .firestore()
        .collection('user')
        .doc(selectedService.hostedId)
        .get();
      dispatch({
        type: FETCH_SERVICE_SUCCESS,
        payload: { ...selectedService, serviceByUser: selectedServiceUser.data() },
      });
      dispatch(endService());
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
