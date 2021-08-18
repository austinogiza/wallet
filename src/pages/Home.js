import React, { useRef } from 'react'
import ContactForm from 'components/ContactForm'
import Footer from 'components/Footer'
import Hero from 'components/Hero'
import OurJourney from 'components/OurJourney'
import TimeLine from 'components/TimeLine'
import AboutUs from 'components/AboutUs'
import Navbar from 'components/Navbar'

const Home = () => {

    
    const journeryRef = useRef()
    const timelineRef = useRef()
    const aboutRef = useRef()
    const contactRef = useRef()

    const workClick = ()=>{
window.scrollTo({ behavior: 'smooth', top: timelineRef.current.offsetTop })

    }
    const processClick = ()=>{
        window.scrollTo({ behavior: 'smooth', top: journeryRef.current.offsetTop })
    }
const aboutClick = ()=>{

    window.scrollTo({ behavior: 'smooth', top: aboutRef.current.offsetTop })
}
const getInTouchClick = ()=>{

    window.scrollTo({ behavior: 'smooth', top: contactRef.current.offsetTop })
}
    return (
        <div>
            <Navbar workClick={workClick} processClick={processClick} aboutClick={aboutClick} getInTouch={getInTouchClick}/>
            <Hero />
            <TimeLine timeline={timelineRef}/>
            <OurJourney journeryRef={journeryRef}/>
            <AboutUs aboutRef={aboutRef}/>
            <ContactForm contactRef={contactRef}/>
            <Footer/>
            
        </div>
    )
}

export default Home
