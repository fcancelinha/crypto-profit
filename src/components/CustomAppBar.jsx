import React from 'react'
import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const CustomAppBar = () => {

    const title = "Crypto Profit App"

    return (
        <AppBar position="static" sx={{mb: 2}}>
            <Toolbar variant="dense">

                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography edge="center" variant="button" sx={{fontSize: 20 }} color="inherit" component="div">
                    {title}
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default CustomAppBar
