import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal as RNModal,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native'

import { Overlay, Color, Text } from './styles'

const ActivityIndicator = ({ request, waitingForPlayersStatus }) => {
  if (!request) return null

  console.log({ request, waitingForPlayersStatus })

  const req =
    waitingForPlayersStatus && waitingForPlayersStatus.isRequest
      ? waitingForPlayersStatus
      : request

  return (
    <RNModal visible={req.isRequest} transparent onRequestClose={() => {}}>
      <Overlay>
        <RNActivityIndicator color={Color} size="large" />
        {req.requestMessage && <Text>{req.requestMessage}</Text>}
      </Overlay>
    </RNModal>
  )
}

ActivityIndicator.propTypes = {
  request: PropTypes.object,
  waitingForPlayersStatus: PropTypes.object,
}

export default ActivityIndicator
