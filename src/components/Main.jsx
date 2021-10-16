import React from 'react';
import useField from '../hooks/useField';
import ValueInput from './ValueInput';
import CryptoCaroussel from './CryptoCaroussel';

const Main = ({cryptoList}) => {

    //custom hook object with state value in property "value"
    const fields = {
        coinAmount: useField('text'),
        buyValue: useField('text'),
        sellValue: useField('text'),
        buyFee: useField('text'),
        sellFee: useField('text'),
    };

    const setBuyValue = (coinValue) => {
        fields.buyValue.onChange({event: {target: {value: coinValue}}})
    }

    return (
        <>
            <ValueInput fields={fields} />

            <CryptoCaroussel cryptoList={cryptoList} setBuyValue={setBuyValue} />
        </>

    );
};

export default Main;
