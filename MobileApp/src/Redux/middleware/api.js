// import { getToken } from 'Redux/Selectors/Auth'
// import { restoreSession } from 'Redux/Actions/auth'

import merge from 'lodash/merge'
import pick from 'lodash/pick'
import isFunction from 'lodash/isFunction'

import axios from 'axios'

const API_CALL = 'API_CALL'
const apiURL = ''

const nextAction = (action, data) => {
  const next = merge({}, action, data)
  delete next[API_CALL]
  return next
}

export default store => next => action => {
  if (action.type !== API_CALL || !action.fields) return next(action)

  const { endpoint, headers, method, query, types, callback } = action.fields
  const fsaFields = pick(action.fields, 'payload', 'error')

  const endURL = apiURL + endpoint

  if (types) next(nextAction(fsaFields, { type: types.REQUEST }))

  // const token = getToken(store.getState())

  axios({
    method: method || 'get',
    url: endURL,
    data: query,
    headers: {
      'content-type': 'application/json',
      // Authorization: `Bearer ${token}`,
      ...headers,
    },
  })
    .then(res => {
      const { data } = res

      if (types) next(nextAction(fsaFields, { data, type: types.SUCCESS }))

      if (isFunction(callback)) {
        callback(null, data)
      }
    })
    .catch(error => {
      console.log(error)
      const { data } = error.response
      console.log(data)

      // if(!data || data.status === 401) store.dispatch(restoreSession())

      if (types) next(nextAction(fsaFields, { data, type: types.FAILURE }))

      if (isFunction(callback)) {
        callback(data)
      }
    })
}
