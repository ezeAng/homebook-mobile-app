import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal, Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ViewCard = ({ item, onSwipeLeft }) => {
  return (
      <TouchableOpacity
          onSwipeLeft={() => onSwipeLeft(item)}
          style={styles.card}
      >
          <Text>{item.profile_name}</Text>
          <Text>{item.description}</Text>
          {/* Add other fields and styling as needed */}
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  list: {
      flexGrow: 0,
      height: screenHeight * 0.8,
  },
  card: {
      width: screenWidth * 0.9,
      height: 100, // Modify as needed
      backgroundColor: 'white',
      // Add more styling
  },
});

export default ViewCard;