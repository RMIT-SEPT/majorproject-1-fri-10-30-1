package com.rmit.sepy.fri1.spring.exceptions;

import com.rmit.sepy.fri1.spring.model.Booking;

public class BookingIdExceptionResponse {
    private String bookingIdentifier;

    public BookingIdExceptionResponse(String projectIdentifier) {
        this.bookingIdentifier = projectIdentifier;
    }

    public String getBookingIdentifier() {
        return bookingIdentifier;
    }

    public void setBookingIdentifier(String bookingIdentifier) {
        this.bookingIdentifier = bookingIdentifier;
    }
}

