import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import Form from './Form'

const Header = ({ onAdd, idNum }) => {
    const [showAddForm, setAddShowForm] = useState(false)

    return (
        <div className="container ">
            <div className=" bg-dark text-white mt-3">
                <div className="d-flex justify-content-between ">
                    <h5 className="d-flex justify-content-start pt-3 pl-3">
                        Live Crypto
                    </h5>
                    {showAddForm ? (
                        <span
                            style={{ cursor: 'pointer', paddingTop: '2.5%' }}
                            z
                            className="d-flex justify-content-end mb-3 pr-3 "
                            onClick={() => setAddShowForm(!showAddForm)}
                        >
                            (x) Close
                        </span>
                    ) : (
                        <span
                            style={{ cursor: 'pointer', paddingTop: '2.5%' }}
                            z
                            className="d-flex justify-content-end mb-3 pr-3 "
                            onClick={() => setAddShowForm(!showAddForm)}
                        >
                            + Add
                        </span>
                    )}
                </div>
            </div>

            {showAddForm === true ? <Form onAdd={onAdd} idNum={idNum} /> : null}
        </div>
    )
}

export default Header
