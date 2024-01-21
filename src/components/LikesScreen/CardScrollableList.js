import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  list: {
      flexGrow: 0,
      height: screenHeight * 0.8,
      backgroundColor: '#FFF884',
  },
  card: {
    backgroundColor: 'white',
    border: '12 solid black',
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android shadow
    overflow: 'hidden', // ensures the image respects the border radius
  },
  image: {
    width: '100%',
    height: 200, // Adjust the height as needed
    resizeMode: 'cover', // or 'contain' depending on your needs
  },
  hoverCard: {
    position: 'absolute',
    padding: 2,
    backgroundColor: 'rgba(255, 235, 232, 0.6)',
    left: '10%',
    bottom: '5%',
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


const ViewCard = ({ item, onSwipeLeft }) => {
  return (
      <TouchableOpacity
          onSwipeLeft={() => onSwipeLeft(item)}
          style={styles.card}
      >
        <Image 
          source={{ uri: item.image_url }} 
          style={styles.image}
        />
        <View style={styles.hoverCard}>
          <Text>{item.profile_name}</Text>
          <Text>{item.description}</Text>
          <Text>Author: {item.author_id}</Text>
        </View>
        
          {/* Add other fields and styling as needed */}
      </TouchableOpacity>
  );
};

const CardScrollableList = ({DATA}) => {

  const handleSwipeLeft = (item) => {
    console.log("Swiped Left on Item: ", item);
  };

  return (
    <View>
      <Text>See your likes here.</Text>
      <FlatList
        style={styles.list}
        data={DATA}
        renderItem={({item}) => <ViewCard item={item} onSwipeLeft={handleSwipeLeft} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default CardScrollableList;