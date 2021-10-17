import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import AppsIcon from '@mui/icons-material/Apps';
import NightsStayIcon from '@mui/icons-material/NightsStay';

const style = {
    fabBox : {
        display: 'flex', 
        justifyContent: 'flex-end', 
        flexDirection: 'column' ,
         position: 'fixed', 
         right: 0, 
         bottom: 0, 
         mb: 5, 
         mr: 5
    },
    fab: {
        backgroundColor: 'black',
    },
    fabMenu: {
        backgroundColor: 'black',
        position: 'fixed', 
        right: 0, 
        bottom: 0, 
        minHeight: '23em',
        minWidth: '23em',
        maxHeight: '23em',
        maxWidth: '23em',
        borderTopLeftRadius: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    fabMenuButtonBox: {
        alignSelf: 'flex-end'
    },
    fabMenuButton: {

    }
}


const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <Box sx={{ ...style.fabBox }}>
            <Fade
                in={open}
                {...(open ? { timeout: 800 } : {timeout: 600})}
            >
                <Box sx={{ ...style.fabMenu }}>
                    <Stack direction="column" alignItems="flex-end" sx={{ mb: 4.7 }}>

                        <Box sx={{ alignSelf: 'flex-end' }}>
                            <Fab color="secondary"  sx={{ mr: 11.5, mb: 1 }}>
                                <SearchIcon />
                            </Fab>
                        </Box>
                        <Box sx={{ ...style.fabMenuButtonBox }}>
                            <Fab color="secondary"  sx={{ mr: 22, mb: 3 }}>
                                <ListAltIcon />
                            </Fab>
                        </Box>
                        <Box sx={{ ...style.fabMenuButtonBox }}>
                            <Fab color="secondary"  sx={{ mr: 29, mb: 3.5 }}>
                                <AttachMoneyIcon />
                            </Fab>
                        </Box>
                        <Box sx={{ ...style.fabMenuButtonBox }}>
                            <Fab color="secondary" sx={{ mr: 33 }}>
                                <NightsStayIcon />
                            </Fab>
                        </Box>
                    </Stack>
                </Box>
            </Fade>

            <Fab variant="secondary" aria-label="menu" sx={{ ...style.fab }} onClick={() => setOpen(!open)} >
                {open ? <CloseIcon sx={{ color: 'white' }} /> : <AppsIcon sx={{ color: 'white' }} />}
            </Fab>
        </Box>
    )
}

export default Menu
