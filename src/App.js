import logo from './logo.svg'
import { useState } from 'react'
import './App.css'
import ListOfCurrencies from './components/ListOfCurrencies.js'
import Header from './components/Header'
function App() {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'bitcoin',
        },
        {
            id: 2,
            name: 'litecoin',
        },
        {
            id: 3,
            name: 'ethereum',
        },
        {
            id: 4,
            name: 'monero',
        },
    ])
    //Add random id
    const [idNum, setIdNum] = useState(data.length)

    //Add fucntion
    const addItem = (setName) => {
        setData([...data, { id: setName.id, name: `${setName.name}` }])
        setIdNum(data.length)
    }

    //Remove fucntion
    const removeItem = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    return (
        <div className="App">
            <Header onAdd={addItem} idNum={idNum} />
            {data.length > 0 ? (
                <ListOfCurrencies onDelete={removeItem} data={data} />
            ) : (
                'Add a currency'
            )}
        </div>
    )
}

export default App
