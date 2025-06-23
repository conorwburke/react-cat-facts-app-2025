import React from 'react'
import { Link } from 'react-router'

export default function LandingPage() {
    localStorage.clear()
    return (
        <div className="landing-page-els">
            <h1>😻 Are you ready for a dose of feline faces and furry facts? 😻</h1>
            <p>*Note that the random images you are about to see may induce much laughter and confusion*</p>
            <Link to="/catfacts"><button className="nav-btns">Show me some cats and facts!</button></Link>
            <Link to="/my-saved-facts"><button className="nav-btns">My Saved Facts</button></Link>
        </div>
    )
}