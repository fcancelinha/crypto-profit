import React from 'react'
import { Typography, Box } from '@mui/material'

const ValueDisplay = ({ values }) => {


    return (

        <Box sx={{ textAlign: 'center', my: 5 }}>

            <Typography variant="subtitle2" gutterBottom component="div">
                RETURN
            </Typography>

            <Typography variant="h6" gutterBottom component="div">
                {Intl.NumberFormat('de-DE', {style:'currency', currency: 'USD'}).format(values.profit)}
            </Typography>

            <Typography variant="subtitle2" gutterBottom component="div">
                TOTAL
            </Typography>

            <Typography variant="h6" gutterBottom component="div">
                {Intl.NumberFormat('de-DE', {style:'currency', currency: 'USD'}).format(values.total)}
            </Typography>
            
        </Box>
    )
}

export default ValueDisplay