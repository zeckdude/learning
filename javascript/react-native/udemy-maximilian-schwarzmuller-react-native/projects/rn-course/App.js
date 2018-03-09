import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import update from 'immutability-helper';
import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlacesList from './src/components/PlacesList/PlacesList';
import placeImage from './src/assets/barbados.jpg';

export default class App extends Component {
  state = {
    places: []
  };

  addPlace = placeName => {
    this.setState(prevState => (
      {
        places: [...prevState.places, {
          key: Math.random(),
          name: placeName,
          image: placeImage
        }]
      }
    ));
  }

  removePlace = key => {
    this.setState(prevState => (
      {
        places: prevState.places.filter(place => place.key !== key)
      }
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <PlacesInput
          addPlace={this.addPlace}
        />
        <PlacesList
          places={this.state.places}
          removePlace={this.removePlace}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
