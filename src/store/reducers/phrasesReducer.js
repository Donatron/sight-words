import { FETCH_PHRASES, CLEAR_PHRASES, RESET_STATE } from '../actions';

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