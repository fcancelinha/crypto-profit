import React from 'react';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import AppsIcon from '@mui/icons-material/Apps';

const AppTitleButtons = () => {

    const style = {
        minWidth: 4,
        height: 35,
        width: 43,
    };


    return (
        <Box sx={{ display: 'flex' }}>

            <Button variant="outlined" size="small" style={{ ...style, marginRight: 30 }}>
                <Brightness4Icon />
            </Button>

            <Button variant="outlined" size="small" style={{ ...style }}>
                <AppsIcon />
            </Button>

            <Button variant="outlined" size="small" style={{ ...style, marginLeft: 30}}>
                <AttachMoneyIcon />
            </Button>          
        </Box>
    );
};

export default AppTitleButtons;
