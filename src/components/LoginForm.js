import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
  state = { email: '' }
  render() {
    return (
      <Card>
        <View>
          <CardSection>
            <Input
              placeholder="user@gmail.com"
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>
          <CardSection>
            <Button onPress={() => console.log('')}>Log in</Button>
          </CardSection>
        </View>
      </Card>
    )
  }
}

export default LoginForm
