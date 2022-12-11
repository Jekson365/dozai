import React from 'react'

export const Prods = () => {
    return (
        <>
            <div className='team container flex-wrap d-flex flex-row-reverse align-items-center' style={{ "height": "100vh", 'overflow': "hidden" }}>
                <div className="col-md-6 d-flex align-items-start flex-column"

                    data-aos='zoom-in'
                >
                    <h1>We Create<br /><span>Amazing Digital</span><br />Prodcts</h1>
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
                        className='main-image' style={{ 'width': "85%" }}
                        src="https://assets.website-files.com/62e7dd8eb96f150931bf8901/633de39683ccde21f80d4887_female.png" alt="" />
                    <div className="rad-images w-100 h-100 flex-column d-flex justify-content-between align-items-center">
                        <div className="content-image-rev"
                            data-aos='fade-up-left'
                            style={{ "backgroundImage": `url('https://assets.website-files.com/62e7dd8eb96f150931bf8901/6341944baf18ec7d46930f23_Product-3.jpg')` }}
                        >
                        </div>
                        <div className="content-image-2-rev"
                            data-aos='fade-up-right'
                            style={{ "backgroundImage": `url('https://assets.website-files.com/62e7dd8eb96f150931bf8901/6341944a22ea718bd72b5238_Product-4.jpg')` }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    )
}
