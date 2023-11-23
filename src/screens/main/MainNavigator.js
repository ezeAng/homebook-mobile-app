import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from './Discover';
import Matches from './Matches';
import Likes from './Likes';
import Settings from './Settings';
import Community from './Community';


const Tab = createBottomTabNavigator();

const MainNavigator = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Matches" component={Matches} />
      <Tab.Screen name="Likes" component={Likes} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

export default MainNavigator