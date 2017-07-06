import { combineReducers } from 'redux';
import incrementReducer from './reducers/increment';

export const createRootReducer = asyncReducers => {
  return combineReducers({
    numbers: incrementReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (!store.asyncReducers.hasOwnProperty(key)) {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createRootReducer(store.asyncReducers));
  }
};

export default createRootReducer;
