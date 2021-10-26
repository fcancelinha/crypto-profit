import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';


const CurrencySelect = ({ curOpen, handleFiatSelection }) => {

    return (
        <Box sx={{position: 'fixed', right: 0, bottom: 0, mb: 3}}>
            <Fade in={curOpen} {...(curOpen ? { timeout: 500 } : { timeout: 500 })}>
                <Stack direction="column" alignItems="flex-end" >

                    <Box sx={{ mr: 3.5}}>
                        <Fab size="small" color="secondary" onClick={() => handleFiatSelection({currency: 'USD', symbol: '$'})}>
                            $
                        </Fab>
                        <Typography sx={{ ml: 1 }} variant="caption" color="secondary">
                            USD
                        </Typography>
                    </Box>

                    <Box sx={{ mr: 9.7, mb: 1 }}>
                        <Fab size="small" color="secondary" onClick={() => handleFiatSelection({currency: 'EUR', symbol: '€'})}>
                            €
                        </Fab>
                        <Typography sx={{ ml: 1 }} variant="caption" color="secondary">
                            EUR
                        </Typography>
                    </Box>

                    <Box sx={{ mr: 14.5, mb: 2 }}>
                        <Fab size="small" color="secondary" onClick={() => handleFiatSelection({currency: 'GBP', symbol: '£'})}>
                            £
                        </Fab>
                        <Typography sx={{ ml: 1 }} variant="caption" color="secondary">
                            GBP
                        </Typography>
                    </Box>

                    <Box sx={{ mr: 16.8 }}>
                        <Fab size="small" color="secondary" onClick={() => handleFiatSelection({currency: 'KRW', symbol: '₩'})}>
                            ₩
                        </Fab>
                        <Typography sx={{ ml: 1 }} variant="caption" color="secondary">
                            KRW
                        </Typography>
                    </Box>

                </Stack>
            </Fade>
        </Box>
    )
}

export default CurrencySelect
