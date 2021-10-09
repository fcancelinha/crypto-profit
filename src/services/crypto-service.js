//https://nomics.com/docs/#operation/getCurrenciesTicker
const API_KEY = process.env.REACT_APP_CRYPTO_API

const getCrypto = async (currency = 'USD', total = 50) => {

    try {

        return await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&interval=1dd&convert=${currency}&per-page=${total}&status=active`)

    } catch (exception) {
        console.debug(exception)
    }
}

export {
    getCrypto
}