import React from 'react'
import { Cart } from '../components/Cart'
import { Header } from '../components/Header'
import { Agency } from '../sections/homecomponents/Agency'
import { Review } from '../sections/homecomponents/Review'
import { Scrollable } from '../sections/homecomponents/Scrollable'
import './styles/projects.scss'

export const Projects = () => {
  return (
    <>
    <Cart/>
    <Header/>
        <div className="proj-title w-100 d-flex align-items-center justify-content-center" style={{"height":"100vh"}}
        >
            <h1
            className='text-white'
            style={{"fontSize":"5vw","fontWeight":"bold"}}
            >Projects</h1>
        </div>
        <Scrollable/>
        <Agency/>
    </>
  )
}
