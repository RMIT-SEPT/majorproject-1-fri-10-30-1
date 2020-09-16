import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Provider} from "react-redux";
import store from './store';

import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard';
import AddPerson from './components/Persons/AddPerson';
import Booking from './components/Booking';
import Welcome from './components/Welcome';
import ByPerson from "./components/Bookings/ByPerson";
import ByService from "./components/Bookings/ByService";
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

        {/*Old booking process*/}
        {/*<Route exact path="/booking" component={Booking} />*/}
        {/*<Route exact path="/byPerson" component={ByPerson} />*/}
        {/*<Route exact path="/byService" component={ByService} />*/}

        {/*New Booking process*/}
        <Route exact path="/booking" component={Services} />
        <Route exact path="/people" component={People} />
        <Route exact path="/availability" component={Availability} />
    </div>
    </Router>
    </Provider>
  );
}

export default App;
