import { PROJECT_FIELDS } from 'constants/projectFields';
import getErrorText from 'services/utils/getErrorText';

// Constants
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const CHANGE_ARRAY_FIELD_VALUE = 'CHANGE_ARRAY_FIELD_VALUE';
export const ADD_ARRAY_FIELD_VALUE = 'ADD_ARRAY_FIELD_VALUE';
export const REMOVE_ARRAY_FIELD_VALUE = 'REMOVE_ARRAY_FIELD_VALUE';
export const GENERATE_PROJECT = 'GENERATE_PROJECT';
export const GENERATE_PROJECT_FAIL = 'GENERATE_PROJECT_FAIL';
export const GENERATE_PROJECT_SUCCESS = 'GENERATE_PROJECT_SUCCESS';

// Actions
export function changeFieldValue(name, value) {
  return {
    type: CHANGE_FIELD_VALUE,
    payload: {
      [name]: {
        value,
        errorText: getErrorText(name, value)
      }
    }
  };
}
export function changeFieldsValue(names = [], value) {
  return {
    type: CHANGE_FIELD_VALUE,
    payload: names.reduce((result, curr) => {
      result[curr] = {
        value,
        errorText: getErrorText(curr, value)
      };
      return result;
    }, {})
  };
}
export function changeArrayFieldValue(name, value) {
  return {
    type: CHANGE_ARRAY_FIELD_VALUE,
    payload: {
      name,
      value,
      errorText: getErrorText(name, value)
    }
  };
}
export function addArrayFieldValue(name) {
  return {
    type: ADD_ARRAY_FIELD_VALUE,
    payload: {
      name,
      errorText: ''
    }
  };
}
export function removeArrayFieldValue(name, index) {
  return {
    type: REMOVE_ARRAY_FIELD_VALUE,
    payload: {
      name,
      index
    }
  };
}
export function generateProject(fields) {
  const data = Object.keys(fields).reduce((result, key) => {
    result[key] = fields[key].value;
    return result;
  }, {});

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
export const changeArrayField = (name, value) => dispatch => dispatch(changeArrayFieldValue(name, value));
export const removeArrayField = (name, index) => dispatch => dispatch(removeArrayFieldValue(name, index));
export const addArrayField = name => dispatch => dispatch(addArrayFieldValue(name));
export const fetchGenerateProject = fields => dispatch => dispatch(generateProject(fields));

// Initial state
const initialState = {
  isLoading: false,
  generatedProject: null,
  fields: Object.keys(PROJECT_FIELDS)
    .reduce((fields, fieldName) => {
      const value = PROJECT_FIELDS[fieldName].defaultValue || '';

      if (Array.isArray(value)) {
        fields[fieldName] = {
          value: [],
          currentValue: value[0],
          errorText: getErrorText(fieldName, value[0])
        };
      } else {
        fields[fieldName] = {
          value,
          errorText: getErrorText(fieldName, value)
        };
      }
      return fields;
    }, {})
};

// Reducer
export default function projectReducer(state = initialState, action) {
  const { type, payload = {} } = action;
  const { data, name, value, errorText, index } = payload;

  switch (type) {
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
      generatedProject: new Blob([data], { type: 'application/octet-stream' })
    };
    break;
  case CHANGE_FIELD_VALUE:
    state = {
      ...state,
      fields: {
        ...state.fields,
        ...payload
      }
    };
    break;
  case CHANGE_ARRAY_FIELD_VALUE:
    state = {
      ...state,
      fields: {
        ...state.fields,
        [name]: {
          ...state.fields[name],
          currentValue: value,
          errorText
        }
      }
    };
    break;
  case ADD_ARRAY_FIELD_VALUE:
    state = {
      ...state,
      fields: {
        ...state.fields,
        [name]: {
          ...state.fields[name],
          value: [state.fields[name].currentValue, ...state.fields[name].value],
          currentValue: '',
          errorText
        }
      }
    };
    break;
  case REMOVE_ARRAY_FIELD_VALUE:
    state = {
      ...state,
      fields: {
        ...state.fields,
        [name]: {
          ...state.fields[name],
          value: state.fields[name].value.filter((item, idx) => idx !== index)
        }
      }
    };
    break;
  default:
    break;
  }
  return state;
}
