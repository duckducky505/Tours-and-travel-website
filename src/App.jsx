import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import tripData from './Components/Trip/TripData'
import { BrowserRouter, Route, Routes } from 'react-router-dom' // Removed 'Router'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/About/AboutPage'
import MeetTeam from './Pages/MeetTeam/MeetTeam'
import Packages from './Pages/Packages/Packages'
import TailorMade from './Pages/Tailor/TailorPage'
import Quote from './Pages/Quote/Quote'
import NepalTripLayout from './Components/Trip/NepalTripLayout'
import WhattsappIcon from './Components/Whattsapp/WhattsappIcon'
import { ScrollBehaviour } from './Routes/ScrollBehaviour'

function App() {
  return (
    <BrowserRouter>
      <ScrollBehaviour>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/team-members' element={<MeetTeam />} />
          <Route path='/tailor-made' element={<TailorMade />} />
          <Route path='/search' element={<NepalTripLayout />} />
          <Route path='/quote' element={<Quote />} />
          <Route path="/trip/:slug" element={<NepalTripLayout data={tripData} />} />
        </Routes>

        <WhattsappIcon />
        <Footer />
      </ScrollBehaviour>
    </BrowserRouter>
  );
}

export default App;