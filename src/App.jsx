import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import AppTitle from './components/AppTitle'
import Main from './components/Main'
import Donations from './components/Donations'
import useDarkMode from './hooks/useDarkMode'
import Github from './components/Github'
import Typography from '@mui/material/Typography'

const style = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		minWidth: 'auto',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		alignContent: 'flex-start',
	},
	subContainer: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		minWidth: '100%',
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
}

const App = () => {
	const [theme, setTheme] = useDarkMode()

	return (
		<ThemeProvider theme={theme}>
			<Box
				id='container'
				sx={style.container}
				bgcolor='background.default'>
				<Github />

				<Box
					id='main-body'
					sx={style.subContainer}
					bgcolor='background.default'>
					<AppTitle />

					<Paper sx={style.paper} elevation={23}>
						<Main handleThemeChange={() => setTheme()} />

						<Donations />
					</Paper>

					<Typography
						variant='caption'
						sx={{ alignSelf: 'center', fontSize: 8.5 }}
						color='primary.main'>
						* exchange rates might not reflect current ones, this
						app is using free APIs with limited resources
					</Typography>
				</Box>
			</Box>
		</ThemeProvider>
	)
}

export default App
