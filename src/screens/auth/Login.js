import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { AuthenticationContext } from '../../global/auth/AuthenticationContext';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  input: {
      width: 200,
      height: 40,
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 10,
  }
});

const Login = ({ navigation }) => {

  const {login, isLoading} = useContext(AuthenticationContext);


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      var res = await login(username, password);
      console.log(res);
      //if successful login, 
      if (res) {
        navigation.navigate('MainNavigator', {
          screen: 'Discover'
        });
      }
    } catch(e) {
      console.log(`Error on login, try again: ${e}`);
      alert(`Error on login, try again: ${e}`);
    }
  };  


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}

      <Button
        title="Signup"
        onPress={() => {
          /* 1. Navigate to the Signup route with params */
          navigation.navigate('Signup', {
            username: 'testuser',
            password: 'testpass',
          });
        }}
      />
    </View>
  )
}

export default Login