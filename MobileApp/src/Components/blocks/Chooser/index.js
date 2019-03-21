import React from 'react'
import PropTypes from 'prop-types'
import { Modal as RNModal, FlatList, TouchableOpacity } from 'react-native'

import { Overlay, Text, Choice } from './styles'

const Chooser = ({ choices, visible, onChoice, onRequestClose }) => {
  const renderItem = ({ item }) => {
    console.log('chooser renderItem', item)
    return (
      <TouchableOpacity onPress={() => onChoice(item)}>
        <Choice>
          <Text>{item.caption}</Text>
        </Choice>
      </TouchableOpacity>
    )
  }

  return (
    <RNModal visible={visible} transparent onRequestClose={onRequestClose}>
      <Overlay>
        <FlatList
          data={choices}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </Overlay>
    </RNModal>
  )
}

Chooser.propTypes = {
  choices: PropTypes.array,
  visible: PropTypes.bool,
  onChoice: PropTypes.func,
  onRequestClose: PropTypes.func,
}

export default Chooser
