import React, { useState, useEffect } from 'react';
import get from './services/crypto-service';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AppTitle from './components/AppTitle';
import Main from './components/Main';
import Donations from './components/Donations';
import Menu from './components/Menu';


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
  
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', mx: -1, my: -1, backgroundColor: '#FDFEFE' }}>

                <a href="https://www.github.com/fcancelinha/crypto-profit" target="_blank" rel="noreferrer">
                    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" 
                        width="100" 
                        height="auto" 
                        alt="github" 
                        style={{ borderRadius: 5, position: 'absolute', top: 0, left: 0 }} />
                </a>

                <AppTitle />

                <Paper sx={{ alignSelf: 'center', mt: -12, borderRadius: 3, pb: 3, mb: 4,  backgroundColor: '#FDFEFE' }} style={{ width: '35em' }} elevation={10}>
                    <Stack sx={{ alignSelf: 'center' }}>

                        <Main cryptoList={cryptoList} />

                        <Donations />

                    </Stack>
                </Paper>

                <Menu />

            </Box>

    );
};

export default App;
