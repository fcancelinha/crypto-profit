import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/system';

const style =  {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.default',
    color: 'text.primary',
    borderRadius: 5,
    p: 4,
}



const CryptoSearch = ({open, handleClose}) => {
    const theme = useTheme()
    const shadow = theme.palette.mode === 'dark' ? '0px 0px 10px 1px #ffb300' : 23

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} boxShadow={shadow}>
                <Typography sx={{alignSelf: 'center'}} id="modal-modal-title" variant="h6" component="h2">
                    [ SEARCH ]
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    )
}

export default CryptoSearch
