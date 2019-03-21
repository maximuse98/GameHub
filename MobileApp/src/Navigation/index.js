import { createStackNavigator } from 'react-navigation'

import { createUser, chooseGame, createGame, game } from 'Constants/routes'

import CreateUserScreen from 'Components/screens/CreateUser'
import GameSelector from 'Components/screens/ChooseGame'
import CreateGame from 'Components/screens/CreateGame'
import GameScreen from 'Components/screens/Game'

const navigationOptions = {
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#343A40',
  },
  headerLeftContainerStyle: {
    // paddingLeft: 16
  },
  headerRightContainerStyle: {
    paddingRight: 16,
  },
}

const root = createStackNavigator(
  {
    [createUser]: CreateUserScreen,
    [chooseGame]: {
      screen: GameSelector,
      navigationOptions: {
        title: 'Choose game',
        headerTitle: null,
        headerBackTitle: null,
        headerBackImage: null,
        ...navigationOptions,
      },
    },
    [createGame]: {
      screen: CreateGame,
      navigationOptions: {
        title: 'Create a game',
      },
    },
    [game]: {
      screen: GameScreen,
      navigationOptions: { header: null },
    },
  },
  {
    initialRouteName: createUser,
  },
)

export default root
