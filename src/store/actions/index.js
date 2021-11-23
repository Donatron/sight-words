import axios from 'axios';

import rootUrl from '../../config/config';

export const SET_LOADING = 'SET_LOADING';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';
export const FETCH_USER = 'FETCH_USER';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const FETCH_SIGHT_WORDS = 'FETCH_SIGHT_WORDS';
export const CLEAR_SIGHT_WORDS = 'CLEAR_SIGHT_WORDS';
export const RESET_STATE = 'RESET_STATE';

export const loginUser = (user) => async (dispatch) => {
  const loginData = {
    email: user.email,
    password: user.password
  }

  try {
    const response = await axios.post(`${rootUrl}/login`, loginData);

    if (response.data.status === 'error') {
      dispatch(setError(response.data.message));
    } else {
      dispatch(fetchUser(user.email, response.data.token));
      dispatch({
        type: SET_AUTH_TOKEN,
        payload: response.data.token
      });
    }

  } catch (err) {
    dispatch(setError('System error. Please try again later.'));
  }
}

export const logoutUser = () => {
  return {
    type: RESET_STATE
  }
}

export const fetchUser = (email, token) => async (dispatch) => {
  const options = {
    "Content-type": "application/json",
    "x-auth-token": token
  }

  try {
    const response = await axios.get(`${rootUrl}/user`, { headers: { ...options } });

    if (response.data.status === 'error') {
      dispatch(setError(response.data.message));
    } else {
      dispatch({
        type: FETCH_USER,
        payload: response.data
      })
    }
  } catch (err) {
    dispatch(setError('System error. Please try again later.'));
  }
}

export const fetchSightWords = (token) => async (dispatch) => {
  const options = {
    "Content-type": "application/json",
    "x-auth-token": token
  }

  try {
    const response = await axios.get(`${rootUrl}/sight-words`, { headers: { ...options } });

    if (response.data.status === 'error') {
      dispatch(setError('Unable to load sight words. Please try again'));
    } else {
      dispatch({
        type: FETCH_SIGHT_WORDS,
        payload: response.data.result
      })
    }

  } catch (err) {
    dispatch(setError('System error. Please try again later.'));
  }
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