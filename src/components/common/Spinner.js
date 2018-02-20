import React from 'react'
import PropTypes from 'prop-types'
import { View, ActivityIndicator } from 'react-native'

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const Spinner = ({ size }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size} />
  </View>
)

Spinner.defaultProps = {
  size: 'large',
}
Spinner.propTypes = {
  size: PropTypes.string,
}

export { Spinner }
