import _ from 'lodash'

import { put, select } from 'redux-saga/effects'

import { setWaitingForPlayersState } from 'Redux/actions/common'

import { getActiveGame } from 'Redux/selectors/game'

const onPlayerConnected = function* onPlayerConnected(action) {
  console.log('onPlayerConnected', action)

  const nextPlayersCount = _.get(action, 'payload.data', null)

  if (nextPlayersCount) {
    const activeGame = yield select(getActiveGame)

    if (nextPlayersCount >= activeGame.playersCount) {
      yield put(setWaitingForPlayersState(false))
    }
  }

  yield true
}

export default onPlayerConnected
