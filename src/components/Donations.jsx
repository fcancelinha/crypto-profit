import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
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
        color: '#ffb300',
        fontWeight: 'bold',
        fontFamily: 'Consolas'
    },
    coinName: {
        fontWeight: 600,
        fontFamily: 'monospace'
    },
    coinImage: {
        marginRight: 5,
        width: 15,
        height: 'auto'
    },
    donationText: {
        my: 1, 
        fontFamily: 'Consolas', 
        fontSize: 16, 
        fontWeight: 'bold'
    }
}

const donationText = "< Buy me a coffee ? ☕/> "

const Donations = () => {

    return (
        <Stack sx={{ alignItems: 'center', my: 3, }} spacing={0}>

            <Typography version="overline" sx={style.donationText}>
                {donationText}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={bitcoin} alt="bitcoin-address" style={style.coinImage} />
                <Typography variant="caption" sx={style.coinName}>
                    BTC&nbsp;-&nbsp;
                    <Typography variant="caption" sx={style.address }>
                        {addresses.btc}
                    </Typography>
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={usdt} alt="usdt-address" style={style.coinImage} />
                <Typography variant="caption" sx={style.coinName}>
                    USDT&nbsp;-&nbsp;
                    <Typography variant="caption" sx={style.address}>
                        {addresses.tether}
                    </Typography>
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={ethereum} alt="ethereum-address" style={style.coinImage} />
                <Typography variant="caption" sx={style.coinName}>
                    ETH&nbsp;-&nbsp;
                    <Typography variant="caption" sx={style.address}>
                        {addresses.eth}
                    </Typography>
                </Typography>
            </Box>

        </Stack>
    )
}

export default Donations
