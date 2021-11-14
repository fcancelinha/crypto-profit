import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import AppTitle from './components/AppTitle'
import Main from './components/Main'
import Donations from './components/Donations'
import useDarkMode from './hooks/useDarkMode'
import Github from './components/Github'
import Typography from '@mui/material/Typography'

const style = {
	container: {
		display: 'flex',
		heigh: '100vh',
		width: '100vw',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		alignContent: 'flex-start',
	},
	subContainer: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		inHeight: '100vh',
		minWidth: '100vw',
		pb: 10,
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 3,
		pb: 3,
		mb: 2,
		mt: -12,
		width: '33rem',
	},
	notice: {
		alignSelf: 'center',
		fontSize: 9,
		fontFamily: 'Monospace',
		fontWeight: 'bold'
	},
}

const setBodyColor = (color) => {
	document.body.style.backgroundColor = color
}

const App = () => {
	const [theme, setTheme] = useDarkMode()
	setBodyColor(theme.palette.background.default)

	return (
		<ThemeProvider theme={theme}>
			<Box
				id="container"
				sx={style.container}
				bgcolor="background.default">
				<Github />

				<Box
					id="main-body"
					sx={style.subContainer}
					bgcolor="background.default">
					<AppTitle />

					<Paper sx={style.paper} elevation={23}>
						<Main handleThemeChange={() => setTheme()} />

						<Donations />
					</Paper>

					<Typography
						variant="caption"
						sx={style.notice}
						color="primary.main">
						* exchange rates might not reflect current ones, this
						app is using free APIs with limited resources
					</Typography>

					<Link
						href="https://nomics.com/"
						target="_blank"
						rel="noreferrer"
						variant="caption"
						color="primary.main"
						sx={{...style.notice}}>
						Crypto Market Cap & Pricing Data Provided By Nomics
					</Link>
				</Box>
			</Box>
		</ThemeProvider>
	)
}

export default App
