import React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import Settings from './Settings'


const CustomAppBar = () => {

    const title = "Crypto Profit ₿"
    const subTitle = "Made by @fcancelinha"

    return (
        <Grid container sx={{ my: 2 }}>

            <Grid item xs={0} sm={4} md={4} />

            <Grid item xs={12} sm={4} md={4} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>

                <Typography variant="button" sx={{fontSize: 25}} >
                    {title}
                </Typography>

                <Typography variant="caption" sx={{ display: 'block' }} >
                    {subTitle}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Settings />
            </Grid>

        </Grid>
    )
}

export default CustomAppBar
