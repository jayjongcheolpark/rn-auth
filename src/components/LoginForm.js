import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Button, Card, CardSection } from './common'

class LoginForm extends Component {
  state = {}
  render() {
    return (
      <Card>
        <View>
          <CardSection>
            <TextInput style={{ height: 20, width: 100 }} />
          </CardSection>
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
