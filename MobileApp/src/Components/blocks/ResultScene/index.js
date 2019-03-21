import React, { Component } from 'react'

import { TouchableWithoutFeedback } from 'react-native'

import PropTypes from 'prop-types'

import _ from 'lodash'

import NavigationService from 'Navigation/NavigationService'

import { chooseGame } from 'Constants/routes'

import {
  Container,
  Background,
  DialogBox,
  ActorNameContainer,
  Text,
  Sprite,
} from './styles'

const parseProps = props => {
  console.log('parseProps')
  const { scene } = props

  const backgroundUrl = _.get(scene, 'backgroundUrl', '')
  const phrases = _.get(scene, 'phrases', [])
  const sprites = _.get(scene, 'sprites', [])

  const isPhrasesFull = _.isArray(phrases) && phrases.length > 0

  return {
    id: scene.id,
    backgroundUrl,
    phrases,
    sprites,
    currentPhraseIndex: isPhrasesFull ? 0 : null,
  }
}

class ResultScene extends Component {
  constructor(props) {
    super(props)

    const state = parseProps(props)

    this.state = state
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let nextState = prevState

    if (nextProps.scene.id !== prevState.id) {
      const nextSceneData = parseProps(nextProps)

      nextState = {
        ...nextState,
        ...nextSceneData,
      }
    }

    return nextState
  }

  getImageUrl = path => {
    const { socketIp } = this.props

    const url = `${socketIp}${path}`

    console.log(url)

    return url
  }

  handleScreenPress = () => {
    const { phrases, currentPhraseIndex } = this.state

    const nextPhraseIndex = currentPhraseIndex + 1

    if (_.isEmpty(phrases[nextPhraseIndex])) {
      NavigationService.reset(chooseGame)
    }

    this.setState({
      currentPhraseIndex: nextPhraseIndex,
    })
  }

  renderCurrentPhrase = () => {
    const { phrases, currentPhraseIndex } = this.state

    const currentPhrase = _.isNumber(currentPhraseIndex)
      ? phrases[currentPhraseIndex]
      : null

    console.log('ResultScene renderCurrentPhrase', currentPhrase)

    if (!currentPhrase) return null

    return (
      <>
        <DialogBox>
          <Text>{currentPhrase.text}</Text>
        </DialogBox>
        <ActorNameContainer>
          <Text numberOfLines={1}>{currentPhrase.actorName}</Text>
        </ActorNameContainer>
      </>
    )
  }

  renderSprites = () => {
    const { sprites } = this.state

    return sprites.map(sprite => {
      return (
        <Sprite
          left={sprite.positionX}
          source={{ url: this.getImageUrl(sprite.imageUrl) }}
          top={sprite.positionY}
        />
      )
    })
  }

  render() {
    const { backgroundUrl } = this.state

    console.log('ResultScene', this.state, this.props)

    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={this.handleScreenPress}
      >
        <Container>
          <Background source={{ uri: this.getImageUrl(backgroundUrl) }} />
          {this.renderCurrentPhrase()}
          {this.renderSprites()}
        </Container>
      </TouchableWithoutFeedback>
    )
  }
}

ResultScene.propTypes = {
  // scene: PropTypes.object,
  socketIp: PropTypes.string,
}

export default ResultScene
