import { Typography } from '@mui/material'
import React from 'react'


const Investment = ({ value, inProfit, currency = 'USD', display }) => {

    const options = {
        style: 'currency',
        currency
    }

    const style = {
        color: inProfit ? 'green' : 'red'
    }

    return (
        <Typography variant="h6" sx={{color: display ? style.color : "" }}>
            {Intl.NumberFormat('de-DE', {...options}).format(value)}
        </Typography>
    )
}

export default Investment
