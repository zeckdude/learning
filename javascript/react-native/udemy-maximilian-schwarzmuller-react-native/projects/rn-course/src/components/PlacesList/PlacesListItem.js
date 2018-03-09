import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default (props) => (
  <TouchableOpacity onPress={props.onItemPress}>
    <View style={styles.listItem}>
      <Image
        source={props.placeImage}
        style={styles.placeImage}
        resizeMode="cover"
      />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    height: 100,
    width: 100
  }
});
