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

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
     <Header/>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addPerson" component={AddPerson} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/byPerson" component={ByPerson} />
        <Route exact path="/byService" component={ByService} />
    </div>
    </Router>
    </Provider>
  );
}

export default App;
