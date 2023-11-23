import { View, Text, Button } from 'react-native';

const Settings = ({navigation}) => {

  const handleLogout = () => {
    navigation.navigate('Login');
  }

  return (
    <View>
      <Text>
        Settings - verticle list
      </Text>

      <Button 
        title='Logout' 
        onPress={handleLogout}
      />
    </View>
  )
}

export default Settings