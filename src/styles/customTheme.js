import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#FDFEFE',
            light: '#0a0a0a',
            dark: '#121313',
            contrastText: '#2A2D2F',
        },
        secondary: {
            main: '#121313',
            light: '#0a0a0a',
            dark: '#0c0c0c',
            contrastText: '#FDFEFE',
        },
    }
});