//https://nomics.com/docs/#tag/Exchange-Rates
const API_KEY = process.env.REACT_APP_CRYPTO_API

export default async function get() {

    let response =  await fetch(`https://api.nomics.com/v1/exchange-rates?key=${API_KEY}`)

    if(response.ok){
        return await response.json()
    }
}