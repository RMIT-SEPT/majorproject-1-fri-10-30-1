import React, { Component } from 'react'
import bookingDataService from "../../Services/booking.service"
// import { Link } from "react-router-dom";
class Services extends Component {
    constructor(props) {
        super(props);
        this.retrieveBookings = this.retrieveBookings.bind(this);

    }

    retrieveBookings() {
        bookingDataService.getAll()
            .then(response => {
                this.setState({
                    bookings : response.data
                });
                console.log("Fuck");
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div id="content">
                <div className="container-content">
                    <h2>Services</h2>
                    {/*<h6 class="redirect">Wrong page? <a href="byService">Book by Service</a></h6>*/}
                    <br></br><br></br>
                    {this.retrieveBookings()}
                    <table id="serviceTable">
                        <tr>
                            <td><a href="/people">Driving Test</a></td>
                        </tr>
                        <tr>
                            <td><a href="/people">Jet Ski Licence</a></td>
                        </tr>
                        <tr>
                            <td><a href="/people">RSA Session</a></td>
                        </tr>
                    </table>

                </div>
            </div>
        )
    }
}
export default Services;
