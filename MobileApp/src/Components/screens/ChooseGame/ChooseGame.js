import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { FlatList } from 'react-native'

import i18n from 'I18N'

import { createGame as createGameRoute } from 'Constants/routes'

import {
  GameSelectorContainer,
  ListItemContent,
  ItemContainer,
  FieldName,
  FieldValue,
  Row,
  Block,
  HalfContent,
  Username,
  CreateGameBtn,
  CreateGameBtnContent,
  CreateGameBtnText,
} from './styles'

class GameSelector extends PureComponent {
  componentDidMount() {
    const { onFetchGamesList } = this.props

    onFetchGamesList()
  }

  handleCreateNewGameBtnPress = () => {
    const { navigation } = this.props

    navigation.navigate(createGameRoute)
  }

  handleGamePress(id) {
    const { onConnectToGame } = this.props

    onConnectToGame(id)
  }

  renderListItem = ({ item }) => {
    const {
      id,
      name,
      currentPlayersCount,
      maxPlayersCount,
      scenarioName,
      creatorUserName,
    } = item

    const isGameFull = currentPlayersCount === maxPlayersCount

    return (
      <ItemContainer
        disabled={isGameFull}
        key={id}
        style={{
          padding: 15,
          shadowColor: '#000',
          shadowOpacity: 0.3,
          elevation: 3,
          shadowOffset: {
            width: 0,
            height: 1,
          },
        }}
        onPress={() => this.handleGamePress(id)}
      >
        <ListItemContent>
          <Row>
            <FieldValue>{name}</FieldValue>
            <FieldValue>
              {`${currentPlayersCount}/${maxPlayersCount}`}
            </FieldValue>
          </Row>
          <Row>
            <Block>
              <FieldName>
                {i18n.t('gameSelector.listItem.fields.scenario.name')}
              </FieldName>
              <FieldValue>{scenarioName}</FieldValue>
            </Block>
            <Block>
              <FieldName>
                {i18n.t('gameSelector.listItem.fields.creator.name')}
              </FieldName>
              <FieldValue>{creatorUserName}</FieldValue>
            </Block>
          </Row>
        </ListItemContent>
      </ItemContainer>
    )
  }

  render() {
    const { gameList, username } = this.props

    return (
      <GameSelectorContainer>
        <HalfContent>
          <FlatList
            data={gameList}
            keyExtractor={item => item.id}
            renderItem={this.renderListItem}
          />
        </HalfContent>
        <HalfContent style={{ justifyContent: 'space-between', padding: 15 }}>
          <Username>{username}</Username>
          <CreateGameBtn onPress={this.handleCreateNewGameBtnPress}>
            <CreateGameBtnContent>
              <CreateGameBtnText>Create Game</CreateGameBtnText>
            </CreateGameBtnContent>
          </CreateGameBtn>
        </HalfContent>
      </GameSelectorContainer>
    )
  }
}

GameSelector.propTypes = {
  gameList: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.object,
  username: PropTypes.string,
  onConnectToGame: PropTypes.func,
  onFetchGamesList: PropTypes.func,
}

export default GameSelector
