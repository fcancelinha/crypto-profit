import React from 'react'
import Calc from './components/Calc'
import useField from './hooks/useField'
import Container from '@mui/material/Container'
import { Typography, Box } from '@mui/material'
import InputForm from './components/InputForm'

const App = () => {

    const REGEX = /^\d+.?\d*/g
    const title = 'CRYPTO PROFIT APP'

    //custom hook object with state value in property "value"
    const fields = {
        coinAmount: useField('text', REGEX),
        buyValue: useField('text',  REGEX),
        sellValue: useField('text',REGEX),
        buyFee: useField('text', REGEX),
        sellFee: useField('text', REGEX),
    }

    return (

        <Container sx={{ maxWidth: 'sm' }} disableGutters >

            <Typography component="div" >
                <Box sx={{ textAlign: 'center', my: 5 }}>
                    {title}
                </Box>
            </Typography>

            <InputForm fields={fields} />

            <Calc fields={fields} />

        </Container>
    )
}

export default App
