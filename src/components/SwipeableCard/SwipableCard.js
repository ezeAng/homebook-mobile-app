import { View, Text, Button, ImageBackground } from 'react-native';
import { Card, Image } from '@rneui/themed';

import TinderCard from 'react-tinder-card';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  cardContainer: {
    width: '100%',
    maxWidth: 300,
    height: 300,
    border: "10px solid black"
  },
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 260,
    height: 300,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: 'cover',
    padding: "5%",
  },
  cardImage: {
    width: '100%',
    height: '80%',
    margin: 'auto',
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    color: '#fff',
  },
}

const SwipableCard = ({index, profile, swiped, outOfFrame, childRefs}) => {

  return (
    <View>
      <TinderCard 
        ref={childRefs[index]} 
        key={profile.id} 
        onSwipe={(dir) => swiped(dir, profile.id)} 
        onCardLeftScreen={() => outOfFrame(profile.id)}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{profile.style}</Text>
          <Image 
            style={styles.cardImage} 
            source={{
              uri: profile.image,
            }}>
          </Image>
          <Text style={styles.cardTitle}>{profile.style}</Text>
        </View>
      </TinderCard>
    </View>
  )
}

export default SwipableCard;