import {
  FETCH_SIGHT_WORDS,
  CLEAR_SIGHT_WORDS,
  RESET_STATE
} from '../actions/types';

const initialState = {
  words: []
}

export default function wordsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SIGHT_WORDS:
      return {
        ...state,
        words: action.payload
      }
    case CLEAR_SIGHT_WORDS:
      return initialState
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}