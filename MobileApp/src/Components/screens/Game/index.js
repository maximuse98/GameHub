import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { sendAnswer } from 'Redux/actions/game'

import { getActiveScene, getActiveGame } from 'Redux/selectors/game'
import { getSocketIp } from 'Redux/selectors/common'

import Component from './Game'

const actions = {
  onSendAnswer: sendAnswer,
}

const selector = createStructuredSelector({
  scene: getActiveScene,
  game: getActiveGame,
  socketIp: getSocketIp,
})

export default connect(
  selector,
  actions,
)(Component)
