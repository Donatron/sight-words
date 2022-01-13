import {
  FETCH_PHRASES,
  INSERT_PHRASE,
  UPDATE_PHRASE,
  DELETE_PHRASE,
  CLEAR_PHRASES,
  RESET_STATE
} from '../actions/types';

const initialState = {
  phrases: []
}

export default function phrasesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHRASES:
      return {
        ...state,
        phrases: action.payload
      }
    case INSERT_PHRASE:
    case UPDATE_PHRASE:
    case DELETE_PHRASE:
      return state
    case CLEAR_PHRASES:
      return {
        ...state,
        phrases: []
      }
    case RESET_STATE:
      return initialState
    default:
      return state
  }
}