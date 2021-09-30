import React from 'react'
import { Stack, IconButton } from '@mui/material'
import NightlightRound from '@mui/icons-material/NightlightRound'
import Paid from '@mui/icons-material/Paid'
import Menu from '@mui/icons-material/Menu'
import AttachMoney from '@mui/icons-material/AttachMoney'

const Settings = () => {
    return (
        <Stack direction="row" spacing={1} sx={{mr: 5}}>
            <IconButton>
                <Paid />
            </IconButton>
            <IconButton>
                <NightlightRound />
            </IconButton>
            <IconButton>
                <Menu />
            </IconButton>
        </Stack>
    )
}

export default Settings
