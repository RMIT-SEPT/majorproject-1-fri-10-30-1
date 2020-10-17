import axios from 'axios';

//HTTP REST call via Axios
const BOOKING_API_BASE_URL = "http://localhost:8080/api/booking";

class BookingService {

    //Get request to display all bookings in front-end
    getBookings(){
        return axios.get(BOOKING_API_BASE_URL + '/All');
    }

    //Post request to create a booking in front-end
    createBooking(booking){
        return axios.post(BOOKING_API_BASE_URL + '/Add', booking);
    }

    //Get request to find bookings by Id
    getBookingById(id){
        return axios.get(BOOKING_API_BASE_URL + '/Id/' + id);
    }

    //Put request to update bookings in front-end
    updateBooking(booking, id){
        return axios.put(BOOKING_API_BASE_URL + '/Update/' + id, booking);
    }

    //Delete request to remove bookings in front-end
    deleteBooking(id){
        return axios.delete(BOOKING_API_BASE_URL + '/Delete/' + id);
    }
}

export default new BookingService();