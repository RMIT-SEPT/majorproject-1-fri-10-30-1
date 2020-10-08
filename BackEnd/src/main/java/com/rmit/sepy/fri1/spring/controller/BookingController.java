//Class that has methods for the API to control the bookings
package com.rmit.sepy.fri1.spring.controller;

import com.rmit.sepy.fri1.spring.model.Booking;
import com.rmit.sepy.fri1.spring.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/booking")
@RestController
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @GetMapping("/All")
    public Iterable<Booking> getAllBookings() {

        return bookingRepository.findAll();
    }

    @GetMapping("/Id/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Optional<Booking> optionalEntity = bookingRepository.findById(id);
        Booking booking = optionalEntity.get();
        return ResponseEntity.ok(booking);
    }

    @PostMapping("/Add")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    @PutMapping("/Update/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @RequestBody Booking bookingDetails) {
        Optional<Booking> optionalEntity = bookingRepository.findById(id);
        Booking booking = optionalEntity.get();

        booking.setBookingName(bookingDetails.getBookingName());
        booking.setWorkerName(bookingDetails.getWorkerName());
        booking.setStartDate(bookingDetails.getStartDate());
        booking.setStartTime(bookingDetails.getStartTime());
        booking.setEndTime(bookingDetails.getEndTime());

        Booking updatedBooking = bookingRepository.save(booking);
        return ResponseEntity.ok(updatedBooking);
    }

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

