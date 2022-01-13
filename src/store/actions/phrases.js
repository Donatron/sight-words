import axios from 'axios';

import rootUrl from '../../config/config';
import { setRequestHeaders } from '../../utils/utils';
import { showAlert, clearAlert, setError, setLoading, setServerError } from './index';
import { FETCH_PHRASES } from './types';

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
    await axios.post(`${rootUrl}/phrases`, { phrase }, { headers: { ...options } });

    dispatch(showAlert('success', 'phrasesList', 'New phrase added successfully'))
    dispatch(fetchPhrases(token));
    // }
  } catch (err) {
    dispatch(showAlert('danger', 'phrasesList', err.response.data.message));
  }

  setTimeout(() => {
    dispatch(clearAlert());
  }, 5000);

  dispatch(setLoading());
}

export const updatePhrase = (phraseId, token, params) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch(setLoading());

  try {
    await axios.patch(`${rootUrl}/phrases/${phraseId}`, { ...params }, { headers: { ...options } });

    dispatch(showAlert('success', 'phrasesList', 'Phrase updated successfully'));
    dispatch(fetchPhrases(token));
  } catch (err) {
    dispatch(showAlert('danger', 'phrasesList', err.response.data.message));
  }

  setTimeout(() => {
    dispatch(clearAlert());
  }, 3000);

  dispatch(setLoading());
}

export const deletePhrase = (phraseId, token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch(setLoading());

  try {
    await axios.delete(`${rootUrl}/phrases/${phraseId}`, { headers: { ...options } }, null);

    dispatch(showAlert('success', 'phrasesList', 'Phrase deleted successfully'));
    dispatch(fetchPhrases(token));
    // }
  } catch (err) {
    dispatch(showAlert('danger', 'phrasesList', err.response.data.message));
  }

  setTimeout(() => {
    dispatch(clearAlert());
  }, 3000);

  dispatch(setLoading());
}