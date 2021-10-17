import React from 'react';
import useField from '../hooks/useField';
import ValueInput from './ValueInput';
import CryptoCaroussel from './CryptoCaroussel';

const Main = ({cryptoList}) => {

    //custom hook object with state value in property "value"
    const type = 'number'

    const fields = {
        coinAmount: useField(type),
        buyValue: useField(type),
        sellValue: useField(type),
        buyFee: useField(type),
        sellFee: useField(type),
    };

    const setBuyValue = (coinValue) => {
        fields.buyValue.onChange({target: {value: coinValue}})
    }

    return (
        <>
            <ValueInput fields={fields} />

            <CryptoCaroussel cryptoList={cryptoList} setBuyValue={setBuyValue} />
        </>

    );
};

export default Main;
