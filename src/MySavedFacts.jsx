import React from 'react'
import { Link } from 'react-router'

export default function MySavedFacts() {
    const storedFacts = JSON.parse(localStorage.getItem('savedFacts')
)
    console.log(storedFacts)

    const[mySavedFacts, setMySavedFacts] = React.useState(storedFacts)

    const saveFactElements = mySavedFacts.map(fact => (
        <p>{fact}</p>
    ))
    return (
        <>
            <h1>My saved facts here.</h1>
            {saveFactElements}
            <Link to="/catfacts"><button className="nav-btns">Show me more cats and facts!</button></Link>
        </>
    )
}