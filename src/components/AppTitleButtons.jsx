import React from 'react'
import Box from '@mui/system/Box'
import Button from '@mui/material/Button'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import MenuIcon from '@mui/icons-material/Menu'

const AppTitleButtons = () => {

    const style = {
        minWidth: 4,
        height: 40,
        borderRadius: 40,
        width: 42,
    }


    return (
        <Box sx={{ display: 'flex' }}>
            <Button variant="outlined" size="small" style={{...style, marginRight: 30 }}>
                <AttachMoneyIcon />
            </Button>

            <Button variant="outlined" size="small" style={{ ...style, height: 40 }}>
                <Brightness4Icon />
            </Button>

            <Button variant="outlined" size="small" style={{ ...style, marginLeft: 30 }}>
                <MenuIcon />
            </Button>
        </Box>
    )
}

export default AppTitleButtons;
