import { useEffect } from 'react'
import { useState } from 'react'
import { SectionHome } from './sections/homecomponents/SectionHome'
import './styles/main.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createContext } from 'react';
import { Home } from './pages/Home';
import { Routes, HashRouter, Route, BrowserRouter, Link } from 'react-router-dom'
import { About } from './about/About';
import { Projects } from './pages/Projects';

export const Mycontext = createContext()

function App() {
  useEffect(() => {
    AOS.init()
  })

  const [cart, setCart] = useState(true)
  const [nav, setNav] = useState(false)
  return (
    <>
    
      <BrowserRouter basename='/'>
        <Mycontext.Provider value={{ cart, setCart, setNav, nav }}>
          <div className={`navbar ${nav ? "on" : "off"}`}>
            <Link to={'/dozai/home'} data-aos='fade-down' data-aos-duration='1000'>Home</Link>
            <Link to={'/dozai/about'} data-aos='fade-down' data-aos-duration='1200'>About</Link>
            <Link to={'/dozai/work'} data-aos='fade-down' data-aos-duration='1400'>Work</Link>
          </div>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Projects />} />
          </Routes>
        </Mycontext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
