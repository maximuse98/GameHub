import { createReducer } from 'Helpers/redux'

import {
  SHOW_ERROR,
  CLEAR_ERROR,
  SET_REQUEST_STATUS,
  CREATE_SOCKET_CONNECTION,
  SET_WAITING_FOR_PALYERS_STATUS,
} from 'Redux/actions/common'

const initialState = {
  socketIp: null,
  request: { isRequest: true, requestMessage: 'Searching for socket' },
  isWaitingForPlayers: {
    isRequest: false,
    requestMessage: null,
  },
  errorMessage: null,
}

const handlers = {
  [SHOW_ERROR]: (state, { payload }) => {
    return {
      ...state,
      errorMessage: payload.data,
    }
  },
  [CLEAR_ERROR]: state => {
    return {
      ...state,
      errorMessage: null,
    }
  },
  [SET_REQUEST_STATUS]: (state, { payload }) => {
    return {
      ...state,
      request: payload,
    }
  },
  [CREATE_SOCKET_CONNECTION.SUCCESS]: (prevState, { payload }) => {
    return {
      ...prevState,
      socketIp: payload.data,
      request: {
        isRequest: false,
        requestMessage: null,
      },
    }
  },
  [SET_WAITING_FOR_PALYERS_STATUS]: (state, { payload }) => {
    return {
      ...state,
      isWaitingForPlayers: payload,
    }
  },
}

export default createReducer(initialState, handlers)
