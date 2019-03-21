import React from 'react'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import ActivityIndicator from 'Components/blocks/ActivityIndicator'
import ErrorToast from 'Components/blocks/ErrorToast'

import NavigationRoot from 'Navigation'
import NavigationService from 'Navigation/NavigationService'

// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from 'Redux'

const { store, persistor } = configureStore()

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationRoot
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
      <ActivityIndicator />
      <ErrorToast />
    </PersistGate>
  </Provider>
)

export default App
