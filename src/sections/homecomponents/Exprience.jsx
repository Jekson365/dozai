import React from 'react'
import '../../styles/scrollable.scss'

export const Exprience = () => {
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
        <>
            <div 
            className="exp container d-flex flex-row align-items-baseline mt-5" style={{ "height": "1000px",'marginTop':"100px" }}>
                <div 
                className="ids pts h-100 d-none col-md-4 d-md-flex flex-column align-items-start justify-content-between">
                    <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0700f4a2f3abc72a0819_Untitled-1-p-500.png' />
                    <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0701d76bbf79f66993c9_Untitled-2-p-500.png' />
                    <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0700e8fb630be246f1f9_Untitled-3-p-500.png' />
                </div>
                <div className="as h-100 col-md-4 d-flex flex-column align-items-center justify-content-center">
                    {cards.map((each) => {
                        return (
                            <>
                                <div className="card-card" data-aos='fade-up'>
                                    <h1 className='h1 text-white'>{each.num}</h1>
                                    <p className="p text-gray">{each.title}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className="ids h-100 d-none col-md-4 d-md-flex flex-column align-items-end justify-content-between" >
                    <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e070180bfdfe4ca793e08_Untitled-4-p-500.png' />
                    <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e070180bfdf5b1e793e07_Untitled-5-p-500.png' />
                    <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e070100d74e6afb882ef6_Untitled-6-p-500.png' />
                </div>
            </div>
        </>
    )
}
