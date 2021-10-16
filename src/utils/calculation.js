const convertToNumber = (number) => {
    return isNaN(parseFloat(number)) ? 0 : parseFloat(number);
};

export const performCalculation = (inputValue, mode) => {

    const values = {
        amount: convertToNumber(inputValue.coinAmount.value),
        buy: convertToNumber(inputValue.buyValue.value),
        sell: convertToNumber(inputValue.sellValue.value),
        buyFee: convertToNumber(inputValue.buyFee.value),
        sellFee: convertToNumber(inputValue.sellFee.value),
    }

    let buyValue = 0;
    let sellValue = 0;

    if (values.sell && values.buy && values.amount) {

        buyValue = mode ? values.amount : (values.amount * values.buy)
        sellValue = mode ? ((values.amount * values.sell) / values.buy) : (values.amount * values.sell)
    }

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

