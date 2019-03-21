import _ from 'lodash'

import { createReducer } from 'Helpers/redux'

import {
  FETCH_GAME_LIST,
  FETCH_SCENARIO_LIST,
  GAME_CREATED,
  CONNECT_TO_GAME,
  SEND_ANSWER,
} from 'Redux/actions/game'

const initalState = {
  gameList: [],
  activeGame: null,
  activeScene: null,
  scenarioList: [],
}

const handlers = {
  [FETCH_GAME_LIST.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      gameList: payload.data,
    }
  },
  [FETCH_SCENARIO_LIST.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      scenarioList: payload.data,
    }
  },
  [GAME_CREATED.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      gameList: [...(state.gameList || []), payload.data],
    }
  },
  [CONNECT_TO_GAME.SUCCESS]: (prevState, { payload }) => {
    const newGame = _.get(payload, 'data', {})

    return {
      ...prevState,
      activeGame: newGame,
      activeScene: newGame.startScene,
    }
  },
  [SEND_ANSWER.SUCCESS]: (prevState, { payload }) => {
    if (!_.isObject(payload.data)) {
      return prevState
    }

    return {
      ...prevState,
      activeScene: payload.data,
    }
  },
}

export default createReducer(initalState, handlers)
