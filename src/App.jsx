import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import AppTitle from './components/AppTitle'
import Main from './components/Main'
import Donations from './components/Donations'
import useDarkMode from './hooks/useDarkMode'
import Github from './components/Github'
import Typography from '@mui/material/Typography'

const style = {
	paper: {
		pt: 2,
		borderRadius: 4,
		pb: 2,
		mb: 2,
		mt: -12,
		width: '33rem',
		ml: 'auto',
		mr: 'auto',
	},
	notice: {
		alignSelf: 'center',
		fontSize: 10,
		fontFamily: 'Monospace',
		fontWeight: 'bold',
		ml: 'auto',
		mr: 'auto',
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

			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				alignItems="stretch"
				id="main-body"
				bgcolor="background.default">
				
				<Grid item>
					<Github />

					<AppTitle />

					<Paper sx={style.paper} elevation={23}>
						<Main handleThemeChange={() => setTheme()} />

						<Donations />
					</Paper>

					<Box sx={{ textAlign: 'center', mb: 2 }}>
						<Typography
							variant="caption"
							sx={style.notice}
							color="primary.main">
							exchange rates might not reflect current ones
						</Typography>

						<br />

						<Link
							href="https://nomics.com/"
							target="_blank"
							rel="noreferrer"
							variant="caption"
							color="primary.main"
							sx={style.notice}>
							Crypto Market Cap & Pricing Data Provided By Nomics
						</Link>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default App
