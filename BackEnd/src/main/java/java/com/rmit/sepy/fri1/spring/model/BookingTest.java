package java.com.rmit.sepy.fri1.spring.model;

import com.rmit.sepy.fri1.spring.model.Booking;
import org.junit.Test;
import org.testng.annotations.Test;

import static org.junit.jupiter.api.Assertions.*;

class BookingTest {

    @Test
    void getBookingName() {
        Booking driving = new Booking();
        assertEquals("Driving", driving.getBookingName());
    }

    @Test
    void setBookingName() {
        Booking driving = new Booking();
        driving.setBookingName("Driving");
        assertEquals("Driving", driving.getBookingName());
    }

    @Test
    void getWorkerName() {
        Booking jamaine = new Booking();
        assertEquals("Jamaine", jamaine.getWorkerName());
    }

    @Test
    void setWorkerName() {
        Booking jamaine = new Booking();
        jamaine.setWorkerName("Jamaine");
        assertEquals("Jamaine", jamaine.getWorkerName());
    }
}