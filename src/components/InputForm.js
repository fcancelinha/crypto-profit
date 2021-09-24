import React from 'react'
import { TextField, Stack, InputAdornment } from '@mui/material'

const InputForm = ({ fields }) => {

    return (

            <Stack direction="column" justifyContent="center" alignItems="center" spacing={5} >

                <TextField {...fields.coinAmount} InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}} label="Coin Amount" variant="outlined" />

                <TextField {...fields.buyValue} InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}} label="Buy Value" variant="outlined" />

                <TextField {...fields.sellValue} InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}} label="Sell Value" variant="outlined" />

                <TextField {...fields.buyFee} InputProps={{startAdornment: <InputAdornment position="start">%</InputAdornment>}} label="Buy Fee" variant="outlined" />

                <TextField {...fields.sellFee} InputProps={{startAdornment: <InputAdornment position="start">%</InputAdornment>}} label="Sell Fee" variant="outlined" />

            </Stack>
    )
}

export default InputForm
