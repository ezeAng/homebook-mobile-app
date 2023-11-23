import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const Signup = ({ route, navigation }) => {
    const { username, password } = route.params;

    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = () => {
        setIsLoading(true);

        // Here, implement your login logic, possibly making a request to your backend.
        // This is just a mockup of a login function that "waits" for 2 seconds.
        setTimeout(() => {
            setIsLoading(false);
            alert('Signed up successfully!');
            
        }, 2000);

        navigation.navigate('Login');
    }
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