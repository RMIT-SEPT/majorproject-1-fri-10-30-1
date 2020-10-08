import axios from 'axios';

const BOOKING_API_BASE_URL = "http://localhost:8080/api/booking";

class BookingService {

    getBookings(){
        return axios.get(BOOKING_API_BASE_URL + '/All');
    }

    createBooking(booking){
        return axios.post(BOOKING_API_BASE_URL + '/Add', booking);
    }

    getBookingById(id){
        return axios.get(BOOKING_API_BASE_URL + '/Id/' + id);
    }

    updateBooking(booking, id){
        return axios.put(BOOKING_API_BASE_URL + '/Update/' + id, booking);
    }

    deleteBooking(id){
        return axios.delete(BOOKING_API_BASE_URL + '/Delete/' + id);
    }
}

export default new BookingService();