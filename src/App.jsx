import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import get from './services/crypto-service';
import { mock } from './mocks/cryptoList'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AppTitle from './components/AppTitle';
import Main from './components/Main';
import Donations from './components/Donations';
import useDarkMode from './hooks/useDarkMode';
import Github from './components/Github';

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        minWidth: 'auto',
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        alignContent: 'flex-start'
    },
    subContainer: {
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection:'column', 
        minWidth: '100%',
        pb: 10
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 3,
        pb: 3,
        mb: 4,
        mt: -12,
        width: '33rem'
    }
}

const filterCoins = ['USDT', 'USDC', 'HEX', 'BUSD', 'TUSD']

const App = () => {
    const [theme, setTheme] = useDarkMode()
    // const [crypto, setCrypto] = useState([]);

    const filteredMock = mock.filter(x => filterCoins.indexOf(x.currency) < 0)
    const cryptoList = filteredMock;

    // useEffect(() => {

    //     get()
    //     .then(response => {
    //         console.log("response:", response);
    //         setCryptoList(response);
    //     });

    // }, []);
    
    return (
        <ThemeProvider theme={theme}>
            <Box id="container" sx={style.container} bgcolor="background.default">

                <Github />

                <Box id="main-body" sx={style.subContainer} bgcolor="background.default">

                    <AppTitle />

                    <Paper sx={style.paper} elevation={23} >

                        <Main cryptoList={cryptoList} handleThemeChange={() => setTheme()} />

                        <Donations />

                    </Paper>

                </Box>

            </Box>
        </ThemeProvider>
    )
}

export default App;
