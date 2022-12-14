import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'

export const Priors = () => {
    const priors = [
        {
            name: "Beautifully Designed",
            desc: "Aenean faucibus nibh et justo id rutrum lorem imperdiet",
            icon: <FaPencilAlt />
        },
        {
            name: "Beautifully Designed",
            desc: "Aenean faucibus nibh et justo id rutrum lorem imperdiet",
            icon: <FaPencilAlt />
        },
        {
            name: "Beautifully Designed",
            desc: "Aenean faucibus nibh et justo id rutrum lorem imperdiet",
            icon: <FaPencilAlt />
        },
    ]
    return (
        <>
            <div 
            style={{"marginTop":"200px"}}
            className="ds container flex-wrap d-flex align-items-center justify-content-center">
                {priors.map((each) => {
                    return (
                        <>
                            <div className="col-md-4" style={{"maxWidth":"33%"}}>
                                <div className="icon-place">
                                    {each.icon}
                                </div>
                                <h1 className='h5 text-white'>{each.name}</h1>
                                <p 
                                style={{"width":"250px"}}
                                className="fs-6 text-gray">{each.desc}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
