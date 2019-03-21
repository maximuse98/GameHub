import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { ToastContainer, Toast, Text, ToastContent } from './styles'

class ErrorToast extends PureComponent {
  state = {
    message: null,
    timer: null,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { message, onClose } = nextProps
    const { message: currentMessage, timer } = prevState

    const nextState = {
      ...prevState,
      message,
    }

    if (message !== currentMessage) {
      clearTimeout(timer)

      nextState.timer = setTimeout(() => {
        clearTimeout(timer)

        onClose()
      }, 3000)
    }

    return nextState
  }

  render() {
    const { message } = this.state

    if (!message) return null

    return (
      <ToastContainer>
        <Toast onPress={this.handleClose}>
          <ToastContent>
            <Text>{message}</Text>
          </ToastContent>
        </Toast>
      </ToastContainer>
    )
  }
}

ErrorToast.propTypes = {
  // message: PropTypes.string,
  onClose: PropTypes.func,
}

export default ErrorToast
