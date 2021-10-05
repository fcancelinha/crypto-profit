import React, { useState } from 'react'
import { performCalculation } from './utils/calculation'
import ValueDisplay from './components/ValueDisplay'
import useField from './hooks/useField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ValueInput from './components/ValueInput'
import Donations from './components/Donations'
import MiniAppBar from './components/MiniAppBar'
import CryptoCaroussel from './components/CryptoCaroussel'

const App = () => {
    const [cryptoCurs, setCryptoCurs] = useState([])

    const title = "Crypto Profit ₿"
    const REGEX = /^\d+.?\d*/g

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

        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} >

            <Grid container sx={{display: 'flex', justifyContent: 'space-between' }} >

                <Grid item sm={1} md={4} lg={4} />
            
                <Grid item sm={10} md={4} lg={4}>
                    <Typography variant="h5" color="black" sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                        {title}
                    </Typography>
                </Grid>

                <Grid item sm={1} md={4} lg={4} sx={{display: 'flex', justifyContent: 'flex-end', maxHeight: 40, mt: 1.7}}>
                    <MiniAppBar />
                </Grid>

            </Grid>

            <Stack>

                <ValueInput fields={fields} values={values} />

                <ValueDisplay values={values} />

                <CryptoCaroussel />

                <Donations />

            </Stack>

        </Box>
    )
}

export default App
