import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const title = "Crypto Profit ₿"

const AppTitle = () => {
    return (
        <Box sx={{ my: 2, display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h5" color="black">
                {title}
            </Typography>
        </Box>
    )
}

export default AppTitle
