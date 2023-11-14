import React from 'react'
import Image from 'next/image'
import agile from '../public/Images/Agile.png'
function Blogcontent() {
    return (
        <div className="body2">
            <div className="container mt-4 d-flex ">
                <div className="left-content me-4">
                    <div className="recent-post">
                        <h6>Recent Posts</h6>
                        <ul className="recent-list ">
                            <a href="#"><li className="recent-items">Best Career Opportunities for Envi..</li></a>
                            <a href="#"><li className="recent-items">Guidelines for Agile project manag..</li></a>
                            <a href="#"><li className="recent-items">7 Essential Soft Skills for Career..</li></a>
                            <a href="#"><li className="recent-items">Ethical Hacking: Career Opportunit..</li></a>
                            <a href="#"><li className="recent-items">UI/UX Deisgn</li></a>
                            <a href="#"><li className="recent-items">Web Development</li></a>
                        </ul>
                    </div>
                    <div className="form">
                        <legend>Talk to Learning Advisor</legend>
                        <input type="text" name="name" id="name" placeholder='Name' required />
                        <input type="number" name="number" id="number" placeholder='Phone' required />
                        <input type="email" name="email" id="email" placeholder='E-mail' required />
                        <textarea name="msg" id="msg" cols="13" rows="5" placeholder='Message' required ></textarea><br />
                        <input type="checkbox" name="check" id="check" required/> <p> I want to receive updates directly on WhatsApp </p><br />
                        <button className='submit-btn' >Submit</button>
                    </div>
                </div>
                <div className="right-content" >
                    <p>In the constantly evolving realm of environmental sustainability and conservation, environmental engineering emerges as a discipline at the forefront of tackling worldwide challenges. As we step into the year 2023, the need for environmental engineers keeps expanding, presenting a vast range of career possibilities. Whether you have recently completed your studies or are contemplating pursuing a degree in environmental engineering, this article will serve as a comprehensive guide, leading you through the varied and promising realm of career in environmental engineering. Furthermore, we will explore how incorporating Java programming and Digital Marketing courses into your education can synergize with your career objectives in this dynamic field, thereby amplifying your professional prospects.</p>
                    <Image className='agileimg' src={agile} alt='agile' />
                    <h5>Environmental Engineering Career Options: A Catalyst for Positive </h5>
                    <ul className="agile-list">
                        <li className="agile-items">Environmental Consultant</li>
                        <p>Environmental consultants work with various organizations to ensure compliance with environmental regulations and develop strategies for sustainability. They assess environmental impact, conduct audits, and provide recommendations for mitigating adverse effects. As organizations strive to adopt eco-friendly practices, the demand for environmental consultants is on the rise.</p>
                        <li className="agile-items">Environmental Consultant</li>
                        <p>Environmental consultants work with various organizations to ensure compliance with environmental regulations and develop strategies for sustainability. They assess environmental impact, conduct audits, and provide recommendations for mitigating adverse effects. As organizations strive to adopt eco-friendly practices, the demand for environmental consultants is on the rise.</p>
                        <li className="agile-items">Environmental Consultant</li>
                        <p>Environmental consultants work with various organizations to ensure compliance with environmental regulations and develop strategies for sustainability. They assess environmental impact, conduct audits, and provide recommendations for mitigating adverse effects. As organizations strive to adopt eco-friendly practices, the demand for environmental consultants is on the rise.</p>
                        <li className="agile-items">Environmental Consultant</li>
                        <p>Environmental consultants work with various organizations to ensure compliance with environmental regulations and develop strategies for sustainability. They assess environmental impact, conduct audits, and provide recommendations for mitigating adverse effects. As organizations strive to adopt eco-friendly practices, the demand for environmental consultants is on the rise.</p>
                        <li className="agile-items">Environmental Consultant</li>
                        <p>Environmental consultants work with various organizations to ensure compliance with environmental regulations and develop strategies for sustainability. They assess environmental impact, conduct audits, and provide recommendations for mitigating adverse effects. As organizations strive to adopt eco-friendly practices, the demand for environmental consultants is on the rise.</p>
                    </ul>
                    <h6>Emerging Trends in Environmental Engineering</h6>
                    <ul className="agile-list">
                        <li className="agile-items">Environmental Consultant</li>
                        <p>Environmental consultants work with various organizations to ensure compliance with environmental regulations and develop strategies for sustainability. They assess environmental impact, conduct audits, and provide recommendations for mitigating adverse effects. As organizations strive to adopt eco-friendly practices, the demand for environmental consultants is on the rise.</p>
                        <li className="agile-items">Environmental Consultant</li>
                        <p>Environmental consultants work with various organizations to ensure compliance with environmental regulations and develop strategies for sustainability. They assess environmental impact, conduct audits, and provide recommendations for mitigating adverse effects. As organizations strive to adopt eco-friendly practices, the demand for environmental consultants is on the rise.</p>
                        <li className="agile-items">Environmental Consultant</li>
                        <p>Environmental consultants work with various organizations to ensure compliance with environmental regulations and develop strategies for sustainability. They assess environmental impact, conduct audits, and provide recommendations for mitigating adverse effects. As organizations strive to adopt eco-friendly practices, the demand for environmental consultants is on the rise.</p>
                        <li className="agile-items">Environmental Consultant</li>
                        <p>Environmental consultants work with various organizations to ensure compliance with environmental regulations and develop strategies for sustainability. They assess environmental impact, conduct audits, and provide recommendations for mitigating adverse effects. As organizations strive to adopt eco-friendly practices, the demand for environmental consultants is on the rise.</p>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Blogcontent
