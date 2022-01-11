import { SET_AUTH_TOKEN, CLEAR_AUTH_TOKEN, RESET_STATE } from '../actions/types';

const initialState = {
  token: null
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case CLEAR_AUTH_TOKEN:
      return {
        ...state,
        token: null
      }
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}