import React from 'react'

export const HomeContent = () => {
    return (
        <>
            <div className="homecontent d-flex h-100 align-items-center justify-content-center">
                <img
                    data-aos="fade-up"
                    data-aos-duration='800'
                    data-aos-delay="600"
                    src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633de349ae424383a2e10038_Smiling-Girl-p-500.png' />
                <h1
                    data-aos="fade-up"
                    data-aos-duration='1000'
                    className='pt-5'
                    style={{ "fontSize": "30vw", "color": "", 'zIndex': "2" }}>Dozai</h1>
            </div>
            <div className="container w-75 images d-flex justify-content-between  h-100 align-items-center">
                <img
                    src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0700e8fb630be246f1f9_Untitled-3.png' />
                <img src='https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0700f4a2f3abc72a0819_Untitled-1.png' />
            </div>
        </>
    )
}
