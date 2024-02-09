"use client"
import React, { createContext } from 'react';

export const MyContext = createContext();

const context = ({children}) => {
    const username = "Shrinivas Hatte";
    return (
        <MyContext.Provider value={username}>
            {children}
        </MyContext.Provider>
      );
}
 
export default context;