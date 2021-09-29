import React from 'react'
import { performCalculation } from './utils/calculation'
import ValueDisplay from './components/ValueDisplay'
import useField from './hooks/useField'
import { Box } from '@mui/material'
import ValueInput from './components/ValueInput'
import CustomAppBar from './components/CustomAppBar'

const App = () => {

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

        <Box disableGutters >

            <CustomAppBar />

            <ValueInput fields={fields} values={values} />

            <ValueDisplay values={values} />

        </Box>
    )
}

export default App
