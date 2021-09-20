import React from 'react'

const Calc = ({ coinAmount, buyValue, sellValue, buyFee, sellFee }) => {

    const decimalPlaces = 5

    const baseBuy = (coinAmount.value * buyValue.value).toFixed(decimalPlaces);
    const baseSell = (sellValue.value * coinAmount.value).toFixed(decimalPlaces);
    const profit = (baseSell - baseBuy - buyFee.value - sellFee.value).toFixed(decimalPlaces);
    const totalFees = (buyFee.value + sellFee.value).toFixed(decimalPlaces);
    const total = (baseBuy + profit).toFixed(decimalPlaces)

    return (

        <div>
            <div>
                profit: {profit}
            </div>

            <div>
                Total Fees: {totalFees}
            </div>

            <div>
                Total: {total}
            </div>
        </div>

    )
}

export default Calc