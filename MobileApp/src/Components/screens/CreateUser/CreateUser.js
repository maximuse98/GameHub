import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Formik } from 'formik'

import NavigationService from 'Navigation/NavigationService'

import { chooseGame } from 'Constants/routes'

import _ from 'lodash'
import i18n from 'I18N'

import { Input } from 'Components/UI'

import {
  CreateUserContainer,
  Container,
  Row,
  LangBtn,
  LangBtnView,
  LangBtnText,
  ErrorMessage,
  SubmitButton,
  SubmitButtonText,
  SubmitButtonView,
} from './styles'

import { validationSchema } from './config'

/* eslint-disable react/no-unused-state */
class CreateUser extends Component {
  state = {
    lng: null,
    isRequest: false,
  }

  componentDidMount() {
    const { createSocketConnection } = this.props

    createSocketConnection()
  }

  handleUaBtnPress = () => {
    i18n.locale = 'uk'
    this.setState({
      lng: 'uk',
    })
  }

  handleRuBtnPress = () => {
    i18n.locale = 'ru'
    this.setState({
      lng: 'ru',
    })
  }

  handleEnBtnPress = () => {
    i18n.locale = 'en'
    this.setState({
      lng: 'en',
    })
  }

  handleSubmit = data => {
    const { onSetUsername } = this.props

    onSetUsername(data.username, error => {
      if (!error) {
        NavigationService.reset(chooseGame)
      }
    })
  }

  renderForm = ({
    values,
    errors,
    touched,
    submitCount,
    setFieldValue,
    setFieldTouched,
    handleSubmit,
  }) => {
    const { isRequest } = this.state
    const isBtnDisabled =
      isRequest || !(_.isEmpty(errors) && !_.isEmpty(values))

    const isFormTouched = submitCount > 0

    return (
      <Container>
        <Input
          placeholder={i18n.t('createUser.usernamePlaceholder')}
          returnKeyType="go"
          value={values.username}
          onBlur={() => setFieldTouched('username', true)}
          onChangeText={text => setFieldValue('username', text)}
          onSubmitEditing={handleSubmit}
        />
        <ErrorMessage>
          {(touched.username || isFormTouched) && errors.username}
        </ErrorMessage>

        <SubmitButton disabled={isBtnDisabled} onPress={handleSubmit}>
          <SubmitButtonView>
            <SubmitButtonText>
              {i18n.t('createUser.submitBtnLabel')}
            </SubmitButtonText>
          </SubmitButtonView>
        </SubmitButton>
      </Container>
    )
  }

  render() {
    return (
      <CreateUserContainer>
        <Formik
          enableReinitialize
          render={this.renderForm}
          validateOnChange
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
        />
        <Row>
          <LangBtn onPress={this.handleUaBtnPress}>
            <LangBtnView>
              <LangBtnText>UA</LangBtnText>
            </LangBtnView>
          </LangBtn>
          <LangBtn onPress={this.handleRuBtnPress}>
            <LangBtnView>
              <LangBtnText>RU</LangBtnText>
            </LangBtnView>
          </LangBtn>
          <LangBtn onPress={this.handleEnBtnPress}>
            <LangBtnView>
              <LangBtnText>EN</LangBtnText>
            </LangBtnView>
          </LangBtn>
        </Row>
      </CreateUserContainer>
    )
  }
}

CreateUser.propTypes = {
  // navigation: PropTypes.object,
  onSetUsername: PropTypes.func,
  createSocketConnection: PropTypes.func,
}

export default CreateUser
