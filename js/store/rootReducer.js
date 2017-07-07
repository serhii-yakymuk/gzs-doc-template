import { combineReducers } from 'redux';
import projectReducer from 'reducers/project';
import notificationsReducer from 'reducers/notifications';

export const createRootReducer = asyncReducers => {
  return combineReducers({
    project: projectReducer,
    notifications: notificationsReducer,
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
