import React from 'react';
import useField from '../hooks/useField';
import ValueInput from './ValueInput';
import CryptoCaroussel from './CryptoCaroussel';

const Main = ({cryptoList}) => {

    const REGEX = /^\d+.?\d*/g;

    //custom hook object with state value in property "value"
    const fields = {
        coinAmount: useField('text', REGEX),
        buyValue: useField('text', REGEX),
        sellValue: useField('text', REGEX),
        buyFee: useField('text', REGEX),
        sellFee: useField('text', REGEX),
    };

    const setBuyValue = (coinValue) => {
        fields.buyValue.onChange(null, coinValue)
    }

    return (
        <>
            <ValueInput fields={fields} />

            <CryptoCaroussel cryptoList={cryptoList} setBuyValue={setBuyValue} />
        </>

    );
};

export default Main;
