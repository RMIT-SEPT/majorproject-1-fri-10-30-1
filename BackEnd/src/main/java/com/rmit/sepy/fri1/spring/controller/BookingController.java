//Class that has methods for the API to control the bookings
package com.rmit.sepy.fri1.spring.controller;

import org.springframework.web.bind.annotation.RestController;
import com.rmit.sepy.fri1.spring.model.Booking;
import com.rmit.sepy.fri1.spring.repository.BookingRepository;
import java.util.List;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//https://learnjava.co.in/how-to-create-springboot-rest-service-and-test-it-via-postman/
//https://spring.io/guides/gs/accessing-data-mysql/
@RestController
public class BookingController {
    @Autowired
    private BookingRepository bookingRepository;
    @GetMapping("/booking")
    public List<Booking> getAllbookings() {
        //Returns hardcoded data, a real world application would return from the database
        List<Booking> bookingList = new ArrayList<Booking>();
        bookingList.add(new Booking(1, "Mickey Mouse", "test"));
        bookingList.add(new Booking(2, "Donald Duck", "test"));
        bookingList.add(new Booking(3, "Peppa Pig", "test"));
        return bookingList;
    }

    @GetMapping("/booking/{bookingId}")
    public Booking getbookingWithId(@PathVariable Integer bookingId) {
        //Returns hardcoded data, a real world application would return from the database
        return new Booking(3, "Peppa Pig", "test");
    }

    @PostMapping("/booking/newbooking")
    public void addbooking(@RequestBody Booking booking) {
        //Just has a Sysout stmt, a real world application would save this record to the database
        System.out.println("Saving booking information");
    }

//grab all of the bookings from the mysql server
    @GetMapping(path="/all")
    public @ResponseBody Iterable<Booking> getAllBookings() {
        // This returns a JSON or XML with the users
        return bookingRepository.findAll();
    }
}