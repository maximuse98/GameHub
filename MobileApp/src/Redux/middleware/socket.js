/* eslint-disable */
import { HubConnectionBuilder } from '@aspnet/signalr'
import socketEventTypes from 'Constants/socketTypes'

import _ from 'lodash'

import { createAsyncAction } from 'Helpers/redux'
import { getLocalIp } from 'Helpers/getIp'

import {
  CREATE_SOCKET_CONNECTION,
  setRequestStatus,
} from 'Redux/actions/common'
import { SOCKET_CALL } from 'Redux/actions/highOrderActions'

let socket = null
let socketIp = null

const requests = {}

const findLocalSocket = async () => {
  const currentIP = await getLocalIp()

  const ipParts = currentIP.split('.')
  const ipBase = _.join(ipParts.slice(0, ipParts.length - 1), '.')

  const promises = []

  for (let i = 0; i < 255 && !socket; i++) {
    promises.push(
      new Promise(resolve => {
        try {
          const currentTryIp = `${ipBase}.${i}`
          const currentTryUrl = `http://${currentTryIp}:51309/gamehub`
          const currentSocketTry = new HubConnectionBuilder()
            .withUrl(currentTryUrl)
            .build()

          currentSocketTry
            .start()
            .then(() => {
              console.log('FOUND ' + currentTryUrl)
              socketIp = `http://${currentTryIp}:51309`
              // currentSocketTry.stop().then(() => {
              //   const responseSocket = new HubConnectionBuilder()
              //     .withUrl(currentTryUrl)
              //     .build()
              //     .start({ pingInterval: 60000 })
              //     .then(() => {
              resolve(currentSocketTry)
              //     })
              // })
            })
            .catch(() => {})
        } catch (err) {
          // console.log('error build hub', err)
        }
      }),
    )
  }

  await Promise.race(promises)
    .then(openedSocket => {
      if (!openedSocket) {
        console.log('no opened sockets in the network')
      }

      socket = openedSocket
    })
    .catch(err => {
      console.log('openedSocket err', err)
    })
}

const subscribeOnSocketEvent = (socketType, next, store) => {
  const actionTypes = createAsyncAction(`socket/${socketType.toUpperCase()}`)

  socket.on(socketType, response => {
    if (__DEV__) {
      try {
        console.groupCollapsed('subscribeOnSocketEvent response')
      } catch (e) {}
      console.log('type', socketType)
      console.log('response', response)
      try {
        console.groupEnd()
      } catch (e) {}
    }
    const requestData = _.get(requests, actionTypes.REQUEST, null)

    console.log(requestData)

    // handleError
    if (response.error !== null) {
      if (__DEV__) {
        try {
          console.groupCollapsed('Socket success')
        } catch (e) {}
        console.log('type', socketType)
        console.log(response.error)
        try {
          console.groupEnd()
        } catch (e) {}
      }

      next({
        type: actionTypes.FAILURE,
        payload: {
          data: response.error,
        },
      })

      if (requestData) {
        const { callback, withActivityLoader } = requestData

        if (withActivityLoader) {
          store.dispatch(setRequestStatus(false, null))
        }

        if (callback) {
          callback(response.error)
        }
      }
    } else if (response.data !== null) {
      // handle success response
      if (__DEV__) {
        try {
          console.groupCollapsed('Socket error')
        } catch (e) {}
        console.log('type', socketType)
        console.log(response.data)
        try {
          console.groupEnd()
        } catch (e) {}
      }

      next({
        type: actionTypes.SUCCESS,
        payload: {
          data: response.data,
        },
      })

      if (requestData) {
        const { callback, withActivityLoader } = requestData

        if (withActivityLoader) {
          store.dispatch(setRequestStatus(false, null))
        }

        if (callback) {
          callback(null, response.data)
        }
      }
    }
  })
}

const socketMiddleware = store => next => action => {
  if (action.type === CREATE_SOCKET_CONNECTION.REQUEST) {
    store.dispatch(setRequestStatus(true, 'Searching host'))
    findLocalSocket()
      .then(() => {
        if (!socket) {
          next({
            type: CREATE_SOCKET_CONNECTION.FAILURE,
          })

          return
        }
        store.dispatch(setRequestStatus(false))

        next({
          type: CREATE_SOCKET_CONNECTION.SUCCESS,
          payload: {
            data: socketIp,
          },
        })

        const socketTypes = Object.values(socketEventTypes)

        _.forEach(socketTypes, socketType => {
          subscribeOnSocketEvent(socketType, next, store)
        })
      })
      .catch(err => {
        console.error('socket connection error', err)
      })
  }

  if (action.type === SOCKET_CALL) {
    const {
      namespace,
      room,
      socketType,
      query,
      types,
      isRequest,
      withActivityLoader,
    } = action.fields

    if (namespace) {
      socket = socket.of(namespace)
    }
    if (room) {
      socket = socket.to(room)
    }

    next({ type: types.REQUEST, payload: action.payload })

    if (__DEV__) {
      try {
        console.groupCollapsed('Socket request')
      } catch (e) {}
      console.log('type', socketType)
      console.log(action)
      try {
        console.groupEnd()
      } catch (e) {}
    }

    if (isRequest) {
      requests[types.REQUEST] = action.fields
    }

    if (withActivityLoader) {
      store.dispatch(setRequestStatus(true))
    }

    const invokeParams = [socketType]

    if (query) {
      invokeParams.push(query)
    }

    console.log('invokeParams', invokeParams)

    socket.invoke(...invokeParams)
    // .catch(error => {
    //   if (__DEV__) {
    // try {
    //   console.groupCollapsed('Cant invoke socket')
    // } catch (e) {}
    //     console.log('type', socketType)
    //     console.log(action)
    // try {
    //   console.groupEnd()
    // } catch (e) {}
    //   }

    //   next({
    //     type: types.FAILURE,
    //     payload: {
    //       data: error,
    //     },
    //   })
    // })

    return
  }

  next(action)
}

export default socketMiddleware
