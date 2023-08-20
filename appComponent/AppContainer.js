
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
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoRef, setVideoRef] = useState(null);

    const togglePlayback = () => {
        setIsPlaying(!isPlaying)
    }
    
    const unloadVideo = async () => {
        if (videoRef) {
            await videoRef.unloadAsync()
            setIsPlaying(false)
        }
    }

    const startPlaying = () => {
        setIsPlaying(true)
    }
    
      const stopPlaying = () => {
        setIsPlaying(false)
    }

    useEffect(() => {
        return () => {
          unloadVideo()
        }
    }, [])

    return (
        <MainContainer.Provider value={{ isLoggedIn, setIsLoggedIn, sessionID, setSession, isPlaying, togglePlayback, setVideoRef, startPlaying, stopPlaying, unloadVideo }}>
            
            {children}
            
        </MainContainer.Provider>
    )
}

export const useAppContainer = () => useContext(MainContainer)

export default AppContainer