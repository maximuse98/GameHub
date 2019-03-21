import _ from 'lodash'

import { put } from 'redux-saga/effects'

import { setWaitingForPlayersState } from 'Redux/actions/common'

function* onSendAnswerSuccess(action) {
  console.log('onSendAnswerSuccess', action)

  const gameData = _.get(action, 'payload.data', null)

  if (_.isObject(gameData)) {
    yield put(setWaitingForPlayersState(false, null))
  } else {
    yield put(
      setWaitingForPlayersState(true, 'Waiting for other players answers'),
    )
  }

  yield true
}

export default onSendAnswerSuccess
