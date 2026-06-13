import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Parallax from '../Components/Parallax/Parallax'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import WhyUS from '../Components/WhyUS/WhyUS'
import Testimonials from '../Testimonials/Testimonials'

function Home() {
  return (
    <>
      <Navbar />
      <Parallax />
      <About />
      <Services />
      <WhyUS />
      <Testimonials />
    </>
  )
}

export default Home