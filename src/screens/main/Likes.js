import { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { DatabaseContext } from '../../global/db/DatabaseContext';
// import { CardScrollComponent } from '../../components/CardList/CardScrollComponent';

const Likes = () => {
  const { getLikes } = useContext(DatabaseContext);
  const [myLikes, setMyLikes] = useState([]);

  useEffect(() => {
    getProfileCards();
  },[]);

  const getProfileCards = async () => {
    const res = await getLikes();
    console.log("Get profiles: ", res);
    setMyLikes(res);
  }

  return (
    <View>
      <Text>For now, all likes show as a scrollable list of likes</Text>
      <Text>All likes a horizontal list</Text>
      <View>
        
        {myLikes ? <View></View> : <Text>No Likes! GO SWIPE!</Text>}
      </View>
    </View>
  )
}

export default Likes;