import React from 'react'

export const Str = () => {
    return (
        <>
            <div className="cs container
            d-flex align-items-center justify-content-center
            " style={{ "height": "100vh" }}>
                <div className="col-md-6 w-50">
                    <h1
                        className='text-white'
                        style={{
                            "fontSize": "3.9vw"
                        }}
                    >
                        <span className='text-gray'>
                            Our Talented
                        </span><br />
                        Team Is Our<br /> Strength

                    </h1>
                    <p className="fs-6 text-gray w-75">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                    <button className='pnk'>More Templates</button>
                </div>
                <div className="col-md-6 h-100 w-50"
                    style={{
                        "backgroundImage": "url('https://assets.website-files.com/62e7dd8eb96f150931bf8901/634029dcde6af5e6b375d2f3_business-person.jpg')",
                        "backgroundSize": "cover"
                    }}
                >
                </div>
            </div>
        </>
    )
}
