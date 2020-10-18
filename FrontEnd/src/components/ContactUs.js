import React, { Component } from 'react'

class ContactUs extends Component {
    render() {
        return (
            <div className="ContactUs">
                <h2>Get In Touch</h2>
                <div className="contact-content" id="contactDetails">
                    <b>Phone:</b> 0412 3456 789
                        <br></br>
                    <b>Address:</b> 420 Homy Street
                </div>
                <div className="container contactForm">
                    <h3>Contact Form</h3>
                    <form method='post' action="mailto:admin@sept.com.au" />
                    <label>Full Name </label>
                    <input type="text" id="firstname" className="contactUsInput" placeholder="e.g. John Smith" required />
                    <br></br>
                    <label>Email</label>
                    <input type="email" textmode="email" id="email" className="contactUsInput" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" placeholder="e.g. johnsmith7@gmail.com" required />
                    <br></br>
                    <label for="message">Message</label>
                    <textarea type="text" id="message" required placeholder="Write something.." />
                    <br></br>
                    <div id="submit-container">
                        <input type="submit" id="contact-submit"className="contactUsInput" value="Submit" />
                    </div>

                </div>
            </div>

        )
    }
}
export default ContactUs;
