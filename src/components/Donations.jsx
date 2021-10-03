import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import bitcoin from '../assets/icons/bitcoin.png'
import usdt from '../assets/icons/usdt.png'
import ethereum from '../assets/icons/ethereum.png'

const addresses = {
    btc: 'qwdoiwdqwonew7q8w09123nkdwhjei',
    tether: 'qwdoiwdqwonew7q8w09123nkdwhjei',
    eth: 'qwdoiwdqwonew7q8w09123nkdwhjei',
}


const Donations = () => {

    return (
        <Stack sx={{ alignItems: 'center', my: 5, }} spacing={0}>

            <Typography version="overline" sx={{ my: 1, fontFamily: 'Consolas', fontSize: 16 }}>
                {"< Tip a poor dev ☕> "}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={bitcoin} alt="bitcoin-address" width="15" height="15" style={{ marginRight: 5 }} />
                <Typography variant="caption" sx={{ color: '#AEAEAE', fontWeight: 'bold', fontFamily: 'monospace' }}>
                    BTC&nbsp;-&nbsp;
                    <Typography variant="caption" sx={{ color: '#AEAEAE', fontWeight: 'bold', fontFamily: 'monospace' }}>
                        {addresses.btc}
                    </Typography>
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={usdt} alt="usdt-address" width="15" height="15" style={{ marginRight: 5 }} />
                <Typography variant="caption" sx={{ color: '#AEAEAE', fontWeight: 'bold', fontFamily: 'monospace' }}>
                    USDT - {addresses.tether}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={ethereum} alt="ethereum-address" width="15" height="15" style={{ marginRight: 5 }} />
                <Typography variant="caption" sx={{ color: '#AEAEAE', fontWeight: 'bold', fontFamily: 'monospace' }}>
                    ETH - {addresses.eth}
                </Typography>
            </Box>

            <Box sx={{mt: 2}}>
                <a href="github.com/fcancelinha" target="_blank">
                    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" width="80" height="auto" alt="github" style={{borderRadius: 5}}/>
                </a>
            </Box>

        </Stack>
    )
}

export default Donations
