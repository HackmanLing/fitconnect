
import React, { createContext, useContext, useEffect, useState } from 'react'

const MainContainer = createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    sessionID: null,
    setSession: () => {},
})


const AppContainer = ( { children } ) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [sessionID, setSession] = useState(null)

    return (
        <MainContainer.Provider value={{ isLoggedIn, setIsLoggedIn, sessionID, setSession }}>
            
            {children}
            
        </MainContainer.Provider>
    )
}

export const useAppContainer = () => useContext(MainContainer)

export default AppContainer