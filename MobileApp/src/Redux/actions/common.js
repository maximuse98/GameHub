import { createAsyncAction } from 'Helpers/redux'

export const SHOW_ERROR = 'common/SHOW_ERROR'
export const showError = message => {
  return {
    type: SHOW_ERROR,
    payload: {
      data: message,
    },
  }
}

export const CLEAR_ERROR = 'common/CLEAR_ERROR'
export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  }
}

export const SET_REQUEST_STATUS = 'common/SET_REQUEST_STATUS'
export const setRequestStatus = (status, message) => {
  return {
    type: SET_REQUEST_STATUS,
    payload: { isRequest: status, requestMessage: message },
  }
}

export const SET_WAITING_FOR_PALYERS_STATUS =
  'common/SET_WAITING_FOR_PALYERS_STATUS'
export const setWaitingForPlayersState = (status, message) => {
  return {
    type: SET_WAITING_FOR_PALYERS_STATUS,
    payload: { isRequest: status, requestMessage: message },
  }
}

export const CREATE_SOCKET_CONNECTION = createAsyncAction(
  'socket/CREATE_SOCKET_CONNECTION',
)
export const createSocketConnection = () => {
  return {
    type: CREATE_SOCKET_CONNECTION.REQUEST,
  }
}
