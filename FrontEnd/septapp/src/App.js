import React from 'react';
import Dashboard from './components/Dashboard';
import Booking from './components/Booking';
import Welcome from './components/Welcome';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddPerson from './components/Persons/AddPerson';
import {Provider} from "react-redux";
import store from './store';

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
    </div>
    </Router>
    </Provider>
  );
}

export default App;
