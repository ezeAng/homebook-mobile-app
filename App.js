import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {DatabaseProvider} from './src/global/db/DatabaseContext';
import {AuthenticationProvider} from './src/global/auth/AuthenticationContext';

import { useContext } from 'react';
import { ActivityIndicator } from 'react-native';

//Screens
import Login from './src/screens/auth/Login';
import Signup from './src/screens/auth/Signup';
import MainNavigator from './src/screens/main/MainNavigator';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createNativeStackNavigator();

function App() {



  return (
    <AuthenticationProvider>
      <DatabaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="MainNavigator" component={MainNavigator} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </DatabaseProvider>
    </AuthenticationProvider>
  );
}

export default App;


