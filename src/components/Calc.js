import React from 'react'
import { Typography, Box } from '@mui/material'

const convertToNumber = (number) => {
    const DECIMAL_PLACES = 6
    return isNaN(parseFloat(number)) ? 0 : parseFloat(number).toFixed(DECIMAL_PLACES)
}


const Calc = ({ fields }) => {

    const values = {
        amount: convertToNumber(fields.coinAmount.value),
        buy: convertToNumber(fields.buyValue.value),
        sell: convertToNumber(fields.sellValue.value),
        buyFee: convertToNumber(fields.buyFee.value),
        sellFee: convertToNumber(fields.sellFee.value),
    }



    const buyValue = values.amount * values.buy
    const sellValue = values.amount * values.sell
    const profit = buyValue - sellValue
    
   

    return (

        <Box>
            <Typography component="div">
                <Box sx={{ textAlign: 'center', my: 5 }}>
                    Profit: {profit}
                </Box>
            </Typography>

            {/* <div>
                Total Fees: {parseFloat(totalFees.toFixed(DECIMAL_PLACES))}
            </div>

            <div>
                Total: {parseFloat(total.toFixed(DECIMAL_PLACES))}
            </div> */}
        </Box>
    )
}

export default Calc