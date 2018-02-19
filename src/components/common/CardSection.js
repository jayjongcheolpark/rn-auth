import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
}

const CardSection = ({ children }) => {
  const { containerStyle } = styles
  return <View style={containerStyle}>{children}</View>
}

CardSection.propTypes = {
  children: PropTypes.element.isRequired,
}

export { CardSection }
