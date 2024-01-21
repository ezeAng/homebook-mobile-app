import { View, Text, Button, ActivityIndicator } from 'react-native';
import React, { useState, useContext } from 'react';
import { AuthenticationContext } from '../../global/auth/AuthenticationContext';
const Signup = ({ route, navigation }) => {
    const { username, password } = route.params;

    const {signup, isLoading} = useContext(AuthenticationContext);

    const handleSignup = async () => {
        try {
          var res = await signup(username, password);
          //if successful signup, 
          if (res) {
            navigation.navigate('Login');
          }
        } catch(e) {
          console.log(`Error on signup, try again: ${e}`);
          alert(`Error on signup, try again: ${e}`);
        }
      };  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Signup page</Text>
            <Text>username: {JSON.stringify(username)}</Text>
            <Text>password: {JSON.stringify(password)}</Text>
            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : (
                <Button title="Complete Signup" onPress={handleSignup} />
            )}
            
            <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default Signup