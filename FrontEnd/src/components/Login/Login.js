import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div>
                <div class="container-content">
                    <form>
                        <h2>Login</h2>
                        <div className="form-content">
                            <label for="username" className="input-topmargin">Username</label><br></br>
                            <input type="text" id="username" name="username" placeholder="Username"></input><br></br>
                            <label for="password" className="input-topmargin">Password</label><br></br>
                            <input type="password" id="password" name="password" placeholder="Password"></input><br></br>
                            <input type="submit" className="input-topmargin" id="loginButton" name="loginButton"></input>
                        </div>
                    </form>
                </div>
            </div>)
    }
}
export default Login;