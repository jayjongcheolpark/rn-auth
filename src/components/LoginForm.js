import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from './common'

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
}

class LoginForm extends Component {
  state = { email: '', password: '', error: '' }

  onButtonPress = () => {
    const { email, password } = this.state
    this.setState({ error: '' })
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.' })
          })
      })
  }

  render() {
    const { errorTextStyle } = styles
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
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <Text style={errorTextStyle}>{this.state.error}</Text>

          <CardSection>
            <Button onPress={this.onButtonPress}>Log in</Button>
          </CardSection>
        </View>
      </Card>
    )
  }
}

export default LoginForm
