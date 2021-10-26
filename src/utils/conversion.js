import { parse } from "./parse"

//fiat list should be an object, todo: DRY
export const convert = (fiatList, selectedCurrency, fields ) => {

    const newRate = (fiatList.find(x => x.currency === selectedCurrency.currency)).rate

    console.log("foundRate", newRate)

    const amountValue =  parse(fields.coinAmount.value) * parse(newRate)
    const buyValue = parse(fields.buyValue.value) * parse(newRate)
    const sellValue = parse(fields.sellValue.value) * parse(newRate)

  
    fields.coinAmount.onChange({target: {value: amountValue}})
    fields.buyValue.onChange({target: {value: buyValue}})
    fields.sellValue.onChange({target: {value: sellValue}})
}