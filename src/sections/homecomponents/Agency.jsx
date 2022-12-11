import React from 'react'
import '../../styles/scrollable.scss'

export const Agency = () => {
    return (
        <div className='container d-flex align-items-center flex-column justify-content-center' style={{ "minHeight": "100vh" }}>
            <p className="text-gray">Meet Azai the new agency SEO template.</p>
            <h1 className='title2 text-center'>Meet the new agency<br/>
                <span>
                    SEO template from<br/>
                </span>
                the Dozai team.
            </h1>
            <div className="logos d-flex flex-row align-items-center mt-5 flex-wrap justify-content-center">
                <img src="https://assets.website-files.com/62e7dd8eb96f150931bf8901/6341908b22ea7141982b1ce5_Hues-Color.svg" />
                <img src="https://assets.website-files.com/62e7dd8eb96f150931bf8901/6341908b2bdcd2635d17a006_GenZ-Color.svg" alt="" />
                <img src="https://assets.website-files.com/62e7dd8eb96f150931bf8901/6341908b3b96bc8a1a66246d_Penta-Color.svg" alt="" />
                <img src="https://assets.website-files.com/62e7dd8eb96f150931bf8901/634191328c1d69d73bfc1c7c_Leafe-Color.svg" alt="" />
                <img src="https://assets.website-files.com/62e7dd8eb96f150931bf8901/6341908bda79c9316db35aa8_Sitemark-Color.svg" alt="" />
                <img src="https://assets.website-files.com/62e7dd8eb96f150931bf8901/6341908be2412d4e3dbaae3d_Border-Color.svg" alt="" />
            </div>
        </div>
    )
}
