import axios from 'axios';

import rootUrl from '../../config/config';
import { setRequestHeaders } from '../../utils/utils';
import { showAlert, clearAlert, setError, setServerError } from './index';

import {
  SET_LOADING,
  FETCH_SIGHT_WORDS,
  UPDATE_SIGHT_WORD
} from './types';

export const fetchSightWords = (token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch({
    type: SET_LOADING
  });

  try {
    const response = await axios.get(`${rootUrl}/sight-words`, { headers: { ...options } });

    if (response.data.status === 'error') {
      dispatch(setError(response.data.message));
    } else {
      dispatch({
        type: FETCH_SIGHT_WORDS,
        payload: response.data.data.sightWords
      })
    }

  } catch (err) {
    dispatch(setError(setServerError(err)));
  }

  dispatch({
    type: SET_LOADING
  });
}

export const insertSightWord = (wordData, token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch({
    type: SET_LOADING
  });

  try {
    const response = await axios.post(`${rootUrl}/sight-words-insert`, { word: wordData.word, syllables: wordData.syllables }, { headers: { ...options } });

    if (response.data.status === 'error') {
      dispatch(setError(response.data.message));
    } else {
      dispatch(fetchSightWords(token));
    }
  } catch (err) {
    dispatch(setError(setServerError(err)));
  }

  dispatch({
    type: SET_LOADING
  });
}

export const updateSightWord = (wordId, token, params) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch({
    type: SET_LOADING
  });

  try {
    const response = await axios.put(`${rootUrl}/sight-words-update/${wordId}`, { ...params }, { headers: { ...options } });

    if (response.data.status === 'error') {
      dispatch(setError(response.data.message));
    } else {
      dispatch({
        type: UPDATE_SIGHT_WORD
      });
    }

    dispatch(fetchSightWords(token));
  } catch (err) {
    dispatch(setError(setServerError(err)));
  }

  dispatch({
    type: SET_LOADING
  });
}

export const deleteSightWord = (wordId, token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch({
    type: SET_LOADING
  });

  try {
    const response = await axios.delete(`${rootUrl}/sight-words-delete/${wordId}`, { headers: { ...options } }, null);

    if (response.data.status === 'error') {
      dispatch(setError(response.data.message));
    } else {
      dispatch(fetchSightWords(token));
    }
  } catch (err) {
    dispatch(setError(setServerError(err)));
  }

  dispatch({
    type: SET_LOADING
  });
}