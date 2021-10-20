import React, { useState, useEffect } from 'react';
import get from './services/crypto-service';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AppTitle from './components/AppTitle';
import Main from './components/Main';
import Donations from './components/Donations';
import Menu from './components/Menu';

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
};


const App = () => {
    const [cryptoList, setCryptoList] = useState([{}]);

    // useEffect(() => {

    //     get()
    //     .then(response => {
    //         console.log("response:", response);
    //         setCryptoList(response);
    //     });

    // }, []);

    return (
        <Box sx={{ ...style.container}} bgcolor="secondary.main">

            <a href="https://www.github.com/fcancelinha/crypto-profit" target="_blank" rel="noreferrer">
                <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                    width="100"
                    alt="github"
                    style={{ borderRadius: 5, position: 'absolute', top: 0, left: 0 }} />
            </a>

            <Box sx={{...style.subContainer}} bgcolor="secondary.main">

                <AppTitle />

                <Paper sx={{ ...style.paper }} elevation={10}>
                    <Stack>
                        <Main cryptoList={cryptoList} />
                        <Donations />
                    </Stack>
                </Paper>

                <Menu />

            </Box>
        </Box>
    );
};

export default App;
