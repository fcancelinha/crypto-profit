import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Investment from './Investment'
import TotalFee from './TotalFee'

const ValueDisplay = ({ values, selectedCurrency }) => {

    const options = {
        style: 'currency',
        currency: selectedCurrency.currency,
    }

    return (
        <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="subtitle2" >
                NET GAIN
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Investment value={values.profit} inProfit={values.inProfit} options={{...options, signDisplay: 'exceptZero'}} display={true} />
                </Box>
                {values.totalFee > 0 && <TotalFee totalFees={values.totalFee} />}
            </Typography>

            <Typography variant="subtitle2" sx={{ mt: 1 }} >
                TOTAL
                <Investment value={values.total} inProfit={values.inProfit} options={options} display={false} />
            </Typography>
        </Box>
    )
}

export default ValueDisplay