import React, { useState } from 'react';
import useField from '../hooks/useField';
import ValueInput from './ValueInput';
import CryptoCaroussel from './CryptoCaroussel';
import Menu from './Menu';

const Main = ({ cryptoList , handleThemeChange }) => {
    const [selectedCoin, setSelectedCoin] = useState(false)

    const TYPE = 'number'
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

    /* component MENU is absolute and outside of DOM */
    return (
        <>
            <ValueInput fields={fields} btc={btc} />

            <CryptoCaroussel buyValueField={fields.buyValue} selectedCoin={selectedCoin} cryptoList={cryptoList} handleCoinSelection={handleCoinSelection} />

            <Menu handleThemeChange={handleThemeChange} selectedCoin={selectedCoin} cryptoList={cryptoList}  handleCoinSelection={handleCoinSelection} />
        </>

    );
};

export default Main;
