import React from 'react'

const Calc = ({ coinAmount, buyValue, sellValue, buyFee, sellFee }) => {

    const baseBuy = coinAmount.value * buyValue.value;
    const baseSell = sellValue.value * coinAmount;
    const profit = baseSell - baseBuy - buyFee - sellFee;

    console.log(baseBuy, baseSell, profit)
    return (

        <div>
            <div>
                profit: {profit}
            </div>

            <div>
                Total Fees: {(buyFee.value + sellFee.value)}
            </div>

            <div>
                Total: {baseBuy + profit}
            </div>
        </div>


    )
}

export default Calc

// teste
/**
        coinAmount: useField('number'),
        buyValue: useField('number'),
        sellValue: useField('number'),
        buyFee: useField('number'),
        sellFee: useField('number')
*/