import React, {useState, useEffect} from 'react';
import get from './services/crypto-service';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/customTheme';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AppTitle from './components/AppTitle';
import Main from './components/Main';
import Donations from './components/Donations';


const App = () => {
    const [cryptoList, setCryptoList] = useState([{}])

    // useEffect(() => {

    //     get()
    //     .then(response => {
    //         console.log("response:", response);
    //         setCryptoList(response);
    //     });

    // }, []);
 
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', mx: -1, my: -1, backgroundColor: '#FDFEFE' }}>

                <AppTitle />

                <Paper sx={{ alignSelf: 'center', mt: -12, borderRadius: 3, mb: 7, pb: 3, backgroundColor: '#FDFEFE' }} style={{ width: '37em' }} elevation={10}>
                    <Stack sx={{ alignSelf: 'center' }}>

                        <Main cryptoList={cryptoList}/>

                        <Donations />

                    </Stack>
                </Paper>

            </Box>
        </ThemeProvider>
    );
};

export default App;
