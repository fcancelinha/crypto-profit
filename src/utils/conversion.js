import { parse } from "./parse"

//fiat list should be an object, todo: DRY
export const convert = (fiatList, selectedCurrency, fields ) => {

    console.log("selectedCurrency", selectedCurrency)
    const foundRate = (fiatList.find(x => x.currency === selectedCurrency.currency))
    console.log("foundRate", foundRate)
    const newRate = foundRate.rate
    console.log("newRate", newRate)
    
    const amountValue =  parse(fields.coinAmount.value) * parse(newRate)
    const buyValue = parse(fields.buyValue.value) * parse(newRate)
    const sellValue = parse(fields.sellValue.value) * parse(newRate)

    fields.coinAmount.onChange({target: {value: amountValue}})
    fields.buyValue.onChange({target: {value: buyValue}})
    fields.sellValue.onChange({target: {value: sellValue}})
}