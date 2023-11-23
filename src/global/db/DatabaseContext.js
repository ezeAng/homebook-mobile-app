import React, { createContext, useContext, useEffect, useState } from 'react';

const DatabaseContext = createContext();

//Contain all the methods for calling APIs, loading data etc
const DatabaseProvider = ({children}) => {

    return (
        <DatabaseContext.Provider>
            {children}
        </DatabaseContext.Provider>
    )
}

export {DatabaseContext, DatabaseProvider};