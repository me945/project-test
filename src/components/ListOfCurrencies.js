import React from 'react'
import Currency from './CurrencyBlock.js'
const ListOfCurrencies = ({ data, onDelete }) => {
    return (
        <div className="d-flex justify-content-between flex-row flex-wrap container">
            {data.map((item) => (
                <Currency
                    onDelete={onDelete}
                    key={item.id}
                    name={item.name}
                    id={item.id}
                />
            ))}
        </div>
    )
}

export default ListOfCurrencies
