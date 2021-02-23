import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// const addLoggerToDispatch = (store) => {
//   const dispatch = store.dispatch;

//   return (action) => {
//     console.log(action.type);
//     console.log(store.getState());
//     console.log(action);
//     dispatch(action);
//   };
// };

export function configureStore() {
  const store = createStore(rootReducer(), composeWithDevTools(applyMiddleware(thunk)));
  return store;
}
