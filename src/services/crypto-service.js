import { API_KEY } from "../config/config"

//https://nomics.com/docs/#operation/getCurrenciesTicker
const get = async (total = 50) => {

    let response =  await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&interval=1hd&convert=USD&per-page=${total}&status=active`)

    if(response.ok){
        return await response.json()
    }
}


export default get