import React, { useState } from 'react'
import { Stack, IconButton, Box, Collapse } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AttachMoneySharp from '@mui/icons-material/AttachMoneySharp';
import NightlightRound from '@mui/icons-material/NightlightRound';

const VerticalAppBar = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Box >
            <Stack sx={{ mr: 3, py:1, mt: 2, backgroundColor: "#000000", borderRadius: 5 }}>
                <IconButton>
                    <MenuIcon sx={{ fontSize: 23, color: "#FFF" }} />
                </IconButton>

                <IconButton>
                    <NightlightRound sx={{ fontSize: 22, color: "#FFF" }} />
                </IconButton>

                <IconButton onClick={() => {setCollapsed(!collapsed)}}>
                    <AttachMoneySharp sx={{ fontSize: 25, color: "#FFF" }} onClick />
                </IconButton>
            </Stack>

            <Collapse in={false}>
                <Box>
                    <IconButton>
                        <NightlightRound sx={{ fontSize: 22 }} />
                    </IconButton>
                </Box>
            </Collapse>



        </Box>
    )
}

export default VerticalAppBar