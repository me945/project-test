import React from 'react'
import Currency from './CurrencyBlock.js'
const ListOfCurrencies = ({ data, onDelete }) => {
    return (
        <div>
            <div className="d-flex justify-content-between flex-row flex-wrap container review ">
                {data.map((item) => (
                    <Currency
                        onDelete={onDelete}
                        key={item.id}
                        name={item.name}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListOfCurrencies
