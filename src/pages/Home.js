import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import OurJourney from '../components/OurJourney'
import TimeLine from '../components/TimeLine'
import AboutUs from '../components/AboutUs'

const Home = () => {
    return (
        <div>
            <Hero />
            <TimeLine/>
            <OurJourney/>
            <AboutUs/>
            <ContactForm/>
            <Footer/>
            
        </div>
    )
}

export default Home
