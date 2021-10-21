import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#f5f5f5',
            light: '#E5E7E9',
            contrastText: '#121212',
            dark: '#E5E7E9',
        },
        secondary: {
            main: '#121212',
            contrastText: '#f5f5f5',
            dark: '#252525',
            light: '#1a1a1a',
        },
        background: {
            default: '#121212',
            paper: '#1A1A1A',
        },
        text: {
            primary: '#f5f5f5',
        },
        divider: '#252525',
    },
    props: {
        MuiTooltip: {
            arrow: true,
        },
    }
})
