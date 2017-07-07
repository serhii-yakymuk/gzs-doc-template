// Constants
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

// Actions
export function showToast(notification) {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      ...notification,
      id: Math.random().toString(36).substr(2, 9)
    }
  };
}
export function hideToast(id) {
  return {
    type: HIDE_NOTIFICATION,
    payload: id
  };
}

// Specialized Action Creators
export const showNotification = notification => dispatch => dispatch(showToast(notification));
export const hideNotification = id => dispatch => dispatch(hideToast(id));

// Initial state
const initialState = [];

// Reducer
export default function notificationsReducer(state = initialState, action) {
  switch (action.type) {
  case SHOW_NOTIFICATION:
    state = [
      ...state,
      action.payload
    ];
    break;
  case HIDE_NOTIFICATION:
    state = state.filter(item => item.id !== action.payload);
    break;
  default:
    break;
  }
  return state;
}
