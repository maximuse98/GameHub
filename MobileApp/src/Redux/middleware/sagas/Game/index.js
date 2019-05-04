import { takeLatest } from 'redux-saga/effects'

// action types
import {
  CREATE_GAME,
  CONNECT_TO_GAME,
  PLAYER_CONNECTED,
  SEND_ANSWER,
} from 'Redux/actions/game'

import onGameCreated from './onGameCreated'
import onConnectToGameSuccess from './onConnectToGameSuccess'
import onPlayerConnected from './onPlayerConnectedSuccess'
import onSendAnswerSuccess from './onSendAnswerSuccess'
import 'regenerator-runtime/runtime'

const gameSaga = function* gameSaga() {
  yield takeLatest(CREATE_GAME.SUCCESS, onGameCreated)
  yield takeLatest(CONNECT_TO_GAME.SUCCESS, onConnectToGameSuccess)
  yield takeLatest(PLAYER_CONNECTED.SUCCESS, onPlayerConnected)
  yield takeLatest(SEND_ANSWER.SUCCESS, onSendAnswerSuccess)
}

export default gameSaga
