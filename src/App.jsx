import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import LandingPage from "./LandingPage.jsx"
import CatFacts from "./CatFacts.jsx"
import MySavedFacts from "./MySavedFacts.jsx"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/catfacts" element={<CatFacts />} />
        <Route path="/my-saved-facts" element={<MySavedFacts />} />
      </Routes>
    </BrowserRouter>
  )
}
