import axios from 'axios';

import rootUrl from '../../config/config';
import { setRequestHeaders } from '../../utils/utils';
import { showAlert, clearAlert, setError, setServerError } from './index';

import {
  SET_LOADING,
  SET_AUTH_TOKEN,
  RESET_STATE,
  FETCH_USER
} from './types';

export const loginUser = (user) => async (dispatch) => {
  const loginData = {
    userName: user.userName,
    password: user.password
  }

  dispatch({
    type: SET_LOADING
  });

  let response;

  try {
    response = await axios.post(`${rootUrl}/users/login`, loginData);

    dispatch({
      type: SET_AUTH_TOKEN,
      payload: `Bearer ${response.data.token}`
    });
  } catch (err) {
    dispatch(showAlert('danger', 'login', err.response.data.message));

    setTimeout(() => {
      dispatch(clearAlert());
    }, 5000);
  }

  dispatch({
    type: SET_LOADING
  });
}

export const registerUser = (userData) => async (dispatch) => {
  dispatch({
    type: SET_LOADING
  });

  try {
    const response = await axios.post(`${rootUrl}/users/signup`, userData);

    if (response.data.status === 'error') {
      dispatch(showAlert('danger', 'register', 'Something went wrong here...'));

      setTimeout(() => {
        dispatch(clearAlert());
      }, 5000);
    } else {
      dispatch(showAlert('success', 'register', response.data.message));

      setTimeout(() => {
        dispatch(clearAlert());
      }, 5000);
    }
  } catch (err) {
    dispatch(showAlert('danger', 'register', err.response.data.message));

    setTimeout(() => {
      dispatch(clearAlert());
    }, 5000);
  }

  dispatch({
    type: SET_LOADING
  });
}

export const confirmEmail = (token) => async (dispatch) => {
  dispatch({
    type: SET_LOADING
  });

  try {
    const response = await axios.patch(`${rootUrl}/users/emailConfirm/${token}`);

    if (response.data.status === 'error') {
      dispatch(showAlert('danger', 'confirmEmail', 'Something went wrong here...'));

      setTimeout(() => {
        dispatch(clearAlert());
      }, 5000);
    } else {
      dispatch(showAlert('success', 'confirmEmail', 'Thanks for confirming your email!'));

      setTimeout(() => {
        dispatch(clearAlert());
      }, 5000);
    }
  } catch (err) {
    dispatch(showAlert('danger', 'confirmEmail', err.response.data.message));

    setTimeout(() => {
      dispatch(clearAlert());
    }, 5000);
  }

  dispatch({
    type: SET_LOADING
  });
}

export const logoutUser = () => {
  return {
    type: RESET_STATE
  }
}

export const fetchUser = (email, token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch({
    type: SET_LOADING
  });

  try {
    const response = await axios.get(`${rootUrl}/user`, { headers: { ...options } });

    if (response.data.status === 'error') {
      dispatch(setError(response.data.message));
    } else {
      dispatch({
        type: FETCH_USER,
        payload: response.data[0]
      })
    }
  } catch (err) {
    dispatch(setError(setServerError(err)));
  }

  dispatch({
    type: SET_LOADING
  });
}