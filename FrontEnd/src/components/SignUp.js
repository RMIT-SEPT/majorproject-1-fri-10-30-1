import React, { Component } from 'react'

class SignUp extends Component {
    render() {
        return (
            <div className="Sign Up">
                <h2>Sign Up</h2>
                <br></br>
                <div className="container loginForm">
                    <form method='post' id="loginForm"/>
                    <label>Username </label>
                    <input type="text" id="username" required />
                    <br></br>
                    <label>Password</label>
                    <input type="password" id="password" required />
                    <br></br>
                    <label>Re-type Password</label>
                    <input type="password" id="password" required />
                    <br></br>
                    <div id="submit-container">
                        <input type="submit" className="login-submit" value="Sign Up" />
                    </div>
                </div>
            </div>

        )
    }
}
export default SignUp;