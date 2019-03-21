import { createStore, applyMiddleware } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

// saga middleware
import createSagaMiddleware from 'redux-saga'
import startSagas from './middleware/sagas'

// api middleware
// import apiMiddleware from './middleware/api'
import socketMiddleware from './middleware/socket'

import rootReducer from './reducers'

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [socketMiddleware, thunk, sagaMiddleware]

  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['common'],
  }

  const enhancers = applyMiddleware(...middlewares)

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, composeWithDevTools(enhancers))

  startSagas(sagaMiddleware)

  const persistor = persistStore(store)
  // persistor.purge()

  return { store, persistor }
}
