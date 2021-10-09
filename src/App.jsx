import React, { useState, useEffect } from 'react';
import { performCalculation } from './utils/calculation';
import get from './services/crypto-service';
import ValueDisplay from './components/ValueDisplay';
import useField from './hooks/useField';
import Stack from '@mui/material/Stack';
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

    useEffect(() => {

        get()
            .then(response => {
                console.log("response:", response);
                setCryptoList(response);
            });

    }, []);

    return (

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>

            <Stack>

                <AppTitle />

                <ValueInput fields={fields} values={values} />

                <ValueDisplay values={values} />

                <CryptoCaroussel cryptoList={cryptoList} />

                <Donations />

            </Stack>

        </Box>
    );
};

export default App;
