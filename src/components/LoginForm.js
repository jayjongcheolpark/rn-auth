import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common'

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
}

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress = () => {
    const { email, password } = this.state
    this.setState({ error: '', loading: true })
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      })
  }

  onLoginFail = () => {
    this.setState({
      error: 'Authentication Failed.',
      loading: false,
    })
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    })
  }

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />
    }

    return <Button onPress={this.onButtonPress}>Log in</Button>
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

          <CardSection>{this.renderButton()}</CardSection>
        </View>
      </Card>
    )
  }
}

export default LoginForm
