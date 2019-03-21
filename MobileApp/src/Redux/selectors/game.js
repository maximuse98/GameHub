import { createSelector } from 'reselect'

const gameData = store => store.game

export const getGamesList = createSelector(
  gameData,
  data => data.gameList,
)

export const getActiveGame = createSelector(
  gameData,
  data => data.activeGame,
)

export const getScenarioList = createSelector(
  gameData,
  data => data.scenarioList,
)

export const getActiveScene = createSelector(
  gameData,
  data => data.activeScene,
)
