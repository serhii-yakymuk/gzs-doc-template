// Constants
export const INCREMENT_VALUE = 'INCREMENT_VALUE';
export const DECREMENT_VALUE = 'DECREMENT_VALUE';

// Actions
export function incrementValue() {
  return {
    type: INCREMENT_VALUE
  };
}
export function decrementValue() {
  return {
    type: DECREMENT_VALUE
  };
}
// Specialized Action Creators
export const increment = () => dispatch => dispatch(incrementValue());
export const decrement = () => dispatch => dispatch(decrementValue());

// Initial state
const initialState = {
  value: 0
};

// Reducer
export default function incrementReducer(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_VALUE:
    state = {
      ...state,
      value: state.value + 1
    };
    break;
  case DECREMENT_VALUE:
    state = {
      ...state,
      value: state.value - 1
    };
    break;
  default:
    break;
  }
  return state;
}
