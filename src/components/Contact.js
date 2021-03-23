import React from 'react';

function Contact() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 main-section">
                        <form>
                            <div className="form-group" id="contact-form">
                                <p>Full Name</p>
                                <input type="text" id="name" name="name" placeholder="Full Name here..." required="required"></input>
                            </div>

                            <div className="form-group">
                                <p>Email</p>
                                <input type="email" id="email" name="email" placeholder="example@Email.com" required="required"></input>
                            </div>

                            <div className="form-group">
                                <p>Message</p>
                                <textarea id="message" name="message" placeholder="Text here..." required="required"></textarea>
                            </div>

                            <button type="submit" className="btn btn-default" id="submit-button">Submit</button>

                        </form>
                    </div>

                    <div className="col-md-3 sidebar">
                        <h2>Connect with Me</h2>
                        <div className="social-links">
                            <a href="https://github.com/Mnm1506"><img className="social img-responsive"
                                src="assets/images/github.png" alt="GitHub"></img></a>
                            <a href="https://www.linkedin.com/in/moussa-nait-merabet/"><img className="social img-responsive"
                                src="assets/images/linkedin.png" alt="LinkedIn"></img></a>
                            <a href="assets\My-Resume\Moussa-Nait-Merabet.pdf"><img className="social img-responsive"
                                src="assets/images/Resume.jpg" alt="Resume"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;