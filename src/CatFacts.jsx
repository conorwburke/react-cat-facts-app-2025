import React from 'react'
import { Link } from 'react-router'

export default function CatFacts() {
    const [catFacts, setCatFacts] = React.useState([])
    const [catImages, setCatImages] = React.useState([])
    const [savedFacts, setSavedFacts] = React.useState([])
    const [moreFacts, setMoreFacts] = React.useState(false)
    
    //Grabbing any savedFacts from LocalStorage and setting state accordingly
    React.useEffect(() => {
        console.log("setup savedFacts")
        const savedFacts = JSON.parse(localStorage.getItem('savedFacts'))
        if (savedFacts) {
            setSavedFacts(savedFacts)
        }
    }, [])

    //Running API calls for both facts and images
    React.useEffect(() => {
        getCatFacts()
        getCatImages()
    }, [moreFacts])

    //Retrieving random facts from meowfacts API
    async function getCatFacts() {
        const url = "https://meowfacts.herokuapp.com/?count=5";
        try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setCatFacts(data.data);
        } catch (error) {
        console.error(error.message);
        }
    }

    //Retrieving random image data from TheCatAPI
    async function getCatImages() {
        const url = "https://api.thecatapi.com/v1/images/search?limit=5";
        try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setCatImages(data);
        } catch (error) {
        console.error(error.message);
        }
    }
    //Combining data retrieved from above API calls into a single array of objects in order to make html generation simpler
    const combinedCatFactsImages = catImages.slice(0, 5).map((object, index) => {
        return {...object, fact: catFacts[index]}
    })

    //Generating html elements using combined array of objects
    const catFactsHtml = combinedCatFactsImages.map(item => (
        <div key={item.id} className="fact-block">
            <img src={item.url} className="cat-img"/>
            <p className="cat-fact">{item.fact}</p>
            <button onClick={() => addCatFact(item)} className="save-btn">Save this fact!</button>
        </div>
    ))

    //For grabbing cat fact and adding to state
    const addCatFact = function(item) {
        if (!savedFacts.includes(item.fact)){
            setSavedFacts(prevSavedFacts => [...prevSavedFacts, item.fact])
            console.log('Updating savedFacts:', savedFacts)
        }
    }

    //Watching for changes to savedFacts and updated localStorage 
    React.useEffect(() => {
            if(savedFacts.length > 0) {
                localStorage.setItem('savedFacts', JSON.stringify(savedFacts))
            }
    }, [savedFacts]) 

    //Using boolean moreFacts state and onClick to rerender page with new facts and cats, and to move scroll to page top
    function toggleFacts() {
        setMoreFacts(!moreFacts)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
            })
    }

    return (
        <div>
            <div className="facts-container">
                {catFactsHtml}
            </div>
            <Link to="/my-saved-facts"><button className="nav-btns">My Saved Facts</button></Link>
            <button onClick={toggleFacts} className="nav-btns">Show me more cats and facts!</button>
        </div>
    )
}