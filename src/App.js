import React from 'react'
import Calc from './components/Calc'
import useField from './hooks/useField'

const App = () => {

    const coinAmount = useField('number')
    const buyValue = useField('number')
    const sellValue = useField('number')
    const buyFee = useField('number')
    const sellFee = useField('number')

    return (
        <form>

            <div>
                <h3>Coin Amount</h3>
                <input {...coinAmount} />
            </div>

            <div>
                <h3>buy value</h3>
                <input {...buyValue} />
            </div>

            <div>
                <h3>sell value</h3>
                <input {...sellValue} />
            </div>

            <div>
                <h3>buy fee</h3>
                <input {...buyFee} />
            </div>

            <div>
                <h3>sell fee</h3>
                <input {...sellFee} />
            </div>

            <div>
                <Calc />
            </div>

        </form>
    )
}

export default Main
