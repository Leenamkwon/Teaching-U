import { combineReducers } from 'redux';
import auth from './authReducer';
import isFetching from './requestReducer';
import selectedService from './selectedService';
import services from './services';

const serviceApp = combineReducers({
  services: services,
  selectedService: selectedService,
  request: isFetching,
  auth: auth,
});

export default serviceApp;
