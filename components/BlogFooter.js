import React from 'react'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { AiFillYoutube } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
function BlogFooter() {
    return (
        <div className='footer'>
            <div className="container p-0 ">
                <div className="banner-img d-flex justify-content-between ">
                    <h4>Wmollitia reprehenderit.  Eos cumque?</h4>
                    <button>Start now</button>
                </div>
            </div>
            <div className="blog-footer d-flex justify-content-around">
                <div className="skill-dot">
                    <h5>Skilldots</h5>
                    <p>Aut cum mollitia reprehenderit.
                        Eos cumque dicta adipisci amet
                        architecto culpa.</p>
                    <div className="icons">
                        <BiLogoFacebookCircle className='fb-icon' size={20} />
                        <AiFillYoutube className='yt-icon' size={20} />
                        <FaXTwitter className='x-icon' size={20} />
                    </div>
                </div>
                <div className="information">
                    <h6>Information</h6>
                    <ul className="info">
                        <a href=""><li>About Us</li></a>
                        <a href=""><li>Careers</li></a>
                        <a href=""><li>Customer</li></a>
                        <a href=""><li>Privacy</li></a>
                        <a href=""><li>Service</li></a>
                    </ul>
                </div>
                <div className="top-course">
                    <h6>Our Top Courses</h6>
                    <ul className="info">
                        <a href=""><li>Course Name</li></a>
                        <a href=""><li>Course Name</li></a>
                        <a href=""><li>Course Name</li></a>
                        <a href=""><li>Course Name</li></a>
                        <a href=""><li>Course Name</li></a>
                    </ul>
                </div>
                <div className="signup">
                    <h6>Sign Up for Our Newsletter</h6>
                    <p>Receive weekly newsletter with educational, popular
                        books and much more!</p>
                    <input type="email" className="e-mail" id="email" placeholder='Email address' />
                    <button className="subscribe"> Subscribe</button>
                </div>
            </div>
            <div className="bottom-footer">
                <p>© 2023 Skilldots, All Rights Reserved. Design By <span> KANDRADIGITAL</span></p>
            </div>
        </div>
    )
}

export default BlogFooter
