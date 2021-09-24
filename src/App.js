import React from 'react'
import performCalculation from './utils/calculation'
import ValueDisplay from './components/ValueDisplay'
import useField from './hooks/useField'
import Container from '@mui/material/Container'
import ValueInput from './components/ValueInput'
import AppTitle from './components/AppTitle'

const App = () => {

    const REGEX = /^\d+.?\d*/g

    //custom hook object with state value in property "value"
    const fields = {
        coinAmount: useField('text', REGEX),
        buyValue: useField('text',  REGEX),
        sellValue: useField('text',REGEX),
        buyFee: useField('text', REGEX),
        sellFee: useField('text', REGEX),
    }

    const values = performCalculation(fields)

    console.log(values)

    return (

        <Container sx={{ maxWidth: 'sm' }} disableGutters >

            <AppTitle />

            <ValueInput fields={fields} values={values} />

            <ValueDisplay values={values} />

        </Container>
    )
}

export default App
