import React from 'react'
import { Stack, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NightlightRound from '@mui/icons-material/NightlightRound';

const VerticalAppBar = () => {

    return (
        <Stack spacing={2} sx={{right: 0}}>

            <IconButton >
                <MenuIcon />
            </IconButton>

            <IconButton>
                <NightlightRound />
            </IconButton>

            <IconButton>
                <AttachMoneyIcon />
            </IconButton>

        </Stack>
    )
}

export default VerticalAppBar
