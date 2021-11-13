import { API_KEY } from '../config/config'

//https://nomics.com/docs/#operation/getCurrenciesTicker
const get = async (currency = 'USD', total = 100) => {

	const response =  await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&interval=1hd&convert=${currency}&per-page=${total}&status=active`)

	if(response.ok){
		return await response.json()
	}
}


export default get