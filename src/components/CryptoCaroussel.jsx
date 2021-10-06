import React, { useState, useEffect } from 'react'
import { getCrypto } from '../services/crypto-service'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

const CryptoCaroussel = () => {
    const [cryptoList, setCryptoList] = useState([{}])
    const one = "one"

    useEffect(() => {

        getCrypto()
        .then(result =>{
            console.log("response:", result )
            setCryptoList(result)
        })
        .catch(exception => {
            console.error("api error:", exception)
        })

    }, [])


    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Tabs variant="scrollable" sx={{ maxWidth: 600 }} value={one}>
                <Tab label="Item One" value="one" />
                <Tab label="Item Two" value="two"/>
                <Tab label="Item Three" value="three" />
                <Tab label="Item Four" value="three"/>
                <Tab label="Item Five" value="three"/>
                <Tab label="Item Six" value="three"/>
                <Tab label="Item Seven" value="three"/>
                <Tab label="Item One" value="three"/>
                <Tab label="Item Two" value="three"/>
            </Tabs>
        </Box>
    )
}

export default CryptoCaroussel
