import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/customTheme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App id='root'/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
