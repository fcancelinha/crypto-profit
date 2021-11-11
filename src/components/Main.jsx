import React, { useState, useEffect } from 'react'
import get from '../services/crypto-service';
import useField from '../hooks/useField'
import ValueInput from './ValueInput'
import CryptoCaroussel from './CryptoCaroussel'
import Menu from './Menu'
import Box from '@mui/system/Box';
import { load } from 'dotenv';

const TYPE = 'number'
const filterCoins = ['USDT', 'USDC', 'HEX', 'BUSD', 'TUSD']

const Main = ({ handleThemeChange }) => {
    const [crypto, setCrypto] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState(false)
    const [selectedCurrency, setSelectedCurrency] = useState({ currency: 'USD', symbol: '$' })
    const loading = Boolean(crypto.length)

    useEffect(() => {

        get()
        .then(response =>  {
            const result = response.filter(x => filterCoins.indexOf(x.currency) < 0)
            setCrypto(result)
        })
        .catch(error => {
            console.log(error)
        })

    }, []);

    const btc = crypto.find(x => x.currency === 'BTC')

    //custom hook object with state value in property "value"
    const fields = {
        coinAmount: useField(TYPE), 
        buyValue: useField(TYPE),
        sellValue: useField(TYPE),
        buyFee: useField(TYPE),
        sellFee: useField(TYPE)
    }

    const handleCoinSelection = (newValue) => {
        if(newValue && newValue?.price){
            setSelectedCoin(newValue);
            fields.buyValue.onChange({target: {value: newValue.price}})
        }
    }

    console.log("btc", btc)

    
    /* component MENU is absolute and outside of DOM */
    return (
        <Box>
            {
                loading &&
                <Box>
                    <ValueInput
                        fields={fields}
                        btc={btc}
                        selectedCurrency={selectedCurrency}
                    />

                    <CryptoCaroussel
                        selectedCoin={selectedCoin}
                        cryptoList={crypto}
                        handleCoinSelection={handleCoinSelection}
                    />

                    <Menu
                        handleThemeChange={handleThemeChange}
                        selectedCoin={selectedCoin}
                        cryptoList={crypto}
                        handleCoinSelection={handleCoinSelection}
                        setSelectedCurrency={setSelectedCurrency}
                        fields={fields}
                        selectedCurrency={selectedCurrency}
                    />
                </Box>
            }
        </Box>
    )
}

export default Main;
