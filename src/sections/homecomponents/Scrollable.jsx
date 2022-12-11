import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import '../../styles/scrollable.scss'

export const Scrollable = () => {
    const arr = [
        {
            id: 1,
            provider: "UX/UX Design",
            client: "Webflow",
            date: "octomber 2, 2022",
            img: "https://assets.website-files.com/633b046e256bd62010ca3e94/63419967b6d8843f633bd997_image-1.jpg",
        },
        {
            id: 2,
            provider: "UX/UX Design",
            client: "Webflow",
            date: "octomber 2, 2022",
            img: "https://assets.website-files.com/633b046e256bd62010ca3e94/63419970c5c730c9b35b8c3e_image-2.jpg",
        },
        {
            id: 3,
            provider: "UX/UX Design",
            client: "Webflow",
            date: "octomber 2, 2022",
            img: "https://assets.website-files.com/633b046e256bd62010ca3e94/634199774d903329068d25aa_image-3.jpg",
        },
        {
            id: 4,
            provider: "UX/UX Design",
            client: "Webflow",
            date: "octomber 2, 2022",
            img: "https://assets.website-files.com/633b046e256bd62010ca3e94/63419970c5c730c9b35b8c3e_image-2.jpg",
        },
        {
            id: 5,
            provider: "UX/UX Design",
            client: "Webflow",
            date: "octomber 2, 2022",
            img: "https://assets.website-files.com/633b046e256bd62010ca3e94/6341997f6a3b915d04668a81_image-4.jpg",
        },
        {
            id: 6,
            provider: "UX/UX Design",
            client: "Webflow",
            date: "octomber 2, 2022",
            img: "https://assets.website-files.com/633b046e256bd62010ca3e94/63419986859df6ea3f871fbd_image-5.jpg",
        },
        {
            id: 7,
            provider: "UX/UX Design",
            client: "Webflow",
            date: "octomber 2, 2022",
            img: "https://assets.website-files.com/633b046e256bd62010ca3e94/63419a226a18b66242baa7dc_image-6.jpg",
        },

    ]
    const sections = [
        'Dozai Interactive', 'Template Animation Scene', 'Design Brand Identity', 'Best Practices Design', 'Advertising Scenario', 'All About Sweettnes'
    ]
    return (

        <>
            <div className='container' style={{ "height": "fit-content", 'marginTop': "200px" }}>
                <div className="row">
                    <div className="sticky col-md-5 flex-wrap " style={{ "height": "fit-content" }}>
                        <ul className='d-flex align-items-start w-100 flex-column'>
                            {sections.map((sec) => {
                                return (
                                    <>
                                        <li
                                            
                                            className='asli mt-5   d-flex flex-row align-items-center'>
                                            <div className="pink-circle mb-3  "></div>
                                            <p className="fs-5">{sec}</p>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-md-7">
                        {arr.map((each) => {
                            return (
                                <>
                                    <div 
                                    className="cover-box mt-5" style={{ "overflow": "hidden" }}>
                                        <img src={each.img} />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
