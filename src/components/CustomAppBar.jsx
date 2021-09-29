import React from 'react'
import { Typography, Box } from '@mui/material'


const CustomAppBar = () => {

    const title = "Crypto Profit App"

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="button" sx={{ fontSize: 20, justifyContent: 'center', mb: 1 }} color="inherit" component="div">
                {title}
            </Typography>
        </Box>

    )
}

export default CustomAppBar
