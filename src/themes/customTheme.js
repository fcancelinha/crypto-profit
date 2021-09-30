import { createTheme } from '@mui/material/styles'


export const customTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#ffffff',
            light: '#0a0a0a',
            dark: '#0c0c0c',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
    }
});