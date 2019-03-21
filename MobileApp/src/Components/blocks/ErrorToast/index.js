import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { clearError } from 'Redux/actions/common'
import { getErrorMessage } from 'Redux/selectors/common'

import Component from './ErrorToast'

const actions = {
  onClose: clearError,
}

const selector = createStructuredSelector({
  message: getErrorMessage,
})

export default connect(
  selector,
  actions,
)(Component)
