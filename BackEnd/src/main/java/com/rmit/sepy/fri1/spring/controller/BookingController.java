//Class that has methods for the API to control the bookings
package com.rmit.sepy.fri1.spring.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.rmit.sepy.fri1.spring.model.Booking;
import com.rmit.sepy.fri1.spring.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

//Allows the browser to connect with axious
@CrossOrigin(origins = "http://localhost:3000")
//Calls the API bookings table
@RequestMapping("/api/booking")
@RestController
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    //Get request to display all boookings
    @GetMapping("/All")
    public Iterable<Booking> getAllBookings() {

        return bookingRepository.findAll();
    }
    //Get the bookings by Id
    @GetMapping("/Id/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Optional<Booking> optionalEntity = bookingRepository.findById(id);
        Booking booking = optionalEntity.get();
        return ResponseEntity.ok(booking);
    }

    //Post request to add a new booking into database
    @PostMapping("/Add")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    //Put request to update current booking in database
    @PutMapping("/Update/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @RequestBody Booking bookingDetails) {
        Optional<Booking> optionalEntity = bookingRepository.findById(id);
        Booking booking = optionalEntity.get();

        //Calls the column values in database table
        booking.setBookingName(bookingDetails.getBookingName());
        booking.setWorkerName(bookingDetails.getWorkerName());
        booking.setStartDate(bookingDetails.getStartDate());
        booking.setStartTime(bookingDetails.getStartTime());
        booking.setEndTime(bookingDetails.getEndTime());

        //Updates above values
        Booking updatedBooking = bookingRepository.save(booking);
        return ResponseEntity.ok(updatedBooking);
    }

    //Delete request to drop selected row in database
    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBooking(@PathVariable Long id) {
        Optional<Booking> optionalEntity = bookingRepository.findById(id);
        Booking booking = optionalEntity.get();

        bookingRepository.delete(booking);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

