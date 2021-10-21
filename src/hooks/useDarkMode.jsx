import {useEffect } from 'react'
import useLocalStorage from './useLocalStorage';
import useMedia from './useMedia';

const usePrefersDarkMode = () => {
    return useMedia(["(prefers-color-scheme: dark)"], [true], false)
}

const useDarkTheme = () => {
    const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled")
    const prefersDarkMode = usePrefersDarkMode()

    const enabled = 
        typeof enabledState !== "undefined" ? enabledState : prefersDarkMode

    useEffect(
        () => {

            const className = "dark-mode"
            const element = window.document.body

            if (enabled) {
                element.classList.add(className)
            } else {
                element.classList.remove(className)
            }
        },
        [enabled]
    )

    return [enabled, setEnabledState];
}

export default useDarkTheme;