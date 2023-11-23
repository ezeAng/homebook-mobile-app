import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthenticationContext = createContext();

//Contain all the methods for calling APIs for auth, for storing auth
const AuthenticationProvider = ({children}) => {

    return (
        <AuthenticationContext.Provider>
            {children}
        </AuthenticationContext.Provider>
    )
}

export {AuthenticationContext, AuthenticationProvider};