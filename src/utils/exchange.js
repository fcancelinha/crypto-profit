import get from '../services/currency-service'
import { parse } from '../utils/parse'

// currency: 'USD', symbol: '$'
export const exchange = async (fields, from, to) => {

    console.log("test", from, to)

    const response = await get(from, to)
    const result = response.info.rate

    const amount = parse((fields.coinAmount.value / result)).toFixed(2)
    const buy = parse((fields.buyValue.value / result)).toFixed(2)
    const sell = parse((fields.sellValue.value / result)).toFixed(2)

    fields.coinAmount.onChange({target: {value: amount}})
    fields.buyValue.onChange({target: {value: buy}})
    fields.sellValue.onChange({target: {value: sell}})  
}