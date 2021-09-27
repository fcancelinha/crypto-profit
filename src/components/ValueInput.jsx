import React from 'react'
import { TextField, Stack, InputAdornment } from '@mui/material'

const ValueInput = ({ fields, values }) => {

    const investmentFee = `Investment Fee: ${values.investmentFee.toFixed(2)} $`
    const sellingFee = `Selling Fee: ${values.exitFee.toFixed(2)} $`

    return (

        <Stack direction="column" justifyContent="center" alignItems="center" >

            <TextField 
                {...fields.coinAmount} 
                sx={{ mt: 1 }} 
                helperText="≈ 0.121231 BTC" 
                InputProps={{ startAdornment: <InputAdornment position="start"> ₿ </InputAdornment> }}
                label="Coin Amount" 
                variant="outlined" 
                
            />

            <TextField 
                {...fields.buyValue} 
                sx={{ mt: 2, mb: 2 }} 
                InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} 
                label="Buy Value" 
                variant="outlined" 

            />

            <TextField 
                {...fields.sellValue} 
                sx={{ mt: 2, mb: 2 }} 
                InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} 
                label="Sell Value" 
                variant="outlined" 
        
            />

            <TextField 
                {...fields.buyFee} 
                sx={{ mt: 2, mb: 1 }} 
                helperText={investmentFee} 
                InputProps={{ startAdornment: <InputAdornment position="start">%</InputAdornment> }} 
                label="Buy Fee" 
                variant="outlined" 
                placeholder="0" 

            />

            <TextField 
                {...fields.sellFee} 
                sx={{ mt: 2 }} 
                helperText={sellingFee} 
                InputProps={{ startAdornment: <InputAdornment position="start">%</InputAdornment> }} 
                label="Sell Fee" 
                variant="outlined" 
                placeholder="0" 

            />

        </Stack>
    )
}

export default ValueInput
