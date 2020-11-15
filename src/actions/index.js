import {
  servicesFromFirebase,
  serviceFromFirebase,
  registerFirebase,
  loginFirebase,
} from 'api';
import {
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_SUCCESS,
  REQUEST_SERVICES,
} from 'types';

export const fetchServices = () => {
  return async (dispatch) => {
    try {
      const services = await servicesFromFirebase();
      dispatch({ type: FETCH_SERVICES_SUCCESS, payload: services });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchServiceById = (serviceId) => {
  return async (dispatch, state) => {
    const lastService = state().selectedService.id;

    if (lastService && serviceId === lastService) return Promise.resolve();

    dispatch(resetPreviousService());
    dispatch(requestService());
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      const service = await serviceFromFirebase(serviceId);
      dispatch({
        type: FETCH_SERVICE_SUCCESS,
        payload: service,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const requestService = () => {
  return { type: REQUEST_SERVICES };
};

export const resetPreviousService = () => {
  return { type: FETCH_SERVICE_SUCCESS, payload: {} };
};

export const register = async (registerFormData) => {
  try {
    await registerFirebase({ ...registerFormData });
  } catch (error) {
    throw error;
  }
};

export const login = async (loginData) => {
  try {
    await loginFirebase(loginData);
  } catch (error) {
    throw error;
  }
};
