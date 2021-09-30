import React from 'react'
import { Typography, Grid } from '@mui/material'


const CustomAppBar = () => {

    const title = "Crypto Profit App"
    const spacing = 4

    return (
        <Grid container spacing={0} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', my: 1 }}>

            <Grid item xs={0} sm={4} md={4} />

            <Grid item xs={12} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="button" sx={{ fontSize: 20, textAlign: 'center'}} >
                    {title}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                Hello
            </Grid>

        </Grid>
    )
}

export default CustomAppBar
