import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import CalculateIcon from '@mui/icons-material/Calculate';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Box from '@mui/material/Box'

const style = {
    container: {
        mt: 2,
    },
    toggleButton: {
        borderRadius: 40,
        color: "primary.light"
    },
    toggleButtonIcon: {
        color: "secondary.light"
    }
}

const AppBarMenu = ({check, setCheck}) => {
 
	
    return (
		<Box sx={style.container}>
			<ToggleButton sx={{...style.toggleButton, mr: 1.5}} value="calc" selected={check} onChange={setCheck}>
                <CalculateIcon sx={style.toggleButtonIcon} />
            </ToggleButton>
			<ToggleButton sx={{...style.toggleButton, ml: 1.5}} value="list" selected={!check} onChange={setCheck}>
                <FormatListNumberedIcon sx={style.toggleButtonIcon} />
            </ToggleButton>
		</Box>
	)
}

export default AppBarMenu
