import React, { Component } from 'react'
// import Person from './Persons/Person'
// import CreatePersonButton from './Persons/CreatePersonButton';

class Welcome extends Component {
    render() {
        return (
            <div>
                <div className="container-content">
                    <h2>Welcome</h2>
                    <p>Online Appointment Booking System</p>
                    <a href="/login">
                        <button>Login</button>
                    </a>

                    <br></br>

                    <a href="/register">
                        <button>Register</button>
                    </a>
                </div>
            </div>
        )
    }
}
export default Welcome;
