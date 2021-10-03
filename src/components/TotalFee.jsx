import React from 'react'

const TotalFee = ({ totalFees }) => {
    return (
        <span style={{ fontSize: 11, color: 'darkgrey'}}>
             &nbsp;&nbsp;&nbsp;&nbsp;( - {totalFees.toFixed(2)} $ total fees )
        </span>
    )
}

export default TotalFee
