import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

const CryptoCaroussel = ({ cryptoList }) => {

    console.log("cryptoCarroussel:", cryptoList)

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Tabs variant="scrollable" sx={{ maxWidth: 600 }} aria-label="crypto horizontal tab list">
                {cryptoList.map(x => {
                    return <Tab key={x.id} icon={<Avatar alt={x.currency} src={x.logo_url}/>} label={x.currency} />
                })}
            </Tabs>
        </Box>
    )
}

export default CryptoCaroussel
