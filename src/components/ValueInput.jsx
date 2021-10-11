import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Collapse  from '@mui/material/Collapse'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'

const ValueInput = ({ fields, values }) => {
    const [collapsed, setCollapsed] = useState(false)

    const investmentFee = `Investment Fee: ${values.investmentFee.toFixed(2)} $`
    const sellingFee = `Selling Fee: ${values.exitFee.toFixed(2)} $`


    return (

        <Stack direction="column" justifyContent="center" alignItems="center" sx={{mt: 5}} >

            <TextField
                {...fields.coinAmount}
                color="secondary"
                sx={{ mt: 1 }}
                helperText="≈ 0.121231 BTC"
                InputProps={{ startAdornment: <InputAdornment position="start"> ₿ </InputAdornment> }}
                label="Coin Amount"
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
                <Button variant="outlined" color="secondary" size="small" style={{ minWidth: 2, width: 40, height: 40, borderRadius: 40 }} onClick={() => { setCollapsed(!collapsed); }} >
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


        </Stack>
    )
}

export default ValueInput
