import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({
      error: '',
      loading: true
    });

    // Attempt sign-in
    firebase.auth().signInWithEmailAndPassword(email, password)
      // If sign-in succeeds
      .then(this.onLoginSuccess.bind(this))
      // If sign-in fails
      .catch(() => {
        // Attempt new account creation
        firebase.auth().createUserWithEmailAndPassword(email, password)
          // If new account creation succeeds
          .then(this.onLoginSuccess.bind(this))
          // If new account creation fails
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    // Set this.state.error which re-renders the component with the new error message
    this.setState({
      error: 'Authentication failed.',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            autoFocus
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
