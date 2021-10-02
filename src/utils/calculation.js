const convertToNumber = (number) => {
    return isNaN(parseFloat(number)) ? 0 : parseFloat(number)
}

export const performCalculation = (inputValue) => {
    
    const values = {
        amount: convertToNumber(inputValue.coinAmount.value),
        buy: convertToNumber(inputValue.buyValue.value),
        sell: convertToNumber(inputValue.sellValue.value),
        buyFee: convertToNumber(inputValue.buyFee.value),
        sellFee: convertToNumber(inputValue.sellFee.value),
    }

    const buyValue = values.amount * values.buy
    const sellValue = values.amount * values.sell
    
    const investmentFee = values.buyFee ? (buyValue * (values.buyFee * 0.01)) : 0
    const exitFee = values.sellFee ? (sellValue * (values.sellFee * 0.01)) : 0
    const totalFee = investmentFee + exitFee

    const profit = sellValue - buyValue - totalFee
    const total = buyValue + profit

    const inProfit = sellValue > buyValue

    return {
        profit,
        total,
        totalFee,
        investmentFee,
        exitFee,
        inProfit
    }

}

