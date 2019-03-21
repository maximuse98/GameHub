import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import { View } from 'react-native'

import NormalScene from 'Components/blocks/NormalScene'
import ResultScene from 'Components/blocks/ResultScene'

import sceneTypes from 'Constants/sceneTypes'

import { Container } from './styles'

class Game extends PureComponent {
  getCurrentScene = () => {
    const { scene } = this.props

    console.log(scene.type)

    switch (scene.type) {
      case sceneTypes.normal:
        return NormalScene
      case sceneTypes.result:
        return ResultScene
      default:
        return View
    }
  }

  render() {
    const Scene = this.getCurrentScene()
    console.log('Scene', Scene)

    return (
      <Container>
        <Scene {...this.props} />
      </Container>
    )
  }
}

Game.propTypes = {
  scene: PropTypes.object,
}

export default Game
