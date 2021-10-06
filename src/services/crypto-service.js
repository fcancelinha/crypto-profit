//https://nomics.com/docs/#operation/getCurrenciesTicker
const API_KEY = process.env.REACT_APP_CRYPTO_API


const getCrypto = async () => {

    try {

        return await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&ids=BTC,ETH,XRP&interval=1d,30d&convert=USD&per-page=100&page=1`)

    } catch (exception) {
        console.debug(exception)
    }
}

export {
    getCrypto
}