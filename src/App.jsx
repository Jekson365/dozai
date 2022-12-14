import { useEffect } from 'react'
import { useState } from 'react'
import { SectionHome } from './sections/homecomponents/SectionHome'
import './styles/main.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createContext } from 'react';
import { Home } from './pages/Home';
import { Routes, HashRouter, Route, BrowserRouter } from 'react-router-dom'
import { About } from './about/About';

export const Mycontext = createContext()

function App() {
  useEffect(() => {
    AOS.init()
  })

  const [cart, setCart] = useState(true)
  const [nav, setNav] = useState(false)
  return (
    <>
    
      <BrowserRouter>
        <Mycontext.Provider value={{ cart, setCart, setNav, nav }}>
          <div className={`navbar ${nav ? "on" : "off"}`}>
            <h1 data-aos='fade-down' data-aos-duration='1000'>Home</h1>
            <h1 data-aos='fade-down' data-aos-duration='1200'>About</h1>
            <h1 data-aos='fade-down' data-aos-duration='1400'>Work</h1>
            <h1 data-aos='fade-down' data-aos-duration='1600'>News</h1>
            <h1 data-aos='fade-down' data-aos-duration='1800'>Contact</h1>
          </div>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Mycontext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
