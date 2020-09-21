import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Provider} from "react-redux";
import store from './store';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Dashboard from './components/Dashboard';
import AddPerson from './components/Persons/AddPerson';
import Welcome from './components/Welcome';
import Services from "./components/Bookings/Services";
import People from "./components/Bookings/People";
import Availability from "./components/Bookings/Availability";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
     <Header/>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
        
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addPerson" component={AddPerson} />

        {/*Log-In process*/}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        {/*Booking process*/}
        <Route exact path="/booking" component={Services} />
        <Route exact path="/people" component={People} />
        <Route exact path="/availability" component={Availability} />
    </div>
    <Footer/>
    </Router>
    </Provider>
  );
}

export default App;
