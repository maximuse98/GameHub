# GameHub

This is repo of GameHub project.

## Project architecture

Project built on Client-Server architecture. Communication with .NET back-end works via socket library [SignalR](https://www.npmjs.com/package/@aspnet/signalr).

## Stack

This project was built with such technologies:
* [React Native](https://facebook.github.io/react-native/) - crossplatform mobile development.
* [Redux](https://redux.js.org/) - app's data storage (Flux realization).
* [Redux Saga](https://redux-saga.js.org/) - side effects for Redux.
* [SignalR](https://www.npmjs.com/package/@aspnet/signalr) - sockets.

## Project structure

Project code contains in the `src` folder. Folders structure:

* `Assets` - project assets, e.g. images, fonts, audio etc.
* `Components` - React components
  * `blocks` - parts that used in several screens
  * `screens` - app screens (pages)
  * `UI` - common UI parts, e.g. input, modal, label etc.
* `Configs` - project configs.
* `Constants` - project constants.
* `Helpers` - functions that are used in several places
* `I18N`(internationalization) - contains all text in the project. Used for internationalization.
* `Navigation` - navigation configuration.
* `Redux` - data storage
  * `actions` - redux action types and action creators
  * `middleware` - redux middleware
    * `api` - middleware for API calls
    * `socket` - middleware for socket calls.
    * `sagas` - Redux Sagas
  * `reducers` - Redux Reducers
  * `selectors` - Redux selectors
* `Themes` - decor constants e.g. colors, metrics etc.

## Development

### Prerequisites
You need to be installed:
* [NPM](https://www.npmjs.com/)
* ADB
* [React Native Debuger](https://github.com/jhen0409/react-native-debugger) - optional. Used for debugging.

### Android

1. Install modules - run `npm i`
2. Start android emulator or connect android-phone in debug mode
3. Run `npm start`

### iOS

1. Open file `ios/gamehub.xcworkspace` in XCode
2. Run project from XCode

