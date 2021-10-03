import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import bitcoin from '../assets/icons/bitcoin.png'
import usdt from '../assets/icons/usdt.png'
import ethereum from '../assets/icons/ethereum.png'

const addresses = {
    btc: '15V5uReVCQ3z4ooexd3wRvmQM5PBCAR5CL',
    tether: 'TF9oCBuM5cAgdH5f757LBSSKZmbpGHNc5E',
    eth: '0x3f41097f233d22ee56bcbfd4f7f184755e0ff185',
}

const style = {
    address: {
        color: '#EB276C',
        fontWeight: 'bold',
        fontFamily: 'monospace'
    },
    coinName: {
        color: '000',
        fontWeight: 'bold',
        fontFamily: 'monospace'
    }

}

const Donations = () => {


    return (
        <Stack sx={{ alignItems: 'center', my: 5, }} spacing={0}>

            <Typography version="overline" sx={{ my: 1, fontFamily: 'Consolas', fontSize: 16 }}>
                {"< Buy me a coffe ? ☕/> "}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={bitcoin} alt="bitcoin-address" width="15" height="auto" style={{ marginRight: 5 }} />
                <Typography variant="caption" sx={{ ...style.coinName }}>
                    BTC&nbsp;-&nbsp;
                    <Typography variant="caption" sx={{ ...style.address }}>
                        {addresses.btc}
                    </Typography>
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={usdt} alt="usdt-address" width="15" height="auto" style={{ marginRight: 5 }} />
                <Typography variant="caption" sx={{ ...style.coinName }}>
                    USDT&nbsp;-&nbsp;
                    <Typography variant="caption" sx={{ ...style.address }}>
                        {addresses.tether}
                    </Typography>
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={ethereum} alt="ethereum-address" width="15" height="auto" style={{ marginRight: 5 }} />
                <Typography variant="caption" sx={{ ...style.coinName }}>
                    ETH&nbsp;-&nbsp;
                    <Typography variant="caption" sx={{ ...style.address }}>
                        {addresses.eth}
                    </Typography>
                </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
                <a href="github.com/fcancelinha" target="_blank">
                    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" width="80" height="auto" alt="github" style={{ borderRadius: 5 }} />
                </a>
            </Box>

        </Stack>
    )
}

export default Donations
