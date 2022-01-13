import axios from 'axios';

import rootUrl from '../../config/config';
import { setRequestHeaders } from '../../utils/utils';
import { showAlert, clearAlert, setError, setLoading, setServerError } from './index';

import { FETCH_SIGHT_WORDS } from './types';

export const fetchSightWords = (token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch(setLoading());

  try {
    const response = await axios.get(`${rootUrl}/sight-words`,
      { headers: { ...options } }
    );

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

  dispatch(setLoading());
}

export const insertSightWord = (wordData, token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch(setLoading());

  try {
    await axios.post(`${rootUrl}/sight-words`,
      {
        word: wordData.word,
        syllables: wordData.syllables
      },
      { headers: { ...options } }
    );

    dispatch(showAlert('success', 'sightWordsList', 'New sight word added successfully'));
    dispatch(fetchSightWords(token));
  } catch (err) {
    dispatch(showAlert('danger', 'sightWordsList', err.response.data.message));
  }

  setTimeout(() => {
    dispatch(clearAlert());
  }, 3000);

  dispatch(setLoading());
}

export const updateSightWord = (wordId, token, params) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch(setLoading());

  try {
    await axios.patch(`${rootUrl}/sight-words/${wordId}`,
      { ...params },
      { headers: { ...options } }
    );

    dispatch(showAlert('success', 'sightWordsList', 'Sight word updated successfully'));

    dispatch(fetchSightWords(token));
  } catch (err) {
    dispatch(showAlert('danger', 'sightWordsList', err.response.data.message));
  }

  setTimeout(() => {
    dispatch(clearAlert());
  }, 3000);

  dispatch(setLoading());
}

export const deleteSightWord = (wordId, token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch(setLoading());

  try {
    await axios.delete(`${rootUrl}/sight-words/${wordId}`,
      { headers: { ...options } },
      null
    );

    dispatch(showAlert('success', 'sightWordsList', 'Sight word deleted successfully'))
    dispatch(fetchSightWords(token));
  } catch (err) {
    dispatch(showAlert('danger', 'sightWordsList', err.response.data.message));
  }
  setTimeout(() => {
    dispatch(clearAlert())
  }, 3000);

  dispatch(setLoading());
}