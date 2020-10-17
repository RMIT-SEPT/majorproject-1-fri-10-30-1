import React, { Component } from 'react'
import BookingService from "../../BookingService";

class ListBooking extends Component {
    //Declared our state variables and bind the different methods so that they are accessible from the state inside of the render() method
    constructor(props) {
        super(props)

        this.state = {
            bookings: []
        }
        this.addBooking = this.addBooking.bind(this);
        this.editBooking = this.editBooking.bind(this);
        this.deleteBooking = this.deleteBooking.bind(this);
    }

    //On the click of the Delete button, we use filter() method of an array to filter out the deleted booking
    deleteBooking(id){
        BookingService.deleteBooking(id).then( res => {
            this.setState({bookings: this.state.bookings.filter(booking => booking.id !== id)});
        });
    }
    //On the click of the View button, we will navigate to View Booking page using the following code
    viewBooking(id){
        this.props.history.push(`/view-booking/${id}`);
    }
    //On the click of the Update button, we will navigate to the Update Booking page using the following code
    editBooking(id){
        this.props.history.push(`/add-booking/${id}`);
    }
    //ComponentDidMount() is executed when the component is mounted for the first time
    //Invokes the service class method to fetch the bookings from the API call and populates the state variable bookings
    componentDidMount(){
        BookingService.getBookings().then((res) => {
            this.setState({ bookings: res.data});
        });
    }

    //On the click of the Add Booking button, we will navigate to Add Booking page using the following code
    addBooking(){
        this.props.history.push('/add-booking/Add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">All Bookings</h2>
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
                        //We are using the ES6 feature that is map operator to loop over our bookings list and create the view
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

export default ListBooking;