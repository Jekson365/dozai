import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export const Teammembers = () => {
    const team = [
        {
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e070180bfdfe4ca793e08_Untitled-4-p-500.png",
            name: "Tommy Lee"
        },
        {
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e070180bfdf5b1e793e07_Untitled-5-p-500.png",
            name: "Marina Troy"
        },
        {
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e070100d74e6afb882ef6_Untitled-6-p-500.png",
            name: "Ana Karenina"
        },
        {
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0701d76bbf79f66993c9_Untitled-2-p-500.png",
            name: "Eduard Norton"
        },
        {
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0700f4a2f3abc72a0819_Untitled-1-p-500.png",
            name: "Carolina Echton"
        },
        {
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633e0700e8fb630be246f1f9_Untitled-3-p-500.png",
            name: "TJordan Wallsh"
        }
    ]
    return (
        <>
            <div className="tcc">
                <p className="fs-6 text-gray">Talented Crew</p>
                <h1 className="h1 text-white">Meet The <span>Team</span></h1>
            </div>
            <div className='container flex-wrap d-flex justify-content-center align-items-center'>
                {team.map((each) => {
                    return (
                        <>
                            <div className="d-flex p-4 flex-column align-items-center justify-content-between col-md-4 m-3"
                                style={{ "width": "340px", 'height': "fit-content", 'background': "#242227" }}>
                                <div className="icon">
                                    <img src={each.img} />
                                </div>
                                <span className='h5 text-white mt-4' style={{ "fontWeight": "bold" }}>{each.name}</span>
                                <span className="fs-6 text-gray ">positon</span>
                                <div className="icons mt-4">
                                    <FaTwitter />
                                    <FaFacebook />
                                    <FaInstagram />
                                    <FaTwitter />
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
