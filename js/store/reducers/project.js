import { PROJECT_FIELDS } from 'constants/projectFields';
// Constants
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const GENERATE_PROJECT = 'GENERATE_PROJECT';
export const GENERATE_PROJECT_FAIL = 'GENERATE_PROJECT_FAIL';
export const GENERATE_PROJECT_SUCCESS = 'GENERATE_PROJECT_SUCCESS';

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
export function generateProject(data) {
  return {
    type: GENERATE_PROJECT,
    payload: {
      request: {
        method: 'post',
        url: '/project',
        responseType: 'arraybuffer',
        data
      }
    }
  };
}
// Specialized Action Creators
export const changeField = (name, value) => dispatch => dispatch(changeFieldValue(name, value));
export const changeFields = (names = [], value) => dispatch => dispatch(changeFieldsValue(names, value));
export const fetchGenerateProject = data => dispatch => dispatch(generateProject(data));

// Initial state
const initialState = {
  isLoading: false,
  generatedProject: null,
  fields: Object.keys(PROJECT_FIELDS)
    .reduce((fields, fieldName) => {
      fields[fieldName] = PROJECT_FIELDS[fieldName].defaultValue;
      return fields;
    }, {})
};

// Reducer
export default function projectReducer(state = initialState, action) {
  switch (action.type) {
  case GENERATE_PROJECT:
    state = {
      ...state,
      isLoading: true
    };
    break;
  case GENERATE_PROJECT_FAIL:
    state = {
      ...state,
      isLoading: false,
      generatedProject: null
    };
    break;
  case GENERATE_PROJECT_SUCCESS:
    state = {
      ...state,
      isLoading: false,
      generatedProject: new Blob([action.payload.data], { type: 'application/octet-stream' })
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
