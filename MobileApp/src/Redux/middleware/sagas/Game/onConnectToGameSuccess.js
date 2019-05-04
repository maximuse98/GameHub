import _ from 'lodash'

import { put } from 'redux-saga/effects'

import NavigationService from 'Navigation/NavigationService'

import { game as gameRoute } from 'Constants/routes'

import { setWaitingForPlayersState } from 'Redux/actions/common'

const onConnectToGameSuccess = function* onConnectToGameSuccess(action) {
  console.log('onConnectToGameSuccess', action)

  const gameData = _.get(action, 'payload.data', null)

  if (gameData) {
    NavigationService.reset(gameRoute)

    console.log('gameData', gameData, gameData.playersCount, gameData.currentPlayersCount)

    if (gameData.playersCount !== gameData.currentPlayersCount) {
      yield put(setWaitingForPlayersState(true, 'Waiting for players'))
    }
  }

  yield true
}

export default onConnectToGameSuccess
