import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#121212',
      light: '#1A1A1A',
      contrastText: '#f5f5f5',
      dark: '#252525',
    },
    secondary: {
      main: '#f5f5f5',
      contrastText: '#1A1A1A',
      dark: '#E5E7E9',
      light: '#E5E7E9',
    },
    background: {
      default: '#f5f5f5',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#1A1A1A',
    },
    divider: '#252525',
  },
});