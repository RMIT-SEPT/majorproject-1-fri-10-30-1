import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <div className="container-content">
                    <h2>Welcome</h2>
                    <p>Online Appointment Booking System</p>

                    <br></br>

                    <a href="/bookings">
                        <button>Bookings</button>
                    </a>
                </div>
            </div>
        )
    }
}
export default Welcome;
