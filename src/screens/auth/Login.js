import React, { useState } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator, StyleSheet } from 'react-native';


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


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    // Here, implement your login logic, possibly making a request to your backend.
    // This is just a mockup of a login function that "waits" for 2 seconds.
    setTimeout(() => {
        setIsLoading(false);
        alert('Logged in successfully!');
        
    }, 2000);

    //if successful login, 
    navigation.navigate('MainNavigator', {
      screen: 'Discover'
    });

    //else go remain to login screen
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