package Tests;

import com.rmit.sepy.fri1.spring.model.Booking;
import org.junit.Test;

import static org.junit.jupiter.api.Assertions.*;

public class BookingTests {

    @Test
    void getId() {
        Booking booking = new Booking();
        assertEquals(3, booking.getId());
    }

    @Test
    void setId() {
        Booking booking = new Booking();
        booking.setId(1);
        assertEquals(1, booking.getId());
    }

    //Jamaine George
    @Test
    public void getBookingName() {
        Booking driving = new Booking();
        assertEquals("Driving", driving.getBookingName());
    }

    //Jamaine George
    @Test
    public void setBookingName() {
        Booking driving = new Booking();
        driving.setBookingName("Driving");
        assertEquals("Driving", driving.getBookingName());
    }

    //Jamaine George
    @Test
    public void getWorkerName() {
        Booking jamaine = new Booking();
        assertEquals("Jamaine", jamaine.getWorkerName());
    }

    //Jamaine George
    @Test
    public void setWorkerName() {
        Booking jamaine = new Booking();
        jamaine.setWorkerName("Jamaine");
        assertEquals("Jamaine", jamaine.getWorkerName());
    }

    @Test
    void getStartTime() {
        Booking driving = new Booking();
        assertEquals("11:30", driving.getStartTime());
    }

    @Test
    void setStartTime() {
        Booking driving = new Booking();
        driving.setStartTime("11:30");
        assertEquals("11:30", driving.getStartTime());
    }

    @Test
    void getEndTime() {
        Booking driving = new Booking();
        assertEquals("11:30", driving.getEndTime());
    }

    @Test
    void setEndTime() {
        Booking driving = new Booking();
        driving.setEndTime("13:30");
        assertEquals("13:30", driving.getEndTime());
    }

    @Test
    void getDate() {
        Booking diving = new Booking();
        assertEquals("2020-10-8", diving.getDate());
    }

    @Test
    void setDate() {
        Booking diving = new Booking();
        diving.setDate("2020-10-8");
        assertEquals("2020-10-8", diving.getDate());
    }
}