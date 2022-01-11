import axios from 'axios';

import rootUrl from '../../config/config';
import { setRequestHeaders } from '../../utils/utils';

export const SET_LOADING = 'SET_LOADING';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';
export const FETCH_USER = 'FETCH_USER';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const FETCH_SIGHT_WORDS = 'FETCH_SIGHT_WORDS';
export const INSERT_SIGHT_WORD = 'INSERT_SIGHT_WORD';
export const UPDATE_SIGHT_WORD = 'UPDATE_SIGHT_WORD';
export const DELETE_SIGHT_WORD = 'DELETE_SIGHT_WORD';
export const CLEAR_SIGHT_WORDS = 'CLEAR_SIGHT_WORDS';
export const FETCH_PHRASES = 'FETCH_PHRASES';
export const INSERT_PHRASE = 'INSERT_PHRASE';
export const UPDATE_PHRASE = 'UPDATE_PHRASE';
export const DELETE_PHRASE = 'DELETE_PHRASE';
export const CLEAR_PHRASES = 'CLEAR_PHRASES';
export const RESET_STATE = 'RESET_STATE';
export const SHOW_ALERT = 'SHOW_ALERT';
export const CLEAR_ALERT = 'CLEAR_ALERT';

let serverError = 'System error. Please try again later.';

const setServerError = (err) => {
  if (err.response && err.response.data.message) serverError = err.response.data.message;
  return serverError
}

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
      dispatch(showAlert('danger', 'login', 'Something went wrong here...'));

      setTimeout(() => {
        dispatch(clearAlert());
      }, 5000);
    } else {
      // Show alert
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

export const fetchPhrases = (token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch({
    type: SET_LOADING
  });

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

  dispatch({
    type: SET_LOADING
  });
}

export const insertPhrase = (phrase, token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch({
    type: SET_LOADING
  });

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

  dispatch({
    type: SET_LOADING
  });
}

export const updatePhrase = (phraseId, token, params) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch({
    type: SET_LOADING
  });

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

  dispatch({
    type: SET_LOADING
  });
}

export const deletePhrase = (phraseId, token) => async (dispatch) => {
  const options = setRequestHeaders(token);

  dispatch({
    type: SET_LOADING
  });

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

  dispatch({
    type: SET_LOADING
  });
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