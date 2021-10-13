import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import InputAdornment from '@mui/material/InputAdornment'
import { performCalculation } from '../utils/calculation'
import ValueDisplay from '../components/ValueDisplay'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Collapse  from '@mui/material/Collapse'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import CachedIcon from '@mui/icons-material/Cached'

const ValueInput = ({ fields }) => {
    const [collapsed, setCollapsed] = useState(false)
    const [mode, setMode] = useState(true)
    const [btcEquiv, setBtcEquiv] = useState(0.8372837)

    const values = performCalculation(fields);

    const investmentFee = `Investment Fee: ${values.investmentFee.toFixed(2)} $`
    const sellingFee = `Selling Fee: ${values.exitFee.toFixed(2)} $`

    return (

        <Stack direction="column" justifyContent="center" alignItems="center" sx={{mt: 5}} >

            <TextField
                {...fields.coinAmount}
                color="secondary"
                sx={{ mt: 1, width: 227 }}
                helperText={`≈ ${btcEquiv} BTC`}
                InputProps={{
                    startAdornment: <InputAdornment position="start">{mode ? '$' : '₿' }</InputAdornment>,
                    endAdornment: 
                    <Tooltip title="Change between fiat investment and token amount" placement="top" sx={{mt: 1}}>
                        <IconButton onClick={() => setMode(!mode)} variant="secondary" sx={{ minWidth: 4, width: 4 }}>
                            <CachedIcon position="end" />
                        </IconButton>
                    </Tooltip>
                }}
                label={mode ? 'Investment Amount' : 'Coin Amount'}
                variant="outlined"
            />

            <TextField
                {...fields.buyValue}
                color="secondary"
                sx={{ mt: 2, mb: 2 }}
                InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                label="Buy Value"
                variant="outlined"
            />

            <TextField
                {...fields.sellValue}
                color="secondary"
                sx={{ mt: 2, mb: 2 }}
                InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                label="Sell Value"
                variant="outlined"
            />


            <Tooltip title="Fees" placement="top">
                <Button variant="outlined" color="secondary" size="small" style={{ minWidth: 2, width: 40, height: 25 }} onClick={() => { setCollapsed(!collapsed); }} >
                    {collapsed ? <ExpandLess size="large" /> : <ExpandMore size="large" />}
                </Button>
            </Tooltip>


            <Collapse in={collapsed}>

                <Stack>

                    <TextField
                        {...fields.buyFee}
                        color="secondary"
                        sx={{ mt: 2, mb: 1 }}
                        helperText={investmentFee}
                        InputProps={{ startAdornment: <InputAdornment position="start">%</InputAdornment> }}
                        label="Buy Fee"
                        variant="outlined"
                        placeholder="0"
                    />

                    <TextField
                        {...fields.sellFee}
                        color="secondary"
                        sx={{ mt: 2 }}
                        helperText={sellingFee}
                        InputProps={{ startAdornment: <InputAdornment position="start">%</InputAdornment> }}
                        label="Sell Fee"
                        variant="outlined"
                        placeholder="0"
                    />

                </Stack>

            </Collapse>

            <ValueDisplay values={values} />

        </Stack>
    )
}

export default ValueInput
