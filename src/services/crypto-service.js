
const getCrypto = async () => {

    try {

        const cryptoList =  await fetch("https://api.nomics.com/v1/currencies/ticker?key=your-key-here&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1")
        console.log(cryptoList)

        return cryptoList
        
    } catch (exception) {
        console.debug(exception)
    }
}

export {
    getCrypto
}