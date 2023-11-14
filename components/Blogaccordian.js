import React from 'react'

function Blogaccordian() {
    return (
        <div className="container baccordian mt-4">
            <div className="accordian-h" >
            {/* <h5>Best Career Opportunities for Envi..</h5> */}
            <div class="accordion accordion-flush" id="accordionFlushExample21">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne1">
                        <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne">
                        Artificial Intelligence
                        </button>
                    </h2>
                    <div id="flush-collapseOne1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample21">
                        <div class="accordion-body">This course prepares you for the CompTIA A+ certification. To clear this exam, you will have to pass both the CompTIA A+ 220-1101 (Core 1) and 220-1102 (Core 2) exams. On clearing both exams, you will be CompTIA A+ certified, which is a globally recognized credential.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo1" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What is the exam duration?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo1" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo1" data-bs-parent="#accordionFlushExample21">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Blogaccordian
