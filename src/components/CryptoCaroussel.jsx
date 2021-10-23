import React, { useState } from 'react'
import { mock } from '../mocks/cryptoList'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

const style = {
    tabs: {
        maxWidth: 480, 
        [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { 
                opacity: 0.3 
            }
        },
    },
    tab: {
        minWidth: 20,
        height: 80,
        width: 80
    },
    tabAvatar: {
        width: 35,
        height: 35
    }
}

const CryptoCaroussel = ({ cryptoList, setBuyValue }) => {
    const [selectedCoin, setSelectedCoin] = useState(false)

    const handleChange = (event, newValue) => {
        setSelectedCoin(newValue);
        setBuyValue(newValue.price)
    };

    const filterCoins = ['USDT', 'USDC', 'HEX', 'BUSD']
    const filteredMock = mock.filter(x => filterCoins.indexOf(x.currency) < 0)


    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Tabs variant="scrollable"
                scrollButtons={true}
                allowScrollButtonsMobile
                textColor="primary"
                indicatorColor="primary"
                sx={style.tabs}
                value={selectedCoin}
                onChange={handleChange}
                aria-label="crypto-horizontal-tab-list"
                aria-describedby="crypto-horizontal-tab-description"
            >

                {filteredMock.map(x => {
                    return <Tab id="x.id" key={x.id} value={x} sx={style.tab} label={x.currency} icon={<Avatar alt={x.currency} src={x.logo_url} sx={style.tabAvatar} />} />;
                })}

            </Tabs>
        </Box>
    )
}

export default CryptoCaroussel
