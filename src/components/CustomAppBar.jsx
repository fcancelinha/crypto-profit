import React from 'react'
import { AppBar, IconButton, Box, Typography, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NightlightRound from '@mui/icons-material/NightlightRound'
import Paid from '@mui/icons-material/Paid'

const CustomAppBar = () => {

    const title = "Crypto Profit ₿"

    return (
        <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', my: 2 }} >
            <Toolbar variant="dense" sx={{ backgroundColor: 'white', justifyContent: 'space-between' }}>
                <IconButton size="large" edge="end" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" color="black">
                    {title}
                </Typography>
                <Box>
                    <IconButton >
                        <Paid />
                    </IconButton>
                    <IconButton>
                        <NightlightRound />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar
