import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Parallax from '../Components/Parallax/Parallax'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'

function Home() {
  return (
    <>
      <Navbar />
      <Parallax />
      <About />
      <Services />
    </>
  )
}

export default Home