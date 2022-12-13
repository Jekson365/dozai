import { useEffect } from 'react'
import { useState } from 'react'
import { SectionHome } from './sections/homecomponents/SectionHome'
import './styles/main.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Socials } from './components/Socials';
import { Cart } from './components/Cart';
import { createContext } from 'react';
import { Award } from './sections/homecomponents/Award';
import { Team } from './sections/homecomponents/Team';
import { Prods } from './sections/homecomponents/Prods';
import { Scrollable } from './sections/homecomponents/Scrollable';
import { Review } from './sections/homecomponents/Review';
import { Agency } from './sections/homecomponents/Agency';
import { Exprience } from './sections/homecomponents/Exprience';
import { Recent } from './sections/homecomponents/Recent';
import { Contact } from './sections/homecomponents/Contact';
import { Footer } from './components/Footer';

export const Mycontext = createContext()

function App() {
  useEffect(() => {
    AOS.init()
  })

  const [cart, setCart] = useState(true)
  const [nav, setNav] = useState(false)
  return (
    <>
      <Mycontext.Provider value={{ cart, setCart, setNav, nav }}>

        <div className={`navbar ${nav ? "on" : "off"}`}>
          <h1 data-aos='fade-down' data-aos-duration='1000'>Home</h1>
          <h1 data-aos='fade-down' data-aos-duration='1200'>About</h1>
          <h1 data-aos='fade-down' data-aos-duration='1400'>Work</h1>
          <h1 data-aos='fade-down' data-aos-duration='1600'>News</h1>
          <h1 data-aos='fade-down' data-aos-duration='1800'>Contact</h1>
        </div>
        <SectionHome />
        <Socials />
        <Award />
        <Team />
        <Prods />
        <Scrollable />
        <Review />
        <Agency />
        <Exprience />
        <Recent />
        <Contact />
        <Footer />
      </Mycontext.Provider>
    </>
  )
}

export default App
