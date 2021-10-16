import Typography from '@mui/material/Typography'
import React from 'react'


const Investment = ({ value, inProfit, options, display }) => {

    const style = {
        color: inProfit ? 'green' : 'red'
    }

    return (
        <Typography sx={{color: display ? style.color : "", fontSize: 21 }}>
            {Intl.NumberFormat('de-DE', {...options}).format(value)}
        </Typography>
    )
}

export default Investment
