import React from 'react'
import { Typography, Box } from '@mui/material'
import Investment from './Investment'
import TotalFee from './TotalFee'

const ValueDisplay = ({ values }) => {


    return (
        <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="subtitle2" >
                RETURNS
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Investment value={values.profit} inProfit={values.inProfit} display={true} />
                </Box>
                {values.totalFee !== 0 && <TotalFee totalFees={values.totalFee} />}
            </Typography>

            <Typography variant="subtitle2" sx={{ mt: 1 }} >
                TOTAL
                <Investment value={values.total} inProfit={values.inProfit} display={false} />
            </Typography>
        </Box>
    )
}

export default ValueDisplay