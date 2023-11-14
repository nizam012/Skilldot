import React from 'react'
import { IoIosContact } from 'react-icons/io'
import {PiEyeClosedBold} from'react-icons/pi'
import {GrDocumentTime} from 'react-icons/gr'

function Blogbody() {
    return (
        <div className="body1">
            <div className="container  ">
                <h4 className='body1-h4' >Things You Must Know on Inspect and Adapt in SAFe</h4>
                <div className="box d-flex justify-content-around">
                    <div className="box-content">
                        <div className="header-content  d-flex justify-content-between">
                            <h6>Author</h6>
                            <IoIosContact size={20} />
                        </div>
                        <h6 className='name' >Manjunath Chowdary</h6>
                    </div> <div className="box-content">
                        <div className="header-content  d-flex justify-content-between">
                            <h6>Upvotes</h6>
                            <PiEyeClosedBold size={20} />
                        </div>
                        <h6 className='name' > 851</h6>
                    </div> <div className="box-content">
                        <div className="header-content  d-flex justify-content-between">
                            <h6>Views</h6>
                            <PiEyeClosedBold size={20} />
                        </div>
                        <h6 className='name' >1931</h6>
                    </div> <div className="box-content">
                        <div className="header-content  d-flex justify-content-between">
                            <h6>Read time</h6>
                            <GrDocumentTime size={20} />
                        </div>
                        <h6 className='name' >10Min</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogbody
