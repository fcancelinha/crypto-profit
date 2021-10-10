import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AppTitleButtons from './AppTitleButtons'

const title = "CRYPTO PROFIT"

const AppTitle = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "black", pb: 15}}>
            <Typography variant="h3" color="white" sx={{alignSelf: 'center', mt: 2, fontFamily: 'Cairo'}} >
                {title} <span style={{color: 'gold'}}>₿</span>
            </Typography>

            <Box sx={{alignSelf: 'center', mt: 2}}>
                <AppTitleButtons />
            </Box>

        </Box>
    )
}

export default AppTitle
