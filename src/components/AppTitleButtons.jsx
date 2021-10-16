import React, {useState} from 'react';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import AppsIcon from '@mui/icons-material/Apps';
import CurrencySelection from './CurrencySelection';


const style = {
    minWidth: 4,
    height: 35,
    width: 43,
};


const AppTitleButtons = () => {
    const [currency, setCurrency] = useState('$')


    return (
        <Box sx={{ display: 'flex' }}>

            <Button variant="outlined" size="small" style={{ ...style, marginRight: 25 }}>
                <Brightness4Icon />
            </Button>

            <Button variant="outlined" size="small" style={{ ...style }}>
                <AppsIcon />
            </Button>

            <CurrencySelection style={style} />

        </Box>
    );
};

export default AppTitleButtons;

