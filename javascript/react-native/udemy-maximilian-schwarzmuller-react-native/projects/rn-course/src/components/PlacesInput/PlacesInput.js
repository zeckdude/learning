import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class PlacesInput extends Component {
  state = {
    placeName: ''
  };

  onChangeInputValue = val => {
    this.setState({
      placeName: val
    });
  };

  onButtonPress = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.addPlace(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.onChangeInputValue}
          style={styles.placeInput}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={this.onButtonPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeInput: {
    flex: 1,
    marginRight: 10,
  }
});
