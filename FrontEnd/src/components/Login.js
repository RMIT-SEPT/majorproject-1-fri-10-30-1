import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <h2>Login</h2>
                <br></br>
                <div className="container-login loginForm">
                    <form method='post' id="loginForm"/>
                    <label>Username </label>
                    <input type="text" id="username" required />
                    <br></br>
                    <label>Password</label>
                    <input type="password" id="password" required />
                    <br></br>
                    <div id="submit-container">
                        <input type="submit" className="login-submit" value="Log In" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;