import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const title = "CRYPTO PROFIT"
const subTitle = "made by @fcancelinha"

const AppTitle = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "black", pb: 15}}>
            <Typography variant="h3" color="white" sx={{ alignSelf: 'center', mt: 2, fontFamily: 'Cairo' }} >
                {title} <span style={{ color: 'gold' }}>₿</span>
            </Typography>
            <Typography variant="caption" color="white" sx={{ alignSelf: 'center', fontFamily: 'Cairo' }} >
                {subTitle}
            </Typography>
        </Box>
    );
}

export default AppTitle
