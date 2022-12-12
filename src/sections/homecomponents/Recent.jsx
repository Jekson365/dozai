import React from 'react'
import '../../styles/scrollable.scss'

export const Recent = () => {
    const posts = [
        {
            id: 1,
            title: "10 Web Design Blogs You Can't Miss",
            desc: "Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Nam pretium turpis et arcu.",
            type: "Marketing",
            date: "Monday, October 3, 2022",
            img: "https://assets.website-files.com/633b046e256bd62010ca3e94/634211464585b47a56992c0b_blog%204.jpeg",
        },
        {
            id: 2,
            title: "How to improve Web Design Process",
            desc: "Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Nam pretium turpis et arcu.",
            type: "Marketing",
            date: "Monday, October 3, 2022",
            img: "https://assets.website-files.com/633b046e256bd62010ca3e94/633b06fff30b8a2b01a8fbca_image-6.jpg",
        },
        {
            id: 3,
            title: "20 Myths About Web Design",
            desc: "Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Nam pretium turpis et arcu.",
            type: "Marketing",
            date: "Monday, October 3, 2022",
            img: "https://assets.website-files.com/633b046e256bd62010ca3e94/633b0726de60e656ac837706_Untitled-14.jpg",
        },
    ]
    return (
        <div style={{"marginTop":"200px"}}>
            <div className="text-center">
                <p className="fs-6 text-gray">Latest Blog Articles</p>
                <h1 className='text-white' style={{"fontSize":"4rem",'fontWeight':"bold"}}>Recent <span style={{"color":"gray"}}>Posts</span></h1>
            </div>
            <div className='recent  d-flex flex-column align-items-center' style={{ "maxWidth": "1200px", 'margin': "0 auto" }}>
                {posts.map((each) => {
                    const { id, title, desc, type, date, img } = each
                    return (
                        <>
                            <div className="st wrap-it flex-wrap d-flex flex-row align-items-center"
                                style={{ "height": '480px', 'marginTop': "100px", 'background': "#1e1c20" }}>


                                <div className="bk w-50 col-md-6 h-100 bg-danger">
                                    <img src={img} className='w-100 h-100' style={{"objectFit":"cover"}}/>
                                </div>


                                <div className="txt-cont col-md-6 d-flex flex-column align-items-start">
                                    <h1 className='text-white' style={{ "fontWeight": "bold", 'fontSize': "40px" }}>{title}</h1>
                                    <p className="fs-5 mt-2" style={{ "color": "#6d6875", 'fontWeight': "100" }}>
                                        {desc}
                                    </p>
                                    <div className="d-flex mt-5 w-100 flex-row align-items-center justify-content-between">
                                        <span className="fs-5 text-white">{date}</span>
                                        <span className="p bt">{type}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
