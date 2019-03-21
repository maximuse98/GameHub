import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getGamesList } from 'Redux/selectors/game'
import { getUsername } from 'Redux/selectors/user'

import { fetchGameList, connectToGame } from 'Redux/actions/game'

import Component from './ChooseGame'

const actions = {
  onFetchGamesList: fetchGameList,
  onConnectToGame: connectToGame,
}

const selector = createStructuredSelector({
  gameList: getGamesList,
  username: getUsername,
})

export default connect(
  selector,
  actions,
)(Component)
