import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AppTitleButtons from './AppTitleButtons'

const title = "CRYPTO PROFIT"

const AppTitle = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "black", pb: 15 }}>
            
            <Box sx={{ mt: 2, position: 'absolute', right: 0, top: 0, mr: 2 }}>
                <a href="https://www.github.com/fcancelinha/crypto-profit" target="_blank" rel="noreferrer">
                    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" width="100" height="auto" alt="github" style={{ borderRadius: 5 }} />
                </a>
            </Box>
            
            <Typography variant="h3" color="white" sx={{ alignSelf: 'center', mt: 2, fontFamily: 'Cairo' }} >
                {title} <span style={{ color: 'gold' }}>₿</span>
            </Typography>

            <Box sx={{ alignSelf: 'center', mt: 2 }}>
                <AppTitleButtons />
            </Box>

        </Box>
    );
}

export default AppTitle
