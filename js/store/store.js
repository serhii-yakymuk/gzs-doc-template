import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import createRootReducer from './rootReducer';

const history = createBrowserHistory();

const configureStore = (initialState = {}) => {
  const middleware = [thunk, routerMiddleware(history)];
  const rootReducer = connectRouter(history)(createRootReducer());
  const enhancers = [];
  const composeEnhancerseWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = process.env.NODE_ENV === 'development' && composeEnhancerseWithDevTools ?
    composeEnhancerseWithDevTools : compose;
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
      store.replaceReducer(createRootReducer(store.asyncReducers));
    });
  }
  return store;
};

export {
  history,
  configureStore
};
