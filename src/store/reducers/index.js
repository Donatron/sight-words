import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import phrasesReducer from './phrasesReducer';
import userReducer from './userReducer';
import wordsReducer from './wordsReducer';

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  error: errorReducer,
  loading: loadingReducer,
  phrases: phrasesReducer,
  user: userReducer,
  words: wordsReducer
});



