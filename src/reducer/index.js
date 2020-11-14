import { combineReducers } from 'redux';
import isFetching from './requestReducer';
import selectedService from './selectedService';
import services from './services';

const serviceApp = combineReducers({
  services: services,
  selectedService: selectedService,
  request: isFetching,
});

export default serviceApp;
