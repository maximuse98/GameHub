import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { setUsername } from 'Redux/actions/user'
import { createSocketConnection } from 'Redux/actions/common'

import Component from './CreateUser'

const actions = {
  onSetUsername: setUsername,
  createSocketConnection,
}

const selector = createStructuredSelector({})

export default connect(
  selector,
  actions,
)(Component)
