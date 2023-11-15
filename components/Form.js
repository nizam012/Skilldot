import React from 'react'

function Form() {
    return (





        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title " id="exampleModalLabel">Talk to Learning Advisor</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="form-popup">
                            <input type="text" name="name" id="name" placeholder='Name' required />
                            <input type="number" name="number" id="number" placeholder='Phone' required />
                            <input type="email" name="email" id="email" placeholder='E-mail' required />
                            <textarea name="msg" id="msg" cols="13" rows="5" placeholder='Message' required ></textarea><br />
                            <input type="checkbox" name="check" id="check" required /> <p> I want to receive updates directly on WhatsApp </p><br />
                            <button className='submit-btn' >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
