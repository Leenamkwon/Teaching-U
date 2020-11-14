import { servicesFromFirebase, serviceFromFirebase } from 'api';
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

/* 
const services = [
  {
    id: '2asd8sa7d98',
    user: 'some_id_1',
    category: 'mathematics',
    title: 'I will teach you math fast!',
    description:
      'I am teaching highschool mathematics, algebra, triogometry. I can teach you anything!',
    price: 10, //per hour
    image:
      'https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 'ssa9d789as7',
    user: 'some_id_2',
    category: 'programming',
    title: 'I will teach you Programming fast!',
    description: 'I am teaching C++, C#, JS ...',
    price: 10, //per hour
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
]; */
