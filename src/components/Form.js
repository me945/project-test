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
            <div>
                <div className="md-6">
                    <label className="d-flex justify-content-center">
                        {'Currency:'}
                    </label>
                    <input
                        className=" pl-4 "
                        type="text"
                        class="form-control"
                        placeholder="Enter currency name"
                    ></input>
                </div>
                <div
                    className="d-flex justify-content-center pt-2 md-6"
                    style={{ paddingLeft: '42  px' }}
                >
                    <button type="submit" class="btn btn-primary">
                        Add Currency
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form
