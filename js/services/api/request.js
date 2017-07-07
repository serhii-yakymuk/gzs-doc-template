import axios, { CancelToken } from 'axios';
import { browserHistory } from 'react-router';
import { showNotification } from 'reducers/notifications';


let defaultOptions = {};
let pendingRequests = [];
const BASE_URL = process.env.API_URL;

const errorHandler = {
  'PUT': {
    '401': () => browserHistory.replace('/notAuthenticated'),
    '403': () => browserHistory.replace('/notAuthorized')
  },
  'POST': {
    '401': () => browserHistory.replace('/notAuthenticated'),
    '403': () => browserHistory.replace('/notAuthorized')
  },
  'GET': {
    '401': () => browserHistory.replace('/notAuthenticated'),
    '403': () => browserHistory.replace('/notAuthorized'),
    '404': () => browserHistory.replace('/notFound')
  }
};

const successNotificationsHandler = {
  'POST': (dispatch, message) => dispatch(showNotification({type: 'success', message: message || DEFAULT_POST_MESSAGE})),
  'PUT': (dispatch, message) => dispatch(showNotification({type: 'success', message: message || DEFAULT_PUT_MESSAGE})),
  'DELETE': (dispatch, message) => dispatch(showNotification({type: 'success', message: message || DEFAULT_DELETE_MESSAGE}))
};

function init(options) {
  defaultOptions = Object.assign({}, defaultOptions, options);
}

const handleError = reject => error => {
  const {config = {method: ''}, response = {}} = error;
  const method = config.method.toUpperCase();
  const {status = 0, data = {}} = response;
  const {dispatch} = defaultOptions;
  const {message} = error;

  if (message === 'isCanceled') {
    return reject({isCanceled: true});
  }
  if (config.silent) {
    return reject(error);
  }

  if (data.meta) {
    dispatch(showNotification({ type: 'error', message: data.meta.message }));
    return reject(error);
  }

  if (typeof dispatch === 'function') {
    dispatch(showNotification({type: 'error', message}));
  }

  if (errorHandler[method] && errorHandler[method][status]) {
    errorHandler[method][status]();
  }

  return reject(error);
};

const handleSuccess = (resolve, reject, message) => response => {
  const {config, data = {}} = response;
  const method = config.method.toUpperCase();
  const {dispatch} = defaultOptions;

  if (config.cancelToken) {
    pendingRequests = pendingRequests.filter(item => item.token !== config.cancelToken);
  }

  if (data.meta && data.meta.message) {
    dispatch(showNotification({type: 'warning', message: data.meta.message}));
    return resolve(response);
  }

  if (successNotificationsHandler[method]) {
    successNotificationsHandler[method](dispatch, message);
  }

  resolve(response);
};

function cancelRequests(name) {
  pendingRequests.forEach(req => {
    if (!name || name === req.name) req.source.cancel('isCanceled');
  });
  pendingRequests = name ? pendingRequests.filter(req => req.name !== name) : [];
}

function request(options, message, name = '') {
  const source = CancelToken.source();
  const requestOptions = Object.assign({}, options, {
    baseURL: BASE_URL,
    cancelToken: source.token,
    headers: Object.assign({}, options.header || {}, {
      'Accept': 'application/json'
    }),
    withCredentials: true
  });

  if (!requestOptions.hasOwnProperty('method')) {
    if (name) cancelRequests(name);
    pendingRequests.push({ source, name });
  }

  return new Promise((resolve, reject) => {
    axios(requestOptions)
      .then(handleSuccess(resolve, reject, message))
      .catch(handleError(reject));
  });
}

export {
  request,
  init
};

