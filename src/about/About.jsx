import React from 'react'
import { Cart } from '../components/Cart'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Award } from '../sections/homecomponents/Award'
import { Contact } from '../sections/homecomponents/Contact'
import { Exprience } from '../sections/homecomponents/Exprience'
import { Priors } from './components/Priors'
import { Str } from './components/Str'
import { Teammembers } from './components/Teammembers'
import './styles/about.scss'

export const About = () => {
    const cards = [
        {
            num: "12+",
            title: "Years Experience"
        },
        {
            num: "87+",
            title: "Happy Clients"
        },
        {
            num: "135+",
            title: "Completed Projects"
        },
        {
            num: "15+",
            title: "Metric description"
        },

    ]
    return (
        <>
            <Cart />
            <Header />
            <Str />
            <Priors />
            <Teammembers />
            <Contact />
            <Exprience cards={cards}/>
            <Award/>
            <Footer/>
        </> 
    )
}
