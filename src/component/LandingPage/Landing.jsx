import React from 'react'
import Header from './Header'
import Hero from './Hero'
import AboutUs from './AboutUs'
import AboutStats from './AboutStats'
import Feature1 from './Feature1'
import Feature2 from './Feature2'
import Feature3 from './Feature3'
import Workflow from './Workflow'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Landing = () => {
  return (
    <div className='relative w-full mx-auto'>
      <Header />
      <Hero />
      <AboutUs />
      <AboutStats />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Workflow />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Landing