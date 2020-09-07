import React, { Component } from 'react'

class byPerson extends Component {
    render() {
        return (
                <div id="content">
                    <div className="container-content">
                        <h2>Book by Service</h2>
                        <h6 className="redirect">Wrong page? <a href="byPerson">Book by Person</a></h6>
                        <select name="dropdown" id="dropdown">
                            <option className="placeholder" disabled selected>Select a Service</option>
                            <option>Driving Test</option>
                            <option>Jet Ski License</option>
                        </select>

                        <br></br><br></br>

                        <table id="sessionTable">
                            <tr>
                                <td>22/09/20</td>
                                <td>12:30-13:30</td>
                                <td>Jim Smith</td>
                            </tr>
                            <tr>
                                <td>23/09/20</td>
                                <td>12:30-13:30</td>
                                <td>John Thompson</td>
                            </tr>
                            <tr>
                                <td>24/09/20</td>
                                <td>12:30-13:30</td>
                                <td>Cooper Jones</td>
                            </tr>
                        </table>

                        <button id="createBooking">Create Booking</button>
                    </div>
                </div>
        )
    }
}
export default byPerson;
