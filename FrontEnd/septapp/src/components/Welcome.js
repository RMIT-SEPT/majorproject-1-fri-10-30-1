import React, { Component } from 'react'
import Person from './Persons/Person'
import CreatePersonButton from './Persons/CreatePersonButton';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h2>Welcome</h2>
                <p>Online Appointment Booking System</p>
                <button>Register</button>
                <button>Login</button>
            </div>
        )
    }
}
export default Welcome;
