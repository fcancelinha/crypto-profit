import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import get from './services/crypto-service';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AppTitle from './components/AppTitle';
import Main from './components/Main';
import Donations from './components/Donations';
import Menu from './components/Menu';
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
        alignSelf: 'center',
        borderRadius: 3,
        pb: 3,
        mb: 4,
        mt: -12,
        width: '33rem'
    }
}


const App = () => {
    const [cryptoList, setCryptoList] = useState([]);
    const [theme, setTheme] = useDarkMode();

 
    // const ctheme = useTheme()
    // console.log("theme", ctheme.palette.text.primary)
    // const paperShadow = `60px -16px white`

    // useEffect(() => {

    //     get()
    //     .then(response => {
    //         console.log("response:", response);
    //         setCryptoList(response);
    //     });

    // }, []);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={style.container} bgcolor="background.default">

                <Github />

                <Box sx={style.subContainer} bgcolor="background.default">

                    <AppTitle />

                    <Paper sx={style.paper} elevation={23} >
                        <Stack>
                            <Main cryptoList={cryptoList} />
                            <Donations />
                        </Stack>
                    </Paper>

                    <Menu switchTheme={() => setTheme()} />

                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default App;
