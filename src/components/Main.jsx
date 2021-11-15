import React, { useState, useEffect } from 'react'
import get from '../services/crypto-service'
import useField from '../hooks/useField'
import ValueInput from './ValueInput'
import CryptoCaroussel from './CryptoCaroussel'
import useToggle from '../hooks/useToggle'
import Menu from './Menu'
import Box from '@mui/system/Box'
import { ReactComponent as Loader } from '../assets/images/loading.svg'

const TYPE = 'number'
const filterCoins = [
	'USDT',
	'USDC',
	'HEX',
	'BUSD',
	'DAI',
	'TUSD',
	'UST',
	'USDP',
]

const Main = ({ handleThemeChange }) => {
	const [crypto, setCrypto] = useState([])
	const [selectedCoin, setSelectedCoin] = useState(false)
	const [mode, setMode] = useToggle(true)

	const [selectedCurrency, setSelectedCurrency] = useState({
		currency: 'USD',
		symbol: '$',
	})

	const loading = Boolean(!crypto.length)

	useEffect(() => {
		get(selectedCurrency.currency)
			.then((response) => {
				const result = response.filter((x) => filterCoins.indexOf(x.currency) < 0)
				setCrypto(result)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [selectedCurrency.currency])

	const btc = crypto.find((x) => x.currency === 'BTC')

	//custom hook object with state value in property "value"
	const fields = {
		coinAmount: useField(TYPE),
		buyValue: useField(TYPE),
		sellValue: useField(TYPE),
		buyFee: useField(TYPE),
		sellFee: useField(TYPE),
	}

	const handleCoinSelection = (newValue) => {
		if (newValue && newValue?.price) {
			setSelectedCoin(newValue)
			fields.buyValue.onChange({ target: { value: newValue.price } })
		}
	}

	/* component MENU is absolute and outside of DOM */
	return (
		<Box>
			{loading ? (
				<Loader />
			) : (
				<Box>
					<ValueInput
						fields={fields}
						btc={btc}
						selectedCurrency={selectedCurrency}
						mode={mode}
						setMode={setMode}
					/>

					<CryptoCaroussel
						selectedCoin={selectedCoin}
						cryptoList={crypto}
						handleCoinSelection={handleCoinSelection}
					/>

					<Menu
						handleThemeChange={handleThemeChange}
						selectedCoin={selectedCoin}
						cryptoList={crypto}
						handleCoinSelection={handleCoinSelection}
						setSelectedCurrency={setSelectedCurrency}
						fields={fields}
						selectedCurrency={selectedCurrency}
						mode={mode}
					/>
				</Box>
			)}
		</Box>
	)
}

export default Main
