import { View, Text, Button } from 'react-native';

import { AuthenticationContext } from '../../global/auth/AuthenticationContext';
import { useContext } from 'react';

const Settings = ({navigation}) => {
  const {logout, userInfo} = useContext(AuthenticationContext);

  const handleLogout = () => {
    logout();
    navigation.navigate('Login');
  }

  return (
    <View>
      <Text>
        Settings - verticle list
      </Text>
      <Text>
        {userInfo.name} 
      </Text>
      <Text>
        Is Designer? {userInfo.isDesigner ? "Yes" : "No"} 
      </Text>
      <Button 
        title='Logout' 
        onPress={handleLogout}
      />
    </View>
  )
}

export default Settings