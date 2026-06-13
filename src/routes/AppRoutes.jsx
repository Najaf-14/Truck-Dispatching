import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Pricing from '../Pages/Pricing'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import Driver from '../Pages/Driver'
import NotFound from '../Pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/driver' element={<Driver />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes