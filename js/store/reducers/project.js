// Constants
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const GENERATE_PROJECT_LOADING = 'GENERATE_PROJECT_LOADING';

// Actions
export function changeFieldValue(name, value) {
  return {
    type: CHANGE_FIELD_VALUE,
    payload: {
      [name]: value
    }
  };
}
export function changeFieldsValue(names = [], value) {
  return {
    type: CHANGE_FIELD_VALUE,
    payload: names.reduce((result, curr) => {
      result[curr] = value;
      return result;
    }, {})
  };
}
export function generateProjectLoading(isLoading = false) {
  return {
    type: GENERATE_PROJECT_LOADING,
    payload: isLoading
  };
}
// Specialized Action Creators
export const changeField = (name, value) => dispatch => dispatch(changeFieldValue(name, value));
export const changeFields = (names = [], value) => dispatch => dispatch(changeFieldsValue(names, value));
export const setGenerateProjectLoading = isLoading => dispatch => dispatch(generateProjectLoading(isLoading));

// Initial state
const initialState = {
  isLoading: false,
  fields: {
    firstNameWho: '',
    lastNameWho: '',
    middleNameWho: '',
    firstNameWhom: '',
    lastNameWhom: '',
    middleNameWhom: '',
    purpose: '02.01',
    propertyArea: '0,0000'
  }
};

// Reducer
export default function projectReducer(state = initialState, action) {
  switch (action.type) {
  case GENERATE_PROJECT_LOADING:
    state = {
      ...state,
      isLoading: action.payload
    };
    break;
  case CHANGE_FIELD_VALUE:
    state = {
      ...state,
      fields: {
        ...state.fields,
        ...action.payload
      }
    };
    break;
  default:
    break;
  }
  return state;
}
