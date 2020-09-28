import React, { Component } from 'react'

class ContactUs extends Component {
    render() {
        return (
            <div className="ContactUs">
                <h1>Get In Touch</h1>
                <article>

                    <p>Phone: 93327348</p>
                    <p>Address: 123 ABC Street</p>
                </article>
                <div className="container">
                    <form method='post' action="mailto:admin@sept.com.au"/>
                    <label>Full Name </label>
                    <input type="text" id="firstname" required/>
                    <label>Email</label>
                    <input type="email" textmode="email" id="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required/>
                    <label>Message</label>
                    <textarea type="text" id="message" required placeholder="Write something.."/>
                    <input type="submit" value="Submit"/>

                </div>
            </div>

        )
    }
}
export default ContactUs;
