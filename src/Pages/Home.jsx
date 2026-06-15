import Navbar from '../Components/Navbar/Navbar'
import Parallax from '../Components/Parallax/Parallax'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import WhyUS from '../Components/WhyUS/WhyUS'
import Testimonials from '../Components/Testimonials/Testimonials'
import GetStarted from '../Components/GetStarted/GetStarted'
import FAQ from '../Components/FAQ/FAQ'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Parallax />
      <About />
      <Services />
      <WhyUS />
      <Testimonials />
      <GetStarted />
      <FAQ />
      <Footer />
    </>
  )
}

export default Home