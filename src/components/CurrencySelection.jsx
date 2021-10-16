import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

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
            <Button
                variant="outlined"
                size="small"
                style={{ ...style, marginLeft: 25, fontSize: 20 }}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >

                $
            </Button>
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