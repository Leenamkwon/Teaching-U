import serviceReducer from 'reducers/serviceReducer';
import asyncReducer from 'reducers/asyncReducer';
import { combineReducers } from 'redux';
import { authReducer } from 'reducers/authReducer';
import { offers } from 'reducers/offerReducer';
import initCollaboraions from 'reducers/collaborationReducer';

export default function rootReducer() {
  return combineReducers({
    service: serviceReducer,
    async: asyncReducer,
    auth: authReducer,
    offer: offers,
    collaboration: initCollaboraions(),
  });
}
