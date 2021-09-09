import React from 'react'
import Calc from './components/Calc'
import useField from './hooks/useField'

const App = () => {

    //custom hook object with state value in property

    const info = {
        coinAmount: useField('number'),
        buyValue: useField('number'),
        sellValue: useField('number'),
        buyFee: useField('number'),
        sellFee: useField('number'),
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
