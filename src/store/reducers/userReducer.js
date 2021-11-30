import { FETCH_USER, RESET_STATE } from '../actions';

const initialState = {
  user: {
    id: null,
    userName: null
  }
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: { ...action.payload }
      }
    case RESET_STATE:
      return initialState;
    default:
      return state
  }
}