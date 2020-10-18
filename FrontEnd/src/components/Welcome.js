import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                {/* Home/Welcome page */}
                <div className="container-content">
                    <h2>Welcome</h2>
                    <p>Online Appointment Booking System</p>

                    <br></br>
                    {/* //link to bookings page */}
                    <a href="/bookings">
                        <button>Bookings</button>
                    </a>
                </div>
            </div>
        )
    }
}
export default Welcome;
