import React, { Component } from 'react'
import BookingService from "../../BookingService";

class CreateBooking extends Component {
    //Declared our state variables and bind the different methods so that they are accessible from the state inside of the render() method
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            bookingName: '',
            workerName: '',
            location: '',
            startDate: '',
            startTime: '',
            endTime: ''
        }
        this.changeBookingNameHandler = this.changeBookingNameHandler.bind(this);
        this.changeWorkerNameHandler = this.changeWorkerNameHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
        this.changeStartTimeHandler = this.changeStartTimeHandler.bind(this);
        this.changeEndTimeHandler = this.changeEndTimeHandler.bind(this);
        this.saveOrUpdateBooking = this.saveOrUpdateBooking.bind(this);
    }

    // step 3
    componentDidMount(){

        //id is Add then we don't do anything else we retrieve booking by id using BookingService.getBookingById() method
        // step 4
        if(this.state.id === 'Add'){
            return
        }else{
            BookingService.getBookingById(this.state.id).then( (res) =>{
                let booking = res.data;
                this.setState({bookingName: booking.bookingName,
                    workerName: booking.workerName,
                    location: booking.location,
                    startDate: booking.startDate,
                    startTime: booking.startTime,
                    endTime: booking.endTime 
                });
            });
        }
    }
    //checks if the id is Add then we call BookingService.createBooking() method which internally makes a 
    //REST API call to store booking data into MySQL database
    saveOrUpdateBooking = (b) => {
        b.preventDefault();
        let booking = {bookingName: this.state.bookingName, workerName: this.state.workerName,location: this.state.location, startDate: this.state.startDate,
            startTime: this.state.startTime, endTime: this.state.endTime};
        console.log('booking => ' + JSON.stringify(booking));

        // step 5
        if(this.state.id === 'Add'){
            BookingService.createBooking(booking).then( (res) =>{
                this.props.history.push('/bookings');
            });
                // .catch((error) => console.log( error.response.request.response ) );;
        }else{
            //If id is any positive number then we call BookingService.updateBooking() method which internally makes a 
            //REST API call to store updated booking data into MySQL database:
            BookingService.updateBooking(booking, this.state.id).then( (res) => {
                this.props.history.push('/bookings');
            });
        }
    }

    changeBookingNameHandler= (event) => {
        this.setState({bookingName: event.target.value});
    }

    changeWorkerNameHandler= (event) => {
        this.setState({workerName: event.target.value});
    }
    changeLocationHandler =  (event) => {
        this.setState({location: event.target.value});
    }
    changeStartDateHandler= (event) => {
        this.setState({startDate: event.target.value});
    }

    changeStartTimeHandler= (event) => {
        this.setState({startTime: event.target.value});
    }
    changeEndTimeHandler= (event) => {
        this.setState({endTime: event.target.value});
    }
    //cancel() method called and it will navigate the user to the bookings list page
    cancel(){
        this.props.history.push('/bookings');
    }

    //getTitle() method to get the title for Add and Booking page based on id:
    getTitle(){
        if(this.state.id === 'Add'){
            return <h3 className="text-center">Create Booking</h3>
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
                                        <label> Service Name: </label>
                                        <input placeholder="Service Name" name="bookingName" className="form-control"
                                               value={this.state.bookingName} onChange={this.changeBookingNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Worker Name: </label>
                                        <input placeholder="Worker Name" name="workerName" className="form-control"
                                               value={this.state.workerName} onChange={this.changeWorkerNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Date: </label>
                                        <input type="date" name="startDate" className="form-control"
                                               value={this.state.startDate} onChange={this.changeStartDateHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Start Time: </label>
                                        <input type="time" name="startTime" className="form-control"
                                               value={this.state.startTime} onChange={this.changeStartTimeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> End Time: </label>
                                        <input type="time" name="endTime" className="form-control"
                                               value={this.state.endTime} onChange={this.changeEndTimeHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateBooking}>Save</button>
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

export default CreateBooking;