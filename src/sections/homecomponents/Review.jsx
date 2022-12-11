import React from 'react'
import '../../styles/scrollable.scss'
import { FaStar } from 'react-icons/fa'

export const Review = () => {
    const users = [
        {
            name: "Tony McCain",
            job: "Web Desinger",
            review: "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
            rate: "4.5",
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633ae530ec08fbe2462f04f8_Test-4.jpg"
        },
        {
            name: "Marina Trojnar",
            job: "Marketing",
            review: "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
            rate: "4.5",
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633ae530ec08fb31c42f04f5_Test-1.jpg"
        },
        {
            name: "Eduard Espino",
            job: "Sales Manager",
            review: "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
            rate: "4.5",
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633ae530ec08fbec8f2f04f2_Test-3.jpg"
        },
        {
            name: "Cladiu Monroy",
            job: "Marketing",
            review: "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
            rate: "4.5",
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633ae530ec08fb508a2f04fb_Test-2.jpg"
        },
    ]
    return (
        <>
            <div className=" d-flex position-relative flex-wrap" style=
            {{ "marginTop": "220px",'maxWidth':"1300px",'overflow':"hidden", 'width': "90%",
             'margin': "220px auto"}}>
                <div className="col-md-7 d-flex flex-column align-items-center justify-content-center" >

                    {users.map((each) => {
                        return (
                            <>
                                <div
                                    data-aos='fade-right'
                                    className="mt-4 p-5 rev-box d-flex flex-column  align-items-start"
                                    style={{ "width": "85%" }}>
                                    <div className="col-md-4 w-100 d-flex align-items-center">
                                        <img src={each.img} width='90' height='90' style={{ "borderRadius": "50%" }} />
                                        <div className="nm column d-flex flex-column align-items-start" >
                                            <h3 className="h3">{each.name}</h3>
                                            <p className="fs-6">{each.job}</p>
                                        </div>
                                    </div>
                                    <div className="rev mt-2 mb-2 col-md-4 w-100">
                                        <p className="p">{each.review}</p>
                                    </div>
                                    <div
                                        style={{ "borderTop": "0.1px solid gray" }}
                                        className="col-md-4 pt-3 w-100 flex-row d-flex align-items-center justify-content-between">
                                        <div className="fs-5 text-white">
                                            Rated:<span className='rate'>
                                                {each.rate}/5
                                            </span>
                                        </div >
                                        <div className="d-flex text-white">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })}
                </div>
                <div 
                className="sticky col-md-5 pt-5 d-flex flex-column align-items-start"
                style={{'height':"600px"}}
                data-aos='zoom-in'>
                    <p className="p text-gray">TESTIMONILAS</p>
                    <h1 className='title'>What They<br/> <span>Say`s about us </span></h1>
                    <p className="fs-5 text-gray mt-3">
                        With the greatest performance improvement and massive new 
                        features, the Salerio template pushes the limits of what 
                        is possible with a Webflow platform.
                    </p>
                    <div className="numbers d-flex w-100 mt-3">
                        <div className="w-50">
                            <h1 className='orange'>17K+</h1>
                            <p className="fs-5 text-gray">
                                Happy Customers
                            </p>
                        </div>
                        <div className="w-50">
                            <h1 className='pink'>2M+</h1>
                            <p className="fs-5 text-gray">
                                Project Designed
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
