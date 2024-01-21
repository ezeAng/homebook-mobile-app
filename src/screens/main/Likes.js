import { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { DatabaseContext } from '../../global/db/DatabaseContext';
import CardScrollableList from '../../components/LikesScreen/CardScrollableList';

const Likes = () => {
  const { getLikes } = useContext(DatabaseContext);
  const [myLikes, setMyLikes] = useState([]);

  useEffect(() => {
    getProfileCards();
  },[]);

  const getProfileCards = async () => {
    const res = await getLikes();
    setMyLikes(res);
  }

  return (
    <View>
      <View>
        <CardScrollableList DATA={myLikes} />
      </View>
    </View>
  )
}

export default Likes;