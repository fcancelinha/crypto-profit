import { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage';
import useMedia from './useMedia';
import lightTheme from '../styles/lightTheme'
import darkTheme from '../styles/darkTheme'


const usePrefersDarkMode = () => {
    return useMedia(["(prefers-color-scheme: dark)"], [true], false)
}

const useDarkMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled")
    const [darkMode, setDarkMode] = useState(darkTheme)
    const prefersDarkMode = usePrefersDarkMode()

    const enabled = 
        typeof enabledState !== "undefined" ? enabledState : prefersDarkMode

    useEffect(
        () => {
            setDarkMode((enabled ? darkTheme : lightTheme))
        },
        [enabled]
    )

    const wrapSetDarkMode = (isDarkMode) => {
        
        if(isDarkMode)
        {
            setDarkMode(darkTheme)
            setEnabledState("dark-mode-enabled")
        }
        else
        {
            setDarkMode(lightTheme)
            setEnabledState("light-mode-enabled")
        }

    }

    return [darkMode, wrapSetDarkMode];
}

export default useDarkMode;