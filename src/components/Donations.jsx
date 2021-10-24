import React, { useState } from 'react'
import Box from '@mui/material/Box'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography'
import Slide from '@mui/material/Slide';
import Link from '@mui/material/Link'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
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
        color: '#F39C12',
        fontWeight: 'bold',
        fontFamily: 'Consolas'
    },
    adressContainer: {
        display: 'flex', 
        alignItems: 'center'
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
const snackbarText = "Thank you ! Address copied"

const WalletAdress = ({address, handleClick}) => {

    return (
        <Link underline="none" href="#" variant="caption" sx={style.address} onClick={handleClick(address)}>
            {address}
        </Link>
    )
}


const Donations = () => {
    const [state, setState] = useState(false);
    
    const handleClick = (address) => () => {

        navigator.clipboard.writeText(address);
        setState(true);

        setTimeout(() => {
            setState(false);
        }, 2000);
    };
    
 
    return (
        <Stack sx={{ alignItems: 'center', my: 3, }} spacing={0}>

            <Typography version="overline" sx={style.donationText}>
                {donationText}
            </Typography>

            <Box sx={style.adressContainer}>
                <img src={bitcoin} alt="bitcoin-address" style={style.coinImage} />
                <Typography variant="caption" sx={style.coinName}>
                    BTC&nbsp;-&nbsp;
                    <WalletAdress address={addresses.btc} handleClick={handleClick} />
                </Typography>
            </Box>

            <Box sx={style.adressContainer}>
                <img src={usdt} alt="usdt-address" style={style.coinImage} />
                <Typography variant="caption" sx={style.coinName}>
                    USDT&nbsp;-&nbsp;
                    <WalletAdress address={addresses.tether} handleClick={handleClick} />
                </Typography>
            </Box>

            <Box sx={style.adressContainer}>
                <img src={ethereum} alt="ethereum-address" style={style.coinImage} />
                <Typography variant="caption" sx={style.coinName}>
                    ETH&nbsp;-&nbsp;
                    <WalletAdress address={addresses.eth} handleClick={handleClick} />
                </Typography>
            </Box>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={state}
                TransitionComponent={Slide}
            >
                <Alert
                icon={<FavoriteIcon sx={{color: 'primary.contrastText'}} />} 
                sx={{backgroundColor: 'primary.main', color: 'primary.contrastText', fontWeight: 'bold', alignSelf: 'flex-start', verticalAlign: 'middle'}}>
                   {snackbarText}
                </Alert>
                
            </ Snackbar>

        </Stack>
    )
}

export default Donations
