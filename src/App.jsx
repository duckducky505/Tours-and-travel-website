import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import Intro from './Components/Introduction/Intro'
import NepalTripLayout from './Components/Trip/NepalTripLayout'
import tripData from './Components/Trip/TripData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/About/AboutPage'
import MeetTeam from './Pages/MeetTeam/MeetTeam'
import Packages from './Pages/Packages/Packages'
import TailorMade from './Pages/Tailor/TailorPage'

function App() {

  return(
    <>
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/packages' element={<Packages/>}/>
          <Route path='/about-us' element={<AboutPage/>}/>
          <Route path='/team-members' element={<MeetTeam/>}/>
          <Route path='/tailor-made' element={<TailorMade/>}/>
          <Route path="/trip/:slug" element={<NepalTripLayout data={tripData} />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  )

}

export default App
