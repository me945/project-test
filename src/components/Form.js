import React, { useState } from 'react'

const Form = ({ onAdd, idNum }) => {
    const [currencyName, setCurrencyName] = useState('')
    const [showError, setShowError] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!currencyName) {
            //alert('Please add a currency name')
            setShowError(true)
            return
        }
        setShowError(false)
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
                    {showError ? (
                        <small
                            style={{
                                color: 'red',
                                fontSize: '12px',
                                paddingLeft: '4px',
                            }}
                        >
                            Please enter currency name
                        </small>
                    ) : null}
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
