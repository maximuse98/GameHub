import { createSelector } from 'reselect'

const userData = store => store.user

export const getUsername = createSelector(
  userData,
  data => data.username,
)
