import React from 'react'
import { Footer } from '../components/Footer'
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
    return (
        <div>
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
        </div>
    )
}
