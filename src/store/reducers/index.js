import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';
import wordsReducer from './wordsReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  loading: loadingReducer,
  user: userReducer,
  words: wordsReducer
});



