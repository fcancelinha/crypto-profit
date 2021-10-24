import { API_KEY } from "../config/config"

//https://nomics.com/docs/#tag/Exchange-Rates
const get = async () => {

    const response =  await fetch(`https://api.nomics.com/v1/exchange-rates?key=${API_KEY}`)

    if(response.ok){
        return await response.json()
    }
}

export default get