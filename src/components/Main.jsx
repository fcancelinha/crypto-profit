import React, { useState } from 'react';
import useField from '../hooks/useField';
import ValueInput from './ValueInput';
import CryptoCaroussel from './CryptoCaroussel';
import Menu from './Menu';

const Main = ({ cryptoList , handleThemeChange }) => {
    const [selectedCoin, setSelectedCoin] = useState(false)

    const type = 'number'

    //custom hook object with state value in property "value"
    const fields = {
        coinAmount: useField(type),
        buyValue: useField(type),
        sellValue: useField(type),
        buyFee: useField(type),
        sellFee: useField(type),
    };

    const handleCoinSelection = (newValue) => {
        setSelectedCoin(newValue);
        fields.buyValue.onChange({target: {value: newValue.price}})
    }

    return (
        <>
            <ValueInput fields={fields} />

            <CryptoCaroussel cryptoList={cryptoList} buyValueField={fields.buyValue} selectedCoin={selectedCoin} handleCoinSelection={handleCoinSelection} />

            {/*component is absolute and outside of DOM */}
            <Menu cryptoList={cryptoList} handleThemeChange={handleThemeChange} handleCoinSelection={handleCoinSelection} />
        </>

    );
};

export default Main;
