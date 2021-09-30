import React from 'react'
import { Typography, Grid } from '@mui/material'
import Settings from './Settings'


const CustomAppBar = () => {

    const title = "Crypto Profit ₿"

    return (
        <header>
        
            <Grid container spacing={0} sx={{ display: 'flex', textAlign: 'center', my: 1 }}>

                <Grid item xs={0} sm={4} md={4} />

                <Grid item xs={12} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="button" color="warning" sx={{ fontSize: 20, textAlign: 'center' }} >
                        {title}
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Settings />
                </Grid>

            </Grid>

        </header>
    )
}

export default CustomAppBar
