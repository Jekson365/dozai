import React from 'react'
import { Cart } from '../components/Cart'
import { Header } from '../components/Header'
import { Priors } from './components/Priors'
import { Str } from './components/Str'
import './styles/about.scss'

export const About = () => {
    return (
        <>
            <Cart />
            <Header />
            <Str />
            <Priors/>
        </>
    )
}
