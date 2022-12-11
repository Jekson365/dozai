import React from 'react'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import '../../styles/team.scss'

export const Prods = () => {
    const [sub, setSub] = useState(0)
    const handleSubItems = (id) => {
        setSub(id)
        

    }
    return (
        <>
            <div className='team container flex-wrap d-flex flex-row-reverse align-items-center' style={{ "minHeight": "100vh", 'overflow': "hidden" }}>
                <div className="col-md-6 d-flex align-items-start flex-column"

                    data-aos='zoom-in'
                >
                    <h1>We Create<br /><span>Amazing Digital</span><br />Prodcts</h1>
                    <p className="fs-6">
                        With the greatest performance improvement <br />
                        and massive new features, the Salerio template pushes <br />
                        the limits of what is possible with a Webflow platform.
                    </p>
                    <div className="tabs bg-priamry w-100">
                        <div
                            className="row d-flex w-100 justify-content-between align-items-center position-relative" onClick={() => handleSubItems(1)}>

                            <div className="col">
                                <p className="fs-6 text-white">ADD PRESENTATION</p>
                            </div>
                            <div className="col text-right d-flex justify-content-end"  >
                                <AiOutlinePlus className='orange' />
                            </div>
                            <div className={`sub-section ${sub == 1 ? 'active-sub-item' : "de-active"}`} key={1}>
                                <p className="p">

                                    Suspendisse varius enim in eros elementum tristique.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                                    nulla, ut commodo diam libero vitae erat. Aenean faucibus
                                    nibh et justo cursus id rutrum lorem imperdiet.
                                    Nunc ut sem vitae risus tristique posuere.
                                </p>
                            </div>
                        </div>
                        <div
                            className="position-relative row d-flex w-100 justify-content-between align-items-center position-relative"  onClick={() => handleSubItems(2)} >  
                            <div className="col">
                                <p className="fs-6 text-white">
                                    RESPONSIVE DESIGN
                                </p>
                            </div>
                            <div className="col text-right d-flex justify-content-end">
                                <AiOutlinePlus className='orange' />
                            </div>
                            <div key={2} className={`sub-section ${sub == 2 ? 'active-sub-item' : "de-active"}`} >
                                <p className="p">

                                    Suspendisse varius enim in eros elementum tristique.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                                    nulla, ut commodo diam libero vitae erat. Aenean faucibus
                                    nibh et justo cursus id rutrum lorem imperdiet.
                                    Nunc ut sem vitae risus tristique posuere.
                                </p>
                            </div>
                        </div>
                        <div
                            className="row d-flex w-100 justify-content-between align-items-center position-relative" onClick={() => handleSubItems(3)}>

                            <div className="col">
                                <p className="fs-6 text-white">
                                    SOCIAL MEDIA ADS
                                </p>
                            </div>
                            <div className="col text-right d-flex justify-content-end"  >
                                <AiOutlinePlus className='orange' />
                            </div>
                            <div className={`sub-section ${sub == 3 ? 'active-sub-item' : "de-active"}`} key={3}>
                                <p className="p">

                                    Suspendisse varius enim in eros elementum tristique.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                                    nulla, ut commodo diam libero vitae erat. Aenean faucibus
                                    nibh et justo cursus id rutrum lorem imperdiet.
                                    Nunc ut sem vitae risus tristique posuere.
                                </p>
                            </div>
                        </div>

                    </div>


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
