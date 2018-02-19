import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Card, CardSection } from './common'

class LoginForm extends Component {
  state = {}
  render() {
    return (
      <Card>
        <View>
          <CardSection />
          <CardSection />
          <CardSection>
            <Button>Log in</Button>
          </CardSection>
        </View>
      </Card>
    )
  }
}

export default LoginForm
