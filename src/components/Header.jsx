import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { Mycontext } from '../App'
import { FaTimes } from 'react-icons/fa'


export const Header = () => {
    const { cart, setCart, nav, setNav } = useContext(Mycontext)
    return (
        <>
            <div className={`navbar ${nav ? "on" : "off"}`}>
                <h1 data-aos='fade-down' data-aos-duration='1000'>Home</h1>
                <h1 data-aos='fade-down' data-aos-duration='1200'>About</h1>
                <h1 data-aos='fade-down' data-aos-duration='1400'>Work</h1>
                <h1 data-aos='fade-down' data-aos-duration='1600'>News</h1>
                <h1 data-aos='fade-down' data-aos-duration='1800'>Contact</h1>
            </div>
            <div className="navigation container-fluid d-flex justify-content-between align-items-center" style={{ "zIndex": '10000000' }}>
                <div className="col text-left d-flex flex-row">
                    <h3 className='h4'>DOZAI</h3>
                    <div className="container d-flex flex-column">
                        <span className="fs-7">Creative Website</span>
                        <span className="fs-7">Template</span>
                    </div>
                </div>
                <div className="col text-center text-white d-md-flex d-none justify-content-center">
                    <span style={{ "color": "gray" }}>Email:</span> <p className="fs-6">
                        dozai@template.com
                    </p>
                </div>
                <div
                    className="col d-flex crt">
                    <div className="container-fluid d-flex align-items-center justify-content-end">
                        <p className="p text-white" onClick={() => setCart(!cart)}
                            style={{ "cursor": "pointer" }}
                        >Cart</p>
                        <p className="p text-white">
                            {!nav ? <HiBars3CenterLeft className='icn'
                                onClick={() => setNav(!nav)}
                            /> : <FaTimes className='icn'
                                onClick={() => setNav(!nav)}
                            />}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
