import React, { Component } from 'react'

class byPerson extends Component {
    render() {
        return (
            <div id="content">
                <div className="container-content">
                    <h2>Book by Person</h2>
                    <h6 class="redirect">Wrong page? <a href="byService">Book by Service</a></h6>
                    <select name="dropdown" id="dropdown">
                        <option className="placeholder" disabled selected >Select a Person</option>
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
            </div>
        )
    }
}
export default byPerson;
