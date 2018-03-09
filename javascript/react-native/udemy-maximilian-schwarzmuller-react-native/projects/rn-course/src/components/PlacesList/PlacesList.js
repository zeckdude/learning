import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PlacesListItem from './PlacesListItem';

export default ({ places, removePlace }) => {
  return (
    <FlatList style={styles.listContainer}
      data={places}
      renderItem={(info) => {
        return <PlacesListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPress={() => { removePlace(info.item.key) }}
        />
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});
