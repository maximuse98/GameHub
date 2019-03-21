import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { FlatList, TouchableOpacity } from 'react-native'

import { Formik } from 'formik'

import { Input } from 'Components/UI'

import i18n from 'I18N'
import _ from 'lodash'

import { validationSchema } from './config'

import {
  CreateGameContainer,
  // Text,
  HalfBlock,
  ListItemContainer,
  ErrorMessage,
  SubmitButton,
  SubmitButtonText,
  SubmitButtonView,
  FieldName,
  FieldValue,
  Row,
  Block,
} from './styles'

class CreateGame extends PureComponent {
  state = {
    isRequest: false,
  }

  componentDidMount() {
    const { onFetchScenarioList } = this.props

    onFetchScenarioList()
  }

  handleSubmit = data => {
    const { onGameCreate } = this.props

    const query = {
      ScenarioId: data.scenarioId,
      Name: data.name,
    }

    onGameCreate(query)
  }

  renderScenarioListItem = ({ item }, selectedId, setFieldValue) => {
    return (
      <TouchableOpacity onPress={() => setFieldValue('scenarioId', item.id)}>
        <ListItemContainer selected={item.id === selectedId}>
          <Row>
            <Block>
              <FieldName>
                {i18n.t('createGame.listItem.nameFieldLabel')}
              </FieldName>
              <FieldValue>{item.name}</FieldValue>
            </Block>
            <Block>
              <FieldName>
                {i18n.t('createGame.listItem.playersCountFieldLabel')}
              </FieldName>
              <FieldValue>{item.playersCount}</FieldValue>
            </Block>
          </Row>
        </ListItemContainer>
      </TouchableOpacity>
    )
  }

  scenarioListKeyExtractor = item => item.id

  renderForm = ({
    values,
    errors,
    touched,
    submitCount,
    setFieldValue,
    setFieldTouched,
    handleSubmit,
  }) => {
    const { scenarioList } = this.props
    const { isRequest } = this.state

    const isBtnDisabled =
      isRequest || !(_.isEmpty(errors) && !_.isEmpty(values))
    const isFormTouched = submitCount > 0

    return (
      <CreateGameContainer>
        <HalfBlock>
          <FlatList
            contentContainerStyle={{
              padding: 10,
            }}
            data={scenarioList}
            extraData={values.scenarioId}
            keyExtractor={this.scenarioListKeyExtractor}
            renderItem={event =>
              this.renderScenarioListItem(
                event,
                values.scenarioId,
                setFieldValue,
              )
            }
          />
        </HalfBlock>
        <HalfBlock style={{ justifyContent: 'center' }}>
          <Input
            placeholder={i18n.t('createGame.gameNameInputPlaceholder')}
            value={values.name}
            onBlur={() => setFieldTouched('name', true)}
            onChangeText={text => setFieldValue('name', text)}
          />
          <ErrorMessage>
            {(touched.name || isFormTouched) && errors.name}
          </ErrorMessage>
          <SubmitButton disabled={isBtnDisabled} onPress={handleSubmit}>
            <SubmitButtonView>
              <SubmitButtonText>
                {i18n.t('createGame.submitBtnLabel')}
              </SubmitButtonText>
            </SubmitButtonView>
          </SubmitButton>
        </HalfBlock>
      </CreateGameContainer>
    )
  }

  render() {
    return (
      <Formik
        render={this.renderForm}
        validateOnChange
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

CreateGame.propTypes = {
  scenarioList: PropTypes.arrayOf(PropTypes.object),
  onFetchScenarioList: PropTypes.func,
  onGameCreate: PropTypes.func,
}

export default CreateGame
