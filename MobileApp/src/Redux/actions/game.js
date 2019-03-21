import { createAsyncAction } from 'Helpers/redux'

import socketTypes from 'Constants/socketTypes'

import { socketCall } from './highOrderActions'

export const FETCH_GAME_LIST = createAsyncAction(
  `socket/${socketTypes.fetchGamesList.toUpperCase()}`,
)
export const fetchGameList = callback => {
  return socketCall({
    types: FETCH_GAME_LIST,
    withActivityLoader: true,
    callback,
    socketType: socketTypes.fetchGamesList,
    isRequest: true,
  })
}

export const FETCH_SCENARIO_LIST = createAsyncAction(
  `socket/${socketTypes.fetchScenarioList.toUpperCase()}`,
)
export const fetchScenarioList = callback => {
  return socketCall({
    types: FETCH_SCENARIO_LIST,
    withActivityLoader: true,
    callback,
    socketType: socketTypes.fetchScenarioList,
    isRequest: true,
  })
}

export const CREATE_GAME = createAsyncAction(
  `socket/${socketTypes.createGame.toUpperCase()}`,
)
export const createGame = (data, callback) => {
  return socketCall({
    types: CREATE_GAME,
    query: data,
    withActivityLoader: true,
    callback,
    socketType: socketTypes.createGame,
    isRequest: true,
  })
}

export const GAME_CREATED = createAsyncAction(
  `socket/${socketTypes.gameCreated.toUpperCase()}`,
)

export const CONNECT_TO_GAME = createAsyncAction(
  `socket/${socketTypes.connectToGame.toUpperCase()}`,
)
export const connectToGame = (data, callback) => {
  return socketCall({
    types: CONNECT_TO_GAME,
    query: data,
    withActivityLoader: true,
    callback,
    socketType: socketTypes.connectToGame,
    isRequest: true,
  })
}

export const PLAYER_CONNECTED = createAsyncAction(
  `socket/${socketTypes.playerConnected.toUpperCase()}`,
)

export const SEND_ANSWER = createAsyncAction(
  `socket/${socketTypes.sendAnswer.toUpperCase()}`,
)
export const sendAnswer = (answer, callback) => {
  return socketCall({
    types: SEND_ANSWER,
    query: answer,
    withActivityLoader: true,
    callback,
    socketType: socketTypes.sendAnswer,
    isRequest: true,
  })
}

export const NEXT_SCENE = createAsyncAction(
  `socket/${socketTypes.nextScene.toUpperCase()}`,
)
