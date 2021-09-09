import React from 'react'

const Calc = ({coinAmount, buyValue, sellValue, buyFee, sellFee}) => {

    return (

        <div>
            <div>
                profit: {(coinAmount.value * buyValue.value)}
            </div>

            <div>
                Fees: {coinAmount.value * buyValue.value}
            </div>

            <div>
                Total: {coinAmount.value * buyValue.value}
            </div>
        </div>

      
    )
}

export default Calc


/** 
        coinAmount: useField('number'),
        buyValue: useField('number'),
        sellValue: useField('number'),
        buyFee: useField('number'),
        sellFee: useField('number')
*/