import React, { Component } from 'react'
import BookingService from "../../BookingService";

class ViewBookingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            booking: {}
        }
    }

    componentDidMount(){
        BookingService.getBookingById(this.state.id).then( res => {
            this.setState({booking: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Booking Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Service Name:  </label>
                            <div> { this.state.booking.bookingName }</div>
                        </div>
                        <div className = "row">
                            <label> Worker Name:  </label>
                            <div> { this.state.booking.workerName }</div>
                        </div>
                        <div className = "row">
                            <label> Time:  </label>
                            <div> { this.state.booking.location }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewBookingComponent;