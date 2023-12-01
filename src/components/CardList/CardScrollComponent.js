import React from 'react';
import ViewCard from './ViewCard';
import { View, FlatList, Text, TouchableOpacity, Modal, Dimensions, StyleSheet } from 'react-native';


const CardScrollComponent = ({data}) => {
  console.log("CARDLIST DATA",data);

  // const [modalVisible, setModalVisible] = useState(false);
  //   const [selectedItem, setSelectedItem] = useState(null);
  //   const [currData, setCurrData] = useState(data);

  //   const handleSwipeLeft = (item) => {
  //       setSelectedItem(item);
  //       setModalVisible(true);
  //   };

  //   const handleRemoveCard = () => {
  //       // Call your API to remove the card from the user's liked list
  //       // Update the data state to remove the card from the list
  //       setData(data.filter(card => card !== selectedItem));
  //       setModalVisible(false);
  //   };

  return (
    <View>
      <Text>CardList</Text>
      {/* <FlatList
        data={currData}
        renderItem={({ item }) => <ViewCard item={item} onSwipeLeft={handleSwipeLeft} />}
        keyExtractor={item => item.author_id.toString()}
        contentContainerStyle={styles.list}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
      >
        {/* Modal content here */}
        {/* <TouchableOpacity onPress={handleRemoveCard}>
            <Text>Remove Card</Text>
        </TouchableOpacity>
      </Modal> */}
    </View>
  )
}

export default CardScrollComponent;