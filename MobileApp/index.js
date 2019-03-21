import { AppRegistry, YellowBox } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'

console.reportErrorsAsExceptions = false

YellowBox.ignoreWarnings(['Warning: Error from HTTP request'])

AppRegistry.registerComponent(appName, () => App)
