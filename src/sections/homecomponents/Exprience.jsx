import React from 'react'
import '../../styles/scrollable.scss'

export const Exprience = () => {
    const cards = [
        {
            num:"12+",
            title:"Years Experience"
        },
        {
            num:"12+",
            title:"Years Experience"
        },
        {
            num:"12+",
            title:"Years Experience"
        },
        {
            num:"12+",
            title:"Years Experience"
        },
        
    ]
    return (
        <>
            <div className="exp container d-flex flex-row align-items-baseline mt-5" style={{"height":"fit-content"}}>
            <div className="col-md-4 d-flex flex-column align-items-start justify-content-between" style={{"height":"150vh"}}>
                    <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0700f4a2f3abc72a0819_Untitled-1-p-500.png' />
                    <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0700f4a2f3abc72a0819_Untitled-1-p-500.png' />
                    <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0700f4a2f3abc72a0819_Untitled-1-p-500.png' />
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                    {cards.map((each)=> {
                        return (
                            <>
                                <div className="card-card">
                                    <h1 className='h1 text-white'>{each.num}</h1>
                                    <p className="p text-gray">{each.title}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className="col-md-4 d-flex flex-column align-items-end justify-content-between" style={{"height":"150vh"}}>
                    <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0700f4a2f3abc72a0819_Untitled-1-p-500.png' />
                    <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0700f4a2f3abc72a0819_Untitled-1-p-500.png' />
                    <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0700f4a2f3abc72a0819_Untitled-1-p-500.png' />
                </div>
            </div>
        </>
    )
}
