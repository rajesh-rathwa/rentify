import React from 'react'
import HeroSection from '../Components/HeroSection.jsx'
import About from '../Components/About.jsx'
import Talk from '../Components/Talk.jsx'
import Testimonials from '../Components/Testimonials.jsx'

const AboutPage = () => {
  return (
    <div>
        <HeroSection title="About"/>
        <About/>
        <Talk/>
        <Testimonials/>
    </div>
  )
}

export default AboutPage