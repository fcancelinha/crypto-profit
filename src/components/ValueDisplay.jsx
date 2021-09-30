import React from 'react'
import { Typography, Box } from '@mui/material'

const ValueDisplay = ({ values }) => {


    return (

        <Box sx={{ textAlign: 'center', my: 5 }}>

            <Typography variant="subtitle2">
                RETURN
                <Typography variant="h6">
                    {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(values.profit)}
                </Typography>
            </Typography>

            <Typography variant="subtitle2" sx={{ mt: 1 }} >
                TOTAL
                <Typography variant="h6">
                    {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(values.total)}
                </Typography>
            </Typography>
        </Box>
    )
}

export default ValueDisplay