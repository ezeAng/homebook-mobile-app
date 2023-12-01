import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthenticationContext = createContext();
import { BASE_URL } from './config';

//Contain all the methods for calling APIs for auth, for storing auth
const AuthenticationProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const signup = async (username, password) => {
        setIsLoading(true);
        const email = "fake@mail.com";
        var name = username + "-name";
        const result = await axios.post(`${BASE_URL}/users/signup`,{
            username,
            password,
            email,
            name
        })
        .then(async res => {
            let userInfo = res.data;
            setUserInfo(userInfo.user);
            console.log("Auth signup: ", userInfo);
            if (userInfo) {
                console.log("Returning: ", userInfo)
                return userInfo;
            }
            setIsLoading(false);
        })
        .catch(e => {
            console.log(`Error on signup: ${e}`);
            setIsLoading(false);
        });

        
        setIsLoading(false);
        return result;
        
    }

    const login = async (username, password) => {
        setIsLoading(true);
        const result = await axios.post(`${BASE_URL}/users/login`,{
            username,
            password
        })
        .then(async res => {
            let userInfo = res.data;
            setUserInfo(userInfo.user);
            setUserToken(userInfo.accessToken);

            await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            await AsyncStorage.setItem('userToken', userInfo.accessToken);
            if (userInfo) {
                return userInfo;
            }
        })
        .catch(e => {
            console.log(`Error on login: ${e}`);
        });
        
        setIsLoading(false);
        return result;
    }

    const logout = async () => {
        setIsLoading(true);
        console.log("User Logged Out");
        setUserToken(null);
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userInfo');
        setIsLoading(false);
    }

    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);
            if (userInfo) {
                setUserInfo(userInfo);
                setUserToken(userToken);
            }
            
            setIsLoading(false);
            return true;
        } catch(e) {
            console.log(`isLogged in error ${e}`);
            return false;
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthenticationContext.Provider value={{login, logout, signup, isLoading, userInfo}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export {AuthenticationContext, AuthenticationProvider};