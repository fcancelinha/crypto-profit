import React from 'react'
import { Typography, Box } from '@mui/material'

const AppTitle = () => {

    const TITLE = 'CRYPTO PROFIT APP'

    return (
        <Typography sx={{fontSize: 24 }} variant="button" gutterBottom component="div" >
            <Box sx={{ textAlign: 'center', mt: 5, mb: 3 }}>
                {TITLE}
            </Box>
        </Typography>
    )
}

export default AppTitle
