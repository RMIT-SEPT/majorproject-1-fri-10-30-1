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

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
     <Header/>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addPerson" component={AddPerson} />

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
