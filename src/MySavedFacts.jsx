import React from 'react'
import { Link } from 'react-router'

export default function MySavedFacts() {
    const storedFacts = JSON.parse(localStorage.getItem('savedFacts'))

    const[mySavedFacts, setMySavedFacts] = React.useState(storedFacts)

    const clearFacts = function() {
        localStorage.clear()
        setMySavedFacts([])
    }

    const saveFactElements = mySavedFacts ? (mySavedFacts.map(fact => (
        <p>{fact}</p>
    ))) : null
    
    return (
        <>
            <div className="saved-facts">
                <h1>My Saved Facts</h1>
                <h2>Did you know:</h2>
                {saveFactElements}
            </div>
            <div className="cat-facts-btns">
                <Link to="/catfacts"><button className="nav-btns">Show me more cats and facts!</button></Link>
                <button onClick={clearFacts} className="clear-facts-btn">Clear all facts</button>
            </div>
        </>
    )
}