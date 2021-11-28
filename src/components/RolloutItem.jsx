import React from 'react'
import Typography from '@mui/material/Typography'

const RolloutItem = ({ symbol, cryptoPrice, priceChange, currency }) => {
	const color = priceChange.startsWith('-') ? 'red' : 'green'
    const price = cryptoPrice.substring(0, cryptoPrice.length - 4)

	return (
		<>
			<Typography variant="subtitle2" sx={{ color: color, ml: 1, fontSize: 10 }}>
				[{symbol}] - {currency} {price}
			</Typography>
		</>
	)
}

export default RolloutItem
