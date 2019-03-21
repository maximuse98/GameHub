import { createReducer } from 'Helpers/redux'

import { SET_USERNAME } from 'Redux/actions/user'

const initialState = {
  username: '',
}

const handlers = {
  [SET_USERNAME.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      username: payload.data,
    }
  },
}

export default createReducer(initialState, handlers)
