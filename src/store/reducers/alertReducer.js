import { SHOW_ALERT, CLEAR_ALERT } from '../actions/types'

const initialState = {
  showAlert: false,
  alertType: null,
  location: null,
  message: null
}

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: action.payload.type,
        location: action.payload.location,
        message: action.payload.message
      }
    case CLEAR_ALERT:
      return initialState
    default:
      return state
  }
}

