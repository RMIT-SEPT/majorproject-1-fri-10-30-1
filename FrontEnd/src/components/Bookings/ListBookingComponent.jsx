import React, { Component } from 'react'
import BookingService from "../../BookingService";

class ListBookingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookings: []
        }
        this.addBooking = this.addBooking.bind(this);
        this.editBooking = this.editBooking.bind(this);
        this.deleteBooking = this.deleteBooking.bind(this);
    }

    deleteBooking(id){
        BookingService.deleteBooking(id).then( res => {
            this.setState({bookings: this.state.bookings.filter(booking => booking.id !== id)});
        });
    }
    viewBooking(id){
        this.props.history.push(`/view-booking/${id}`);
    }
    editBooking(id){
        this.props.history.push(`/add-booking/${id}`);
    }

    componentDidMount(){
        BookingService.getBookings().then((res) => {
            this.setState({ bookings: res.data});
        });
    }

    addBooking(){
        this.props.history.push('/add-booking/Add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Booking List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addBooking}>New Booking</button>
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
                                            <button onClick={ () => this.editBooking(booking.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewBooking(booking.id)} className="btn btn-info">View </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBooking(booking.id)} className="btn btn-danger">Cancel </button>
                                            
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

export default ListBookingComponent;