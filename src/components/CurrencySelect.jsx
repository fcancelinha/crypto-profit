import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

const style = {
    fab: {

    }
}

const CurrencySelect = ({ curOpen }) => {
    
    return (
        <Box sx={{position: 'fixed', right: 0, bottom: 0, mb: 3}}>
            <Fade in={curOpen} {...(curOpen ? { timeout: 800 } : { timeout: 600 })}>
                <Stack direction="column" alignItems="flex-end" >

                    <Box sx={{ mr: 5 }}>
                        <Fab size="small" color="secondary">
                            $
                        </Fab>
                        <Typography sx={{ ml: 1 }} variant="caption" color="secondary">
                            USD
                        </Typography>
                    </Box>

                    <Box sx={{ mr: 11, mb: 1 }}>
                        <Fab size="small" color="secondary">
                            €
                        </Fab>
                        <Typography sx={{ ml: 1 }} variant="caption" color="secondary">
                            EUR
                        </Typography>
                    </Box>

                    <Box sx={{ mr: 15, mb: 2 }}>
                        <Fab size="small" color="secondary">
                            £
                        </Fab>
                        <Typography sx={{ ml: 1 }} variant="caption" color="secondary">
                            GBP
                        </Typography>
                    </Box>

                    <Box sx={{ mr: 17 }}>
                        <Fab size="small" color="secondary">
                            ₩
                        </Fab>
                        <Typography sx={{ ml: 1 }} variant="caption" color="secondary">
                            WON
                        </Typography>
                    </Box>

                </Stack>
            </Fade>
        </Box>
    )
}

export default CurrencySelect
