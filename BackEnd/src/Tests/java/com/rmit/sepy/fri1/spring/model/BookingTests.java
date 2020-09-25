package Tests;

import com.rmit.sepy.fri1.spring.model.Booking;
import org.junit.Test;

import static org.junit.jupiter.api.Assertions.*;

public class BookingTests {

    @Test
    public void getId() {
    }

    @Test
    public void setId() {
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
    public void getLocation() {
    }

    @Test
    public void setLocation() {
    }

    @Test
    public void getDate() {
    }

    @Test
    public void setDate() {
    }

    @Test
    public void getStartTime() {
    }

    @Test
    public void setStartTime() {
    }

    @Test
    public void getEndTime() {
    }

    @Test
    public void setEndTime() {
    }
}