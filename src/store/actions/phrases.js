import axios from 'axios';

import rootUrl from '../../config/config';
import { setRequestHeaders } from '../../utils/utils';
import { showAlert, clearAlert, setError, setLoading, setServerError } from './index';

import {
  SET_LOADING,
  FETCH_PHRASES,
  UPDATE_PHRASE,
} from './types';

export const fetchPhrases = (token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch(setLoading());

  try {
    const response = await axios.get(`${rootUrl}/phrases`, { headers: { ...options } });

    if (response.data.status === 'error') {
      dispatch(setError(response.data.message));
    } else {
      dispatch({
        type: FETCH_PHRASES,
        payload: response.data.data.phrases
      });
    }
  } catch (err) {
    dispatch(setError(setServerError(err)));
  }

  dispatch(setLoading());
}

export const insertPhrase = (phrase, token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch(setLoading());

  try {
    const response = await axios.post(`${rootUrl}/phrases-insert`, { phrase }, { headers: { ...options } });

    if (response.data.status === 'error') {
      dispatch(setError(response.data.message))
    } else {
      dispatch(fetchPhrases(token));
    }
  } catch (err) {
    dispatch(setError(setServerError(err)));
  }

  dispatch(setLoading());
}

export const updatePhrase = (phraseId, token, params) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch(setLoading());

  try {
    const response = await axios.put(`${rootUrl}/phrases-update/${phraseId}`, { ...params }, { headers: { ...options } });

    if (response.data.status === 'error') {
      dispatch(setError(response.data.message));
    } else {
      dispatch({
        type: UPDATE_PHRASE
      });
    }

    dispatch(fetchPhrases(token));
  } catch (err) {
    dispatch(setError(setServerError(err)));
  }

  dispatch(setLoading());
}

export const deletePhrase = (phraseId, token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch(setLoading());

  try {
    const response = await axios.delete(`${rootUrl}/phrases-delete/${phraseId}`, { headers: { ...options } }, null);

    if (response.data.status === 'error') {
      dispatch(setError('Unable to delete phrase at the moment. Please try again later.'));
    } else {
      dispatch(fetchPhrases(token));
    }
  } catch (err) {
    dispatch(setError(setServerError(err)));
  }

  dispatch(setLoading());
}