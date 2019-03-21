import { createSelector } from 'reselect'

const errorsData = store => store.common

export const getErrorMessage = createSelector(
  errorsData,
  data => data.errorMessage,
)

export const getRequestState = createSelector(
  errorsData,
  data => data.request,
)

export const getWaitingForPlayersStatus = createSelector(
  errorsData,
  data => data.isWaitingForPlayers,
)

export const getSocketIp = createSelector(
  errorsData,
  data => data.socketIp,
)
