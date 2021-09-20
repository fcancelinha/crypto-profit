import React from 'react'
import Calc from './components/Calc'
import useNumberField from './hooks/useNumberField'

const App = () => {

    //custom hook object with state value in property
    const info = {
        coinAmount: useNumberField('number'),
        buyValue: useNumberField('number'),
        sellValue: useNumberField('number'),
        buyFee: useNumberField('number'),
        sellFee: useNumberField('number'),
    }


    return (
        <form>

            <h1> Crypto Profit App </h1>

            <div>
                <h3>Coin Amount</h3>
                <input {...info.coinAmount} />
            </div>

            <div>
                <h3>buy value</h3>
                <input {...info.buyValue} />
            </div>

            <div>
                <h3>sell value</h3>
                <input {...info.sellValue} />
            </div>

            <div>
                <h3>buy fee</h3>
                <input {...info.buyFee} />
            </div>

            <div>
                <h3>sell fee</h3>
                <input {...info.sellFee} />
            </div>

            <div>
                <Calc {...info} />
            </div>

        </form>
    )
}

export default App
