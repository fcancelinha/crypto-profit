import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/customTheme';
import { performCalculation } from './utils/calculation';
import get from './services/crypto-service';
import ValueDisplay from './components/ValueDisplay';
import useField from './hooks/useField';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ValueInput from './components/ValueInput';
import Donations from './components/Donations';
import CryptoCaroussel from './components/CryptoCaroussel';
import AppTitle from './components/AppTitle';


const App = () => {
    const [cryptoList, setCryptoList] = useState([{}]);

    const REGEX = /^\d+.?\d*/g;

    //custom hook object with state value in property "value"
    const fields = {
        coinAmount: useField('text', REGEX),
        buyValue: useField('text', REGEX),
        sellValue: useField('text', REGEX),
        buyFee: useField('text', REGEX),
        sellFee: useField('text', REGEX),
    };

    const values = performCalculation(fields);

    // useEffect(() => {

    //     get()
    //         .then(response => {
    //             console.log("response:", response);
    //             setCryptoList(response);
    //         });

    // }, []);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', mx: -1, my: -1, backgroundColor: '#FDFEFE' }}>

                <AppTitle />

                <Paper sx={{ alignSelf: 'center', mt: -12, borderRadius: 3, mb: 7, pb: 3, backgroundColor: '#FDFEFE' }} style={{ width: '37em' }} elevation={10}>
                    <Stack sx={{ alignSelf: 'center' }}>

                        <ValueInput fields={fields} values={values} />

                        <ValueDisplay values={values} />

                        <CryptoCaroussel cryptoList={cryptoList} />

                        <Donations />

                    </Stack>

                </Paper>
            </Box>
        </ThemeProvider>
    );
};

export default App;
