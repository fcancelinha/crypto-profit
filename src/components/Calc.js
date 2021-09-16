import React from 'react'

const Calc = ({ coinAmount, buyValue, sellValue, buyFee, sellFee }) => {

    const baseBuy = parseFloat((coinAmount.value * buyValue.value).toFixed(5));
    const baseSell = parseFloat((sellValue.value * coinAmount.value).toFixed(5));
    const profit = parseFloat((baseSell - baseBuy - buyFee.value - sellFee.value).toFixed(5));
    const totalFees = parseFloat((parseFloat(buyFee.value) + parseFloat(sellFee.value)).toFixed(5));

    return (

        <div>
            <div>
                profit: {profit}
            </div>

            <div>
                Total Fees: {totalFees}
            </div>

            <div>
                Total: {parseFloat(((baseBuy + profit).toFixed(5)))}
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