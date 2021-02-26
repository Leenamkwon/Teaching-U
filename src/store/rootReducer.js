import serviceReducer from 'reducers/serviceReducer';
import asyncReducer from 'reducers/asyncReducer';
import { combineReducers } from 'redux';
import { authReducer } from 'reducers/authReducer';
import { offers } from 'reducers/offerReducer';

export default function rootReducer() {
  return combineReducers({
    service: serviceReducer,
    async: asyncReducer,
    auth: authReducer,
    offer: offers,
  });
}
