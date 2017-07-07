import { showToast } from 'reducers/notifications';

export default {
  interceptors: {
    response: [{
      success: ({ dispatch }, req) => {
        dispatch(showToast({message: 'Request complete', type: 'success'}));
        return req;
      },
      error: ({ dispatch }, err) => {
        dispatch(showToast({message: 'Request error', type: 'error'}));
        return Promise.reject(err);
      }
    }]
  }
};
