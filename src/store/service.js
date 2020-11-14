import serviceApp from 'reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const addLoggerToDispatch = (store) => {
//   const dispatch = store.dispatch;

//   return (action) => {
//     const returnValue = dispatch(action);
//     return returnValue;
//   };
// };

const initStore = () => {
  const store = createStore(
    serviceApp,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default initStore;
