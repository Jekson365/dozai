import React from 'react'
import { HiBars3CenterLeft } from 'react-icons/hi2'


export const Header = () => {
    return (
        <>
            <div className="navigation container-fluid d-flex justify-content-between align-items-center">
                <div className="col text-left d-flex flex-row">
                    <h3 className='h4'>DOZAI</h3>
                    <div className="container d-flex flex-column">
                        <span className="fs-7">Creative Website</span>
                        <span className="fs-7">Template</span>
                    </div>
                </div>
                <div className="col text-center text-white d-md-flex d-none justify-content-center">
                    <span style={{"color":"gray"}}>Email:</span> <p className="fs-6">
                        dozai@template.com
                    </p>
                </div>
                <div
                    className="col d-flex crt">
                    <div className="container-fluid d-flex align-items-center justify-content-end">
                        <p className="p text-white">Cart</p>
                        <p className="p text-white">
                            <HiBars3CenterLeft className='icn'/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
