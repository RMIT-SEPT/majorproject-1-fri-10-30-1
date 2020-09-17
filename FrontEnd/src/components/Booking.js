import React, { Component } from 'react'
import Person from './Persons/Person'
import CreatePersonButton from './Persons/CreatePersonButton';

class Booking extends Component {
    render() {
        return (
            <div>
                <div class="container-content">
                    <h2>Booking</h2>

                    <a href="/byService">
                    <button id="serviceButton" className="bookType" onClick="createContent('serviceButton')">
                        Book by Service
                    </button>
                    </a>

                    <a href="/byPerson">
                    <button id="personButton" className="bookType" onClick="createContent('personButton')">
                        Book by Person
                    </button>
                    </a>
                </div>
            </div>)
    }
}
export default Booking;
