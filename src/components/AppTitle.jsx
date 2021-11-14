import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const title = 'CRYPTO PROFIT'

const style = {
	container: {
		pb: 15,
		textAlign: 'center',
		backgroundColor: '#000000',
	},
	text: {
		fontFamily: 'Cairo',
		color: '#eeeeee',
	},
}

const AppTitle = () => {
	return (
		<Box sx={{ ...style.container }} boxShadow={5}>
			<Typography variant='h3' sx={{ ...style.text, pt: 2 }}>
				{title} <span style={{ color: '#ffb300' }}>₿</span>
			</Typography>
		</Box>
	)
}

export default AppTitle
