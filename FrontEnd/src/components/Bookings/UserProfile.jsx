import React, { Component } from 'react'
import BookingService from "../../BookingService";

class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookings: []
        }

    }
    viewBooking(id){
        this.props.history.push(`/view-booking/${id}`);
    }

    componentDidMount(){
        BookingService.getBookings().then((res) => {
            this.setState({ bookings: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Bookings History</h2>
                <div className = "row">
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Service</th>
                                <th> Worker</th>
                                <th> Date</th>
                                <th> Start Time</th>
                                <th> End Time</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bookings.map(
                                    booking =>
                                        <tr key = {booking.id}>
                                            <td> {booking.bookingName} </td>
                                            <td> {booking.workerName}</td>
                                            <td> {booking.startDate}</td>
                                            <td> {booking.startTime}</td>
                                            <td> {booking.endTime}</td>
                                            <td>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewBooking(booking.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default UserProfile;