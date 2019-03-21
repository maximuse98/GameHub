import React, { Component } from 'react'

import { TouchableWithoutFeedback } from 'react-native'

import PropTypes from 'prop-types'

import _ from 'lodash'

import Chooser from '../Chooser'

import {
  Container,
  Background,
  DialogBox,
  ActorNameContainer,
  Text,
  Sprite,
  SpriteContainer,
} from './styles'

const parseProps = props => {
  console.log('parseProps', props)
  const { scene } = props

  const backgroundUrl = _.get(scene, 'backgroundUrl', '')
  const phrases = _.get(scene, 'phrases', [])
  const sprites = _.get(scene, 'sprites', [])
  const choices = _.get(scene, 'choices', [])

  const isPhrasesFull = _.isArray(phrases) && phrases.length > 0
  const isChoicesFull = _.isArray(choices) && choices.length > 0

  return {
    id: scene.id,
    backgroundUrl,
    phrases,
    sprites,
    choices,
    currentPhraseIndex: isPhrasesFull ? 0 : null,
    isChooserShown: isChoicesFull && !isPhrasesFull,
  }
}

class NormalScene extends Component {
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

  handleChoice = choice => {
    const { onSendAnswer } = this.props

    onSendAnswer(choice.id)
  }

  handleScreenPress = () => {
    console.log('handleScreenPress')
    const { phrases, currentPhraseIndex } = this.state

    let nextPhraseIndex = currentPhraseIndex + 1
    let isChooserShown = false

    console.log(
      _.isEmpty(phrases[nextPhraseIndex]),
      nextPhraseIndex,
      phrases[nextPhraseIndex],
    )

    if (_.isEmpty(phrases[nextPhraseIndex])) {
      nextPhraseIndex = null
      isChooserShown = true
    }

    console.log('handleScreenPress', nextPhraseIndex, isChooserShown)

    this.setState({
      currentPhraseIndex: nextPhraseIndex,
      isChooserShown,
    })
  }

  renderCurrentPhrase = () => {
    const { phrases, currentPhraseIndex } = this.state

    const currentPhrase = _.isNumber(currentPhraseIndex)
      ? phrases[currentPhraseIndex]
      : null

    console.log('NormalScene renderCurrentPhrase', currentPhrase)

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
    console.log('NormalScene renderSprites', sprites)

    return sprites.map(sprite => {
      return (
        <SpriteContainer
          key={sprite.imageUrl}
          left={sprite.positionX}
          top={sprite.positionY}
        >
          <Sprite source={{ uri: this.getImageUrl(sprite.imageUrl) }} />
        </SpriteContainer>
      )
    })
  }

  render() {
    const { backgroundUrl, choices, isChooserShown } = this.state

    console.log('NormalScene', this.state, this.props)

    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={this.handleScreenPress}
      >
        <Container>
          <Background source={{ uri: this.getImageUrl(backgroundUrl) }} />
          {this.renderCurrentPhrase()}
          {this.renderSprites()}
          <Chooser
            choices={choices}
            visible={isChooserShown}
            onChoice={this.handleChoice}
            onRequestClose={() => {}}
          />
        </Container>
      </TouchableWithoutFeedback>
    )
  }
}

NormalScene.propTypes = {
  // scene: PropTypes.object,
  socketIp: PropTypes.string,
  onSendAnswer: PropTypes.func,
}

export default NormalScene
