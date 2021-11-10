const convertValue = (oldRate, newRate, value ) => {

    const v = parseFloat(value)
    const x = ((oldRate - newRate) / newRate)
    const y = (x * v) + v

    console.log("y", y)
    console.log("x", x)
    console.log("v", v)
    
    return parseFloat(y.toFixed(3))
}

export const convert = (fiatList, fields, newCurrency, oldCurrency) => {

    const newRate = (fiatList.find(x => x.currency === newCurrency.currency)).rate
    const oldRate = (fiatList.find(x => x.currency === oldCurrency.currency)).rate

    const amount = convertValue(oldRate, newRate, fields.coinAmount.value)
    const buy = convertValue(oldRate, newRate, fields.buyValue.value)
    const sell = convertValue(oldRate, newRate, fields.sellValue.value)

    fields.coinAmount.onChange({target: {value: amount}})
    fields.buyValue.onChange({target: {value: buy}})
    fields.sellValue.onChange({target: {value: sell}})  
}