import serviceReducer from 'reducers/serviceReducer';
import asyncReducer from 'reducers/asyncReducer';
import { combineReducers } from 'redux';

export default function rootReducer() {
  return combineReducers({
    service: serviceReducer,
    async: asyncReducer,
  });
}
