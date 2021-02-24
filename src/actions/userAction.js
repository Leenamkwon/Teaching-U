import { listenToUserService } from 'firestore/firestoreService';
import { endService, errorService, requestService } from './serviceActions';
import { FETCH_USER_SERVICES } from './userConstants';

export function fetchUserServices() {
  return async function (dispatch) {
    dispatch(requestService());
    try {
      const data = await listenToUserService();
      dispatch({ type: FETCH_USER_SERVICES, payload: data });
      dispatch(endService());
    } catch (error) {
      dispatch(errorService(error));
    }
  };
}
