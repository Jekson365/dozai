import React from 'react'
import '../../styles/award.scss'


export const Award = () => {
    const awards = [
        {
            name: "Site of the day",
            desc: "Aenean faucibus nibh et justo imperdiet.",
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/63418f33af18ece92592dbb1_icons8-laurel-wreath-150.svg"
        },
        {
            name: "Developer Award",
            desc: "Aenean faucibus nibh et justo imperdiet.",
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633f24fc74be1339521750e3_icons8-laurel-wreath.svg"
        },
        {
            name: "Honorable Mention",
            desc: "Aenean faucibus nibh et justo imperdiet.",
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/63418f1a22ea71dc732b0eb1_icons8-laurel-wreath-150.svg"
        },
        {
            name: "Innovation design",
            desc: "Aenean faucibus nibh et justo imperdiet.",
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633f24fc74be1339521750e3_icons8-laurel-wreath.svg"
        },
        {
            name: "Website day",
            desc: "Aenean faucibus nibh et justo imperdiet.",
            img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/63418f33af18ece92592dbb1_icons8-laurel-wreath-150.svg"
        },
    ]
    return (
        <>
            <div className="award pt-5 container-fluid justify-content-center d-flex align-items-center flex-column" style={{"minHeight":"100vh"}}>
                <p>Awards & Appreciation</p>
                <h1 className='h1'>Our Recent</h1>
                <p className="aw">AWARD</p>
                <div className="container pt-5 flex-wrap pb-5 h-75 d-flex align-items-center justify-content-center">
                    {awards.map((each) => {
                        const { img, name, desc } = each
                        return (
                            <>
                                <div
                                style={{"maxWidth":"220px"}}
                                className="award-box d-flex flex-column text-center align-items-center justify-content-center">
                                    <img src={img} style={{ "maxWidth": "20%" }} />
                                    <h3 className="h6 text-white m-3" style={{"fontWeight":"bold"}}>{name}</h3>
                                    <p className="fs-6 w-75">
                                        {desc}
                                    </p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
