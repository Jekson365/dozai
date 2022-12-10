import React from 'react'
import { BsMouse } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { RiInstagramFill } from 'react-icons/ri'
import '../styles/socials.scss'

export const Socials = () => {
    return (
        <>
            <div
                style={{ "height": "210px" }}
                className="socials flex-wrap pb-5 flex-row container-fluid d-flex flex-row align-items-center justify-content-center">
                <div className="col-md-6 d-flex justify-contet-center">
                    <div className="df box text-center">
                        <div className="icn-circle yl"></div>
                        <BsMouse className='icn' />
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-row align-items-center justify-content-end">
                    <div className="box">
                        <div className="icn-circle"></div>
                        <FaFacebookSquare className='icn'/>
                    </div>
                    <div className="box">
                        <div className="icn-circle"></div>
                        <AiOutlineTwitter className='icn' />
                    </div>
                    <div className="box">
                        <div className="icn-circle"></div>
                        <RiInstagramFill className='icn'/>
                    </div>

                    <div className="box">
                        <div className="icn-circle"></div>
                        <AiOutlineTwitter className='icn'/>
                    </div>
                </div>
            </div>
        </>
    )
}
