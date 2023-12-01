import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../auth/config';
const DatabaseContext = createContext();

//Contain all the methods for calling APIs, loading data etc
const DatabaseProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);

    const getLikes = async () => {
        setIsLoading(true);
        try {
            const token = await AsyncStorage.getItem('userToken'); // Retrieve the stored token
            const config = {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                }
            };
        
            const response = await axios.get(BASE_URL + '/users/likes', config);
            // Handle success
            return response.data;
        } catch (error) {
            console.error('Error getting profiles from db:', error);
        }
        
        setIsLoading(false);
    }

    return (
        <DatabaseContext.Provider value={{getLikes}}>
            {children}
        </DatabaseContext.Provider>
    )
}

export {DatabaseContext, DatabaseProvider};