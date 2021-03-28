import React, { useState } from 'react'
import './styles.css'
const CurrencyBlock = ({ name, id, onDelete }) => {
    const [cryptoValue, setCryptoValue] = useState()
    const Lname = name.toLowerCase()
    const currencyName = name.charAt(0).toUpperCase() + name.slice(1)

    //let pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${Lname}`)

    const webConnect = () => {
        const pricesWs = new WebSocket(
            `wss://ws.coincap.io/prices?assets=${Lname}`
        )

        pricesWs.onclose = function (e) {
            console.log(
                'Socket is closed. Attemp to reconnet in 1 second.',
                e.reason
            )
            setTimeout(function () {
                webConnect()
            }, 1000)
        }

        pricesWs.onerror = () => {
            console.log(`Error in websocket${name}`)
            console.log('Closing webSocket')
            pricesWs.close()
        }
        pricesWs.onmessage = function (msg) {
            var jsonMsg = JSON.parse(msg.data)

            if (jsonMsg[name] !== undefined) {
                setCryptoValue(jsonMsg[name])
            }
        }
    }
    webConnect()

    return (
        <div className="bg-dark text-white  mt-3 " style={{ width: '32%' }}>
            <div>
                <div className="d-flex justify-content-start pt-2 pl-2">
                    <h2 style={{ fontSize: '20px' }}>{currencyName}</h2>
                    <i class="bi bi-arrow-up"></i>
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
                    style={{
                        cursor: 'pointer',
                        color: 'grey',
                        'text-decoration': 'underline',
                    }}
                    onClick={() => onDelete(id)}
                >
                    Remove
                </span>
            </div>
        </div>
    )
}

export default CurrencyBlock
