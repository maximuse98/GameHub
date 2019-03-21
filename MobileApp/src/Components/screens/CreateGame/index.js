import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getScenarioList } from 'Redux/selectors/game'

import { fetchScenarioList, createGame } from 'Redux/actions/game'

import Component from './CreateGame'

const actions = {
  onFetchScenarioList: fetchScenarioList,
  onGameCreate: createGame,
}

const selector = createStructuredSelector({
  scenarioList: getScenarioList,
})

export default connect(
  selector,
  actions,
)(Component)
