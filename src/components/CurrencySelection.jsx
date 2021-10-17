import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem';

const CurrencySelection = ({ style }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const arr = ['$', '€', '£', '¥', '₩'];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <IconButton
                variant="outlined"
                size="small"
                style={{ ...style, fontSize: 20}}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >

                $
            </IconButton>
            <Menu
                id="currency-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>

                {
                    arr.map(x => <MenuItem key={x} onClick={handleClose}> {x} </MenuItem>)
                }

            </Menu>
        </>
    );
};

export default CurrencySelection;

//