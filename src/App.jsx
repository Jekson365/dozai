import { useEffect } from 'react'
import { useState } from 'react'
import { SectionHome } from './sections/homecomponents/SectionHome'
import './styles/main.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=> {
    AOS.init()
  })
  return (
    <>
      <SectionHome/>
    </>
  )
}

export default App
