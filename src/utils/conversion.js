const convertHelper = (fieldValue, rate) => {

    const value = parseFloat(fieldValue);

    try {

        if (value > 0) {
            var convertedValue = (fieldValue / rate);
            return convertedValue.toFixed(3);
        }

    } catch (exception) {
        console.debug(exception);
    }

    return fieldValue;
}


export const convert = (fiatList, selectedCurrency, fields ) => {

    const foundRate = (fiatList.find(x => x.currency === selectedCurrency.currency))
    const newRate = foundRate.rate

    const amount = convertHelper(fields.coinAmount.value, newRate)
    const buy = convertHelper(fields.buyValue.value, newRate)
    const sell = convertHelper(fields.sellValue.value, newRate)

    fields.coinAmount.onChange({target: {value: amount}})
    fields.buyValue.onChange({target: {value: buy}})
    fields.sellValue.onChange({target: {value: sell}})  

}