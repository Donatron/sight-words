import axios from 'axios';

import rootUrl from '../../config/config';
import { showAlert, clearAlert, setLoading, setServerError } from './index';

import {
  SET_AUTH_TOKEN,
  RESET_STATE,
  FETCH_USER,
} from './types';

const setAuthToken = (token) => {
  return {
    type: SET_AUTH_TOKEN,
    payload: `Bearer ${token}`
  }
}

export const loginUser = (user) => async (dispatch) => {
  const loginData = {
    userName: user.userName,
    password: user.password
  }

  dispatch(setLoading());

  try {
    const response = await axios.post(`${rootUrl}/users/login`, loginData);

    dispatch(setAuthToken(response.data.token));
    dispatch(fetchUser(response.data.data.user));
  } catch (err) {
    dispatch(showAlert('danger', 'login', err.response.data.message));

    // setTimeout(() => {
    //   dispatch(clearAlert());
    // }, 5000);
  }

  dispatch(setLoading());
}

export const registerUser = (userData) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.post(`${rootUrl}/users/signup`, userData);

    dispatch(showAlert('success', 'register', response.data.message));
  } catch (err) {
    dispatch(showAlert('danger', 'register', err.response.data.message));
  }

  setTimeout(() => {
    dispatch(clearAlert());
  }, 5000);

  dispatch(setLoading());
}

export const confirmEmail = (token) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.patch(`${rootUrl}/users/emailConfirm/${token}`);

    dispatch(showAlert('success', 'confirmEmail', 'Thanks for confirming your email!'));

    dispatch(setAuthToken(response.data.token));
    dispatch(fetchUser(response.data.data.user));

  } catch (err) {
    dispatch(showAlert('danger', 'confirmEmail', err.response.data.message));
  }

  setTimeout(() => {
    dispatch(clearAlert());
  }, 5000);

  dispatch(setLoading());
}

export const logoutUser = () => {
  return {
    type: RESET_STATE
  }
}

export const forgotPassword = (user) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.post(`${rootUrl}/users/forgotPassword`, user);

    dispatch(showAlert('success', 'forgotPassword', response.data.message));
  } catch (err) {
    dispatch(showAlert('danger', 'forgotPassword', err.response.data.message));
  }

  setTimeout(() => {
    dispatch(clearAlert())
  }, 5000);

  dispatch(setLoading());
}

export const resetPassword = (userData, token) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.patch(`${rootUrl}/users/resetPassword/${token}`, userData);

    dispatch(showAlert('success', 'resetPassword', 'Password reset successfully'));
    dispatch(setAuthToken(response.data.token));
    dispatch(fetchUser(response.data.data.user));
  } catch (err) {
    dispatch(showAlert('danger', 'resetPassword', err.response.data.message));
  }

  setTimeout(() => {
    dispatch(clearAlert())
  }, 5000);

  dispatch(setLoading());
}

const fetchUser = (user) => {
  return {
    type: FETCH_USER,
    payload: user
  }
}