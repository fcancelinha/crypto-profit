import React from 'react'
import { performCalculation } from './utils/calculation'
import ValueDisplay from './components/ValueDisplay'
import useField from './hooks/useField'
import { Grid, Typography, Stack } from '@mui/material'
import ValueInput from './components/ValueInput'
import Donations from './components/Donations'
import VerticalAppBar from './components/VerticalAppBar'

const title = "Crypto Profit ₿"
const REGEX = /^\d+.?\d*/g


const App = () => {

    //custom hook object with state value in property "value"
    const fields = {
        coinAmount: useField('text', REGEX),
        buyValue: useField('text', REGEX),
        sellValue: useField('text', REGEX),
        buyFee: useField('text', REGEX),
        sellFee: useField('text', REGEX),
    }

    const values = performCalculation(fields)

    return (

        <Grid container >
            <Grid item xs={1} sm={1} md={1} lg={1} >
            
            </Grid>

            <Grid item xs={0} sm={3} md={3} lg={3} >

            </Grid>

            <Grid item xs={10} sm={4} md={4} lg={4} >
                <Stack>

                    <Typography variant="h5" color="black" sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                        {title}
                    </Typography>

                    <ValueInput fields={fields} values={values} />

                    <ValueDisplay values={values} />

                    <Donations />

                </Stack>
            </Grid>

            <Grid item xs={0} sm={3} md={3} lg={3}>

            </Grid>

            <Grid item  xs={1} sm={1} md={1} lg={1}>
                <VerticalAppBar />
            </Grid>

        </Grid>
    )
}

export default App
