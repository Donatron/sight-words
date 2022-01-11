import {
  SET_ERROR,
  CLEAR_ERROR,
  SHOW_ALERT,
  CLEAR_ALERT
} from './types';

let serverError = 'System error. Please try again later.';

export const setServerError = (err) => {
  if (err.response && err.response.data.message) serverError = err.response.data.message;
  return serverError
}

export const setError = (message) => {
  return {
    type: SET_ERROR,
    payload: {
      message
    }
  }
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}

export const showAlert = (type, location, message) => {
  return {
    type: SHOW_ALERT,
    payload: {
      type,
      location,
      message
    }
  }
}

export const clearAlert = () => {
  return {
    type: CLEAR_ALERT
  }
}