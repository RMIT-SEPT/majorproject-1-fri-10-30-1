import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListBookingComponent from './components/Bookings/ListBookingComponent';
import Header from './components/Layout/Header';
import CreateBookingComponent from './components/Bookings/CreateBookingComponent';
import ViewBookingComponent from './components/Bookings/ViewBookingComponent';
import ContactUs from './components/ContactUs';

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route path = "/" exact component = {ListBookingComponent}></Route>
                        <Route path = "/booking" component = {ListBookingComponent}></Route>
                        <Route path = "/add-booking/:id" component = {CreateBookingComponent}></Route>
                        <Route path = "/view-booking/:id" component = {ViewBookingComponent}></Route>
                        {/* <Route path = "/update-booking/:id" component = {UpdateBookingComponent}></Route> */}
                        <Route path = "/contact-us" component = {ContactUs}></Route>
                    </Switch>
                </div>

            </Router>
        </div>

    );
}

export default App;