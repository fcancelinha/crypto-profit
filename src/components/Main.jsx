import React, { useState } from 'react';
import { convert } from '../utils/conversion';
import useField from '../hooks/useField';
import ValueInput from './ValueInput';
import CryptoCaroussel from './CryptoCaroussel';
import Menu from './Menu';

const TYPE = 'number'

const Main = ({ cryptoList , fiatList, handleThemeChange }) => {
    const [selectedCoin, setSelectedCoin] = useState(false)
    const [selectedCurrency, setSelectedCurrency] = useState({currency: 'USD', symbol: '$'})

    const btc = cryptoList.find(x => x.currency === 'BTC')

    //custom hook object with state value in property "value"
    const fields = {
        coinAmount: useField(TYPE), 
        buyValue: useField(TYPE),
        sellValue: useField(TYPE),
        buyFee: useField(TYPE),
        sellFee: useField(TYPE),
    };

    const handleCoinSelection = (newValue) => {
        if(newValue && newValue?.price){
            setSelectedCoin(newValue);
            fields.buyValue.onChange({target: {value: newValue.price}})
        }
    }

    const handleFiatSelection = (newCurrency) => {
        setSelectedCurrency({
            ...selectedCurrency,
            currency: newCurrency.currency,
            symbol: newCurrency.symbol
        })
        convert(fiatList, selectedCurrency, fields)
    }


    /* component MENU is absolute and outside of DOM */
    return (
        <>
            <ValueInput 
                fields={fields} 
                btc={btc} />

            <CryptoCaroussel 
                selectedCoin={selectedCoin} 
                cryptoList={cryptoList} 
                handleCoinSelection={handleCoinSelection} />

            <Menu 
                handleThemeChange={handleThemeChange} 
                selectedCoin={selectedCoin} 
                cryptoList={cryptoList}
                handleCoinSelection={handleCoinSelection}
                handleFiatSelection={handleFiatSelection} 
            />
        </>

    );
};

export default Main;
