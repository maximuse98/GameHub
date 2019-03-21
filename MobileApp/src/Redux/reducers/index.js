import { combineReducers } from 'redux'

import user from './user'
import game from './game'
import common from './common'

const rootReducer = combineReducers({
  user,
  common,
  game,
})

export default rootReducer
