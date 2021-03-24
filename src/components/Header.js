import React, { useState } from 'react'
import Form from './Form'

const Header = ({ onAdd, idNum }) => {
    const [showAddForm, setAddShowForm] = useState(false)

    return (
        <div className="container">
            <div className=" bg-dark text-white mt-3">
                <h5 className="d-felx justify-content-start pt-3 pl-3">
                    Live Crypto
                </h5>
                <span
                    style={{ cursor: 'pointer' }}
                    className="d-felx justify-content-end mb-3"
                    onClick={() => setAddShowForm(!showAddForm)}
                >
                    + Add
                </span>
            </div>

            {showAddForm === true ? <Form onAdd={onAdd} idNum={idNum} /> : null}
        </div>
    )
}

export default Header

{
    /* {showForm === true ? (
                    <Form onAdd={onAdd} idNum={idNum} />
                ) : null} */
}
