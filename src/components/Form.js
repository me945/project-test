import React, { useState } from 'react'

const Form = ({ onAdd, idNum }) => {
    const [currencyName, setCurrencyName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!currencyName) {
            alert('Please add a currency name')
            return
        }

        onAdd({ id: idNum, name: currencyName })

        setCurrencyName('')
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="container w-25">
                <div className="">
                    <label className="d-flex justify-content-center">
                        {'Currency:'}
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter currency name"
                        value={currencyName}
                        onChange={(e) => setCurrencyName(e.target.value)}
                    ></input>
                </div>
            </div>
            <div
                className="d-flex justify-content-center pt-2 md-6"
                style={{ paddingLeft: '42  px' }}
            >
                <button
                    type="submit"
                    style={{ backgroundColor: 'grey', color: 'white' }}
                    class="btn btn-primary"
                >
                    Add Currency
                </button>
            </div>
        </form>
    )
}

export default Form
