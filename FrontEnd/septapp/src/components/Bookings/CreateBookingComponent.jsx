import React, { Component } from 'react'
import BookingService from "../../BookingService";

class CreateBookingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            bookingName: '',
            workerName: '',
            location: ''
        }
        this.changeBookingNameHandler = this.changeBookingNameHandler.bind(this);
        this.changeWorkerNameHandler = this.changeWorkerNameHandler.bind(this);
        this.saveOrUpdateBooking = this.saveOrUpdateBooking.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            BookingService.getBookingById(this.state.id).then( (res) =>{
                let booking = res.data;
                this.setState({bookingName: booking.bookingName,
                    workerName: booking.workerName,
                    location : booking.location
                });
            });
        }
    }
    saveOrUpdateBooking = () => {
        let booking = {bookingName: this.state.bookingName, workerName: this.state.workerName, location: this.state.location};
        console.log('booking => ' + JSON.stringify(booking));

        // step 5
        if(this.state.id === '_add'){
            BookingService.createBooking(booking).then( (res) =>{
                this.props.history.push('/booking');
            });
        }else{
            BookingService.updateBooking(booking, this.state.id).then( (res) => {
                this.props.history.push('/booking');
            });
        }
    }

    changeBookingNameHandler= (event) => {
        this.setState({bookingName: event.target.value});
    }

    changeWorkerNameHandler= (event) => {
        this.setState({workerName: event.target.value});
    }

    changeLocationHandler= (event) => {
        this.setState({location: event.target.value});
    }

    cancel(){
        this.props.history.push('/bookings');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Booking</h3>
        }else{
            return <h3 className="text-center">Update Booking</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Booking Name: </label>
                                        <input placeholder="Booking Name" name="bookingName" className="form-control"
                                               value={this.state.bookingName} onChange={this.changeBookingNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Worker Name: </label>
                                        <input placeholder="Worker Name" name="workerName" className="form-control"
                                               value={this.state.workerName} onChange={this.changeWorkerNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Location: </label>
                                        <input placeholder="Location" name="location" className="form-control"
                                               value={this.state.location} onChange={this.changeLocationHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateBooking(this)}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateBookingComponent;