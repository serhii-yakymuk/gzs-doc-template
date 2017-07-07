import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import axiosMiddleware from 'redux-axios-middleware';

import createRootReducer from './rootReducer';
import axiosClient from 'services/api/axiosClient';
import axiosMiddlewareConfig from 'services/api/axiosMiddlewareConfig';

const history = createBrowserHistory();
const middleware = [thunk, routerMiddleware(history), axiosMiddleware(axiosClient, axiosMiddlewareConfig)];
const rootReducer = connectRouter(history)(createRootReducer());
const enhancers = [];
const composeEnhancerseWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = process.env.NODE_ENV === 'development' && composeEnhancerseWithDevTools ?
  composeEnhancerseWithDevTools : compose;

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(connectRouter(history)(createRootReducer(store.asyncReducers)));
    });
  }
  return store;
};

export {
  history,
  configureStore
};
