import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const title = "CRYPTO PROFIT"
const subTitle = "made by @fcancelinha"

const style = {
    container: {
        display: 'flex', 
        flexDirection: 'column', 
        pb: 15
    },
    text: {
        alignSelf: 'center',
        fontFamily: 'Cairo'
    }
}

const AppTitle = () => {
    return (
        <Box sx={{...style.container}} bgcolor="primary.main">
            <Typography variant="h3" color="secondary" sx={{...style.text, mt: 2,  }} >
                {title} <span style={{ color: 'gold' }}>₿</span>
            </Typography>
            <Typography variant="caption" color="secondary" sx={{...style.text}} >
                {subTitle}
            </Typography>
        </Box>
    );
}

export default AppTitle
