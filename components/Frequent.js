import React from 'react'

function Frequent() {
    function scroll(ele) {
        const firstacc = document.getElementById(ele);
        const yOfset = -50;
        const y = firstacc.getBoundingClientRect().top + yOfset + window.pageYOffset;
        window.scrollTo({ top: y });
    }
    return (
        <div className="fre-body">
            <div className="container  mt-4 d-flex p-0" >
                <div className="left-frequent">
                    <div className="frequent-items" >
                        <h6>Recent Posts</h6>
                        <ul className="recent-list ">
                            <div type='button' onClick={() => scroll('first')} ><li className="recent-items">Best Career Opportunities for Envi..</li></div>
                            <div type='button' onClick={() => scroll('second')}><li className="recent-items">Guidelines for Agile project manag..</li></div>
                            <div type='button' onClick={() => scroll('third')} ><li className="recent-items">7 Essential Soft Skills for Career..</li></div>
                            <div type='button' onClick={() => scroll('fourth')}><li className="recent-items">Ethical Hacking: Career Opportunit..</li></div>
                            <div type='button' onClick={() => scroll('fifth')}><li className="recent-items">UI/UX Deisgn</li></div>
                            <div type='button' onClick={() => scroll('six')}><li className="recent-items">Web Development</li></div>
                        </ul>
                        <button className='question-btn' data-bs-toggle="modal" data-bs-target="#exampleModal"  >Have more questions!</button>

                    </div>
                </div>
                <div className="right-frequent">
                    <h4 className='question-head' >Frequently Asked Questions</h4 > <hr className='hr1' />
                    {/* <div className="line"></div> */}
                    <div className="container accor-clas ">
                        <div className="accordian-h" id='first' >
                            <h5>Best Career Opportunities for Envi..</h5>
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            1. What is the certification I would receive after completing this course?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">This course prepares you for the CompTIA A+ certification. To clear this exam, you will have to pass both the CompTIA A+ 220-1101 (Core 1) and 220-1102 (Core 2) exams. On clearing both exams, you will be CompTIA A+ certified, which is a globally recognized credential.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            What is the exam duration?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How do I maintain the certification?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='hr1' />
                        <div className="accordian-h" id='second' >
                            <h5>Guidelines for Agile project manag..</h5>
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwoOne">
                                        <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwoOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            How do I maintain the certification?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwoOne" class="accordion-collapse collapse" aria-labelledby="flush-headingTwoOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">This course prepares you for the CompTIA A+ certification. To clear this exam, you will have to pass both the CompTIA A+ 220-1101 (Core 1) and 220-1102 (Core 2) exams. On clearing both exams, you will be CompTIA A+ certified, which is a globally recognized credential.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwoTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwoTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Do I need Continuing Education Units (CEUs) for certification renewal?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwoTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwoTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThreeThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThreeThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How can I earn the 20 Continuing Education Units (CEUs) needed for certification renewal?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThreeThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThreeThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='hr1' />
                        <div className="accordian-h" id='third' >
                            <h5>7 Essential Soft Skills for Career..</h5>
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThreeOne">
                                        <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThreeOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            1. What is the certification I would receive after completing this course?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThreeOne" class="accordion-collapse collapse" aria-labelledby="flush-headingThreeOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">This course prepares you for the CompTIA A+ certification. To clear this exam, you will have to pass both the CompTIA A+ 220-1101 (Core 1) and 220-1102 (Core 2) exams. On clearing both exams, you will be CompTIA A+ certified, which is a globally recognized credential.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThreeTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThreeTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            What is the exam duration?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThreeTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingThreeTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThreeThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThreeThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How do I maintain the certification?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThreeThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThreeThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='hr1' />
                        <div className="accordian-h" id='fourth' >
                            <h5>Ethical Hacking: Career Opportunit..</h5>
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFourthOne">
                                        <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourthOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            1. What is the certification I would receive after completing this course?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFourthOne" class="accordion-collapse collapse" aria-labelledby="flush-headingFourthOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">This course prepares you for the CompTIA A+ certification. To clear this exam, you will have to pass both the CompTIA A+ 220-1101 (Core 1) and 220-1102 (Core 2) exams. On clearing both exams, you will be CompTIA A+ certified, which is a globally recognized credential.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFourthTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourthTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            What is the exam duration?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFourthTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingFourthTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFourthThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourthThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How do I maintain the certification?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFourthThree" class="accordion-collapse collapse" aria-labelledby="flush-headingFourthThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='hr1' />
                        <div className="accordian-h" id='fifth' >
                            <h5>UI/UX Deisgn</h5>
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingfifthOne">
                                        <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefifthOne" aria-expanded="false" aria-controls="flush-collapsefifthOne">
                                            1. What is the certification I would receive after completing this course?
                                        </button>
                                    </h2>
                                    <div id="flush-collapsefifthOne" class="accordion-collapse collapse" aria-labelledby="flush-headingfifthOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">This course prepares you for the CompTIA A+ certification. To clear this exam, you will have to pass both the CompTIA A+ 220-1101 (Core 1) and 220-1102 (Core 2) exams. On clearing both exams, you will be CompTIA A+ certified, which is a globally recognized credential.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingfifthTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefifthTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            What is the exam duration?
                                        </button>
                                    </h2>
                                    <div id="flush-collapsefifthTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingfifthTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingfifthThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefifthThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How do I maintain the certification?
                                        </button>
                                    </h2>
                                    <div id="flush-collapsefifthThree" class="accordion-collapse collapse" aria-labelledby="flush-headingfifthThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='hr1' />
                        <div className="accordian-h" id='six' >
                            <h5>Web Development</h5>
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingsixOne">
                                        <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesixOne" aria-expanded="false" aria-controls="flush-collapsesixOne">
                                            1. What is the certification I would receive after completing this course?
                                        </button>
                                    </h2>
                                    <div id="flush-collapsesixOne" class="accordion-collapse collapse" aria-labelledby="flush-headingsixOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">This course prepares you for the CompTIA A+ certification. To clear this exam, you will have to pass both the CompTIA A+ 220-1101 (Core 1) and 220-1102 (Core 2) exams. On clearing both exams, you will be CompTIA A+ certified, which is a globally recognized credential.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingsixTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesixTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            What is the exam duration?
                                        </button>
                                    </h2>
                                    <div id="flush-collapsesixTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingsixTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingsixThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesixThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How do I maintain the certification?
                                        </button>
                                    </h2>
                                    <div id="flush-collapsesixThree" class="accordion-collapse collapse" aria-labelledby="flush-headingsixThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='hr1' />
                        <button className='question-btn mb-3 ' data-bs-toggle="modal" data-bs-target="#exampleModal"  >Have more questions!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frequent
