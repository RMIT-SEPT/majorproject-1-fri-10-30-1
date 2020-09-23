import axios from 'axios';

const BOOKING_API_BASE_URL = "http://localhost:8080/api/booking/booking";

class BookingService {

    getBookings(){
        return axios.get(BOOKING_API_BASE_URL);
    }

    createBooking(booking){
        return axios.post(BOOKING_API_BASE_URL, booking);
    }

    getBookingById(id){
        return axios.get(BOOKING_API_BASE_URL + '/' + id);
    }

    updateBooking(booking, id){
        return axios.put(BOOKING_API_BASE_URL + '/' + id, booking);
    }

    deleteBooking(id){
        return axios.delete(BOOKING_API_BASE_URL + '/' + id);
    }
}

export default new BookingService();