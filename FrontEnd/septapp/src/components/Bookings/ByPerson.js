import React, { Component } from 'react'

class byPerson extends Component {
    render() {
        return (
            <div id="content">
                <h2>Book by Person</h2>
                <select name="dropdown" id="dropdown">
                    <option class="placeholder" disabled selected >Select a Person</option>
                    <option>Jim Smith</option>
                    <option>John Thompson</option>
                </select>

                <br></br><br></br>


                <table id="sessionTable">
                    <tr>
                        <td>22/09/20</td>
                        <td>12:30-13:30</td>
                        <td>Driving Test</td>
                    </tr>
                    <tr>
                        <td>23/09/20</td>
                        <td>12:30-13:30</td>
                        <td>Jet Ski License</td>
                    </tr>
                </table>

                <button id="createBooking">Create Booking</button>
            </div>
        )
    }
}
export default byPerson;
