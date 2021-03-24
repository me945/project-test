import React from 'react'

const Header = () => {
    return (
        <div className="container ">
            <div className=" bg-dark text-white mt-3">
                <h5 className="d-felx justify-content-start pt-3 pl-3">
                    Live Crypto
                </h5>
                <span
                    style={{ cursor: 'pointer' }}
                    className="d-felx justify-content-end mb-3"
                >
                    + Add
                </span>
            </div>
        </div>
    )
}

export default Header
