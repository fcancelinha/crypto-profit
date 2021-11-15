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
	title: {
		color: '#ffb300'
	},
	text: {
		fontFamily: 'Cairo',
		color: '#eeeeee',
	},
}

const AppTitle = () => {
	return (
		<Box sx={style.container} boxShadow={5}>
			<Typography variant='h3' sx={{ ...style.text, pt: 4 }}>
				{title} <span style={style.title}>₿</span>
			</Typography>
		</Box>
	)
}

export default AppTitle
