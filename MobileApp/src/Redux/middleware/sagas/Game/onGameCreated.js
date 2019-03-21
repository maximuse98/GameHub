import { put } from 'redux-saga/effects'

import _ from 'lodash'

import NavigationService from 'Navigation/NavigationService'

import { chooseGame } from 'Constants/routes'

import { connectToGame } from 'Redux/actions/game'

function* onGameCreated(action) {
  console.log('onGameCreated', action)

  const newGameId = _.get(action, 'payload.data', null)

  if (newGameId) {
    console.log('connect to game ', newGameId)
    yield put(connectToGame(newGameId))
  } else {
    NavigationService.reset(chooseGame)
  }

  yield true
}

export default onGameCreated
