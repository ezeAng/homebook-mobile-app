import { View, Text, Button} from 'react-native';
import React, { useState, useMemo, useContext } from 'react'
import SwipableCard from '../../components/SwipeableCard/SwipableCard';
import { AuthenticationContext } from '../../global/auth/AuthenticationContext';



//Change to a DB context soon
const profilesDB = [
  {
    id: 1,
    style: 'japandi',
    image: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/3/2022/03/04064131/AdobeStock_474941386_Optimised.jpeg',
    desc: "some desc",
    designer_name: "john",
  },
  {
    id: 2,
    style: 'japandi',
    image: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/3/2022/03/04064131/AdobeStock_474941386_Optimised.jpeg',
    desc: "some desc",
    designer_name: "jamus",
  },
]

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: '90%',
    maxWidth: 260,
    height: 300,
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
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    color: '#fff',
  },
  buttons: {
    margin: 20,
    zIndex: -100,
  },
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  }
}

const alreadyRemoved = []
let profileState = profilesDB


const Discover = () => {

  const {userInfo} = useContext(AuthenticationContext);

  const [profiles, setProfiles] = useState(profilesDB)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(profilesDB.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
    profileState = profileState.filter(profile => profile.id !== name);
    setProfiles(profileState);


    console.log("LEFT WITH: " + profileState.length);
    if (profileState.length <= 2) {
      console.log("Less than threshold, poll Backend for 10 more");
    }
  }

  const swipe = (dir) => {
    const cardsLeft = profiles.filter(profile => !alreadyRemoved.includes(profile.id))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].id // Find the card object to be removed
      const index = profilesDB.map(profile => profile.id).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <View style={styles.container}>
      {userInfo ? <Text>Welcome, {userInfo.name}.</Text> : null}
      <View style={styles.cardContainer}>
        {profiles.map((profile, index) =>
          <SwipableCard 
            key={index} 
            index={index}
            profile={profile} 
            swiped={swiped} 
            outOfFrame={outOfFrame}
            childRefs={childRefs}
            />
        )}
      </View>
      <View style={styles.buttons}>
        <Button onPress={() => swipe('left')} title='Swipe left!' />
        <Button onPress={() => swipe('right')} title='Swipe right!' />
      </View>
    </View>
  )
}

export default Discover