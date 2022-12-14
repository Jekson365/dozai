import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Socials } from '../components/Socials'
import { Agency } from '../sections/homecomponents/Agency'
import { Award } from '../sections/homecomponents/Award'
import { Contact } from '../sections/homecomponents/Contact'
import { Exprience } from '../sections/homecomponents/Exprience'
import { Prods } from '../sections/homecomponents/Prods'
import { Recent } from '../sections/homecomponents/Recent'
import { Review } from '../sections/homecomponents/Review'
import { Scrollable } from '../sections/homecomponents/Scrollable'
import { SectionHome } from '../sections/homecomponents/SectionHome'
import { Team } from '../sections/homecomponents/Team'

export const Home = () => {
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
        <div>
            <Header/>
            <SectionHome />
            <Socials />
            <Award />
            <Team />
            <Prods />   
            <Scrollable />
            <Review />
            <Agency />
            <Exprience cards={cards} />
            <Recent />
            <Contact />
            <Footer />
        </div>
    )
}
