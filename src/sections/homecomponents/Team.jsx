import React from 'react'

export const Team = () => {
    return (
        <div className='team container flex-wrap d-flex align-items-center' style={{ "height": "100vh", 'overflow': "hidden" }}>
            <div className="col-md-6"
                data-aos='zoom-in'
            >
                <h1>Our Talented<br />Team is<span> Our<br />Strength</span></h1>
                <p className="fs-6">
                    With the greatest performance improvement <br />
                    and massive new features, the Salerio template pushes <br />
                    the limits of what is possible with a Webflow platform.
                </p>
                <button className='more-temps'>
                    More Templates
                </button>
            </div>
            <div className="col-md-6 position-relative"
                data-aos='fade-left'
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
            >
                <img
                    className='main-image'
                    src="https://assets.website-files.com/62e7dd8eb96f150931bf8901/633de7ddcab0e750cdc85f56_woman-her-digital-tablet.png" alt="" />
                <div className="rad-images w-100 h-100 flex-column d-flex justify-content-between align-items-center">
                    <div className="content-image"
                    data-aos='fade-up-right'
                    style={{ "backgroundImage": `url('https://assets.website-files.com/62e7dd8eb96f150931bf8901/6341944ac245b87739c2be6d_Product-1.jpg')` }}
                    >
                    </div>
                    <div className="content-image-2"
                        data-aos='fade-up-left'
                        style={{ "backgroundImage": `url('https://assets.website-files.com/62e7dd8eb96f150931bf8901/634196bd8c1d69d6fffc5e9b_Product-5.jpg')` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
