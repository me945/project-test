import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const CurrencyBlock = ({ name, id, onDelete }) => {
    const [cryptoValue, setCryptoValue] = useState()
    const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${name}`)

    pricesWs.onmessage = function (msg) {
        var jsonMsg = JSON.parse(msg.data)

        if (jsonMsg[name] !== undefined) {
            setCryptoValue(jsonMsg[name])
            console.log(jsonMsg[name])
        }
    }
    const currencyName = name.charAt(0).toUpperCase() + name.slice(1)
    return (
        // <div>
        //   Name: {name} id : {id}
        // </div>
        <div
            className="bg-dark text-white  mt-3 ml-1 mr-1"
            style={{ width: '32%' }}
        >
            <div>
                <div className="d-flex justify-content-start pt-2 pl-2">
                    <h2 style={{ fontSize: '20px' }}>{currencyName}</h2>
                </div>
                <div className="d-flex justify-content-start pl-2">
                    {' '}
                    <span style={{ fontSize: '15px' }} className="">
                        {cryptoValue}
                    </span>
                    <span className="pl-1">USD</span>
                </div>
            </div>
            <div className="d-flex justify-content-end pb-2 pr-2">
                <span
                    style={{ cursor: 'pointer', color: 'grey' }}
                    onClick={() => onDelete(id)}
                >
                    Remove
                </span>
            </div>
        </div>
    )
}

export default CurrencyBlock
