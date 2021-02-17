import serviceReducer from 'reducers/serviceReducer';
import { combineReducers } from 'redux';

export default function rootReducer() {
  return combineReducers({
    service: serviceReducer,
  });
}
