import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            //All items in the nav bar with link names
            <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <div className="container">
                <a className="navbar-brand" href="/">
                    AGME
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
    
                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/bookings">
                                Bookings
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/calendar">
                                Calendar
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact-us">
                                Contact Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about-us">
                                About Us
                            </a>
                        </li>
                    </ul>
    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="register.html">
                                Sign Up
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login.html">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">
                                Profile
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            </div>
        )
    }
}
export default Header;