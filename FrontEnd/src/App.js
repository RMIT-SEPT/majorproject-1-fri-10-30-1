import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListBooking from './components/Bookings/ListBooking';
import Header from './components/Layout/Header';
import CreateBooking from './components/Bookings/CreateBooking';
import ViewBooking from './components/Bookings/ViewBooking';
import ContactUs from './components/ContactUs';
import Calendar from './components/Calendar';
import UserProfile from './components/Bookings/UserProfile';
import AboutUs from './components/AboutUs';
import Welcome from './components/Welcome';
import Footer from './components/Layout/Footer';

function App() {
    return (
        <div>
            <Router>
                //Displays header on webpage
                <Header/>
                <div className="container">
                    <Switch>
                        //All the navigations
                        <Route path = "/" exact component = {Welcome}></Route>
                        <Route path = "/bookings" component = {ListBooking}></Route>
                        <Route path = "/add-booking/:id" component = {CreateBooking}></Route>
                        <Route path = "/view-booking/:id" component = {ViewBooking}></Route>
                        <Route path = "/contact-us" component = {ContactUs}></Route>
                        <Route path = "/about-us" component = {AboutUs}></Route>
                        <Route path = "/calendar" component = {Calendar}></Route>
                        <Route path = "/profile" component = {UserProfile}></Route>
                    </Switch>
                </div>
                //Displays footer on webpage
                <Footer/>
            </Router>
        </div>

    );
}

export default App;