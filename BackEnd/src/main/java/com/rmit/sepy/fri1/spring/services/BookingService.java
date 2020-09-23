package com.rmit.sepy.fri1.spring.services;

import com.rmit.sepy.fri1.spring.repository.BookingRepository;
import com.rmit.sepy.fri1.spring.model.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public Booking saveOrUpdateBooking(Booking booking) {

        return bookingRepository.save(booking);
        }
}