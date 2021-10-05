import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import AttachMoneySharp from '@mui/icons-material/AttachMoneySharp';
import NightlightRound from '@mui/icons-material/NightlightRound';

const MiniAppBar = () => {
    const [collapsed, setCollapsed] = useState(false)

    const currencies = ['$', '€', '£', '¥']

    return (
        <Stack direction="row" sx={{ background: "#000000", borderRadius: 20, maxWidth: 110, px: 1, maxHeight: 35, mr: 2 }}>

            <IconButton onClick={() => setCollapsed(!collapsed)}>
                <AttachMoneySharp sx={{ fontSize: 23, color: "#FFF" }} />
            </IconButton>

            <IconButton>
                <NightlightRound sx={{ fontSize: 21, color: "#FFF" }} />
            </IconButton>

            <IconButton>
                <MenuIcon sx={{ fontSize: 20, color: "#FFF" }} />
            </IconButton>
        </Stack>
    )
}

export default MiniAppBar