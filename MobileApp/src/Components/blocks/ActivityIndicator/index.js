import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  getRequestState,
  getWaitingForPlayersStatus,
} from 'Redux/selectors/common'

import Component from './ActivityIndicator'

const actions = {}

const selector = createStructuredSelector({
  request: getRequestState,
  waitingForPlayersStatus: getWaitingForPlayersStatus,
})

export default connect(
  selector,
  actions,
)(Component)
