import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import { calculate } from '../utils/calculation'
import ValueDisplay from '../components/ValueDisplay'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Collapse  from '@mui/material/Collapse'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import CachedIcon from '@mui/icons-material/Cached'
import Fade from '@mui/material/Fade';

const ValueInput = ({ fields }) => {
    const [collapsed, setCollapsed] = useState(false)
    const [mode, setMode] = useState(true)
    const [btcEquiv, setBtcEquiv] = useState(0.8372837)

    const values = calculate(fields, mode);

    const investmentFee = `Investment Fee: ${values.investmentFee.toFixed(2)} $`
    const sellingFee = `Selling Fee: ${values.exitFee.toFixed(2)} $`

    return (

        <Stack direction="column" justifyContent="center" alignItems="center" sx={{mt: 5}} >

            <TextField
                {...fields.coinAmount}
                sx={{ mt: 1, width: 250 }}
                helperText={`≈ ${btcEquiv} BTC`}
                placeholder="0"
                InputProps={{
                    startAdornment: <InputAdornment position="start">{mode ? '$' : '₿' }</InputAdornment>,
                    endAdornment: 
                    <Tooltip title="Change between fiat investment and token amount" placement="top" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} sx={{mt: 1}}>
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
                placeholder="0"
                sx={{ mt: 2, mb: 2, width: 250 }}
                InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                label="Buy Value"
                variant="outlined"
            />

            <TextField
                {...fields.sellValue}
                placeholder="0"
                sx={{ mt: 2, mb: 2, width: 250}}
                InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                label="Sell Value"
                variant="outlined"
            />


            <Tooltip title="Fees" placement="top" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }}>
                <Button variant="contained" color="primary" size="small" style={{ minWidth: 2, width: 40, height: 40, borderRadius: 20 }} onClick={() => { setCollapsed(!collapsed); }} >
                    {collapsed ? <ExpandLess size="large" /> : <ExpandMore size="large" />}
                </Button>
            </Tooltip>

            <Collapse in={collapsed}>

                <Stack>

                    <TextField
                        {...fields.buyFee}
                        sx={{ mt: 2, mb: 1, width: 200 }}
                        helperText={investmentFee}
                        InputProps={{ startAdornment: <InputAdornment position="start">%</InputAdornment> }}
                        label="Buy Fee"
                        variant="outlined"
                        placeholder="0"
                    />

                    <TextField
                        {...fields.sellFee}
                        sx={{ mt: 2, width: 200 }}
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
