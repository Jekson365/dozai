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


export const Mycontext = createContext()

function App() {
  useEffect(() => {
    AOS.init()
  })

  const [cart, setCart] = useState(true)
  return (
    <>
      <Mycontext.Provider value={{ cart, setCart }}>
        <SectionHome />
        <Socials />
        <Award/>
        <Team/>
        <Prods/>
        <Scrollable/>
        <Review/>
        <Agency/>
        <Exprience/>
      </Mycontext.Provider>
    </>
  )
}

export default App
