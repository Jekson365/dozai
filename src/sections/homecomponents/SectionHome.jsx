import React from 'react'
import { Cart } from '../../components/Cart'
import { Header } from '../../components/Header'
import { HomeContent } from './HomeContent'

export const SectionHome = () => {
    return (
        <section className='custom w-100' style={{"backgroundImage":`url('https://assets.website-files.com/62e7dd8eb96f150931bf8901/6340a9ddc245b8202eba8f48_Pattern3.jpg')`,"overflow":"hidden"}}>
            <Cart/>
            <Header/>
            <HomeContent/>
            <div className="circle positon-absolute"></div>
        </section>
        
    )
}
