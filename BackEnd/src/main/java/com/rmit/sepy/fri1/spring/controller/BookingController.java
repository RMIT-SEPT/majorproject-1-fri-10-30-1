//Class that has methods for the API to control the bookings
package com.rmit.sepy.fri1.spring.controller;

import org.springframework.web.bind.annotation.RestController;
import com.rmit.sepy.fri1.spring.model.Booking;
import com.rmit.sepy.fri1.spring.repository.BookingRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
//https://learnjava.co.in/how-to-create-springboot-rest-service-and-test-it-via-postman/
//https://spring.io/guides/gs/accessing-data-mysql/
@RestController
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @GetMapping("/booking")
    public List<Booking> getAllbookings() {

        return bookingRepository.findAll();
    }

    @GetMapping("/booking/{id}")
    public ResponseEntity < Booking > getBookingById(@PathVariable long bookingId) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() - > new ResourceNotFindException("Employee not exist with id :" + id));
        return ResponseEntity.ok(booking);
    }

    @PostMapping("/booking")
    public addbooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    @PutMapping("/booking/{id}")
    public ResponseEntity < Booking > updateBooking(@PathVariable Long id, @RequestBody Booking bookingDetails) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() - > new ResourceNotFoundException("Booking does not exist with id :" + id));

        booking.setBookingName(bookingDetails.getBookingName());
        booking.setLocation(bookingDetails.getLocation());
        booking.setStartDate(bookingDetails.getStartDate());
        booking.setStartTime(bookingDetails.getStartTime());
        booking.setEndTime(bookingDetails.getEndTime());

        Booking updatedBooking = bookingRepository.save(booking);
        return ResponseEntity.ok(updatedBooking);
    }

    @DeleteMapping("/booking/{id}")
    public ResponseEntity < Map < String, Boolean >> deleteBooking(@PathVariable Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() - > new ResourceNotFoundException("Booking not exist with id :" + id));

        bookingRepository.delete(booking);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}