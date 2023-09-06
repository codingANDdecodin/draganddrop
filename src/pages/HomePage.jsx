import React from 'react'
import Welcome from '../components/Home/Welcome/Welcome'
import WeDo from '../components/Home/WeDo/WeDo'
import Testimonials from '../components/Home/Testimonials/Testimonials'
import ContactUs from '../components/Home/ContactUs/ContactUs'
import OurSkills from '../components/Home/OurSkills/OurSkills'

function HomePage() {
  return (
    <>
     <Welcome></Welcome>
     <WeDo></WeDo>
     <Testimonials></Testimonials>
     <OurSkills></OurSkills>
     <ContactUs></ContactUs>
    </>
  )
}

export default HomePage