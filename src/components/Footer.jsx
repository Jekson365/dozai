import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import '../styles/footer.scss'
import '../styles/socials.scss'


export const Footer = () => {
    return (
        <>
            <footer className='container-fluid d-flex flex-wrap flex-row justify-content-center' style={{"maxHeight":"1500px"}}>
                <div className="col-md-6 w-50 sas">
                    <h1 className='fs-3 mt-5'>DOZAI</h1>
                    <div className="form-group mt-5">
                        <input type="email" placeholder='your email address' name="" id="" />
                        <button className='subscribe'>Subscribe</button>
                    </div>
                    <p className="text-gray mt-5" style={{ "fontSize": "18px" }}>
                        The first rule of any technology used in a
                        business is that automation applied to an
                        efficient operation will magnify the efficiency.
                        The second is that automation applied to an
                        inefficient operation will magnify the inefficiency.
                    </p>
                    <div className="socials p-0 mt-5">
                        <div className="d-flex align-items-center">
                            <div className="box">
                                <div className="icn-circle"></div>
                                <FaFacebookSquare className='icn' />
                            </div>
                            <div className="box">
                                <div className="icn-circle"></div>
                                <AiOutlineTwitter className='icn' />
                            </div>
                            <div className="box">
                                <div className="icn-circle"></div>
                                <RiInstagramFill className='icn' />
                            </div>
                            <div className="box">
                                <div className="icn-circle"></div>
                                <AiOutlineTwitter className='icn' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-row flex-wrap justify-content-center h-100">
                    <ul className='d-flex flex-column align-items-start w-50 p-5'>
                        <h1 className='fs-5'>Navigation</h1>
                        <li className='mt-3'>
                            <a href='#'>Home</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>About us</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Projects</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Pricing</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>News</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Contact us</a>
                        </li>
                    </ul>
                    <ul className='d-flex flex-column align-items-start w-50 p-5'>
                        <h1 className='fs-5'>Utility Pages</h1>
                        <li className='mt-3'>
                            <a href='#'>Style-guide</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Licenses</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Changelog</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>404 Page</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Password Page</a>
                        </li>
                    </ul>
                    <ul className='d-flex flex-column align-items-start w-50 p-5'>
                        <h1 className='fs-5'>Projects</h1>
                        <li className='mt-3'>
                            <a href='#'>Dozai Interactive</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Template Animation Scene</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Design Brand Identity</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Best Practices Design</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Advertising Scenario</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>All About Sweettnes</a>
                        </li>
                    </ul>
                    <ul className='d-flex flex-column align-items-start w-50 p-5'>
                        <h1 className='fs-5'>Other templates</h1>
                        <li className='mt-3'>
                            <a href='#'>Haakon Template</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Uncode Template</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Parallax Template</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Webcorner Template</a>
                        </li>
                        <li className='mt-3'>
                            <a href='#'>Ideapro Template</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
