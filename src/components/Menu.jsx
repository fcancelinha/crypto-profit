import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
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
        backgroundColor: 'transparent',
        justifyContent: 'flex-end', 
        flexDirection: 'column' ,
        position: 'fixed', 
        right: 0, 
        bottom: 0, 
        mb: 5, 
        mr: 5
    },
    fabMenu: {
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
        justifyContent: 'flex-end',
    },
    fabMenuButtonBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    fabMenuButtonLabel: {
        position: 'absolute',
    }
}


const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <Box sx={{ ...style.fabBox}} bgcolor="background.default" aria-label="menu">
            <Fade in={open} {...(open ? { timeout: 800 } : {timeout: 600})}>
                <Box sx={{ ...style.fabMenu }} boxShadow={3} bgcolor="primary.main">
                    <Stack direction="column" alignItems="flex-end" sx={{ mb: 4.2 }}>

                        <Box sx={{ ...style.fabMenuButtonBox }}>
                            <Fab color="secondary"  sx={{ mr: 9 }} aria-label="search-crypto-currency">
                                <SearchIcon />
                            </Fab>
                            <Typography variant="caption" color="secondary" sx={{ ...style.fabMenuButtonLabel, bottom: 218, left: 249, mb: 2 }}>
                                Search
                            </Typography>
                        </Box>
                        <Box sx={{ ...style.fabMenuButtonBox }}>
                            <Fab color="secondary"  sx={{ mr: 20, mb: 2.3}} aria-label="list-calculations">
                                <ListAltIcon />
                            </Fab>
                            <Typography variant="caption" color="secondary" sx={{ ...style.fabMenuButtonLabel, bottom: 162, left: 170, mb: 2 }}>
                                List
                            </Typography>
                        </Box>
                        <Box sx={{ ...style.fabMenuButtonBox }}>
                            <Fab color="secondary"  sx={{ mr: 28, mb: 5 }} aria-label="change-fiat-currency">
                                <AttachMoneyIcon />
                            </Fab>
                            <Typography variant="caption" color="secondary" sx={{ ...style.fabMenuButtonLabel, bottom: 90, left: 89, mb: 2  }}>
                                Currency
                            </Typography>
                        </Box>
                        <Box sx={{ ...style.fabMenuButtonBox }}>
                            <Fab color="secondary" sx={{ mr: 32 }} aria-label="darkmode">
                                <NightsStayIcon />
                            </Fab>
                            <Typography variant="caption" color="secondary" sx={{ ...style.fabMenuButtonLabel, bottom: 6, left: 54 }}>
                                Darkmode
                            </Typography>
                        </Box>
                    </Stack>
                    
                </Box>
            </Fade>

            <Fab color={open ? 'secondary' : 'primary'} onClick={() => setOpen(!open)} aria-label="menu-button" >
                {open ? <CloseIcon color="primary" /> : <AppsIcon color="secondary" />}
            </Fab>
        </Box>
    )
}

export default Menu
