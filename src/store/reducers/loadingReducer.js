import { SET_LOADING, RESET_STATE } from '../actions/types';

const initialState = false;

export default function loadingRedcucer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return !state
    case RESET_STATE:
      return initialState;
    default:
      return state
  }
}