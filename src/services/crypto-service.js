//https://nomics.com/docs/#operation/getCurrenciesTicker
const API_KEY = process.env.REACT_APP_CRYPTO_API

export default async function get(currency = 'USD', total = 50) {

    let response =  await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&interval=1dd&convert=${currency}&per-page=${total}&status=active`)

    if(response.ok){
        return await response.json()
    }

    console.debug(response.status)

}