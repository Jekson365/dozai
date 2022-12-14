import React from 'react'
import { useState } from 'react'
import '../styles/cart.scss'
import { useContext } from 'react'
import { Mycontext } from '../App'
import { FaTimes } from 'react-icons/fa'
import '.././styles/team.scss'
import '.././styles/main.scss'

export const Cart = () => {

    const { cart, setCart } = useContext(Mycontext)


    return (
        <>
            <div 
            className={`overlay ${cart ? "d-none" : "d-block"}`}></div>
            <div 
            className={`cart ${cart ? "deactive-cart" : 'active-cart'}`} style={{ "overflow": "hidden", "zIndex": "10000000000" }}>
                <div
                    style={{ "height": "60px", 'padding': "0 10px", 'borderBottom': "0.3px solid gray" }}
                    className="row d-flex align-items-center justify-content-center">
                    <span className='w-50'>Your Cart</span>
                    <span className='w-50 d-flex justify-content-end'
                        style={{ "cursor": "pointer" }}
                        onClick={() => setCart(!cart)}><FaTimes />

                    </span>
                </div>
                <div className="row h-100 w-100 text-center d-flex align-items-center justify-content-center">
                    <p className="p text-white" >
                        Cart is empty
                    </p>
                </div>
            </div>
        </>
    )
}
